
import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    icon?: string; // Material icon name
    fullWidth?: boolean;
}

const Input: React.FC<InputProps> = ({
    label,
    error,
    icon,
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

            <div className="relative">
                {icon && (
                    <span className="material-icons-round absolute left-4 top-1/2 -translate-y-1/2 text-beige-400">
                        {icon}
                    </span>
                )}

                <input
                    className={`
            ${widthStyle}
            ${icon ? 'pl-12 pr-4' : 'px-4'}
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
            ${className}
          `}
                    {...props}
                />
            </div>

            {error && (
                <p className="text-sm text-red-500 flex items-center gap-1">
                    <span className="material-icons-round text-sm">error</span>
                    {error}
                </p>
            )}
        </div>
    );
};

export default Input;
