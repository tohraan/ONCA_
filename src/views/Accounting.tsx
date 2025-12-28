
import React, { useState } from 'react';
import KPICard from '../components/KPICard';
import Button from '../components/Button';
import SearchBar from '../components/SearchBar';
import Select from '../components/Select';
import StatusBadge from '../components/StatusBadge';
import QuickActions from '../components/QuickActions';
import { Transaction, BankAccount } from '../types';

const Accounting: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');

    // Mock data
    const transactions: Transaction[] = [
        {
            id: 'TXN001',
            date: 'May 10, 2024',
            description: 'Consulting Income',
            amount: 45000,
            type: 'income',
            category: 'Revenue',
            account: 'HDFC Current',
            status: 'completed',
            transactionId: 'TXN001',
        },
        {
            id: 'TXN002',
            date: 'May 09, 2024',
            description: 'Office Rent',
            amount: -25000,
            type: 'expense',
            category: 'Rent',
            account: 'HDFC Current',
            status: 'completed',
            transactionId: 'TXN002',
        },
        {
            id: 'TXN003',
            date: 'May 08, 2024',
            description: 'Software Subscription',
            amount: -5000,
            type: 'expense',
            category: 'Software',
            account: 'ICICI Savings',
            status: 'pending',
            transactionId: 'TXN003',
        },
        {
            id: 'TXN004',
            date: 'May 07, 2024',
            description: 'Electricity Bill',
            amount: -3500,
            type: 'expense',
            category: 'Utilities',
            account: 'HDFC Current',
            status: 'completed',
            transactionId: 'TXN004',
        },
        {
            id: 'TXN005',
            date: 'May 05, 2024',
            description: 'Client Payment',
            amount: 85000,
            type: 'income',
            category: 'Revenue',
            account: 'ICICI Savings',
            status: 'completed',
            transactionId: 'TXN005',
        },
    ];

    const bankAccounts: BankAccount[] = [
        {
            id: '1',
            bankName: 'HDFC Bank',
            accountType: 'Current Account',
            balance: 425000,
            lastSync: '2 mins ago',
            status: 'connected',
        },
        {
            id: '2',
            bankName: 'ICICI Bank',
            accountType: 'Savings Account',
            balance: 860000,
            lastSync: '5 mins ago',
            status: 'connected',
        },
        {
            id: '3',
            bankName: 'SBI',
            accountType: 'Current Account',
            balance: 0,
            lastSync: '2 days ago',
            status: 'error',
        },
    ];

    return (
        <div className="flex-1 overflow-y-auto px-8 pb-8 custom-scrollbar relative z-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-6 mt-8">
                <div>
                    <h1 className="text-4xl font-bold mb-2 tracking-tight text-beige-900">Accounting</h1>
                    <p className="text-beige-600 text-lg">Manage your books, transactions, and bank accounts</p>
                </div>
                <QuickActions
                    actions={[
                        {
                            icon: 'add',
                            label: 'Record Transaction',
                            onClick: () => console.log('Record transaction'),
                        },
                        {
                            icon: 'receipt',
                            label: 'Scan Invoice (OCR)',
                            onClick: () => console.log('Scan invoice'),
                        },
                        {
                            icon: 'file_upload',
                            label: 'Import Bank Statement',
                            onClick: () => console.log('Import statement'),
                        },
                        {
                            icon: 'file_download',
                            label: 'Export Ledger',
                            onClick: () => console.log('Export ledger'),
                        },
                    ]}
                />
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <KPICard
                    title="Cash Balance"
                    value="₹4,25,000"
                    change={8.2}
                    icon="account_balance_wallet"
                    iconColor="text-primary"
                    iconBg="bg-primary/10"
                />
                <KPICard
                    title="Bank Balance"
                    value="₹12,85,000"
                    change={12.5}
                    icon="account_balance"
                    iconColor="text-blue-600"
                    iconBg="bg-blue-50"
                />
                <KPICard
                    title="Accounts Receivable"
                    value="₹3,45,000"
                    change={-5.3}
                    icon="trending_down"
                    iconColor="text-amber-600"
                    iconBg="bg-amber-50"
                />
                <KPICard
                    title="Accounts Payable"
                    value="₹2,15,000"
                    change={3.7}
                    icon="trending_up"
                    iconColor="text-red-600"
                    iconBg="bg-red-50"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Recent Transactions */}
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-card shadow-card border border-beige-200">
                        {/* Filters */}
                        <div className="p-6 border-b border-beige-200">
                            <div className="flex flex-col md:flex-row gap-4">
                                <SearchBar
                                    placeholder="Search transactions..."
                                    onSearch={setSearchQuery}
                                />
                                <Select
                                    options={[
                                        { value: 'all', label: 'All Categories' },
                                        { value: 'revenue', label: 'Revenue' },
                                        { value: 'rent', label: 'Rent' },
                                        { value: 'utilities', label: 'Utilities' },
                                    ]}
                                    fullWidth={false}
                                    className="min-w-[180px]"
                                />
                                <Select
                                    options={[
                                        { value: 'all', label: 'All Types' },
                                        { value: 'income', label: 'Income' },
                                        { value: 'expense', label: 'Expense' },
                                    ]}
                                    fullWidth={false}
                                    className="min-w-[150px]"
                                />
                                <Button variant="secondary" icon="file_download" size="sm">
                                    Export
                                </Button>
                            </div>
                        </div>

                        {/* Transaction List */}
                        <div className="divide-y divide-beige-100">
                            {transactions.map((tx) => (
                                <div
                                    key={tx.id}
                                    className="p-6 hover:bg-beige-50 transition-colors cursor-pointer group"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${tx.type === 'income'
                                                ? 'bg-emerald-50 text-emerald-600'
                                                : 'bg-red-50 text-red-500'
                                                }`}>
                                                <span className="material-icons-round">
                                                    {tx.type === 'income' ? 'north_east' : 'south_east'}
                                                </span>
                                            </div>
                                            <div>
                                                <p className="font-bold text-beige-900">{tx.description}</p>
                                                <div className="flex items-center gap-3 mt-1">
                                                    <p className="text-sm text-beige-600">{tx.date}</p>
                                                    <span className="text-beige-400">•</span>
                                                    <p className="text-sm text-beige-600">{tx.account}</p>
                                                    <span className="text-beige-400">•</span>
                                                    <p className="text-sm text-beige-600">{tx.transactionId}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-right flex items-center gap-6">
                                            <div>
                                                <p className={`font-bold text-lg ${tx.type === 'income' ? 'text-emerald-600' : 'text-beige-900'
                                                    }`}>
                                                    {tx.type === 'income' ? '+' : ''}₹{Math.abs(tx.amount).toLocaleString()}
                                                </p>
                                                <div className="flex items-center gap-2 mt-1 justify-end">
                                                    <StatusBadge
                                                        status={tx.status === 'completed' ? 'success' : 'warning'}
                                                        label={tx.status}
                                                        size="sm"
                                                    />
                                                    <StatusBadge
                                                        status="info"
                                                        label={tx.category}
                                                        size="sm"
                                                    />
                                                </div>
                                            </div>
                                            <span className="material-icons-round text-beige-300 group-hover:text-primary transition-colors">
                                                chevron_right
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bank Accounts Sidebar */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-card p-card shadow-card border border-beige-200 sticky top-8">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-bold text-beige-900">Bank Accounts</h3>
                            <button className="p-2 hover:bg-beige-100 rounded-full transition-colors">
                                <span className="material-icons-round text-beige-600">more_vert</span>
                            </button>
                        </div>

                        <div className="space-y-4 mb-6">
                            {bankAccounts.map((account) => (
                                <div
                                    key={account.id}
                                    className="p-4 bg-beige-50 rounded-xl border border-beige-200 hover:border-primary transition-all cursor-pointer"
                                >
                                    <div className="flex items-start justify-between mb-3">
                                        <div>
                                            <p className="font-bold text-beige-900">{account.bankName}</p>
                                            <p className="text-sm text-beige-600">{account.accountType}</p>
                                        </div>
                                        <StatusBadge
                                            status={account.status === 'connected' ? 'success' : 'danger'}
                                            label={account.status}
                                            size="sm"
                                        />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-2xl font-bold text-beige-900">
                                                ₹{account.balance.toLocaleString()}
                                            </p>
                                            <p className="text-xs text-beige-500 mt-1">
                                                Last sync: {account.lastSync}
                                            </p>
                                        </div>
                                        <button className="p-2 hover:bg-white rounded-full transition-colors">
                                            <span className="material-icons-round text-beige-600">sync</span>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Button variant="primary" icon="add" fullWidth>
                            Connect Bank Account
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accounting;
