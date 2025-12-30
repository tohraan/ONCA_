
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ClientManagement from './ClientManagement';
import Accounting from './Accounting';
import DocumentVault from './DocumentVault';
import AIAssistant from './AIAssistant';
import Community from './Community';
import Reports from './Reports';
import Investments from './Investments';
import Settings from './Settings';
import QuickActions from '../components/QuickActions';
import { PortalTab, UserProfileData } from '../types';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, LineChart, Line } from 'recharts';
import { useSettings } from '../contexts/SettingsContext';

const FullPortal: React.FC = () => {
    const { settings, setTheme, currencySymbol } = useSettings();
    const [activeTab, setActiveTab] = useState<PortalTab>('DASHBOARD');
    const [userProfile, setUserProfile] = useState<UserProfileData>(() => {
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

    const handleProfileUpdate = (newProfile: UserProfileData) => {
        setUserProfile(newProfile);
    };

    const chartData = [
        { name: 'Mon', value: 2400, outflow: 1200 },
        { name: 'Tue', value: 1398, outflow: 1500 },
        { name: 'Wed', value: 9800, outflow: 3000 },
        { name: 'Thu', value: 3908, outflow: 2000 },
        { name: 'Fri', value: 4800, outflow: 1800 },
        { name: 'Sat', value: 3800, outflow: 1100 },
        { name: 'Sun', value: 4300, outflow: 900 },
    ];

    const [todoList, setTodoList] = useState([
        { id: 1, task: 'Tax Review & Filing', subtitle: 'Q1 Financial Report', done: false },
        { id: 2, task: 'Client Meeting Prep', subtitle: 'Anderson Corp', done: false },
        { id: 3, task: 'Review Invoices', subtitle: '5 pending', done: true },
    ]);
    const [newTodo, setNewTodo] = useState('');

    const addTodo = () => {
        if (newTodo.trim()) {
            setTodoList([...todoList, { id: Date.now(), task: newTodo, subtitle: 'New task', done: false }]);
            setNewTodo('');
        }
    };

    const toggleTodo = (id: number) => {
        setTodoList(todoList.map(t => t.id === id ? { ...t, done: !t.done } : t));
    };

    const dashboardActions = [
        { icon: 'receipt_long', label: 'Record Expense', onClick: () => setActiveTab('ACCOUNTING') },
        { icon: 'account_balance', label: 'Add Transaction', onClick: () => setActiveTab('ACCOUNTING') },
        { icon: 'upload_file', label: 'Upload Invoice', onClick: () => setActiveTab('DOCUMENT_VAULT') },
        { icon: 'people', label: 'Add Client', onClick: () => setActiveTab('CLIENT_MANAGEMENT') },
        { icon: 'assessment', label: 'Generate Report', onClick: () => setActiveTab('REPORTS') },
        { icon: 'sync', label: 'Sync Bank', onClick: () => setActiveTab('ACCOUNTING') },
    ];

    const renderDashboard = () => (
        <div className="flex-1 overflow-y-auto px-8 pb-8 custom-scrollbar relative z-10 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row items-end justify-between mb-8 gap-6 mt-6">
                <div>
                    <h1 className="text-4xl font-bold mb-2 tracking-tight dark:text-dark-text-primary">Good morning, {userProfile.name.split(' ')[0]}!</h1>
                    <p className="text-gray-500 dark:text-dark-text-secondary font-medium">Let's manage your finances and track expenses today.</p>
                </div>
                <div className="flex gap-12 items-end">
                    <div className="text-right">
                        <p className="text-[10px] text-gray-400 dark:text-dark-text-disabled mb-1 uppercase tracking-[0.2em] font-bold">Expenses tracked</p>
                        <div className="flex items-center gap-1 justify-end">
                            <span className="text-3xl font-bold dark:text-dark-text-primary">{currencySymbol}2,543</span>
                            <span className="material-icons-round text-sm text-primary dark:text-dark-accent">north_east</span>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-[10px] text-gray-400 dark:text-dark-text-disabled mb-1 uppercase tracking-[0.2em] font-bold">Budget saved</p>
                        <div className="flex items-center gap-1 justify-end">
                            <span className="text-3xl font-bold dark:text-dark-text-primary">82%</span>
                            <span className="material-icons-round text-sm text-primary dark:text-dark-accent">north_east</span>
                        </div>
                    </div>
                    <QuickActions actions={dashboardActions} />
                </div>
            </div>

            <div className="grid grid-cols-12 gap-6 pb-6">
                <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
                    {/* AI Assistant Card */}
                    <div className="bg-white dark:bg-dark-surface/65 dark:backdrop-blur-[18px] rounded-[2.5rem] p-8 shadow-card dark:shadow-dark-card border border-gray-100 dark:border-white/5 relative group overflow-hidden min-h-[380px] flex flex-col">
                        <div className="flex justify-between items-start mb-6">
                            <div className="flex gap-2">
                                <button className="h-10 w-10 rounded-full border border-gray-100 dark:border-white/10 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-white/5 transition">
                                    <span className="material-icons-round text-lg text-gray-400 dark:text-dark-text-disabled">help_outline</span>
                                </button>
                                <button className="h-10 w-10 rounded-full bg-primary/10 dark:bg-dark-accent/10 flex items-center justify-center text-primary dark:text-dark-accent relative">
                                    <span className="material-icons-round text-lg">chat_bubble_outline</span>
                                    <span className="absolute top-0 right-0 h-2.5 w-2.5 bg-red-400 border-2 border-white dark:border-dark-surface rounded-full"></span>
                                </button>
                            </div>
                            <img className="h-12 w-12 rounded-full object-cover shadow-sm ring-4 ring-primary/10 dark:ring-dark-accent/10" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="AI" />
                        </div>
                        <div className="flex-1 bg-gray-50 dark:bg-dark-base/40 rounded-3xl p-6 mb-6 border border-gray-100 dark:border-white/5 flex flex-col justify-center">
                            <p className="text-lg font-bold mb-3 text-gray-900 dark:text-dark-text-primary">Hi {userProfile.name.split(' ')[0]}! I'm ONCA assistant.</p>
                            <p className="text-base text-gray-500 dark:text-dark-text-secondary leading-relaxed font-medium">I've noticed your subscription costs increased by 5%. Should we audit them today?</p>
                        </div>
                        <div className="bg-white dark:bg-dark-base/60 border border-gray-100 dark:border-white/5 rounded-full p-2 pl-6 flex items-center shadow-soft ring-1 ring-gray-950/5 dark:ring-white/5">
                            <input className="flex-1 bg-transparent border-none text-sm outline-none focus:ring-0 placeholder-gray-400 dark:text-dark-text-primary" placeholder="Ask anything about your funds..." />
                            <button className="p-3 bg-primary dark:bg-dark-accent text-white dark:text-dark-base rounded-full shadow-glow flex items-center justify-center transition-transform hover:scale-105 active:scale-95">
                                <span className="material-icons-round text-base">send</span>
                            </button>
                        </div>
                    </div>

                    {/* Minimalistic To-do List */}
                    <div className="bg-white dark:bg-dark-surface/65 dark:backdrop-blur-[18px] rounded-[2.5rem] p-8 shadow-card dark:shadow-dark-card border border-gray-100 dark:border-white/5 flex flex-col min-h-[340px]">
                        <div className="flex justify-between items-center mb-6">
                            <div>
                                <h3 className="font-bold text-xl text-gray-900 dark:text-dark-text-primary">To-do list</h3>
                                <p className="text-[10px] text-gray-400 dark:text-dark-text-disabled mb-1 uppercase tracking-[0.2em] font-bold">Today's Focus</p>
                            </div>
                            <button className="h-10 w-10 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center text-gray-400 dark:text-dark-text-disabled hover:text-primary dark:hover:text-dark-accent transition-colors">
                                <span className="material-icons-round">more_vert</span>
                            </button>
                        </div>

                        <div className="flex-1 space-y-4 mb-6 pt-2">
                            {todoList.map((item) => (
                                <div key={item.id} className="flex items-center gap-4 group cursor-pointer" onClick={() => toggleTodo(item.id)}>
                                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${item.done ? 'bg-primary dark:bg-dark-accent border-primary dark:border-dark-accent' : 'border-gray-300 dark:border-white/10 group-hover:border-primary dark:group-hover:border-dark-accent'
                                        }`}>
                                        {item.done && <span className="material-icons-round text-white dark:text-dark-base text-xs">check</span>}
                                    </div>
                                    <div className="flex-1">
                                        <p className={`text-sm font-bold transition-all ${item.done ? 'text-gray-400 dark:text-dark-text-disabled line-through' : 'text-gray-800 dark:text-dark-text-primary'
                                            }`}>{item.task}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-auto">
                            <div className="flex items-center gap-3 bg-gray-50 dark:bg-dark-base/40 border border-gray-100 dark:border-white/5 rounded-full p-1 pl-4 ring-1 ring-gray-950/5 dark:ring-white/5 focus-within:ring-primary/50 dark:focus-within:ring-dark-accent/50 transition-all">
                                <input
                                    type="text"
                                    value={newTodo}
                                    onChange={(e) => setNewTodo(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && addTodo()}
                                    placeholder="Add new task..."
                                    className="flex-1 bg-transparent border-none text-sm outline-none focus:ring-0 dark:text-dark-text-primary placeholder-gray-400 py-2.5"
                                />
                                <button
                                    onClick={addTodo}
                                    className="h-10 w-10 rounded-full bg-primary dark:bg-dark-accent text-white dark:text-dark-base flex items-center justify-center shadow-soft hover:scale-105 active:scale-95 transition-transform"
                                >
                                    <span className="material-icons-round">add</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-12 lg:col-span-8 flex flex-col gap-6">
                    <div className="bg-white dark:bg-dark-surface/65 dark:backdrop-blur-[18px] rounded-[2.5rem] p-8 shadow-card dark:shadow-dark-card border border-gray-100 dark:border-white/5 min-h-[340px] flex flex-col">
                        <div className="flex justify-between items-center mb-6">
                            <div>
                                <h3 className="font-bold text-xl text-beige-900 dark:text-dark-text-primary">Dashboard Actions</h3>
                                <p className="text-[10px] text-beige-500 dark:text-dark-text-secondary mb-1 uppercase tracking-[0.2em] font-bold">Fast Access</p>
                            </div>
                            <button className="p-2 rounded-full border border-beige-200 dark:border-white/10 text-beige-400 dark:text-dark-text-disabled hover:text-primary dark:hover:text-dark-accent transition-colors">
                                <span className="material-icons-round text-sm">more_horiz</span>
                            </button>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 flex-1">
                            {dashboardActions.map((action, i) => (
                                <button
                                    key={i}
                                    onClick={action.onClick}
                                    className="flex flex-col items-center justify-center gap-3 p-6 rounded-[2rem] border border-beige-100 dark:border-white/5 hover:border-primary dark:hover:border-dark-accent hover:bg-gray-50/50 dark:hover:bg-white/5 transition-all group shadow-sm bg-white dark:bg-dark-base/40"
                                >
                                    <div className={`w-14 h-14 bg-beige-50 dark:bg-dark-accent/10 rounded-[1.25rem] flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm ring-1 ring-gray-950/5 dark:ring-white/5`}>
                                        <span className="material-icons-round text-2xl text-primary dark:text-dark-accent">{action.icon}</span>
                                    </div>
                                    <span className="text-sm font-bold text-beige-700 dark:text-dark-text-secondary text-center leading-tight">{action.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white dark:bg-dark-surface/65 dark:backdrop-blur-[18px] rounded-[2.5rem] p-8 shadow-card dark:shadow-dark-card border border-gray-100 dark:border-white/5">
                        <div className="flex justify-between items-center mb-8">
                            <div>
                                <h3 className="font-bold text-xl text-beige-900 dark:text-dark-text-primary">Upcoming Deadlines</h3>
                                <p className="text-[10px] text-beige-500 dark:text-dark-text-secondary mb-1 uppercase tracking-[0.2em] font-bold">Compliance Status</p>
                            </div>
                            <button className="px-6 py-2.5 bg-primary dark:bg-dark-accent text-white dark:text-dark-base rounded-full text-xs font-bold hover:shadow-lg transition-all ring-1 ring-primary/20 dark:ring-dark-accent/20">
                                View All
                            </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { title: 'GST Return Filing', date: 'Jan 20, 2025', days: 3, type: 'compliance', urgent: true },
                                { title: 'TDS Payment Due', date: 'Jan 25, 2025', days: 8, type: 'payment', urgent: false },
                                { title: 'Client Invoice - ABC Corp', date: 'Jan 28, 2025', days: 11, type: 'invoice', urgent: false },
                                { title: 'Payroll Processing', date: 'Jan 31, 2025', days: 14, type: 'payroll', urgent: false },
                            ].map((deadline, i) => (
                                <div
                                    key={i}
                                    className={`p-5 rounded-[2rem] border transition-all cursor-pointer group flex flex-col justify-between h-32 ${deadline.urgent
                                        ? 'border-red-100 dark:border-dark-status-error/30 bg-red-50/30 dark:bg-dark-status-error/10 hover:border-red-300 dark:hover:border-dark-status-error shadow-sm shadow-red-100/50'
                                        : 'border-beige-100 dark:border-white/5 bg-white dark:bg-dark-base/40 hover:border-primary dark:hover:border-dark-accent shadow-sm ring-1 ring-gray-950/5 dark:ring-white/5'
                                        }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${deadline.urgent ? 'bg-red-100 dark:bg-dark-status-error/20 text-red-600 dark:text-dark-status-error shadow-sm shadow-red-200/50' : 'bg-primary/10 dark:bg-dark-accent/10 text-primary dark:text-dark-accent'
                                            }`}>
                                            <span className="material-icons-round text-lg">
                                                {deadline.type === 'compliance' ? 'verified_user' :
                                                    deadline.type === 'payment' ? 'payments' :
                                                        deadline.type === 'invoice' ? 'receipt' : 'schedule'}
                                            </span>
                                        </div>
                                        <span className={`text-[10px] font-bold px-3 py-1 rounded-full ${deadline.urgent
                                            ? 'bg-red-100 dark:bg-dark-status-error/20 text-red-700 dark:text-dark-status-error'
                                            : 'bg-beige-100 dark:bg-white/5 text-beige-700 dark:text-dark-text-secondary'
                                            }`}>
                                            {deadline.days} days
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm text-beige-900 dark:text-dark-text-primary truncate">{deadline.title}</h4>
                                        <p className="text-[10px] text-beige-500 dark:text-dark-text-disabled font-bold uppercase tracking-wider">{deadline.date}</p>
                                    </div>
                                </div>
                            ))}
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
                        <h1 className="text-4xl font-bold mb-2 tracking-tight dark:text-dark-text-primary">Financial Insight <span className="text-primary dark:text-dark-accent">Ready</span></h1>
                        <p className="text-gray-500 dark:text-dark-text-secondary text-lg">Detailed breakdown of your company's fiscal efficiency.</p>
                    </div>
                    <div className="flex items-center gap-3 bg-white dark:bg-dark-surface/65 backdrop-blur-xl p-2 pr-6 rounded-full shadow-card border border-gray-100 dark:border-white/5">
                        <img className="h-10 w-10 rounded-full border-2 border-primary/20 dark:border-dark-accent/20" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" alt="Sarah" />
                        <span className="text-sm font-bold text-gray-700 dark:text-dark-text-primary">Lead Analyst Sarah</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white dark:bg-dark-surface/65 backdrop-blur-xl p-8 rounded-[2rem] shadow-card border border-gray-100 dark:border-white/5 flex flex-col gap-4">
                        <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-900/10 text-primary dark:text-emerald-400 rounded-2xl flex items-center justify-center">
                            <span className="material-icons-round">payments</span>
                        </div>
                        <div>
                            <p className="text-xs text-gray-400 dark:text-dark-text-disabled font-bold uppercase tracking-widest">Total Spent (Last Month)</p>
                            <h3 className="text-3xl font-bold text-gray-900 dark:text-dark-text-primary">{currencySymbol}24,500.00</h3>
                        </div>
                        <div className="flex items-center gap-1 text-primary dark:text-dark-accent text-sm font-bold bg-emerald-50 dark:bg-dark-accent/10 px-3 py-1 rounded-full w-fit">
                            <span className="material-icons-round text-sm">north_east</span> 12% vs last year
                        </div>
                    </div>

                    <div className="bg-white dark:bg-dark-surface/65 backdrop-blur-xl p-8 rounded-[2rem] shadow-card border border-gray-100 dark:border-white/5 flex flex-col gap-4">
                        <div className="w-12 h-12 bg-amber-50 dark:bg-amber-900/10 text-amber-600 dark:text-amber-400 rounded-2xl flex items-center justify-center">
                            <span className="material-icons-round">timelapse</span>
                        </div>
                        <div>
                            <p className="text-xs text-gray-400 dark:text-dark-text-disabled font-bold uppercase tracking-widest">Cash Runway</p>
                            <h3 className="text-3xl font-bold text-gray-900 dark:text-dark-text-primary">8.5 Months</h3>
                        </div>
                        <div className="flex items-center gap-1 text-amber-600 dark:text-amber-400 text-sm font-bold bg-amber-50 dark:bg-amber-900/20 px-3 py-1 rounded-full w-fit">
                            Low risk level
                        </div>
                    </div>

                    <div className="bg-gray-900 dark:bg-dark-accent text-white dark:text-dark-base p-8 rounded-[2rem] shadow-xl flex flex-col justify-center items-center text-center gap-4 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 dark:bg-white/20 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/30 transition-all" />
                        <h3 className="font-bold text-xl relative z-10">Generate AI Forecast</h3>
                        <p className="text-gray-400 dark:text-dark-base/80 text-sm relative z-10 px-4">Predict next quarter's revenue with 94% accuracy.</p>
                        <button className="w-full py-3 bg-white dark:bg-dark-base text-gray-900 dark:text-dark-accent rounded-2xl font-bold hover:bg-primary dark:hover:bg-white hover:text-white dark:hover:text-dark-base transition-all transform hover:scale-105 relative z-10 shadow-lg">
                            Start Simulation
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 lg:col-span-5 bg-white dark:bg-dark-surface/65 backdrop-blur-xl rounded-[2.5rem] p-8 border border-gray-100 dark:border-white/5 shadow-card h-[500px] flex flex-col">
                        <div className="flex justify-between items-center mb-8">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-primary/10 dark:bg-dark-accent/10 rounded-full flex items-center justify-center text-primary dark:text-dark-accent">
                                    <span className="material-icons-round">auto_awesome</span>
                                </div>
                                <h3 className="font-bold text-lg dark:text-dark-text-primary">AI Burn Analysis</h3>
                            </div>
                            <button className="text-gray-400 dark:text-dark-text-disabled hover:text-gray-600 dark:hover:text-dark-text-secondary"><span className="material-icons-round">more_horiz</span></button>
                        </div>
                        <div className="flex-1 bg-gray-50 dark:bg-dark-base/40 rounded-[2rem] p-6 border border-gray-100 dark:border-white/5 flex flex-col">
                            <div className="bg-white dark:bg-dark-surface/60 p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 mb-4">
                                <p className="text-gray-700 dark:text-dark-text-secondary text-sm leading-relaxed">Your cloud infrastructure costs rose by <span className="text-red-500 font-bold">15%</span> last week. Most of it comes from <span className="font-bold">AWS S3 storage</span>. I recommend archiving data older than 6 months.</p>
                            </div>
                            <div className="mt-auto flex flex-wrap gap-2">
                                {['Audit AWS', 'Archive S3', 'Compare Azure'].map(tag => (
                                    <button key={tag} className="px-4 py-2 bg-white dark:bg-white/5 rounded-full text-xs font-bold text-gray-600 dark:text-dark-text-secondary border border-gray-100 dark:border-white/10 hover:border-primary dark:hover:border-dark-accent hover:text-primary dark:hover:text-dark-accent transition-all">{tag}</button>
                                ))}
                            </div>
                        </div>
                        <div className="mt-6 flex gap-3">
                            <div className="flex-1 relative">
                                <span className="material-icons-round absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-dark-text-disabled text-lg">keyboard</span>
                                <input className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-full text-sm outline-none focus:bg-white dark:focus:bg-white/10 transition-all dark:text-dark-text-primary" placeholder="Ask about burn rate..." />
                            </div>
                            <button className="w-12 h-12 bg-primary dark:bg-dark-accent text-white dark:text-dark-base rounded-full shadow-glow flex items-center justify-center transition-transform hover:scale-110"><span className="material-icons-round">mic</span></button>
                        </div>
                    </div>

                    <div className="col-span-12 lg:col-span-7 flex flex-col gap-6">
                        <div className="bg-white dark:bg-dark-surface/65 backdrop-blur-xl rounded-[2.5rem] p-8 border border-gray-100 dark:border-white/5 shadow-card flex-1">
                            <div className="flex justify-between items-center mb-10">
                                <h3 className="font-bold text-xl text-gray-900 dark:text-dark-text-primary">Expense Heatmap</h3>
                                <select className="bg-gray-50 dark:bg-white/5 dark:text-dark-text-primary border-none text-xs font-bold rounded-full px-4 py-2 outline-none cursor-pointer">
                                    <option>Last 30 Days</option>
                                    <option>Year to Date</option>
                                </select>
                            </div>
                            <div className="h-[250px] flex items-end justify-around gap-6">
                                {[
                                    { name: 'Payroll', val: 9200, color: 'bg-primary dark:bg-dark-accent' },
                                    { name: 'Software', val: 4100, color: 'bg-amber-400' },
                                    { name: 'Marketing', val: 6800, color: 'bg-blue-400' },
                                    { name: 'Rent', val: 3000, color: 'bg-gray-300 dark:bg-white/10' }
                                ].map(cat => (
                                    <div key={cat.name} className="flex-1 flex flex-col items-center gap-4 group cursor-pointer">
                                        <div className={`w-full ${cat.color} rounded-2xl relative transition-all group-hover:brightness-110 group-hover:-translate-y-1`} style={{ height: `${(cat.val / 10000) * 100}%` }}>
                                            <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-900 dark:bg-dark-surface text-white dark:text-dark-text-primary text-xs font-bold px-3 py-1.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl border dark:border-white/10">
                                                {currencySymbol}{cat.val.toLocaleString()}
                                            </div>
                                        </div>
                                        <span className="text-xs font-extrabold text-gray-400 dark:text-dark-text-disabled group-hover:text-gray-900 dark:group-hover:text-dark-text-primary uppercase tracking-widest">{cat.name}</span>
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
                    <h1 className="text-3xl font-bold tracking-tight dark:text-dark-text-primary">Recent Transactions</h1>
                    <p className="text-gray-500 dark:text-dark-text-secondary">Manage and categorize your spending across all departments.</p>
                </div>
                <div className="flex gap-4">
                    <button className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-dark-surface/65 backdrop-blur-xl border border-gray-100 dark:border-white/5 rounded-full shadow-card font-bold text-gray-700 dark:text-dark-text-primary hover:bg-gray-50 dark:hover:bg-white/5 transition-all">
                        <span className="material-icons-round text-primary dark:text-dark-accent">camera_alt</span>
                        Scan Receipt
                    </button>
                    <button className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-dark-accent text-white dark:text-dark-base rounded-full shadow-lg font-bold hover:bg-black dark:hover:bg-opacity-80 transition-all">
                        <span className="material-icons-round">file_upload</span>
                        Import CSV
                    </button>
                </div>
            </div>

            <div className="bg-white dark:bg-dark-surface/65 backdrop-blur-xl rounded-[2.5rem] shadow-card border border-gray-100 dark:border-white/5 overflow-hidden">
                <div className="p-6 border-b border-gray-50 dark:border-white/5 flex gap-8">
                    {['All', 'Awaiting Review', 'Categories', 'Flagged'].map((f, i) => (
                        <button key={f} className={`text-sm font-bold transition-all border-b-2 py-2 ${i === 0 ? 'text-primary dark:text-dark-accent border-primary dark:border-dark-accent' : 'text-gray-400 dark:text-dark-text-disabled border-transparent hover:text-gray-600 dark:hover:text-dark-text-secondary'}`}>
                            {f}
                        </button>
                    ))}
                </div>
                <div className="divide-y divide-gray-50 dark:divide-white/5">
                    {[
                        { name: 'Amazon Web Services', date: 'May 10, 2024', amount: -450.00, category: 'Infrastructure', status: 'Approved' },
                        { name: 'Stripe Payout', date: 'May 09, 2024', amount: 12400.00, category: 'Sales', status: 'Settled' },
                        { name: 'GitHub Enterprise', date: 'May 08, 2024', amount: -210.00, category: 'Engineering', status: 'Review' },
                        { name: 'WeWork Office', date: 'May 05, 2024', amount: -1500.00, category: 'Fixed Costs', status: 'Approved' },
                        { name: 'Facebook Ads', date: 'May 02, 2024', amount: -3200.00, category: 'Marketing', status: 'Flagged' },
                    ].map((tx, idx) => (
                        <div key={idx} className="p-6 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group cursor-pointer">
                            <div className="flex items-center gap-4">
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold ${tx.amount > 0 ? 'bg-emerald-50 dark:bg-emerald-900/10 text-emerald-600 dark:text-emerald-400' : 'bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-dark-text-primary'}`}>
                                    {tx.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 dark:text-dark-text-primary">{tx.name}</p>
                                    <p className="text-xs text-gray-400 dark:text-dark-text-disabled">{tx.date} • {tx.category}</p>
                                </div>
                            </div>
                            <div className="text-right flex items-center gap-8">
                                <div>
                                    <p className={`font-bold ${tx.amount > 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-gray-900 dark:text-dark-text-primary'}`}>
                                        {tx.amount > 0 ? '+' : ''}{currencySymbol}{Math.abs(tx.amount).toLocaleString()}
                                    </p>
                                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest ${tx.status === 'Approved' ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400' :
                                        tx.status === 'Flagged' ? 'bg-red-50 dark:bg-red-900/20 text-red-500' : 'bg-amber-50 dark:bg-amber-900/20 text-amber-600'
                                        }`}>{tx.status}</span>
                                </div>
                                <span className="material-icons-round text-gray-300 dark:text-white/10 group-hover:text-primary dark:group-hover:text-dark-accent transition-colors">chevron_right</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    const renderCashflow = () => (
        <div className="flex-1 overflow-y-auto px-8 pb-8 custom-scrollbar relative z-10 animate-in fade-in duration-500">
            <div className="mt-10 mb-8">
                <h1 className="text-4xl font-bold tracking-tight dark:text-dark-text-primary">Cash Flow Analysis</h1>
                <p className="text-gray-500 dark:text-dark-text-secondary text-lg">Visualizing liquidity and forecasting future balances.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white dark:bg-dark-surface/65 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-card border border-gray-100 dark:border-white/5 h-[450px] flex flex-col">
                    <h3 className="font-bold text-xl mb-6 dark:text-dark-text-primary">Inflow vs Outflow</h3>
                    <div className="flex-1 -mx-4">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={chartData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={settings.theme === 'dark' ? '#ffffff10' : '#f3f4f6'} />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: settings.theme === 'dark' ? '#ffffff40' : '#9ca3af' }} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: settings.theme === 'dark' ? '#ffffff40' : '#9ca3af' }} />
                                <Tooltip cursor={{ fill: settings.theme === 'dark' ? '#ffffff05' : '#f9fafb' }} contentStyle={{ backgroundColor: settings.theme === 'dark' ? '#1a1a1a' : '#fff', borderRadius: '1rem', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }} />
                                <Bar dataKey="value" name="Inflow" fill="#10B981" radius={[4, 4, 0, 0]} />
                                <Bar dataKey="outflow" name="Outflow" fill="#F87171" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="bg-white dark:bg-dark-surface/65 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-card border border-gray-100 dark:border-white/5 h-[450px] flex flex-col">
                    <h3 className="font-bold text-xl mb-6 dark:text-dark-text-primary">Projected Balance</h3>
                    <div className="flex-1 -mx-4">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={chartData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={settings.theme === 'dark' ? '#ffffff10' : '#f3f4f6'} />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: settings.theme === 'dark' ? '#ffffff40' : '#9ca3af' }} />
                                <Tooltip contentStyle={{ backgroundColor: settings.theme === 'dark' ? '#1a1a1a' : '#fff', borderRadius: '1rem', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }} />
                                <Line type="monotone" dataKey="value" stroke={settings.theme === 'dark' ? '#C5A267' : '#6366F1'} strokeWidth={4} dot={{ r: 6, fill: settings.theme === 'dark' ? '#C5A267' : '#6366F1', strokeWidth: 3, stroke: settings.theme === 'dark' ? '#1a1a1a' : '#fff' }} activeDot={{ r: 8 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderCompliance = () => (
        <div className="flex-1 overflow-y-auto px-8 pb-8 custom-scrollbar relative z-10 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row items-end justify-between mb-8 gap-6 mt-10">
                <div>
                    <h1 className="text-4xl font-bold mb-2 tracking-tight text-beige-900 dark:text-dark-text-primary">Compliance & Tax</h1>
                    <p className="text-beige-500 dark:text-dark-text-secondary text-lg">Ensure your business stays compliant with automatic filings and audits.</p>
                </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                {[
                    { label: 'Compliance Score', value: '98%', icon: 'verified_user', color: 'bg-primary dark:bg-dark-accent', trend: '+2%' },
                    { label: 'Pending Filings', value: '3', icon: 'pending_actions', color: 'bg-amber-500', trend: '-1' },
                    { label: 'Tax Liability', value: `${currencySymbol}2.4L`, icon: 'account_balance', color: 'bg-blue-500', trend: '+5%' },
                    { label: 'Days to Deadline', value: '4', icon: 'schedule', color: 'bg-red-500', trend: 'Urgent' },
                ].map((kpi, idx) => (
                    <div key={idx} className="bg-white dark:bg-dark-surface/65 backdrop-blur-xl p-6 rounded-[2rem] shadow-card border border-beige-100 dark:border-white/5 hover:shadow-lg transition-all">
                        <div className="flex items-center justify-between mb-4">
                            <div className={`w-12 h-12 ${kpi.color} rounded-xl flex items-center justify-center text-white dark:text-dark-base`}>
                                <span className="material-icons-round text-2xl">{kpi.icon}</span>
                            </div>
                            <span className="text-xs font-bold text-beige-500 dark:text-dark-text-disabled">{kpi.trend}</span>
                        </div>
                        <h3 className="text-3xl font-bold text-beige-900 dark:text-dark-text-primary mb-1">{kpi.value}</h3>
                        <p className="text-sm text-beige-500 dark:text-dark-text-secondary font-bold">{kpi.label}</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white dark:bg-dark-surface/65 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-card border border-beige-100 dark:border-white/5">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="font-bold text-xl text-beige-900 dark:text-dark-text-primary">Filing Checklist</h3>
                            <button className="px-4 py-2 bg-primary/10 dark:bg-dark-accent/10 text-primary dark:text-dark-accent rounded-full text-xs font-bold hover:bg-primary/20 transition-colors">
                                Add Filing
                            </button>
                        </div>
                        <div className="space-y-3">
                            {[
                                { label: 'Q1 GST Return Filing', due: 'In 4 days', status: 'Warning', type: 'GST' },
                                { label: 'Corporate Income Tax Provision', due: 'In 2 weeks', status: 'Safe', type: 'Income Tax' },
                                { label: 'Monthly Payroll Tax Withholding', due: 'Completed', status: 'Done', type: 'Payroll' },
                                { label: 'Director Financial Declaration', due: 'In 1 month', status: 'Safe', type: 'Compliance' },
                                { label: 'TDS Return Filing', due: 'In 10 days', status: 'Safe', type: 'TDS' },
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center justify-between p-4 bg-beige-50 dark:bg-white/5 rounded-2xl group hover:bg-white dark:hover:bg-white/10 hover:shadow-sm transition-all border border-transparent hover:border-beige-200 dark:hover:border-white/10">
                                    <div className="flex items-center gap-4 flex-1">
                                        <div className={`w-10 h-10 rounded-xl border-2 flex items-center justify-center ${item.status === 'Done' ? 'bg-primary dark:bg-dark-accent border-primary dark:border-dark-accent text-white dark:text-dark-base' :
                                            item.status === 'Warning' ? 'border-red-300 dark:border-red-900/50 bg-red-50 dark:bg-red-900/10 text-red-600 dark:text-red-400' :
                                                'border-beige-300 dark:border-white/10 bg-white dark:bg-dark-base/40 text-beige-600 dark:text-dark-text-secondary'
                                            }`}>
                                            <span className="material-icons-round text-lg">
                                                {item.status === 'Done' ? 'check' : 'description'}
                                            </span>
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-bold text-beige-900 dark:text-dark-text-primary text-sm">{item.label}</p>
                                            <p className="text-xs text-beige-500 dark:text-dark-text-disabled">{item.type}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${item.status === 'Warning' ? 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400' :
                                            item.status === 'Done' ? 'bg-primary/10 dark:bg-dark-accent/10 text-primary dark:text-dark-accent' :
                                                'bg-beige-100 dark:bg-white/5 text-beige-700 dark:text-dark-text-secondary'
                                            }`}>{item.due}</span>
                                        <button className="text-beige-300 dark:text-white/10 group-hover:text-primary dark:group-hover:text-dark-accent transition-colors">
                                            <span className="material-icons-round">arrow_forward</span>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tax Calendar */}
                    <div className="bg-white dark:bg-dark-surface/65 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-card border border-beige-100 dark:border-white/5">
                        <h3 className="font-bold text-xl text-beige-900 dark:text-dark-text-primary mb-6">Upcoming Tax Deadlines</h3>
                        <div className="space-y-4">
                            {[
                                { date: 'Jan 20', month: 'JAN', task: 'GST Return Q1', amount: '45,000' },
                                { date: 'Jan 25', month: 'JAN', task: 'TDS Payment', amount: '28,500' },
                                { date: 'Feb 07', month: 'FEB', task: 'Income Tax Advance', amount: '1,20,000' },
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-4 p-4 rounded-xl border-2 border-beige-100 dark:border-white/5 hover:border-primary dark:hover:border-dark-accent hover:shadow-sm transition-all">
                                    <div className="w-16 h-16 bg-primary/10 dark:bg-dark-accent/10 rounded-xl flex flex-col items-center justify-center">
                                        <span className="text-xs font-bold text-primary dark:text-dark-accent">{item.month}</span>
                                        <span className="text-xl font-bold text-primary dark:text-dark-accent">{item.date.split(' ')[1]}</span>
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-bold text-beige-900 dark:text-dark-text-primary">{item.task}</p>
                                        <p className="text-sm text-beige-500 dark:text-dark-text-secondary">Estimated: {currencySymbol}{item.amount}</p>
                                    </div>
                                    <button className="px-4 py-2 bg-beige-50 dark:bg-white/5 hover:bg-beige-100 dark:hover:bg-white/10 rounded-lg text-sm font-bold text-beige-700 dark:text-dark-text-primary transition-colors">
                                        Pay Now
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="bg-primary dark:bg-dark-accent p-8 rounded-[2.5rem] shadow-glow text-white dark:text-dark-base flex flex-col justify-between h-[300px]">
                        <div>
                            <span className="material-icons-round text-5xl mb-4">security</span>
                            <h3 className="font-bold text-3xl mb-2">98%</h3>
                            <p className="text-white/80 dark:text-dark-base/80 text-sm mb-4 font-bold">Audit Score</p>
                            <p className="text-white/70 dark:text-dark-base/70 text-xs font-medium">Your books are reconciled and documentation is healthy.</p>
                        </div>
                        <button className="w-full py-4 bg-white dark:bg-dark-base text-primary dark:text-dark-accent rounded-2xl font-bold hover:bg-beige-50 dark:hover:bg-white/90 transition-colors shadow-lg">
                            Download Certificate
                        </button>
                    </div>

                    {/* Quick Actions Support */}
                    <div className="bg-white dark:bg-dark-surface/65 backdrop-blur-xl p-6 rounded-[2.5rem] shadow-card border border-beige-100 dark:border-white/5">
                        <h3 className="font-bold text-lg text-beige-900 dark:text-dark-text-primary mb-4">Support & Tools</h3>
                        <div className="space-y-2">
                            {[
                                { icon: 'upload_file', label: 'Upload Tax Document', color: 'text-blue-600 dark:text-blue-400' },
                                { icon: 'calculate', label: 'Tax Calculator', color: 'text-purple-600 dark:text-purple-400' },
                                { icon: 'history', label: 'Filing History', color: 'text-amber-600 dark:text-amber-400' },
                                { icon: 'support_agent', label: 'Contact CA', color: 'text-primary dark:text-dark-accent' },
                            ].map((action, idx) => (
                                <button key={idx} className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-beige-50 dark:hover:bg-white/5 transition-all text-left group">
                                    <span className={`material-icons-round ${action.color}`}>{action.icon}</span>
                                    <span className="text-sm font-bold text-beige-700 dark:text-dark-text-secondary group-hover:text-beige-900 dark:group-hover:text-dark-text-primary">{action.label}</span>
                                    <span className="material-icons-round text-beige-300 dark:text-white/10 ml-auto group-hover:text-primary dark:group-hover:text-dark-accent">arrow_forward</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderCurrentTab = () => {
        switch (activeTab) {
            case 'DASHBOARD': return renderDashboard();
            case 'CLIENT_MANAGEMENT': return <ClientManagement />;
            case 'COMPLIANCE': return renderCompliance();
            case 'ACCOUNTING': return <Accounting />;
            case 'DOCUMENT_VAULT': return <DocumentVault />;
            case 'REPORTS': return <Reports />;
            case 'INSIGHTS': return renderInsights();
            case 'CASHFLOW': return renderCashflow();
            case 'INVESTMENTS': return <Investments />;
            case 'EXPENSES': return renderExpenses();
            case 'AI_ASSISTANT': return <AIAssistant />;
            case 'COMMUNITY': return <Community />;
            case 'SETTINGS': return <Settings onProfileUpdate={handleProfileUpdate} />;
            default: return renderDashboard();
        }
    };

    return (
        <div className="w-full h-full flex overflow-hidden">
            <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

            <main className="flex-1 flex flex-col h-full overflow-hidden relative bg-beige-50 dark:bg-dark-bg transition-colors duration-300">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 dark:bg-dark-accent/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
                <div className="absolute bottom-0 left-20 w-[400px] h-[400px] bg-beige-200/30 dark:bg-dark-accent/5 rounded-full blur-[100px] translate-y-1/2 pointer-events-none" />

                <header className="flex items-center justify-between px-10 py-6 z-10 border-b border-beige-200 dark:border-white/5 backdrop-blur-md bg-white/50 dark:bg-dark-surface/50">
                    <div className="flex items-center gap-4">
                        <h2 className="text-sm font-bold text-beige-500 dark:text-dark-text-disabled uppercase tracking-[0.2em]">ONCA Finance</h2>
                        <div className="w-1.5 h-1.5 rounded-full bg-beige-300 dark:bg-white/10" />
                        <h2 className="text-sm font-bold text-beige-900 dark:text-dark-text-primary">{activeTab}</h2>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="hidden md:flex bg-beige-100 dark:bg-white/5 rounded-full p-1 border border-beige-200 dark:border-white/10">
                            <button
                                onClick={() => setTheme('light')}
                                className={`p-2 rounded-full flex items-center justify-center transition-all ${settings.theme === 'light' ? 'bg-white shadow-sm text-yellow-500' : 'text-beige-400 dark:text-dark-text-disabled hover:text-beige-600 dark:hover:text-dark-text-secondary'}`}
                            >
                                <span className="material-icons-round text-base">wb_sunny</span>
                            </button>
                            <button
                                onClick={() => setTheme('dark')}
                                className={`p-2 rounded-full flex items-center justify-center transition-all ${settings.theme === 'dark' ? 'bg-gray-700 dark:bg-dark-accent shadow-sm text-primary dark:text-dark-base' : 'text-beige-400 dark:text-dark-text-disabled hover:text-beige-600 dark:hover:text-dark-text-secondary'}`}
                            >
                                <span className="material-icons-round text-base">dark_mode</span>
                            </button>
                        </div>
                        <div className="h-10 w-[1px] bg-beige-200 dark:bg-white/10 hidden md:block" />
                        <div className="flex items-center gap-4">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-bold text-beige-900 dark:text-dark-text-primary leading-none">{userProfile.name}</p>
                                <p className="text-[10px] font-bold text-primary dark:text-dark-accent uppercase tracking-wider mt-1">Founder Plan</p>
                            </div>
                            <div className="h-12 w-12 rounded-2xl overflow-hidden ring-4 ring-white dark:ring-white/5 shadow-soft transition-transform hover:scale-105 cursor-pointer" onClick={() => setActiveTab('SETTINGS')}>
                                <img className="h-full w-full object-cover" src={userProfile.avatar} alt="User" />
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
