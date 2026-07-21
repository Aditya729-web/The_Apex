import { FieldValue } from 'firebase-admin/firestore';
import { allow,json,fail,requireAdmin,adminServices } from '../_server.js';
const emailFor=id=>`${String(id).trim().toLowerCase().replace(/[^a-z0-9]/g,'')}@students.theapexchemistry.local`;
export default async function handler(req,res){allow(res);if(req.method==='OPTIONS')return json(res,204,{});if(req.method!=='POST')return json(res,405,{error:'Method not allowed'});
 try{
  await requireAdmin(req); const {adminAuth,adminDb}=adminServices();
  const {name,studentId,password,batchId,phone='',guardian='',monthlyFee=0,status='active'}=req.body||{};
  if(!name||!studentId||!password||!batchId) return json(res,400,{error:'Name, Student ID, password and batch are required.'});
  if(String(password).length<6) return json(res,400,{error:'Password must contain at least 6 characters.'});
  const email=emailFor(studentId); let user;
  try{user=await adminAuth.createUser({email,password,displayName:name,disabled:false});}
  catch(e){if(e.code==='auth/email-already-exists') return json(res,409,{error:'This Student ID already exists.'});throw e;}
  try{
   const batchSnap=await adminDb.collection('batches').doc(batchId).get();
   if(!batchSnap.exists) throw Object.assign(new Error('Selected batch does not exist.'),{status:400});
   const batch=batchSnap.data();
   await adminDb.collection('students').doc(user.uid).set({uid:user.uid,name,studentId:String(studentId).toUpperCase(),loginEmail:email,batchId,batchName:batch.name||'',phone,guardian,monthlyFee:Number(monthlyFee||batch.fee||0),status,createdAt:FieldValue.serverTimestamp(),updatedAt:FieldValue.serverTimestamp()});
   json(res,201,{uid:user.uid,name,studentId:String(studentId).toUpperCase(),password,email,batchName:batch.name||''});
  }catch(e){await adminAuth.deleteUser(user.uid).catch(()=>{});throw e;}
 }catch(e){fail(res,e)} }
