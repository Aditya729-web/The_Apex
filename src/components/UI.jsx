export function Button({ children, variant='primary', className='', ...props }) {
  return <button className={`btn btn-${variant} ${className}`} {...props}>{children}</button>
}
export function Input({ label, className='', ...props }) {
  return <label className={`field ${className}`}>{label && <span>{label}</span>}<input {...props}/></label>
}
export function Select({ label, children, ...props }) {
  return <label className="field">{label && <span>{label}</span>}<select {...props}>{children}</select></label>
}
export function Card({ children, className='' }) { return <section className={`card ${className}`}>{children}</section> }
export function Badge({ children, tone='blue' }) { return <span className={`badge ${tone}`}>{children}</span> }
export function Empty({ title='Nothing here yet', text='New information will appear here.' }) { return <div className="empty"><b>{title}</b><span>{text}</span></div> }
