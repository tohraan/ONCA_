
export type AppView = 'DASHBOARD' | 'ONBOARDING' | 'PORTAL';

export type PortalTab =
    | 'DASHBOARD'
    | 'CLIENT_MANAGEMENT'
    | 'COMPLIANCE'
    | 'ACCOUNTING'
    | 'DOCUMENT_VAULT'
    | 'REPORTS'
    | 'CASHFLOW'
    | 'INVESTMENTS'
    | 'AI_ASSISTANT'
    | 'COMMUNITY'
    | 'INSIGHTS'
    | 'EXPENSES'
    | 'SETTINGS';

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

// Client Management Types
export interface Client {
    id: string;
    companyName: string;
    contactPerson: string;
    email: string;
    phone: string;
    businessType: string;
    assignedCA: string;
    panNumber: string;
    gstin?: string;
    address: string;
    notes?: string;
    complianceStatus: 'up-to-date' | 'pending' | 'overdue';
    nextTask: string;
    dueDate: string;
}

// Compliance Types
export interface Filing {
    id: string;
    type: 'GST' | 'TDS' | 'Income Tax' | 'MCA';
    title: string;
    dueDate: string;
    daysLeft: number;
    progress: number;
    status: 'pending' | 'in-progress' | 'upcoming' | 'completed';
}

// Accounting Types
export interface Transaction {
    id: string;
    date: string;
    description: string;
    amount: number;
    type: 'income' | 'expense';
    category: string;
    account: string;
    status: 'completed' | 'pending';
    transactionId: string;
}

export interface BankAccount {
    id: string;
    bankName: string;
    accountType: string;
    balance: number;
    lastSync: string;
    status: 'connected' | 'error';
}

// Document Vault Types
export interface Document {
    id: string;
    filename: string;
    type: string;
    size: string;
    uploadDate: string;
    version: string;
    category: string;
    tags: string[];
    status: 'processed' | 'approved' | 'pending';
    ocrText: string;
}

// Investment Types
export interface Investment {
    id: string;
    assetName: string;
    assetType: string;
    quantity: number;
    purchasePrice: number;
    currentPrice: number;
    currentValue: number;
    dayChange: number;
    status: 'active' | 'matured';
}

// Community Types
export interface CommunityPost {
    id: string;
    author: {
        name: string;
        title: string;
        avatar: string;
    };
    content: string;
    timestamp: string;
    tags: string[];
    trending: boolean;
    likes: number;
    comments: number;
}

export interface Expert {
    id: string;
    name: string;
    specialty: string;
    rating: number;
    consultations: number;
    availability: 'available' | 'busy';
}

// Settings Types
export interface AppPermissions {
    notifications: boolean;
    dataSync: boolean;
    analytics: boolean;
}

export interface AppSettings {
    theme: 'light' | 'dark';
    currency: string;
    permissions: AppPermissions;
}

export interface UserProfileData {
    name: string;
    email: string;
    phone: string;
    country: string;
    businessName: string;
    avatar: string;
}
