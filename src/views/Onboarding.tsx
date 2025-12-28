
import React, { useState } from 'react';

interface OnboardingProps {
    onComplete: () => void;
}

const Onboarding: React.FC<OnboardingProps> = ({ onComplete }) => {
    const [step, setStep] = useState(1);

    const nextStep = () => {
        if (step === 6) {
            onComplete();
        } else {
            setStep(step + 1);
        }
    };

    const renderStep = () => {
        switch (step) {
            case 1: // Welcome & Role
                return (
                    <div className="flex flex-col items-center text-center max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6">
                            <span className="material-icons-round text-sm">smart_toy</span>
                            AI Personalization
                        </div>
                        <h1 className="text-4xl font-bold mb-3">What best describes you?</h1>
                        <p className="text-gray-500 text-lg mb-10">We'll tailor the dashboard complexity to match your role.</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mb-10">
                            {[
                                { id: 'founder', title: 'Founder / Owner', icon: 'diamond', color: 'text-orange-600', bg: 'bg-orange-100', desc: 'I need high-level insights, runway forecasts, and key metrics.' },
                                { id: 'finance', title: 'Finance Manager', icon: 'bar_chart', color: 'text-blue-600', bg: 'bg-blue-100', desc: 'I need deep dives, reconciliation tools, and detailed reports.' },
                                { id: 'ops', title: 'Operations / Admin', icon: 'settings_suggest', color: 'text-purple-600', bg: 'bg-purple-100', desc: 'I manage day-to-day expenses, invoices, and payroll.' },
                                { id: 'explore', title: 'Just Exploring', icon: 'explore', color: 'text-emerald-600', bg: 'bg-emerald-100', desc: 'Show me a bit of everything. I want to see capabilities.' },
                            ].map(role => (
                                <button
                                    key={role.id}
                                    onClick={nextStep}
                                    className="group p-6 text-left bg-white dark:bg-gray-800 border-2 border-transparent hover:border-primary rounded-2xl shadow-sm hover:shadow-md transition-all"
                                >
                                    <div className={`w-12 h-12 ${role.bg} ${role.color} rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                                        <span className="material-icons-round">{role.icon}</span>
                                    </div>
                                    <h3 className="font-bold text-lg mb-1">{role.title}</h3>
                                    <p className="text-sm text-gray-500">{role.desc}</p>
                                </button>
                            ))}
                        </div>
                    </div>
                );

            case 2: // Business Context
                return (
                    <div className="flex flex-col max-w-2xl w-full animate-in fade-in slide-in-from-right-4 duration-500">
                        <h1 className="text-4xl font-bold mb-3 tracking-tight">Business Context</h1>
                        <p className="text-lg text-gray-500 mb-10">ONCA adapts its intelligence based on your business.</p>

                        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); nextStep(); }}>
                            <div className="space-y-2">
                                <label className="block text-sm font-semibold">Business Name</label>
                                <div className="relative">
                                    <span className="material-icons-round absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">storefront</span>
                                    <input className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="e.g. Acme Corp" />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="block text-sm font-semibold">Industry</label>
                                    <select className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none appearance-none">
                                        <option>Tech & SaaS</option>
                                        <option>Retail</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-sm font-semibold">Country</label>
                                    <select className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none">
                                        <option>United States</option>
                                        <option>India</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="block text-sm font-semibold">Business Size</label>
                                <div className="grid grid-cols-4 gap-3">
                                    {['Solo', '2-10', '11-50', '50+'].map(size => (
                                        <button key={size} type="button" onClick={nextStep} className="py-3 border border-gray-200 rounded-xl hover:bg-primary/5 hover:border-primary transition-all font-medium">
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </form>
                    </div>
                );

            case 3: // Intent Selection
                return (
                    <div className="flex flex-col items-center text-center max-w-3xl animate-in fade-in slide-in-from-right-4 duration-500">
                        <h1 className="text-4xl font-bold mb-3 tracking-tight">How can ONCA help you today?</h1>
                        <p className="text-gray-500 text-lg mb-12">Select your focus areas to tailor your dashboard.</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                            {[
                                { id: 'cf', title: 'Cash Flow Tracking', icon: 'payments', desc: 'Monitor real-time inflows and outflows.' },
                                { id: 'gst', title: 'GST / Compliance', icon: 'verified', desc: 'Automate tax calculations and filing.' },
                                { id: 'exp', title: 'Expense Control', icon: 'pie_chart', desc: 'Identify spending leaks and optimize.' },
                                { id: 'ai', title: 'AI Insights', icon: 'psychology', desc: 'Proactive suggestions for growth.' },
                            ].map(intent => (
                                <button
                                    key={intent.id}
                                    onClick={nextStep}
                                    className="p-6 text-left bg-white border-2 border-transparent hover:border-primary rounded-2xl shadow-sm hover:shadow-md transition-all flex items-start gap-4"
                                >
                                    <div className="w-12 h-12 bg-gray-50 text-primary rounded-xl flex items-center justify-center shrink-0">
                                        <span className="material-icons-round">{intent.icon}</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">{intent.title}</h3>
                                        <p className="text-sm text-gray-500">{intent.desc}</p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                );

            case 4: // Data Connection
                return (
                    <div className="flex flex-col items-center text-center max-w-3xl animate-in fade-in slide-in-from-right-4 duration-500">
                        <h1 className="text-4xl font-bold mb-3 tracking-tight">Connect data to unlock real insights.</h1>
                        <p className="text-gray-500 text-lg mb-12">Or skip for now — ONCA works without it.</p>

                        <div className="grid grid-cols-3 gap-6 w-full mb-12">
                            {[
                                { id: 'bank', label: 'Bank Account', icon: 'account_balance' },
                                { id: 'acc', label: 'Accounting Tool', icon: 'calculate' },
                                { id: 'upload', label: 'Upload CSV', icon: 'upload_file' },
                            ].map(conn => (
                                <button
                                    key={conn.id}
                                    onClick={nextStep}
                                    className="flex flex-col items-center justify-center p-8 bg-gray-50 border-2 border-transparent hover:border-primary rounded-3xl transition-all gap-4"
                                >
                                    <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center text-gray-600">
                                        <span className="material-icons-round text-3xl">{conn.icon}</span>
                                    </div>
                                    <span className="font-bold text-gray-900">{conn.label}</span>
                                </button>
                            ))}
                        </div>

                        <button onClick={nextStep} className="text-gray-500 hover:text-gray-900 font-medium underline underline-offset-4 transition-colors">Skip for now</button>
                    </div>
                );

            case 5: // AI Win
                return (
                    <div className="flex flex-col items-center text-center max-w-2xl animate-in zoom-in duration-500">
                        <div className="w-20 h-20 bg-primary rounded-3xl flex items-center justify-center shadow-glow mb-6 text-white animate-bounce">
                            <span className="material-icons-round text-4xl">smart_toy</span>
                        </div>
                        <h1 className="text-4xl font-bold mb-4">Your First AI Win</h1>
                        <p className="text-gray-500 text-lg mb-8">While setting up, I found a saving opportunity for your business.</p>

                        <div className="w-full bg-white border border-gray-100 p-8 rounded-3xl text-left shadow-soft relative overflow-hidden mb-8">
                            <div className="absolute right-0 top-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl -mr-12 -mt-12" />
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-full text-primary">
                                    <span className="material-icons-round">auto_awesome</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2">Cost Saving Opportunity Detected</h3>
                                    <p className="text-gray-500 leading-relaxed">Your subscription to <span className="font-bold text-gray-900 underline decoration-primary decoration-2">AWS Infrastructure</span> is currently 15% higher than peers. Switching to annual billing could save you <strong>$450/mo</strong>.</p>
                                </div>
                            </div>
                        </div>

                        <button onClick={nextStep} className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-2xl shadow-lg transition-all transform hover:-translate-y-1">
                            Show Me Details
                        </button>
                    </div>
                );

            case 6: // Final
                return (
                    <div className="flex flex-col items-center text-center max-w-md animate-in fade-in scale-95 duration-500">
                        <div className="w-24 h-24 bg-primary rounded-3xl flex items-center justify-center shadow-glow mb-8 text-white">
                            <span className="material-icons-round text-5xl">check_circle</span>
                        </div>
                        <h1 className="text-4xl font-bold mb-4">ONCA is ready.</h1>
                        <p className="text-gray-500 text-lg mb-10">I'll get smarter as you use me. Your financial operating system is configured.</p>

                        <button onClick={nextStep} className="w-full bg-gray-900 text-white font-bold py-4 rounded-full flex items-center justify-center gap-2 group hover:shadow-xl transition-all">
                            Go to Dashboard
                            <span className="material-icons-round group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </button>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="w-full h-full flex flex-col bg-onca-green/5 relative overflow-hidden">
            {/* Dynamic Background */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-400/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <header className="w-full px-12 py-8 flex justify-between items-center z-20">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg">
                        <span className="material-icons-round">schema</span>
                    </div>
                    <span className="font-bold text-xl tracking-tight text-gray-900">ONCA SMB</span>
                </div>
                <button className="text-gray-500 font-medium hover:text-primary transition-colors">Help</button>
            </header>

            <div className="flex-1 flex items-center justify-center p-12 z-10">
                <div className="w-full max-w-4xl bg-white/80 backdrop-blur-3xl rounded-[3rem] p-12 shadow-soft border border-white/50 flex flex-col items-center overflow-hidden">
                    {renderStep()}
                </div>
            </div>

            <footer className="w-full py-8 text-center text-gray-400 text-xs">
                © 2024 ONCA SMB Inc. • Secure Connection
            </footer>
        </div>
    );
};

export default Onboarding;
