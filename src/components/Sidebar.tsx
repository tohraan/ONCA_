import React, { useState } from 'react';
import { PortalTab } from '../types';

interface SidebarProps {
    activeTab: PortalTab;
    onTabChange: (tab: PortalTab) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => {
    const [isExpanded, setIsExpanded] = useState(true);

    const navItems = [
        // Core Operations
        { id: 'DASHBOARD', icon: 'home', label: 'Dashboard' },
        { id: 'CLIENT_MANAGEMENT', icon: 'people', label: 'Clients' },
        { id: 'ACCOUNTING', icon: 'account_balance_wallet', label: 'Accounting' },

        // Compliance & Documents
        { id: 'COMPLIANCE', icon: 'verified_user', label: 'Compliance' },
        { id: 'DOCUMENT_VAULT', icon: 'folder', label: 'Documents' },

        // Analytics
        { id: 'REPORTS', icon: 'assessment', label: 'Reports' },
        { id: 'INSIGHTS', icon: 'analytics', label: 'Insights' },
        { id: 'CASHFLOW', icon: 'payments', label: 'Cash Flow' },
        { id: 'INVESTMENTS', icon: 'trending_up', label: 'Investments' },

        // Tools
        { id: 'EXPENSES', icon: 'receipt_long', label: 'Expenses' },
        { id: 'AI_ASSISTANT', icon: 'smart_toy', label: 'AI Assistant' },
        { id: 'COMMUNITY', icon: 'forum', label: 'Community' },
        { id: 'SETTINGS', icon: 'settings', label: 'Settings' },
    ];

    return (
        <aside className={`flex-shrink-0 flex flex-col py-6 border-r border-beige-200 dark:border-white/5 z-20 bg-white dark:bg-dark-base backdrop-blur-xl transition-all duration-300 ${isExpanded ? 'w-64' : 'w-24'
            }`}>
            {/* Logo & Toggle */}
            <div className="px-4 mb-8 flex items-center justify-between">
                <button
                    onClick={() => onTabChange('DASHBOARD')}
                    className={`flex items-center gap-3 transition-opacity duration-300 hover:opacity-80 ${isExpanded ? 'opacity-100' : 'opacity-0 w-0'}`}
                >
                    <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                        <img src="/onca-logo.png" alt="ONCA" className="w-full h-full object-contain dark:invert" />
                    </div>
                    <span className="font-bold text-lg text-beige-900 dark:text-dark-text-primary whitespace-nowrap">ONCA</span>
                </button>
                {!isExpanded && (
                    <button
                        onClick={() => onTabChange('DASHBOARD')}
                        className="w-12 h-12 flex items-center justify-center mx-auto hover:opacity-80 transition-opacity"
                    >
                        <img src="/onca-logo.png" alt="ONCA" className="w-full h-full object-contain dark:invert" />
                    </button>
                )}
                {isExpanded && (
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="p-2 rounded-lg hover:bg-beige-100 dark:hover:bg-white/5 text-beige-600 dark:text-dark-text-disabled transition-all flex-shrink-0"
                    >
                        <span className="material-icons-round text-lg">chevron_left</span>
                    </button>
                )}
            </div>

            {/* Expand button when collapsed */}
            {!isExpanded && (
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="mx-auto mb-4 p-2 rounded-lg hover:bg-beige-100 dark:hover:bg-white/5 text-beige-600 dark:text-dark-text-disabled transition-all"
                >
                    <span className="material-icons-round text-lg">chevron_right</span>
                </button>
            )}

            <nav className="flex-1 flex flex-col gap-1 px-3">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => onTabChange(item.id as PortalTab)}
                        className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all relative group ${activeTab === item.id
                            ? 'bg-primary dark:bg-dark-accent text-white dark:text-dark-base shadow-md'
                            : 'text-beige-700 dark:text-dark-text-secondary hover:bg-beige-100 dark:hover:bg-white/5 hover:text-beige-900 dark:hover:text-dark-text-primary'
                            }`}
                    >
                        <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                            <span className="material-icons-round text-xl">{item.icon}</span>
                        </div>
                        <span className={`font-medium text-sm whitespace-nowrap transition-all duration-300 ${isExpanded ? 'opacity-100 w-auto' : 'opacity-0 w-0 overflow-hidden'
                            }`}>
                            {item.label}
                        </span>
                        {!isExpanded && (
                            <span className="absolute left-20 px-3 py-2 bg-beige-900 dark:bg-dark-surface text-white dark:text-dark-text-primary text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50 shadow-lg">
                                {item.label}
                            </span>
                        )}
                    </button>
                ))}
            </nav>

            <button className="mx-3 mt-4 p-3 rounded-xl bg-beige-50 dark:bg-white/5 hover:bg-beige-100 dark:hover:bg-white/10 shadow-sm hover:shadow-md transition-all text-beige-800 dark:text-dark-text-secondary border border-beige-200 dark:border-white/5 flex items-center gap-3">
                <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                    <span className="material-icons-round text-xl transform rotate-180">logout</span>
                </div>
                <span className={`font-medium text-sm whitespace-nowrap transition-all duration-300 ${isExpanded ? 'opacity-100 w-auto' : 'opacity-0 w-0 overflow-hidden'
                    }`}>
                    Logout
                </span>
            </button>
        </aside>
    );
};

export default Sidebar;
