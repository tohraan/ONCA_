
import React from 'react';
import KPICard from '../components/KPICard';
import Button from '../components/Button';
import StatusBadge from '../components/StatusBadge';
import QuickActions from '../components/QuickActions';
import { Investment } from '../types';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const Investments: React.FC = () => {
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
                    <h1 className="text-4xl font-bold mb-2 tracking-tight text-beige-900">Investments</h1>
                    <p className="text-beige-600 text-lg">Manage and track your asset portfolio and market performance</p>
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
                    value={`₹${(totalValue / 100000).toFixed(2)}L`}
                    change={12.5}
                    icon="account_balance"
                    iconColor="text-primary"
                    iconBg="bg-primary/10"
                />
                <KPICard
                    title="Net ROI"
                    value={`${roi}%`}
                    change={parseFloat(roi)}
                    icon="trending_up"
                    iconColor="text-emerald-600"
                    iconBg="bg-emerald-50"
                />
                <KPICard
                    title="Unrealized Gains"
                    value={`₹${(totalGain / 1000).toFixed(0)}K`}
                    icon="show_chart"
                    iconColor="text-blue-600"
                    iconBg="bg-blue-50"
                />
                <KPICard
                    title="Dividend Income"
                    value="₹12,500"
                    icon="payments"
                    iconColor="text-amber-600"
                    iconBg="bg-amber-50"
                    subtitle="this month"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                {/* Asset Allocation */}
                <div className="bg-white rounded-card p-card shadow-card border border-beige-200">
                    <h3 className="text-xl font-bold text-beige-900 mb-6">Asset Allocation</h3>
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
                                <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="space-y-2 mt-4">
                        {allocation.map((item) => (
                            <div key={item.name} className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                                    <span className="text-sm text-beige-700">{item.name}</span>
                                </div>
                                <span className="text-sm font-bold text-beige-900">
                                    {((item.value / totalValue) * 100).toFixed(1)}%
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sector Breakdown */}
                <div className="lg:col-span-2 bg-white rounded-card p-card shadow-card border border-beige-200">
                    <h3 className="text-xl font-bold text-beige-900 mb-6">Sector Breakdown</h3>
                    <div className="h-[250px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={sectorBreakdown} layout="vertical">
                                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#E8E8C8" />
                                <XAxis type="number" axisLine={false} tickLine={false} tick={{ fill: '#9C9C80', fontSize: 12 }} />
                                <YAxis type="category" dataKey="sector" axisLine={false} tickLine={false} tick={{ fill: '#9C9C80', fontSize: 12 }} />
                                <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                                <Bar dataKey="value" fill="#00674F" radius={[0, 8, 8, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            {/* Holdings Table */}
            <div className="bg-white rounded-card shadow-card border border-beige-200">
                <div className="p-6 border-b border-beige-200">
                    <h3 className="text-xl font-bold text-beige-900">Holdings Performance</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-beige-50 border-b border-beige-200">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-bold text-beige-700 uppercase tracking-wider">Asset</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-beige-700 uppercase tracking-wider">Type</th>
                                <th className="px-6 py-4 text-right text-xs font-bold text-beige-700 uppercase tracking-wider">Quantity</th>
                                <th className="px-6 py-4 text-right text-xs font-bold text-beige-700 uppercase tracking-wider">Purchase Price</th>
                                <th className="px-6 py-4 text-right text-xs font-bold text-beige-700 uppercase tracking-wider">Current Price</th>
                                <th className="px-6 py-4 text-right text-xs font-bold text-beige-700 uppercase tracking-wider">Current Value</th>
                                <th className="px-6 py-4 text-right text-xs font-bold text-beige-700 uppercase tracking-wider">Day's Change</th>
                                <th className="px-6 py-4 text-center text-xs font-bold text-beige-700 uppercase tracking-wider">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-beige-100">
                            {holdings.map((holding) => {
                                const gain = holding.currentValue - (holding.purchasePrice * holding.quantity);
                                const gainPercent = ((gain / (holding.purchasePrice * holding.quantity)) * 100).toFixed(2);
                                return (
                                    <tr key={holding.id} className="hover:bg-beige-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <p className="font-bold text-beige-900">{holding.assetName}</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <StatusBadge status="info" label={holding.assetType} size="sm" />
                                        </td>
                                        <td className="px-6 py-4 text-right text-beige-900">{holding.quantity}</td>
                                        <td className="px-6 py-4 text-right text-beige-900">₹{holding.purchasePrice.toLocaleString()}</td>
                                        <td className="px-6 py-4 text-right text-beige-900">₹{holding.currentPrice.toLocaleString()}</td>
                                        <td className="px-6 py-4 text-right">
                                            <p className="font-bold text-beige-900">₹{holding.currentValue.toLocaleString()}</p>
                                            <p className={`text-xs ${parseFloat(gainPercent) >= 0 ? 'text-emerald-600' : 'text-red-500'}`}>
                                                {parseFloat(gainPercent) >= 0 ? '+' : ''}{gainPercent}%
                                            </p>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <span className={`font-bold ${holding.dayChange >= 0 ? 'text-emerald-600' : 'text-red-500'}`}>
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
