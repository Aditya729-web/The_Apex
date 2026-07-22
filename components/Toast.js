'use client';

import { useEffect } from 'react';
import { Icon } from '@/components/Icons';

export default function Toast({ toast, clear }) {
  useEffect(() => {
    if (!toast) return undefined;
    const timer = setTimeout(clear, 4200);
    return () => clearTimeout(timer);
  }, [toast, clear]);

  if (!toast) return null;
  return (
    <div className={`toast toast-${toast.type || 'success'}`}>
      <span className="toast-icon"><Icon name={toast.type === 'error' ? 'close' : 'check'} size={17} /></span>
      <div><strong>{toast.title || (toast.type === 'error' ? 'Something went wrong' : 'Successful')}</strong><p>{toast.message}</p></div>
      <button onClick={clear} aria-label="Dismiss"><Icon name="close" size={16} /></button>
    </div>
  );
}
