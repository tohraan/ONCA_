
export type AppView = 'DASHBOARD' | 'ONBOARDING' | 'PORTAL';

export type PortalTab = 'DASHBOARD' | 'INSIGHTS' | 'EXPENSES' | 'CASHFLOW' | 'COMPLIANCE';

export interface UserProfile {
    name: string;
    role: string;
    avatar: string;
}

export interface BusinessContext {
    name: string;
    industry: string;
    country: string;
    currency: string;
    size: string;
}
