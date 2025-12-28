
import React, { useState, useRef, useEffect } from 'react';

interface QuickAction {
    icon: string;
    label: string;
    onClick: () => void;
}

interface QuickActionsProps {
    actions: QuickAction[];
}

const QuickActions: React.FC<QuickActionsProps> = ({ actions }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-button font-semibold transition-all shadow-sm hover:shadow-md flex items-center gap-2"
            >
                <span className="material-icons-round">add</span>
                Quick Actions
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-card shadow-2xl border border-beige-200 py-2 z-50 animate-in fade-in zoom-in duration-200">
                    {actions.map((action, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                action.onClick();
                                setIsOpen(false);
                            }}
                            className="w-full px-6 py-3 text-left hover:bg-beige-50 transition-colors flex items-center gap-3 text-beige-900"
                        >
                            <span className="material-icons-round text-beige-600">{action.icon}</span>
                            <span className="font-medium">{action.label}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default QuickActions;
