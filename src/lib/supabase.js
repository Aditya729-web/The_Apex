import { createClient } from '@supabase/supabase-js';
const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
export const supabaseClientError = !url || !key ? 'Missing VITE_SUPABASE_URL or VITE_SUPABASE_PUBLISHABLE_KEY' : '';
export const supabase = url && key ? createClient(url, key, { auth: { persistSession: false } }) : null;
export const bucket = import.meta.env.VITE_SUPABASE_BUCKET || 'apex-files';
