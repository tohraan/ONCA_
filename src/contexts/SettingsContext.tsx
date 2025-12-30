
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Settings {
    theme: 'light' | 'dark';
    currency: string;
}

interface SettingsContextType {
    settings: Settings;
    setTheme: (theme: 'light' | 'dark') => void;
    setCurrency: (currency: string) => void;
    currencySymbol: string;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

const currencySymbols: Record<string, string> = {
    'USD': '$',
    'EUR': '€',
    'GBP': '£',
    'AED': 'د.إ',
    'INR': '₹',
    'SAR': 'ر.س',
};

export const SettingsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [settings, setSettings] = useState<Settings>(() => {
        const saved = localStorage.getItem('onca_settings');
        if (saved) {
            try {
                return JSON.parse(saved);
            } catch (e) {
                console.error('Failed to parse settings', e);
            }
        }
        return {
            theme: 'light',
            currency: 'AED', // Default to AED
        };
    });

    useEffect(() => {
        localStorage.setItem('onca_settings', JSON.stringify(settings));

        // Apply theme to document
        if (settings.theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [settings]);

    const setTheme = (theme: 'light' | 'dark') => {
        setSettings(prev => ({ ...prev, theme }));
    };

    const setCurrency = (currency: string) => {
        setSettings(prev => ({ ...prev, currency }));
    };

    const currencySymbol = currencySymbols[settings.currency] || settings.currency;

    return (
        <SettingsContext.Provider value={{ settings, setTheme, setCurrency, currencySymbol }}>
            {children}
        </SettingsContext.Provider>
    );
};

export const useSettings = () => {
    const context = useContext(SettingsContext);
    if (context === undefined) {
        throw new Error('useSettings must be used within a SettingsProvider');
    }
    return context;
};
