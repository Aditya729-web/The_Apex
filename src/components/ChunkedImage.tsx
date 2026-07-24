import React, { useState, useEffect } from 'react';
import { downloadFileChunks } from '../lib/fileChunks';
import { ImageIcon } from 'lucide-react';

interface ChunkedImageProps {
  fileId: string;
  className?: string;
  alt?: string;
}

export const ChunkedImage: React.FC<ChunkedImageProps> = ({ fileId, className, alt }) => {
  const [dataUrl, setDataUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        const url = await downloadFileChunks(fileId);
        if (url) {
          setDataUrl(url);
        } else {
          setError(true);
        }
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [fileId]);

  if (loading) {
    return <div className={`flex items-center justify-center bg-slate-100 animate-pulse ${className}`}><span className="text-xs text-slate-400">Loading image...</span></div>;
  }

  if (error || !dataUrl) {
    return (
      <div className={`flex flex-col items-center justify-center bg-slate-100 text-slate-400 ${className}`}>
        <ImageIcon className="w-6 h-6 mb-1" />
        <span className="text-[10px]">Image not found</span>
      </div>
    );
  }

  return <img src={dataUrl} alt={alt || 'Image'} className={className} />;
};
