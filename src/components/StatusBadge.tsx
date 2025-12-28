
import React from 'react';

interface StatusBadgeProps {
    status: 'success' | 'warning' | 'danger' | 'info' | 'pending';
    label: string;
    size?: 'sm' | 'md';
}

const StatusBadge: React.FC<StatusBadgeProps> = ({
    status,
    label,
    size = 'md',
}) => {
    const statusStyles = {
        success: 'bg-emerald-50 text-emerald-600',
        warning: 'bg-amber-50 text-amber-600',
        danger: 'bg-red-50 text-red-500',
        info: 'bg-blue-50 text-blue-600',
        pending: 'bg-beige-200 text-beige-700',
    };

    const sizeStyles = {
        sm: 'text-[10px] px-2 py-0.5',
        md: 'text-xs px-3 py-1',
    };

    return (
        <span className={`
      ${statusStyles[status]}
      ${sizeStyles[size]}
      font-bold
      rounded-full
      uppercase
      tracking-widest
      inline-block
    `}>
            {label}
        </span>
    );
};

export default StatusBadge;
