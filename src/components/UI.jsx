import React from 'react';
export function Card({children,className=''}){return <section className={`card ${className}`}>{children}</section>}
export function Button({children,variant='',...props}){return <button className={`btn ${variant}`} {...props}>{children}</button>}
export function Field({label,...props}){return <label className="field"><span>{label}</span><input {...props}/></label>}
export function Select({label,children,...props}){return <label className="field"><span>{label}</span><select {...props}>{children}</select></label>}
export function Textarea({label,...props}){return <label className="field"><span>{label}</span><textarea {...props}/></label>}
export function Empty({children}){return <div className="empty">{children}</div>}
export function Toast({message,onClose}){if(!message)return null;return <div className={`toast ${message.type||''}`}><span>{message.text}</span><button onClick={onClose}>×</button></div>}
