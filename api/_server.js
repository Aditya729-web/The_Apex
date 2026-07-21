import admin from 'firebase-admin'
import { createClient } from '@supabase/supabase-js'

function env(name, aliases=[]){for(const key of [name,...aliases]){if(process.env[key])return process.env[key]}return ''}

export function getAdmin(){
  if(admin.apps.length)return {auth:admin.auth(),db:admin.firestore()}
  const projectId=env('FIREBASE_PROJECT_ID')
  const clientEmail=env('FIREBASE_CLIENT_EMAIL')
  const privateKey=env('FIREBASE_PRIVATE_KEY').replace(/\\n/g,'\n')
  if(!projectId||!clientEmail||!privateKey)throw new Error('Missing Firebase Admin environment variables')
  admin.initializeApp({credential:admin.credential.cert({projectId,clientEmail,privateKey})})
  return {auth:admin.auth(),db:admin.firestore()}
}

export function getSupabase(){
  const url=env('SUPABASE_URL')
  const key=env('SUPABASE_SECRET_KEY',['SUPABASE_SERVICE_ROLE_KEY'])
  if(!url||!key)throw new Error('Missing Supabase server environment variables')
  return {client:createClient(url,key,{auth:{persistSession:false}}),url,bucket:env('SUPABASE_BUCKET')||'notes'}
}

export function json(res,status,data){res.status(status).setHeader('Content-Type','application/json');return res.end(JSON.stringify(data))}
export function method(req,res,allowed='POST'){if(req.method!==allowed){json(res,405,{error:`Use ${allowed}`});return false}return true}
export async function requireUser(req){const token=(req.headers.authorization||'').replace(/^Bearer\s+/i,'');if(!token)throw new Error('Authentication required');return getAdmin().auth.verifyIdToken(token)}
export async function requireAdmin(req){const decoded=await requireUser(req);const adminUid=env('ADMIN_UID');if(!adminUid||decoded.uid!==adminUid)throw new Error('Administrator access required');return decoded}
export function body(req){return typeof req.body==='string'?JSON.parse(req.body||'{}'):(req.body||{})}
export function randomPassword(){const chars='ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$';return Array.from({length:12},()=>chars[Math.floor(Math.random()*chars.length)]).join('')}
export function studentEmail(id){return `${String(id).toLowerCase().replace(/[^a-z0-9]/g,'')}@students.theapexchemistry.local`}
