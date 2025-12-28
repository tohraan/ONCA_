
import React from 'react';
import { PortalTab } from '../types';

interface SidebarProps {
    activeTab: PortalTab;
    onTabChange: (tab: PortalTab) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => {
    const navItems = [
        { id: 'DASHBOARD', icon: 'home', label: 'Dashboard' },
        { id: 'INSIGHTS', icon: 'analytics', label: 'Insights' },
        { id: 'EXPENSES', icon: 'receipt_long', label: 'Expenses' },
        { id: 'CASHFLOW', icon: 'payments', label: 'Cash Flow' },
        { id: 'COMPLIANCE', icon: 'verified_user', label: 'Compliance' },
    ];

    return (
        <aside className="w-24 flex-shrink-0 flex flex-col items-center py-8 border-r border-gray-200/50 dark:border-gray-700/50 z-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl">
            <div className="mb-10 p-2 rounded-full bg-primary/10 text-primary">
                <span className="material-icons-round text-3xl">donut_large</span>
            </div>

            <nav className="flex-1 flex flex-col gap-6 w-full px-4">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => onTabChange(item.id as PortalTab)}
                        className={`w-full aspect-square flex items-center justify-center rounded-2xl transition-all relative group ${activeTab === item.id
                                ? 'bg-gray-900 text-white shadow-lg dark:bg-white dark:text-gray-900'
                                : 'text-gray-400 hover:bg-white dark:hover:bg-gray-700 hover:shadow-md'
                            }`}
                    >
                        <span className="material-icons-round">{item.icon}</span>
                        <span className="absolute left-16 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
                            {item.label}
                        </span>
                    </button>
                ))}
            </nav>

            <button className="mt-auto p-3 rounded-full bg-white dark:bg-gray-700 shadow-sm hover:shadow-md transition-all text-gray-800 dark:text-white border border-gray-100 dark:border-gray-600">
                <span className="material-icons-round transform rotate-180">logout</span>
            </button>
        </aside>
    );
};

export default Sidebar;
