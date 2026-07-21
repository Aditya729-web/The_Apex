import { body, getAdmin, json, method, randomPassword, requireAdmin, studentEmail } from '../_server.js'
export default async function handler(req,res){
  if(!method(req,res))return
  try{await requireAdmin(req);const {name,phone='',classLevel='11',course='JEE',batch='',monthlyFee=0}=body(req);if(!name?.trim())return json(res,400,{error:'Student name is required'})
    const {auth,db}=getAdmin();const seqRef=db.collection('metadata').doc('studentSequence');const studentId=await db.runTransaction(async tx=>{const snap=await tx.get(seqRef);const next=(snap.data()?.value||1000)+1;tx.set(seqRef,{value:next},{merge:true});return `APEX${next}`})
    const password=randomPassword();const user=await auth.createUser({email:studentEmail(studentId),password,displayName:name.trim()})
    try{await db.collection('students').doc(user.uid).set({name:name.trim(),phone,classLevel,course,batch,monthlyFee:Number(monthlyFee||0),studentId,email:user.email,active:true,createdAt:new Date()})}catch(e){await auth.deleteUser(user.uid);throw e}
    return json(res,200,{uid:user.uid,studentId,password})
  }catch(e){return json(res,500,{error:e.message||'Could not create student'})}
}
