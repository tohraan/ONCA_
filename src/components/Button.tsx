
import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    icon?: string; // Material icon name
    iconPosition?: 'left' | 'right';
    fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    icon,
    iconPosition = 'left',
    fullWidth = false,
    className = '',
    children,
    disabled,
    ...props
}) => {
    const baseStyles = 'font-semibold transition-all duration-200 flex items-center justify-center gap-2';

    const variantStyles = {
        primary: 'bg-primary hover:bg-primary-dark text-white shadow-sm hover:shadow-md disabled:bg-beige-300 disabled:cursor-not-allowed',
        secondary: 'bg-beige-200 hover:bg-beige-300 text-beige-800 shadow-sm hover:shadow-md disabled:bg-beige-100 disabled:text-beige-400',
        ghost: 'bg-transparent hover:bg-beige-100 text-primary border border-beige-200 hover:border-primary disabled:text-beige-400',
        danger: 'bg-red-500 hover:bg-red-600 text-white shadow-sm hover:shadow-md disabled:bg-red-300',
    };

    const sizeStyles = {
        sm: 'px-4 py-2 text-sm rounded-button',
        md: 'px-6 py-3 text-base rounded-button',
        lg: 'px-8 py-4 text-lg rounded-button',
    };

    const widthStyle = fullWidth ? 'w-full' : '';

    return (
        <button
            className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`}
            disabled={disabled}
            {...props}
        >
            {icon && iconPosition === 'left' && (
                <span className="material-icons-round text-current">{icon}</span>
            )}
            {children}
            {icon && iconPosition === 'right' && (
                <span className="material-icons-round text-current">{icon}</span>
            )}
        </button>
    );
};

export default Button;
