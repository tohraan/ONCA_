
import React, { SelectHTMLAttributes } from 'react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    error?: string;
    options: Array<{ value: string; label: string }>;
    fullWidth?: boolean;
}

const Select: React.FC<SelectProps> = ({
    label,
    error,
    options,
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

            <select
                className={`
          ${widthStyle}
          px-4
          py-3
          bg-white
          border
          ${error ? 'border-red-500' : 'border-beige-200'}
          rounded-input
          text-beige-900
          focus:ring-2
          focus:ring-primary
          focus:border-transparent
          outline-none
          transition-all
          disabled:bg-beige-100
          disabled:cursor-not-allowed
          appearance-none
          cursor-pointer
          ${className}
        `}
                {...props}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>

            {error && (
                <p className="text-sm text-red-500 flex items-center gap-1">
                    <span className="material-icons-round text-sm">error</span>
                    {error}
                </p>
            )}
        </div>
    );
};

export default Select;
