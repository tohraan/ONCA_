
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { PortalTab } from '../types';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, LineChart, Line } from 'recharts';

const FullPortal: React.FC = () => {
    const [activeTab, setActiveTab] = useState<PortalTab>('DASHBOARD');

    const chartData = [
        { name: 'Mon', value: 2400, outflow: 1200 },
        { name: 'Tue', value: 1398, outflow: 1500 },
        { name: 'Wed', value: 9800, outflow: 3000 },
        { name: 'Thu', value: 3908, outflow: 2000 },
        { name: 'Fri', value: 4800, outflow: 1800 },
        { name: 'Sat', value: 3800, outflow: 1100 },
        { name: 'Sun', value: 4300, outflow: 900 },
    ];

    const renderDashboard = () => (
        <div className="flex-1 overflow-y-auto px-8 pb-8 custom-scrollbar relative z-10 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row items-end justify-between mb-8 gap-6 mt-6">
                <div>
                    <h1 className="text-4xl font-bold mb-2 tracking-tight">Good morning, Mike!</h1>
                    <p className="text-gray-500">Let's manage your finances and track expenses today.</p>
                </div>
                <div className="flex gap-12 items-end">
                    <div className="text-right">
                        <p className="text-sm text-gray-400 mb-1 uppercase tracking-wider font-semibold">Expenses tracked</p>
                        <div className="flex items-center gap-1 justify-end">
                            <span className="text-3xl font-bold">$2,543</span>
                            <span className="material-icons-round text-sm text-primary">north_east</span>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-sm text-gray-400 mb-1 uppercase tracking-wider font-semibold">Budget saved</p>
                        <div className="flex items-center gap-1 justify-end">
                            <span className="text-3xl font-bold">82%</span>
                            <span className="material-icons-round text-sm text-primary">north_east</span>
                        </div>
                    </div>
                    <button className="bg-gray-900 text-white px-6 py-3 rounded-full font-bold hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center gap-2">
                        <span className="material-icons-round text-lg">add</span>
                        Add expense
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-12 gap-6 pb-6">
                <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
                    <div className="bg-white rounded-[2.5rem] p-8 shadow-card border border-gray-100 relative group overflow-hidden h-[340px] flex flex-col">
                        <div className="flex justify-between items-start mb-6">
                            <div className="flex gap-2">
                                <button className="h-10 w-10 rounded-full border border-gray-100 flex items-center justify-center hover:bg-gray-50 transition">
                                    <span className="material-icons-round text-lg text-gray-400">help_outline</span>
                                </button>
                                <button className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary relative">
                                    <span className="material-icons-round text-lg">chat_bubble_outline</span>
                                    <span className="absolute top-0 right-0 h-2.5 w-2.5 bg-red-400 border-2 border-white rounded-full"></span>
                                </button>
                            </div>
                            <img className="h-10 w-10 rounded-full object-cover shadow-sm ring-2 ring-primary/20" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="AI" />
                        </div>
                        <div className="flex-1 bg-gray-50 rounded-3xl p-5 mb-4 border border-gray-100">
                            <p className="text-sm font-bold mb-2 text-gray-900">Hi Mike! I'm ONCA assistant.</p>
                            <p className="text-sm text-gray-500 leading-relaxed">I've noticed your subscription costs increased by 5%. Should we audit them today?</p>
                        </div>
                        <div className="bg-white border border-gray-100 rounded-full p-2 pl-5 flex items-center shadow-soft">
                            <input className="flex-1 bg-transparent border-none text-sm outline-none focus:ring-0 placeholder-gray-400" placeholder="Ask anything about your funds..." />
                            <button className="p-2 bg-primary text-white rounded-full shadow-glow">
                                <span className="material-icons-round text-sm">send</span>
                            </button>
                        </div>
                    </div>

                    <div className="bg-white rounded-[2.5rem] p-8 shadow-card border border-gray-100 flex flex-col justify-between h-[280px]">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="font-bold text-xl text-gray-900">To-do list</h3>
                                <p className="text-sm text-gray-400">Wednesday, 11 May</p>
                            </div>
                            <button className="h-10 w-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-primary transition-colors">
                                <span className="material-icons-round">edit</span>
                            </button>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-[2rem] border border-gray-100 flex justify-between items-center group cursor-pointer hover:border-primary/50 transition-all">
                            <div>
                                <h4 className="font-bold text-gray-800">Tax Review & Filing</h4>
                                <p className="text-sm text-gray-400">Q1 Financial Report</p>
                            </div>
                            <div className="w-10 h-10 bg-white shadow-sm rounded-full flex items-center justify-center text-gray-300 group-hover:text-primary transition-colors">
                                <span className="material-icons-round text-lg">check_circle_outline</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-12 lg:col-span-8 flex flex-col gap-6">
                    <div className="bg-white rounded-[2.5rem] p-8 shadow-card border border-gray-100 h-[340px] flex flex-col">
                        <div className="flex justify-between items-center mb-8">
                            <div>
                                <h3 className="font-bold text-xl text-gray-900">My activity</h3>
                                <p className="text-sm text-gray-400">What is scheduled for you today</p>
                            </div>
                            <div className="flex gap-2">
                                <button className="px-4 py-2 bg-gray-50 rounded-full text-xs font-bold text-gray-500 border border-gray-100">Week</button>
                                <button className="px-4 py-2 bg-gray-900 text-white rounded-full text-xs font-bold shadow-md">Month</button>
                            </div>
                        </div>
                        <div className="flex-1 flex items-end gap-3 px-4">
                            {[60, 40, 80, 50, 90, 70, 45, 85, 30, 95, 60, 75, 55, 80].map((h, i) => (
                                <div key={i} className="flex-1 bg-gray-100 rounded-full relative group cursor-pointer transition-all hover:bg-gray-200" style={{ height: `${h}%` }}>
                                    <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity rounded-full shadow-glow" />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white rounded-[2.5rem] p-8 shadow-card border border-gray-100 flex-1 min-h-[280px] flex flex-col">
                        <div className="flex justify-between items-center mb-6">
                            <div>
                                <h3 className="font-bold text-xl text-gray-900">Net Flow Summary</h3>
                                <p className="text-sm text-gray-400">Weekly performance vs. projected</p>
                            </div>
                            <div className="flex gap-2">
                                <button className="p-2 rounded-full border border-gray-100 text-gray-400 hover:text-gray-600"><span className="material-icons-round text-sm">tune</span></button>
                                <button className="p-2 rounded-full border border-gray-100 text-gray-400 hover:text-gray-600"><span className="material-icons-round text-sm">open_in_new</span></button>
                            </div>
                        </div>
                        <div className="flex-1 -mx-4">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={chartData}>
                                    <defs>
                                        <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#10B981" stopOpacity={0.2} />
                                            <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <Tooltip
                                        contentStyle={{ borderRadius: '1rem', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                                    />
                                    <Area type="monotone" dataKey="value" stroke="#10B981" fillOpacity={1} fill="url(#colorVal)" strokeWidth={4} />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderInsights = () => (
        <div className="flex-1 overflow-y-auto px-8 pb-8 custom-scrollbar relative z-10 animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="flex flex-col gap-6 mt-10">
                <div className="flex justify-between items-end">
                    <div>
                        <h1 className="text-4xl font-bold mb-2 tracking-tight">Financial Insight <span className="text-primary">Ready</span></h1>
                        <p className="text-gray-500 text-lg">Detailed breakdown of your company's fiscal efficiency.</p>
                    </div>
                    <div className="flex items-center gap-3 bg-white p-2 pr-6 rounded-full shadow-soft border border-gray-100">
                        <img className="h-10 w-10 rounded-full border-2 border-primary/20" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" alt="Sarah" />
                        <span className="text-sm font-bold text-gray-700">Lead Analyst Sarah</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-8 rounded-[2rem] shadow-card border border-gray-100 flex flex-col gap-4">
                        <div className="w-12 h-12 bg-emerald-50 text-primary rounded-2xl flex items-center justify-center">
                            <span className="material-icons-round">payments</span>
                        </div>
                        <div>
                            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Total Spent (Last Month)</p>
                            <h3 className="text-3xl font-bold text-gray-900">$24,500.00</h3>
                        </div>
                        <div className="flex items-center gap-1 text-primary text-sm font-bold bg-emerald-50 px-3 py-1 rounded-full w-fit">
                            <span className="material-icons-round text-sm">north_east</span> 12% vs last year
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-[2rem] shadow-card border border-gray-100 flex flex-col gap-4">
                        <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center">
                            <span className="material-icons-round">timelapse</span>
                        </div>
                        <div>
                            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Cash Runway</p>
                            <h3 className="text-3xl font-bold text-gray-900">8.5 Months</h3>
                        </div>
                        <div className="flex items-center gap-1 text-amber-600 text-sm font-bold bg-amber-50 px-3 py-1 rounded-full w-fit">
                            Low risk level
                        </div>
                    </div>

                    <div className="bg-gray-900 text-white p-8 rounded-[2rem] shadow-xl flex flex-col justify-center items-center text-center gap-4 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/30 transition-all" />
                        <h3 className="font-bold text-xl relative z-10">Generate AI Forecast</h3>
                        <p className="text-gray-400 text-sm relative z-10 px-4">Predict next quarter's revenue with 94% accuracy.</p>
                        <button className="w-full py-3 bg-white text-gray-900 rounded-2xl font-bold hover:bg-primary hover:text-white transition-all transform hover:scale-105 relative z-10 shadow-lg">
                            Start Simulation
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 lg:col-span-5 bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-card h-[500px] flex flex-col">
                        <div className="flex justify-between items-center mb-8">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                    <span className="material-icons-round">auto_awesome</span>
                                </div>
                                <h3 className="font-bold text-lg">AI Burn Analysis</h3>
                            </div>
                            <button className="text-gray-400 hover:text-gray-600"><span className="material-icons-round">more_horiz</span></button>
                        </div>
                        <div className="flex-1 bg-gray-50 rounded-[2rem] p-6 border border-gray-100 flex flex-col">
                            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 mb-4">
                                <p className="text-gray-700 text-sm leading-relaxed">Your cloud infrastructure costs rose by <span className="text-red-500 font-bold">15%</span> last week. Most of it comes from <span className="font-bold">AWS S3 storage</span>. I recommend archiving data older than 6 months.</p>
                            </div>
                            <div className="mt-auto flex flex-wrap gap-2">
                                {['Audit AWS', 'Archive S3', 'Compare Azure'].map(tag => (
                                    <button key={tag} className="px-4 py-2 bg-white rounded-full text-xs font-bold text-gray-600 border border-gray-100 hover:border-primary hover:text-primary transition-all">{tag}</button>
                                ))}
                            </div>
                        </div>
                        <div className="mt-6 flex gap-3">
                            <div className="flex-1 relative">
                                <span className="material-icons-round absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">keyboard</span>
                                <input className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-full text-sm outline-none focus:bg-white transition-all" placeholder="Ask about burn rate..." />
                            </div>
                            <button className="w-12 h-12 bg-primary text-white rounded-full shadow-glow flex items-center justify-center transition-transform hover:scale-110"><span className="material-icons-round">mic</span></button>
                        </div>
                    </div>

                    <div className="col-span-12 lg:col-span-7 flex flex-col gap-6">
                        <div className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-card flex-1">
                            <div className="flex justify-between items-center mb-10">
                                <h3 className="font-bold text-xl text-gray-900">Expense Heatmap</h3>
                                <select className="bg-gray-50 border-none text-xs font-bold rounded-full px-4 py-2 outline-none cursor-pointer">
                                    <option>Last 30 Days</option>
                                    <option>Year to Date</option>
                                </select>
                            </div>
                            <div className="h-[250px] flex items-end justify-around gap-6">
                                {[
                                    { name: 'Payroll', val: 9200, color: 'bg-primary' },
                                    { name: 'Software', val: 4100, color: 'bg-amber-400' },
                                    { name: 'Marketing', val: 6800, color: 'bg-blue-400' },
                                    { name: 'Rent', val: 3000, color: 'bg-gray-300' }
                                ].map(cat => (
                                    <div key={cat.name} className="flex-1 flex flex-col items-center gap-4 group cursor-pointer">
                                        <div className={`w-full ${cat.color} rounded-2xl relative transition-all group-hover:brightness-110 group-hover:-translate-y-1`} style={{ height: `${(cat.val / 10000) * 100}%` }}>
                                            <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs font-bold px-3 py-1.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
                                                ${cat.val.toLocaleString()}
                                            </div>
                                        </div>
                                        <span className="text-xs font-extrabold text-gray-400 group-hover:text-gray-900 uppercase tracking-widest">{cat.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderExpenses = () => (
        <div className="flex-1 overflow-y-auto px-8 pb-8 custom-scrollbar relative z-10 animate-in fade-in duration-500">
            <div className="mt-8 mb-8 flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Recent Transactions</h1>
                    <p className="text-gray-500">Manage and categorize your spending across all departments.</p>
                </div>
                <div className="flex gap-4">
                    <button className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-100 rounded-full shadow-soft font-bold text-gray-700 hover:bg-gray-50 transition-all">
                        <span className="material-icons-round text-primary">camera_alt</span>
                        Scan Receipt
                    </button>
                    <button className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full shadow-lg font-bold hover:bg-black transition-all">
                        <span className="material-icons-round">file_upload</span>
                        Import CSV
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-[2.5rem] shadow-card border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-50 flex gap-8">
                    {['All', 'Awaiting Review', 'Categories', 'Flagged'].map((f, i) => (
                        <button key={f} className={`text-sm font-bold transition-all border-b-2 py-2 ${i === 0 ? 'text-primary border-primary' : 'text-gray-400 border-transparent hover:text-gray-600'}`}>
                            {f}
                        </button>
                    ))}
                </div>
                <div className="divide-y divide-gray-50">
                    {[
                        { name: 'Amazon Web Services', date: 'May 10, 2024', amount: -450.00, category: 'Infrastructure', status: 'Approved' },
                        { name: 'Stripe Payout', date: 'May 09, 2024', amount: 12400.00, category: 'Sales', status: 'Settled' },
                        { name: 'GitHub Enterprise', date: 'May 08, 2024', amount: -210.00, category: 'Engineering', status: 'Review' },
                        { name: 'WeWork Office', date: 'May 05, 2024', amount: -1500.00, category: 'Fixed Costs', status: 'Approved' },
                        { name: 'Facebook Ads', date: 'May 02, 2024', amount: -3200.00, category: 'Marketing', status: 'Flagged' },
                    ].map((tx, idx) => (
                        <div key={idx} className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors group cursor-pointer">
                            <div className="flex items-center gap-4">
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold ${tx.amount > 0 ? 'bg-emerald-50 text-emerald-600' : 'bg-gray-100 text-gray-700'}`}>
                                    {tx.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900">{tx.name}</p>
                                    <p className="text-xs text-gray-400">{tx.date} • {tx.category}</p>
                                </div>
                            </div>
                            <div className="text-right flex items-center gap-8">
                                <div>
                                    <p className={`font-bold ${tx.amount > 0 ? 'text-emerald-600' : 'text-gray-900'}`}>
                                        {tx.amount > 0 ? '+' : ''}{tx.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                                    </p>
                                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest ${tx.status === 'Approved' ? 'bg-emerald-50 text-emerald-600' :
                                            tx.status === 'Flagged' ? 'bg-red-50 text-red-500' : 'bg-amber-50 text-amber-600'
                                        }`}>{tx.status}</span>
                                </div>
                                <span className="material-icons-round text-gray-300 group-hover:text-primary transition-colors">chevron_right</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    const renderCashflow = () => (
        <div className="flex-1 overflow-y-auto px-8 pb-8 custom-scrollbar relative z-10 animate-in fade-in duration-500">
            <div className="mt-8 mb-8">
                <h1 className="text-3xl font-bold tracking-tight">Cash Flow Analysis</h1>
                <p className="text-gray-500">Visualizing liquidity and forecasting future balances.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-8 rounded-[2.5rem] shadow-card border border-gray-100 h-[400px] flex flex-col">
                    <h3 className="font-bold text-xl mb-6">Inflow vs Outflow</h3>
                    <div className="flex-1 -mx-4">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={chartData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} />
                                <Tooltip cursor={{ fill: '#f9fafb' }} contentStyle={{ borderRadius: '1rem', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }} />
                                <Bar dataKey="value" name="Inflow" fill="#10B981" radius={[4, 4, 0, 0]} />
                                <Bar dataKey="outflow" name="Outflow" fill="#F87171" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-[2.5rem] shadow-card border border-gray-100 h-[400px] flex flex-col">
                    <h3 className="font-bold text-xl mb-6">Projected Balance</h3>
                    <div className="flex-1 -mx-4">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={chartData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} />
                                <Tooltip contentStyle={{ borderRadius: '1rem', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }} />
                                <Line type="monotone" dataKey="value" stroke="#6366F1" strokeWidth={4} dot={{ r: 6, fill: '#6366F1', strokeWidth: 3, stroke: '#fff' }} activeDot={{ r: 8 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderCompliance = () => (
        <div className="flex-1 overflow-y-auto px-8 pb-8 custom-scrollbar relative z-10 animate-in fade-in duration-500">
            <div className="mt-8 mb-8">
                <h1 className="text-3xl font-bold tracking-tight">Compliance & Tax</h1>
                <p className="text-gray-500">Ensure your business stays compliant with automatic filings and audits.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white p-8 rounded-[2.5rem] shadow-card border border-gray-100">
                        <h3 className="font-bold text-xl mb-6">Filing Checklist</h3>
                        <div className="space-y-4">
                            {[
                                { label: 'Q1 GST Return Filing', due: 'In 4 days', status: 'Warning' },
                                { label: 'Corporate Income Tax Provision', due: 'In 2 weeks', status: 'Safe' },
                                { label: 'Monthly Payroll Tax Withholding', due: 'Completed', status: 'Done' },
                                { label: 'Director Financial Declaration', due: 'In 1 month', status: 'Safe' },
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center justify-between p-5 bg-gray-50 rounded-2xl group hover:bg-white hover:shadow-soft transition-all border border-transparent hover:border-gray-100">
                                    <div className="flex items-center gap-4">
                                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${item.status === 'Done' ? 'bg-primary border-primary text-white' : 'border-gray-300'
                                            }`}>
                                            {item.status === 'Done' && <span className="material-icons-round text-sm">check</span>}
                                        </div>
                                        <span className="font-bold text-gray-800">{item.label}</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className={`text-xs font-bold px-3 py-1 rounded-full ${item.status === 'Warning' ? 'bg-red-50 text-red-500' :
                                                item.status === 'Done' ? 'bg-emerald-50 text-emerald-600' : 'bg-blue-50 text-blue-600'
                                            }`}>{item.due}</span>
                                        <button className="text-gray-300 group-hover:text-primary transition-colors">
                                            <span className="material-icons-round">arrow_forward</span>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="bg-primary p-8 rounded-[2.5rem] shadow-glow text-white flex flex-col justify-between h-[300px]">
                        <div>
                            <span className="material-icons-round text-4xl mb-4">security</span>
                            <h3 className="font-bold text-2xl mb-2">Audit Score: 98%</h3>
                            <p className="text-primary-foreground/80 text-sm">Your books are reconciled and documentation is healthy.</p>
                        </div>
                        <button className="w-full py-4 bg-white text-primary rounded-2xl font-extrabold hover:bg-gray-100 transition-colors">Download Certificate</button>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderCurrentTab = () => {
        switch (activeTab) {
            case 'DASHBOARD': return renderDashboard();
            case 'INSIGHTS': return renderInsights();
            case 'EXPENSES': return renderExpenses();
            case 'CASHFLOW': return renderCashflow();
            case 'COMPLIANCE': return renderCompliance();
            default: return renderDashboard();
        }
    };

    return (
        <div className="w-full h-full flex overflow-hidden">
            <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

            <main className="flex-1 flex flex-col h-full overflow-hidden relative bg-gray-50/30">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
                <div className="absolute bottom-0 left-20 w-[400px] h-[400px] bg-blue-400/5 rounded-full blur-[100px] translate-y-1/2 pointer-events-none" />

                <header className="flex items-center justify-between px-10 py-6 z-10 border-b border-gray-100/50 backdrop-blur-sm">
                    <div className="flex items-center gap-4">
                        <h2 className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em]">ONCA Finance</h2>
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-200" />
                        <h2 className="text-sm font-bold text-gray-900">{activeTab}</h2>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="hidden md:flex bg-gray-100 rounded-full p-1 border border-gray-200/50">
                            <button className="p-2 rounded-full bg-white shadow-sm text-yellow-500 flex items-center justify-center">
                                <span className="material-icons-round text-base">wb_sunny</span>
                            </button>
                            <button className="p-2 rounded-full text-gray-400 flex items-center justify-center hover:text-gray-600">
                                <span className="material-icons-round text-base">dark_mode</span>
                            </button>
                        </div>
                        <div className="h-10 w-[1px] bg-gray-200 hidden md:block" />
                        <div className="flex items-center gap-4">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-bold text-gray-900 leading-none">Mike Anderson</p>
                                <p className="text-[10px] font-bold text-primary uppercase tracking-wider mt-1">Founder Plan</p>
                            </div>
                            <div className="h-12 w-12 rounded-2xl overflow-hidden ring-4 ring-white shadow-soft transition-transform hover:scale-105 cursor-pointer">
                                <img className="h-full w-full object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mike" alt="User" />
                            </div>
                        </div>
                    </div>
                </header>

                {renderCurrentTab()}
            </main>
        </div>
    );
};

export default FullPortal;
