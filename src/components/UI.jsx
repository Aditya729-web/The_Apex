import React from 'react'
import { LoaderCircle } from 'lucide-react'

export function Card({ children, className = '' }) { return <section className={`card ${className}`}>{children}</section> }
export function Button({ children, variant = 'primary', busy, ...props }) { return <button className={`button ${variant}`} disabled={busy || props.disabled} {...props}>{busy ? <LoaderCircle size={17} className="spin" /> : children}</button> }
export function Input({ label, ...props }) { return <label className="field"><span>{label}</span><input {...props} /></label> }
export function Select({ label, children, ...props }) { return <label className="field"><span>{label}</span><select {...props}>{children}</select></label> }
export function Empty({ children }) { return <div className="empty">{children}</div> }
export function Badge({ children, tone='neutral' }) { return <span className={`badge ${tone}`}>{children}</span> }
export function Modal({ title, onClose, children }) { return <div className="modal-backdrop" onMouseDown={onClose}><div className="modal" onMouseDown={(e)=>e.stopPropagation()}><div className="modal-head"><h3>{title}</h3><button className="icon-button" onClick={onClose}>×</button></div>{children}</div></div> }
