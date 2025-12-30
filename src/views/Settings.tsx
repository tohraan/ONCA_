
import React, { useState } from 'react';
import { UserProfileData } from '../types';
import { useSettings } from '../contexts/SettingsContext';

interface SettingsProps {
    onProfileUpdate?: (profile: UserProfileData) => void;
}

const Settings: React.FC<SettingsProps> = ({ onProfileUpdate }) => {
    const { settings, setTheme, setCurrency } = useSettings();
    const [activeTab, setActiveTab] = useState<'general' | 'profile'>('general');

    // Profile state
    const [profile, setProfile] = useState<UserProfileData>(() => {
        const saved = localStorage.getItem('onca_profile');
        return saved ? JSON.parse(saved) : {
            name: 'Mike Anderson',
            email: 'mike@example.com',
            phone: '+971 50 123 4567',
            country: 'United Arab Emirates',
            businessName: 'Anderson Consulting LLC',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike'
        };
    });

    const [editedProfile, setEditedProfile] = useState<UserProfileData>(profile);
    const [showSaveSuccess, setShowSaveSuccess] = useState(false);

    const handleThemeToggle = () => {
        setTheme(settings.theme === 'light' ? 'dark' : 'light');
    };

    const handleCurrencyChange = (currency: string) => {
        setCurrency(currency);
    };

    const handleProfileSave = () => {
        setProfile(editedProfile);
        localStorage.setItem('onca_profile', JSON.stringify(editedProfile));
        if (onProfileUpdate) {
            onProfileUpdate(editedProfile);
        }
        setShowSaveSuccess(true);
        setTimeout(() => setShowSaveSuccess(false), 3000);
    };

    const handleProfileCancel = () => {
        setEditedProfile(profile);
    };

    const currencies = [
        { code: 'USD', name: 'US Dollar', symbol: '$' },
        { code: 'EUR', name: 'Euro', symbol: '€' },
        { code: 'GBP', name: 'British Pound', symbol: '£' },
        { code: 'AED', name: 'UAE Dirham', symbol: 'د.إ' },
        { code: 'INR', name: 'Indian Rupee', symbol: '₹' },
        { code: 'SAR', name: 'Saudi Riyal', symbol: 'ر.س' },
    ];

    const countries = [
        'United Arab Emirates',
        'Saudi Arabia',
        'India',
        'United States',
        'United Kingdom',
        'Canada',
        'Australia',
        'Singapore',
    ];

    return (
        <div className="flex-1 overflow-y-auto px-8 pb-8 custom-scrollbar relative z-10 animate-in fade-in duration-500">
            <div className="flex flex-col gap-6 mt-10">
                {/* Header */}
                <div className="flex justify-between items-end">
                    <div>
                        <h1 className="text-4xl font-bold mb-2 tracking-tight text-beige-900 dark:text-dark-text-primary">Settings</h1>
                        <p className="text-beige-500 dark:text-dark-text-secondary text-lg">Manage your preferences and account information</p>
                    </div>
                </div>

                {/* Tab Navigation */}
                <div className="bg-white dark:bg-dark-surface/65 backdrop-blur-xl rounded-full shadow-card border border-beige-100 dark:border-white/5 p-2 flex gap-2 w-fit">
                    <button
                        onClick={() => setActiveTab('general')}
                        className={`px-6 py-3 rounded-full font-bold text-sm transition-all ${activeTab === 'general'
                            ? 'bg-primary dark:bg-dark-accent text-white shadow-md'
                            : 'text-beige-600 dark:text-dark-text-secondary hover:bg-beige-50 dark:hover:bg-white/5'
                            }`}
                    >
                        General Settings
                    </button>
                    <button
                        onClick={() => setActiveTab('profile')}
                        className={`px-6 py-3 rounded-full font-bold text-sm transition-all ${activeTab === 'profile'
                            ? 'bg-primary dark:bg-dark-accent text-white shadow-md'
                            : 'text-beige-600 dark:text-dark-text-secondary hover:bg-beige-50 dark:hover:bg-white/5'
                            }`}
                    >
                        Profile
                    </button>
                </div>

                {/* General Settings Tab */}
                {activeTab === 'general' && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Theme Settings */}
                        <div className="bg-white dark:bg-dark-surface/65 backdrop-blur-xl rounded-[2rem] p-8 shadow-card border border-beige-100 dark:border-white/5">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-primary/10 dark:bg-dark-accent/10 rounded-2xl flex items-center justify-center text-primary dark:text-dark-accent">
                                    <span className="material-icons-round text-2xl">palette</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-xl text-beige-900 dark:text-dark-text-primary">Appearance</h3>
                                    <p className="text-sm text-beige-500 dark:text-dark-text-secondary">Customize your visual experience</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 bg-beige-50 dark:bg-white/5 rounded-2xl border border-transparent dark:border-white/5">
                                    <div className="flex items-center gap-3">
                                        <span className="material-icons-round text-beige-600 dark:text-dark-text-secondary">
                                            {settings.theme === 'light' ? 'wb_sunny' : 'dark_mode'}
                                        </span>
                                        <div>
                                            <p className="font-bold text-beige-900 dark:text-dark-text-primary">Theme Mode</p>
                                            <p className="text-xs text-beige-500 dark:text-dark-text-secondary">
                                                {settings.theme === 'light' ? 'Light Mode' : 'Dark Mode'}
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={handleThemeToggle}
                                        className={`relative w-14 h-8 rounded-full transition-all ${settings.theme === 'dark' ? 'bg-primary dark:bg-dark-accent' : 'bg-beige-300 dark:bg-white/10'
                                            }`}
                                    >
                                        <div
                                            className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform ${settings.theme === 'dark' ? 'translate-x-7' : 'translate-x-1'
                                                }`}
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Currency Settings */}
                        <div className="bg-white dark:bg-dark-surface/65 backdrop-blur-xl rounded-[2rem] p-8 shadow-card border border-beige-100 dark:border-white/5">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-amber-50 dark:bg-amber-900/10 rounded-2xl flex items-center justify-center text-amber-600 dark:text-amber-400">
                                    <span className="material-icons-round text-2xl">payments</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-xl text-beige-900 dark:text-dark-text-primary">Currency</h3>
                                    <p className="text-sm text-beige-500 dark:text-dark-text-secondary">Select your preferred currency</p>
                                </div>
                            </div>

                            <div className="space-y-3">
                                {currencies.map((curr) => (
                                    <button
                                        key={curr.code}
                                        onClick={() => handleCurrencyChange(curr.code)}
                                        className={`w-full flex items-center justify-between p-4 rounded-full border-2 transition-all ${settings.currency === curr.code
                                            ? 'border-primary dark:border-dark-accent bg-primary/5 dark:bg-dark-accent/5'
                                            : 'border-beige-100 dark:border-white/5 hover:border-beige-200 dark:hover:border-white/10 hover:bg-beige-50 dark:hover:bg-white/5'
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="text-2xl">{curr.symbol}</span>
                                            <div className="text-left">
                                                <p className="font-bold text-beige-900 dark:text-dark-text-primary">{curr.code}</p>
                                                <p className="text-xs text-beige-500 dark:text-dark-text-secondary">{curr.name}</p>
                                            </div>
                                        </div>
                                        {settings.currency === curr.code && (
                                            <span className="material-icons-round text-primary dark:text-dark-accent">check_circle</span>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Profile Tab */}
                {activeTab === 'profile' && (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Avatar Section */}
                        <div className="bg-white dark:bg-dark-surface/65 backdrop-blur-xl rounded-[2rem] p-8 shadow-card border border-beige-100 dark:border-white/5 flex flex-col items-center justify-center text-center">
                            <div className="relative mb-6">
                                <img
                                    src={editedProfile.avatar}
                                    alt="Profile"
                                    className="w-32 h-32 rounded-full ring-4 ring-primary/20 dark:ring-dark-accent/20 shadow-lg"
                                />
                                <button className="absolute bottom-0 right-0 w-10 h-10 bg-primary dark:bg-dark-accent text-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-dark dark:hover:bg-opacity-80 transition-all">
                                    <span className="material-icons-round text-lg">edit</span>
                                </button>
                            </div>
                            <h3 className="font-bold text-xl text-beige-900 dark:text-dark-text-primary mb-1">{editedProfile.name}</h3>
                            <p className="text-sm text-beige-500 dark:text-dark-text-secondary mb-4">{editedProfile.businessName}</p>
                            <div className="px-4 py-2 bg-primary/10 dark:bg-dark-accent/10 text-primary dark:text-dark-accent rounded-full text-xs font-bold">
                                Founder Plan
                            </div>
                        </div>

                        {/* Profile Form */}
                        <div className="lg:col-span-2 bg-white dark:bg-dark-surface/65 backdrop-blur-xl rounded-[2rem] p-8 shadow-card border border-beige-100 dark:border-white/5">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-primary/10 dark:bg-dark-accent/10 rounded-2xl flex items-center justify-center text-primary dark:text-dark-accent">
                                    <span className="material-icons-round text-2xl">person</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-xl text-beige-900 dark:text-dark-text-primary">Profile Information</h3>
                                    <p className="text-sm text-beige-500 dark:text-dark-text-secondary">Update your personal and business details</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {/* Name */}
                                <div>
                                    <label className="block text-sm font-bold text-beige-700 dark:text-dark-text-secondary mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        value={editedProfile.name}
                                        onChange={(e) => setEditedProfile({ ...editedProfile, name: e.target.value })}
                                        className="w-full px-4 py-3 bg-beige-50 dark:bg-white/5 border border-beige-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-primary dark:focus:ring-dark-accent focus:border-transparent outline-none transition-all dark:text-dark-text-primary dark:placeholder-dark-text-disabled"
                                        placeholder="Enter your full name"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-sm font-bold text-beige-700 dark:text-dark-text-secondary mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        value={editedProfile.email}
                                        onChange={(e) => setEditedProfile({ ...editedProfile, email: e.target.value })}
                                        className="w-full px-4 py-3 bg-beige-50 dark:bg-white/5 border border-beige-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-primary dark:focus:ring-dark-accent focus:border-transparent outline-none transition-all dark:text-dark-text-primary dark:placeholder-dark-text-disabled"
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className="block text-sm font-bold text-beige-700 dark:text-dark-text-secondary mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        value={editedProfile.phone}
                                        onChange={(e) => setEditedProfile({ ...editedProfile, phone: e.target.value })}
                                        className="w-full px-4 py-3 bg-beige-50 dark:bg-white/5 border border-beige-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-primary dark:focus:ring-dark-accent focus:border-transparent outline-none transition-all dark:text-dark-text-primary dark:placeholder-dark-text-disabled"
                                        placeholder="+971 50 123 4567"
                                    />
                                </div>

                                {/* Country */}
                                <div>
                                    <label className="block text-sm font-bold text-beige-700 dark:text-dark-text-secondary mb-2">Country</label>
                                    <select
                                        value={editedProfile.country}
                                        onChange={(e) => setEditedProfile({ ...editedProfile, country: e.target.value })}
                                        className="w-full px-4 py-3 bg-beige-50 dark:bg-white/5 border border-beige-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-primary dark:focus:ring-dark-accent focus:border-transparent outline-none transition-all cursor-pointer dark:text-dark-text-primary"
                                    >
                                        {countries.map((country) => (
                                            <option key={country} value={country} className="dark:bg-dark-surface text-dark-text-primary">
                                                {country}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Business Name */}
                                <div>
                                    <label className="block text-sm font-bold text-beige-700 dark:text-dark-text-secondary mb-2">Business Name</label>
                                    <input
                                        type="text"
                                        value={editedProfile.businessName}
                                        onChange={(e) => setEditedProfile({ ...editedProfile, businessName: e.target.value })}
                                        className="w-full px-4 py-3 bg-beige-50 dark:bg-white/5 border border-beige-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-primary dark:focus:ring-dark-accent focus:border-transparent outline-none transition-all dark:text-dark-text-primary dark:placeholder-dark-text-disabled"
                                        placeholder="Your Business Name LLC"
                                    />
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-4 pt-4">
                                    <button
                                        onClick={handleProfileSave}
                                        className="flex-1 bg-primary dark:bg-dark-accent hover:bg-primary-dark dark:hover:bg-opacity-80 text-white px-6 py-4 rounded-full font-bold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                                    >
                                        <span className="material-icons-round">save</span>
                                        Save Changes
                                    </button>
                                    <button
                                        onClick={handleProfileCancel}
                                        className="px-6 py-4 bg-beige-100 dark:bg-white/10 hover:bg-beige-200 dark:hover:bg-white/20 text-beige-700 dark:text-dark-text-secondary rounded-full font-bold transition-all"
                                    >
                                        Cancel
                                    </button>
                                </div>

                                {/* Success Message */}
                                {showSaveSuccess && (
                                    <div className="flex items-center gap-3 p-4 bg-primary/10 dark:bg-dark-accent/10 border border-primary/20 dark:border-dark-accent/20 rounded-xl animate-in fade-in slide-in-from-top-4">
                                        <span className="material-icons-round text-primary dark:text-dark-accent">check_circle</span>
                                        <p className="text-sm font-bold text-primary dark:text-dark-accent">Profile updated successfully!</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Settings;
