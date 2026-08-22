import React, { useEffect } from 'react';
import { X, ZoomIn, MapPin } from 'lucide-react';

interface ImageLightboxProps {
  isOpen: boolean;
  imageSrc: string;
  title: string;
  onClose: () => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  isOpen,
  imageSrc,
  title,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-md animate-fadeIn"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl w-full max-h-[90vh] flex flex-col rounded-2xl overflow-hidden bg-zinc-950 border border-white/20 shadow-2xl"
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between p-4 bg-zinc-900 border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-red-600 rounded-full"></span>
            <span className="font-display text-lg sm:text-xl font-bold uppercase tracking-wider text-white">
              {title}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-zinc-800 hover:bg-red-600 text-zinc-300 hover:text-white transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Display */}
        <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden p-2">
          <img
            src={imageSrc}
            alt={title}
            referrerPolicy="no-referrer"
            className="max-h-[72vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
          />
        </div>

        {/* Bottom Bar */}
        <div className="p-3 bg-zinc-900/90 border-t border-zinc-800 text-xs text-zinc-400 flex items-center justify-between">
          <span className="flex items-center gap-1 text-zinc-300 font-medium">
            <MapPin className="w-3.5 h-3.5 text-red-500" />
            GUTS GYM • 3rd Floor, Misaq ul Mall, Faisalabad
          </span>
          <span className="text-[11px] uppercase font-bold text-red-400">
            Fitness Lounge for Ladies & Gents
          </span>
        </div>
      </div>
    </div>
  );
};
