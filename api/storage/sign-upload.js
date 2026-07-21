import { allow,json,fail,requireAdmin,requireUser,supabaseAdmin,env,cleanFileName,adminServices } from '../_server.js';
export default async function handler(req,res){allow(res);if(req.method==='OPTIONS')return json(res,204,{});if(req.method!=='POST')return json(res,405,{error:'Method not allowed'});try{
 const {fileName,mimeType,size,type='note',batchId=''}=req.body||{}; if(!fileName)return json(res,400,{error:'File name required.'});
 const max=20*1024*1024;if(Number(size)>max)return json(res,413,{error:'Maximum file size is 20 MB.'});
 let decoded;if(type==='note'){decoded=await requireAdmin(req);if(mimeType!=='application/pdf')return json(res,400,{error:'Only PDF files are allowed for notes.'});}
 else {decoded=await requireUser(req);if(!String(mimeType).startsWith('image/'))return json(res,400,{error:'Only images are allowed for doubts.'});const {adminDb}=adminServices();const student=await adminDb.collection('students').doc(decoded.uid).get();if(!student.exists)return json(res,403,{error:'Student profile not found.'});}
 const path=`${type==='note'?'notes':'doubts'}/${type==='note'?(batchId||'general'):decoded.uid}/${Date.now()}-${cleanFileName(fileName)}`;
 const sb=supabaseAdmin();const bucket=env('SUPABASE_BUCKET',['VITE_SUPABASE_BUCKET']);const {data,error}=await sb.storage.from(bucket).createSignedUploadUrl(path,{upsert:false});if(error)throw new Error(`Supabase upload signing failed: ${error.message}`);
 json(res,200,{path,token:data.token,signedUrl:data.signedUrl,bucket});
}catch(e){fail(res,e)}}
