import { getApps, initializeApp, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import { createClient } from '@supabase/supabase-js';

export function json(res,status,payload){res.status(status).setHeader('Content-Type','application/json');res.end(JSON.stringify(payload));}
export function allow(res,methods='POST'){res.setHeader('Access-Control-Allow-Origin','*');res.setHeader('Access-Control-Allow-Headers','Authorization, Content-Type');res.setHeader('Access-Control-Allow-Methods',methods+', OPTIONS');}
export function env(name,aliases=[]){for(const key of [name,...aliases]) if(process.env[key]) return process.env[key]; throw new Error(`Missing server environment variable: ${name}`);}
export function adminServices(){
  if(!getApps().length){
    const privateKey=env('FIREBASE_PRIVATE_KEY').replace(/\\n/g,'\n');
    initializeApp({credential:cert({projectId:env('FIREBASE_PROJECT_ID'),clientEmail:env('FIREBASE_CLIENT_EMAIL'),privateKey})});
  }
  return {adminAuth:getAuth(),adminDb:getFirestore()};
}
export function supabaseAdmin(){
  return createClient(env('SUPABASE_URL',['VITE_SUPABASE_URL']),env('SUPABASE_SECRET_KEY',['SUPABASE_SERVICE_ROLE_KEY']),{auth:{persistSession:false,autoRefreshToken:false}});
}
export async function requireUser(req){
  const header=req.headers.authorization||'';
  if(!header.startsWith('Bearer ')) throw Object.assign(new Error('Authentication required.'),{status:401});
  const {adminAuth}=adminServices();
  return adminAuth.verifyIdToken(header.slice(7));
}
export async function requireAdmin(req){
  const decoded=await requireUser(req);
  if(decoded.uid!==env('ADMIN_UID')) throw Object.assign(new Error('Administrator access required.'),{status:403});
  return decoded;
}
export function fail(res,error){console.error(error);json(res,error.status||500,{error:error.message||'Unexpected server error.'});}
export function cleanFileName(name){return String(name||'file').replace(/[^a-zA-Z0-9._-]/g,'_').slice(0,120);}
