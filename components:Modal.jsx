import { useEffect } from 'react';
import { X } from 'lucide-react';

/**
 * Modal — overlay dialog
 *
 * Props:
 * - open: boolean
 * - onClose: () => void
 * - title: string (optioneel)
 * - children: body content
 * - size: 'sm' | 'md' | 'lg' | 'xl' (default: 'md')
 * - footer: ReactNode (optioneel, meestal buttons)
 */
export default function Modal({ open, onClose, title, children, size = 'md', footer }) {
  useEffect(() => {
    if (!open) return;
    const handleEsc = (e) => e.key === 'Escape' && onClose && onClose();
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  const sizes = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-lg shadow-xl w-full ${sizes[size]} max-h-[90vh] flex flex-col`}
        onClick={(e) => e.stopPropagation()}
      >
        {title && (
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
            <h3 className="font-semibold text-up-blue-dark">{title}</h3>
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded"
              aria-label="Sluiten"
            >
              <X size={18} className="text-gray-500" />
            </button>
          </div>
        )}
        <div className="px-5 py-4 overflow-y-auto flex-1">{children}</div>
        {footer && (
          <div className="px-5 py-3 border-t border-gray-200 flex justify-end gap-2 bg-gray-50">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
