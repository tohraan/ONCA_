
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
                className="bg-primary dark:bg-dark-accent hover:bg-primary-dark dark:hover:bg-opacity-80 text-white px-6 py-3 rounded-button font-bold transition-all shadow-sm hover:shadow-md flex items-center gap-2"
            >
                <span className="material-icons-round">bolt</span>
                Quick Actions
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-3 w-72 bg-white/95 dark:bg-dark-surface/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-beige-200 dark:border-white/10 py-3 z-[100] animate-in fade-in zoom-in-95 duration-200 origin-top-right">
                    <div className="px-5 py-2 mb-2">
                        <p className="text-xs font-bold text-beige-500 dark:text-dark-text-disabled uppercase tracking-widest">Available Actions</p>
                    </div>
                    {actions.map((action, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                action.onClick();
                                setIsOpen(false);
                            }}
                            className="w-full px-5 py-3 text-left hover:bg-beige-50 dark:hover:bg-white/5 transition-all flex items-center gap-4 text-beige-900 dark:text-dark-text-primary group"
                        >
                            <div className="w-10 h-10 rounded-xl bg-beige-100 dark:bg-white/5 flex items-center justify-center group-hover:bg-primary/10 dark:group-hover:bg-dark-accent/20 transition-colors">
                                <span className="material-icons-round text-beige-600 dark:text-dark-text-secondary group-hover:text-primary dark:group-hover:text-dark-accent transition-colors">
                                    {action.icon}
                                </span>
                            </div>
                            <span className="font-bold">{action.label}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default QuickActions;
