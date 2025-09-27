'use client';

import { useState, useEffect } from 'react';
import { X, Download } from 'lucide-react';
import { Button } from './ui/button';

type ImageModalProps = {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  altText: string;
};

export function ImageModal({ isOpen, onClose, imageUrl, altText }: ImageModalProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Reset loading state when opening a new image
      setIsLoading(true);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = imageUrl;
    // Extract filename from URL or use a default name
    const fileName = imageUrl.split('/').pop() || 'ai-image';
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
      onClick={(e) => {
        // Close modal when clicking on the backdrop
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative w-full h-full max-w-5xl flex items-center justify-center">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black/50 rounded-full p-2"
          aria-label="Close"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="relative w-full h-full max-h-[90vh] flex items-center justify-center">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-pulse bg-gray-800 rounded-lg w-full h-full max-w-3xl"></div>
            </div>
          )}
          <img
            src={imageUrl}
            alt={altText}
            className={`max-w-full max-h-[90vh] object-contain ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
            onLoad={() => setIsLoading(false)}
            onError={() => setIsLoading(false)}
          />
        </div>

        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4">
          <Button
            onClick={handleDownload}
            className="flex items-center gap-2 bg-white text-black hover:bg-gray-200 transition-colors"
          >
            <Download className="h-4 w-4" />
            Download
          </Button>
        </div>
      </div>
    </div>
  );
}
