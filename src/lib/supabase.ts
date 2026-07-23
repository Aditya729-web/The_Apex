import { createClient } from '@supabase/supabase-js';

// Supabase client configuration
const metaEnv = (import.meta as any).env || {};
const supabaseUrl = metaEnv.VITE_SUPABASE_URL || 'https://apexchemistry.supabase.co';
const supabaseKey = metaEnv.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.placeholder';

export const supabase = createClient(supabaseUrl, supabaseKey);

export function getSupabaseClient(url?: string, key?: string) {
  const metaEnv = (import.meta as any).env || {};
  const targetUrl = url || metaEnv.VITE_SUPABASE_URL || 'https://apexchemistry.supabase.co';
  const targetKey = key || metaEnv.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.placeholder';
  if (!targetUrl || !targetKey) return null;
  return createClient(targetUrl, targetKey);
}

export const SUPABASE_SQL_SCHEMA = `-- Apex Chemistry Tuition Database Schema for Supabase
CREATE TABLE IF NOT EXISTS batches (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  class_name TEXT NOT NULL,
  time TEXT,
  days TEXT[],
  fees NUMERIC DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS students (
  id TEXT PRIMARY KEY,
  password TEXT NOT NULL,
  name TEXT NOT NULL,
  class_name TEXT NOT NULL,
  batch_id TEXT REFERENCES batches(id),
  batch_title TEXT,
  phone TEXT,
  fees NUMERIC DEFAULT 0,
  joining_date DATE DEFAULT CURRENT_DATE
);
`;

/**
 * Uploads a file to Supabase Storage bucket ('tuition-files')
 */
export async function uploadFileToSupabase(file: File, bucket = 'tuition-files'): Promise<string> {
  try {
    const fileExt = file.name.split('.').pop() || 'png';
    const fileName = `${Date.now()}_${Math.random().toString(36).substring(2, 7)}.${fileExt}`;
    const filePath = `uploads/${fileName}`;

    const { error } = await supabase.storage.from(bucket).upload(filePath, file, {
      cacheControl: '3600',
      upsert: true
    });

    if (error) {
      console.warn('Supabase upload notice:', error.message);
      // Fallback to data URL
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.readAsDataURL(file);
      });
    }

    const { data: publicUrlData } = supabase.storage.from(bucket).getPublicUrl(filePath);
    return publicUrlData.publicUrl;
  } catch (err) {
    console.warn('File storage fallback:', err);
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.readAsDataURL(file);
    });
  }
}
