
import React from 'react';
import KPICard from '../components/KPICard';
import StatusBadge from '../components/StatusBadge';
import QuickActions from '../components/QuickActions';
import { Investment } from '../types';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { useSettings } from '../contexts/SettingsContext';

const Investments: React.FC = () => {
    const { currencySymbol } = useSettings();
    // Mock data
    const holdings: Investment[] = [
        {
            id: '1',
            assetName: 'HDFC Bluechip Fund',
            assetType: 'Mutual Fund',
            quantity: 500,
            purchasePrice: 180,
            currentPrice: 215,
            currentValue: 107500,
            dayChange: 2.3,
            status: 'active',
        },
        {
            id: '2',
            assetName: 'Reliance Industries',
            assetType: 'Equity',
            quantity: 100,
            purchasePrice: 2450,
            currentPrice: 2680,
            currentValue: 268000,
            dayChange: -1.2,
            status: 'active',
        },
        {
            id: '3',
            assetName: 'Fixed Deposit - SBI',
            assetType: 'Fixed Deposit',
            quantity: 1,
            purchasePrice: 500000,
            currentPrice: 525000,
            currentValue: 525000,
            dayChange: 0,
            status: 'active',
        },
        {
            id: '4',
            assetName: 'Gold ETF',
            assetType: 'Gold',
            quantity: 50,
            purchasePrice: 5200,
            currentPrice: 5450,
            currentValue: 272500,
            dayChange: 0.8,
            status: 'active',
        },
    ];

    const allocation = [
        { name: 'Equity', value: 268000, color: '#00674F' },
        { name: 'Mutual Funds', value: 107500, color: '#4A90E2' },
        { name: 'Fixed Deposits', value: 525000, color: '#F5A623' },
        { name: 'Gold', value: 272500, color: '#FFD700' },
    ];

    const sectorBreakdown = [
        { sector: 'Technology', value: 35 },
        { sector: 'Healthcare', value: 25 },
        { sector: 'Banking', value: 20 },
        { sector: 'Energy', value: 15 },
        { sector: 'Others', value: 5 },
    ];

    const totalValue = holdings.reduce((sum, h) => sum + h.currentValue, 0);
    const totalInvested = holdings.reduce((sum, h) => sum + (h.purchasePrice * h.quantity), 0);
    const totalGain = totalValue - totalInvested;
    const roi = ((totalGain / totalInvested) * 100).toFixed(1);

    return (
        <div className="flex-1 overflow-y-auto px-8 pb-8 custom-scrollbar relative z-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-6 mt-8">
                <div>
                    <h1 className="text-4xl font-bold mb-2 tracking-tight text-beige-900 dark:text-dark-text-primary">Investments</h1>
                    <p className="text-beige-600 dark:text-dark-text-secondary text-lg">Manage and track your asset portfolio and market performance</p>
                </div>
                <QuickActions
                    actions={[
                        {
                            icon: 'add',
                            label: 'Add Investment',
                            onClick: () => console.log('Add investment'),
                        },
                        {
                            icon: 'sync',
                            label: 'Refresh Prices',
                            onClick: () => console.log('Refresh'),
                        },
                        {
                            icon: 'sell',
                            label: 'Record Sale',
                            onClick: () => console.log('Record sale'),
                        },
                        {
                            icon: 'file_download',
                            label: 'Export Portfolio',
                            onClick: () => console.log('Export'),
                        },
                    ]}
                />
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <KPICard
                    title="Portfolio Value"
                    value={`${currencySymbol}${(totalValue / 100000).toFixed(2)}L`}
                    change={12.5}
                    icon="account_balance"
                    iconColor="text-primary dark:text-dark-accent"
                    iconBg="bg-primary/10 dark:bg-dark-accent/10"
                />
                <KPICard
                    title="Net ROI"
                    value={`${roi}%`}
                    change={parseFloat(roi)}
                    icon="trending_up"
                    iconColor="text-emerald-600 dark:text-emerald-400"
                    iconBg="bg-emerald-50 dark:bg-emerald-900/10"
                />
                <KPICard
                    title="Unrealized Gains"
                    value={`${currencySymbol}${(totalGain / 1000).toFixed(0)}K`}
                    icon="show_chart"
                    iconColor="text-blue-600 dark:text-blue-400"
                    iconBg="bg-blue-50 dark:bg-blue-900/10"
                />
                <KPICard
                    title="Dividend Income"
                    value={`${currencySymbol}12,500`}
                    icon="payments"
                    iconColor="text-amber-600 dark:text-amber-400"
                    iconBg="bg-amber-50 dark:bg-amber-900/10"
                    subtitle="this month"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                {/* Asset Allocation */}
                <div className="bg-white dark:bg-dark-surface/65 backdrop-blur-xl rounded-card p-card shadow-card border border-beige-200 dark:border-white/5">
                    <h3 className="text-xl font-bold text-beige-900 dark:text-dark-text-primary mb-6">Asset Allocation</h3>
                    <div className="h-[250px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={allocation}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={50}
                                    outerRadius={80}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {allocation.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', backgroundColor: 'var(--tw-dark-surface, #1e1e1e)', color: '#fff' }} itemStyle={{ color: '#fff' }} />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="space-y-2 mt-4">
                        {allocation.map((item) => (
                            <div key={item.name} className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                                    <span className="text-sm text-beige-700 dark:text-dark-text-secondary">{item.name}</span>
                                </div>
                                <span className="text-sm font-bold text-beige-900 dark:text-dark-text-primary">
                                    {((item.value / totalValue) * 100).toFixed(1)}%
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sector Breakdown */}
                <div className="lg:col-span-2 bg-white dark:bg-dark-surface/65 backdrop-blur-xl rounded-card p-card shadow-card border border-beige-200 dark:border-white/5">
                    <h3 className="text-xl font-bold text-beige-900 dark:text-dark-text-primary mb-6">Sector Breakdown</h3>
                    <div className="h-[250px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={sectorBreakdown} layout="vertical">
                                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="currentColor" className="text-beige-200 dark:text-white/5" />
                                <XAxis type="number" axisLine={false} tickLine={false} tick={{ fill: 'currentColor', fontSize: 12 }} className="text-beige-400 dark:text-dark-text-disabled" />
                                <YAxis type="category" dataKey="sector" axisLine={false} tickLine={false} tick={{ fill: 'currentColor', fontSize: 12 }} className="text-beige-400 dark:text-dark-text-disabled" />
                                <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', backgroundColor: 'var(--tw-dark-surface, #1e1e1e)', color: '#fff' }} itemStyle={{ color: '#fff' }} />
                                <Bar dataKey="value" fill="#00674F" radius={[0, 8, 8, 0]} className="fill-primary dark:fill-dark-accent" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            {/* Holdings Table */}
            <div className="bg-white dark:bg-dark-surface/65 backdrop-blur-xl rounded-card shadow-card border border-beige-200 dark:border-white/5 overflow-hidden">
                <div className="p-6 border-b border-beige-200 dark:border-white/5">
                    <h3 className="text-xl font-bold text-beige-900 dark:text-dark-text-primary">Holdings Performance</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-beige-50 dark:bg-white/5 border-b border-beige-200 dark:border-white/5">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-bold text-beige-700 dark:text-dark-text-secondary uppercase tracking-wider">Asset</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-beige-700 dark:text-dark-text-secondary uppercase tracking-wider">Type</th>
                                <th className="px-6 py-4 text-right text-xs font-bold text-beige-700 dark:text-dark-text-secondary uppercase tracking-wider">Quantity</th>
                                <th className="px-6 py-4 text-right text-xs font-bold text-beige-700 dark:text-dark-text-secondary uppercase tracking-wider">Purchase Price</th>
                                <th className="px-6 py-4 text-right text-xs font-bold text-beige-700 dark:text-dark-text-secondary uppercase tracking-wider">Current Price</th>
                                <th className="px-6 py-4 text-right text-xs font-bold text-beige-700 dark:text-dark-text-secondary uppercase tracking-wider">Current Value</th>
                                <th className="px-6 py-4 text-right text-xs font-bold text-beige-700 dark:text-dark-text-secondary uppercase tracking-wider">Day's Change</th>
                                <th className="px-6 py-4 text-center text-xs font-bold text-beige-700 dark:text-dark-text-secondary uppercase tracking-wider">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-beige-100 dark:divide-white/5">
                            {holdings.map((holding) => {
                                const gain = holding.currentValue - (holding.purchasePrice * holding.quantity);
                                const gainPercent = ((gain / (holding.purchasePrice * holding.quantity)) * 100).toFixed(2);
                                return (
                                    <tr key={holding.id} className="hover:bg-beige-50 dark:hover:bg-white/5 transition-colors">
                                        <td className="px-6 py-4">
                                            <p className="font-bold text-beige-900 dark:text-dark-text-primary">{holding.assetName}</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <StatusBadge status="info" label={holding.assetType} size="sm" />
                                        </td>
                                        <td className="px-6 py-4 text-right text-beige-900 dark:text-dark-text-primary">{holding.quantity}</td>
                                        <td className="px-6 py-4 text-right text-beige-900 dark:text-dark-text-primary">{currencySymbol}{holding.purchasePrice.toLocaleString()}</td>
                                        <td className="px-6 py-4 text-right text-beige-900 dark:text-dark-text-primary">{currencySymbol}{holding.currentPrice.toLocaleString()}</td>
                                        <td className="px-6 py-4 text-right">
                                            <p className="font-bold text-beige-900 dark:text-dark-text-primary">{currencySymbol}{holding.currentValue.toLocaleString()}</p>
                                            <p className={`text-xs ${parseFloat(gainPercent) >= 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-500 dark:text-red-400'}`}>
                                                {parseFloat(gainPercent) >= 0 ? '+' : ''}{gainPercent}%
                                            </p>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <span className={`font-bold ${holding.dayChange >= 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-500 dark:text-red-400'}`}>
                                                {holding.dayChange >= 0 ? '+' : ''}{holding.dayChange}%
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <StatusBadge status="success" label={holding.status} size="sm" />
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Investments;
