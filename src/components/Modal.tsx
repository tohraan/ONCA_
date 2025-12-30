
import React, { ReactNode } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    subtitle?: string;
    children: ReactNode;
    footer?: ReactNode;
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    title,
    subtitle,
    children,
    footer,
    size = 'md',
}) => {
    if (!isOpen) return null;

    const sizeStyles = {
        sm: 'max-w-md',
        md: 'max-w-2xl',
        lg: 'max-w-4xl',
        xl: 'max-w-6xl',
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-beige-900/50 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className={`
        relative
        w-full
        ${sizeStyles[size]}
        bg-white
        rounded-card
        shadow-2xl
        max-h-[90vh]
        overflow-hidden
        flex
        flex-col
        animate-in
        zoom-in
        duration-300
      `}>
                {/* Header */}
                <div className="p-card border-b border-beige-200">
                    <div className="flex items-start justify-between">
                        <div>
                            <h2 className="text-2xl font-bold text-beige-900">{title}</h2>
                            {subtitle && (
                                <p className="text-beige-600 mt-1">{subtitle}</p>
                            )}
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-beige-100 rounded-full transition-colors"
                        >
                            <span className="material-icons-round text-beige-600">close</span>
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-card custom-scrollbar">
                    {children}
                </div>

                {/* Footer */}
                {footer && (
                    <div className="p-card border-t border-beige-200 flex items-center justify-end gap-4">
                        {footer}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Modal;
