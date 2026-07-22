'use client';

import { Icon } from '@/components/Icons';

export default function Modal({ open, onClose, title, children, size = 'md' }) {
  if (!open) return null;
  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section className={`modal modal-${size}`} role="dialog" aria-modal="true" aria-label={title} onMouseDown={(event) => event.stopPropagation()}>
        <header className="modal-head">
          <h2>{title}</h2>
          <button className="icon-button" type="button" onClick={onClose} aria-label="Close"><Icon name="close" /></button>
        </header>
        <div className="modal-body">{children}</div>
      </section>
    </div>
  );
}
