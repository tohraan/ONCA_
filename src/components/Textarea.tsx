
import React, { TextareaHTMLAttributes } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
    fullWidth?: boolean;
}

const Textarea: React.FC<TextareaProps> = ({
    label,
    error,
    fullWidth = true,
    className = '',
    ...props
}) => {
    const widthStyle = fullWidth ? 'w-full' : '';

    return (
        <div className={`${widthStyle} space-y-2`}>
            {label && (
                <label className="block text-sm font-semibold text-beige-800">
                    {label}
                    {props.required && <span className="text-red-500 ml-1">*</span>}
                </label>
            )}

            <textarea
                className={`
          ${widthStyle}
          px-4
          py-3
          bg-white
          border
          ${error ? 'border-red-500' : 'border-beige-200'}
          rounded-input
          text-beige-900
          placeholder-beige-400
          focus:ring-2
          focus:ring-primary
          focus:border-transparent
          outline-none
          transition-all
          disabled:bg-beige-100
          disabled:cursor-not-allowed
          resize-vertical
          min-h-[100px]
          ${className}
        `}
                {...props}
            />

            {error && (
                <p className="text-sm text-red-500 flex items-center gap-1">
                    <span className="material-icons-round text-sm">error</span>
                    {error}
                </p>
            )}
        </div>
    );
};

export default Textarea;
