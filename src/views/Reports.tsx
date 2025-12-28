
import React, { useState } from 'react';
import KPICard from '../components/KPICard';
import Button from '../components/Button';
import Select from '../components/Select';
import QuickActions from '../components/QuickActions';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const Reports: React.FC = () => {
    const [timePeriod, setTimePeriod] = useState('30days');

    const revenueData = [
        { month: 'Jan', revenue: 45000, expenses: 32000 },
        { month: 'Feb', revenue: 52000, expenses: 35000 },
        { month: 'Mar', revenue: 48000, expenses: 33000 },
        { month: 'Apr', revenue: 61000, expenses: 38000 },
        { month: 'May', revenue: 55000, expenses: 36000 },
        { month: 'Jun', revenue: 67000, expenses: 40000 },
    ];

    const expenseBreakdown = [
        { name: 'Salaries', value: 45000, color: '#00674F' },
        { name: 'Rent', value: 15000, color: '#F5A623' },
        { name: 'Utilities', value: 8000, color: '#4A90E2' },
        { name: 'Software', value: 12000, color: '#7B68EE' },
        { name: 'Marketing', value: 20000, color: '#50E3C2' },
    ];

    const clientGrowth = [
        { month: 'Jan', clients: 12 },
        { month: 'Feb', clients: 15 },
        { month: 'Mar', clients: 18 },
        { month: 'Apr', clients: 22 },
        { month: 'May', clients: 28 },
        { month: 'Jun', clients: 35 },
    ];

    return (
        <div className="flex-1 overflow-y-auto px-8 pb-8 custom-scrollbar relative z-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-6 mt-8">
                <div>
                    <h1 className="text-4xl font-bold mb-2 tracking-tight text-beige-900">Reports & Analytics</h1>
                    <p className="text-beige-600 text-lg">Visualize your business performance and financial health</p>
                </div>
                <div className="flex gap-3">
                    <Select
                        options={[
                            { value: '30days', label: 'Last 30 Days' },
                            { value: 'quarter', label: 'Last Quarter' },
                            { value: 'year', label: 'This Year' },
                            { value: 'custom', label: 'Custom Range' },
                        ]}
                        value={timePeriod}
                        onChange={(e) => setTimePeriod(e.target.value)}
                        fullWidth={false}
                        className="min-w-[180px]"
                    />
                    <QuickActions
                        actions={[
                            {
                                icon: 'file_download',
                                label: 'Export as PDF',
                                onClick: () => console.log('Export PDF'),
                            },
                            {
                                icon: 'table_chart',
                                label: 'Export as Excel',
                                onClick: () => console.log('Export Excel'),
                            },
                            {
                                icon: 'share',
                                label: 'Share Report',
                                onClick: () => console.log('Share'),
                            },
                            {
                                icon: 'schedule',
                                label: 'Schedule Report',
                                onClick: () => console.log('Schedule'),
                            },
                        ]}
                    />
                </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <KPICard
                    title="Total Revenue"
                    value="₹3,28,000"
                    change={15.3}
                    icon="trending_up"
                    iconColor="text-primary"
                    iconBg="bg-primary/10"
                    subtitle="vs last period"
                />
                <KPICard
                    title="Net Profit"
                    value="₹1,14,000"
                    change={18.7}
                    icon="account_balance"
                    iconColor="text-emerald-600"
                    iconBg="bg-emerald-50"
                    subtitle="34.8% margin"
                />
                <KPICard
                    title="Expense Ratio"
                    value="65.2%"
                    change={-2.4}
                    icon="pie_chart"
                    iconColor="text-blue-600"
                    iconBg="bg-blue-50"
                    subtitle="of revenue"
                />
                <KPICard
                    title="Compliance Score"
                    value="98%"
                    icon="verified"
                    iconColor="text-amber-600"
                    iconBg="bg-amber-50"
                    subtitle="on-time filings"
                />
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                {/* Revenue vs Expenses */}
                <div className="bg-white rounded-card p-card shadow-card border border-beige-200">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h3 className="text-xl font-bold text-beige-900">Revenue vs Expenses</h3>
                            <p className="text-sm text-beige-600">6-month trend analysis</p>
                        </div>
                        <button className="p-2 hover:bg-beige-100 rounded-full transition-colors">
                            <span className="material-icons-round text-beige-600">more_vert</span>
                        </button>
                    </div>
                    <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={revenueData}>
                                <defs>
                                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#00674F" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#00674F" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#EF4444" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#EF4444" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E8E8C8" />
                                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#9C9C80', fontSize: 12 }} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9C9C80', fontSize: 12 }} />
                                <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                                <Area type="monotone" dataKey="revenue" stroke="#00674F" fillOpacity={1} fill="url(#colorRevenue)" strokeWidth={3} />
                                <Area type="monotone" dataKey="expenses" stroke="#EF4444" fillOpacity={1} fill="url(#colorExpenses)" strokeWidth={3} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Expense Breakdown */}
                <div className="bg-white rounded-card p-card shadow-card border border-beige-200">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h3 className="text-xl font-bold text-beige-900">Expense Breakdown</h3>
                            <p className="text-sm text-beige-600">Category distribution</p>
                        </div>
                        <button className="p-2 hover:bg-beige-100 rounded-full transition-colors">
                            <span className="material-icons-round text-beige-600">more_vert</span>
                        </button>
                    </div>
                    <div className="h-[300px] flex items-center justify-center">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={expenseBreakdown}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={100}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {expenseBreakdown.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mt-4">
                        {expenseBreakdown.map((item) => (
                            <div key={item.name} className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                                <span className="text-sm text-beige-700">{item.name}</span>
                                <span className="text-sm font-bold text-beige-900 ml-auto">₹{item.value.toLocaleString()}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Client Growth */}
            <div className="bg-white rounded-card p-card shadow-card border border-beige-200">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h3 className="text-xl font-bold text-beige-900">Client Growth</h3>
                        <p className="text-sm text-beige-600">New clients acquired over time</p>
                    </div>
                    <button className="p-2 hover:bg-beige-100 rounded-full transition-colors">
                        <span className="material-icons-round text-beige-600">more_vert</span>
                    </button>
                </div>
                <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={clientGrowth}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E8E8C8" />
                            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#9C9C80', fontSize: 12 }} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9C9C80', fontSize: 12 }} />
                            <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                            <Bar dataKey="clients" fill="#00674F" radius={[8, 8, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Reports;
