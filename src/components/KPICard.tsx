
import React from 'react';

interface KPICardProps {
    title: string;
    value: string | number;
    change?: number; // percentage change
    icon: string; // Material icon name
    iconColor?: string;
    iconBg?: string;
    subtitle?: string;
}

const KPICard: React.FC<KPICardProps> = ({
    title,
    value,
    change,
    icon,
    iconColor = 'text-primary',
    iconBg = 'bg-primary/10',
    subtitle,
}) => {
    const isPositive = change !== undefined && change >= 0;

    return (
        <div className="bg-white rounded-card p-card shadow-card border border-beige-200 hover:shadow-card-hover transition-all">
            <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 ${iconBg} ${iconColor} rounded-2xl flex items-center justify-center`}>
                    <span className="material-icons-round text-2xl">{icon}</span>
                </div>

                {change !== undefined && (
                    <div className={`flex items-center gap-1 text-sm font-bold px-3 py-1 rounded-full ${isPositive ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-500'
                        }`}>
                        <span className="material-icons-round text-sm">
                            {isPositive ? 'north_east' : 'south_east'}
                        </span>
                        {Math.abs(change)}%
                    </div>
                )}
            </div>

            <div>
                <p className="text-xs text-beige-500 font-bold uppercase tracking-widest mb-2">
                    {title}
                </p>
                <h3 className="text-3xl font-bold text-beige-900 mb-1">
                    {value}
                </h3>
                {subtitle && (
                    <p className="text-sm text-beige-600">
                        {subtitle}
                    </p>
                )}
            </div>
        </div>
    );
};

export default KPICard;
