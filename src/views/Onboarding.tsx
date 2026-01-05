
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
                    <div className="flex flex-col items-center text-center max-w-3xl w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4 sm:mb-6">
                            <span className="material-icons-round text-sm">smart_toy</span>
                            AI Personalization
                        </div>
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3">What best describes you?</h1>
                        <p className="text-beige-600 text-sm sm:text-base lg:text-lg mb-6 sm:mb-10 px-4">We'll tailor the dashboard complexity to match your role.</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full mb-6 sm:mb-10">
                            {[
                                { id: 'founder', title: 'Founder / Owner', icon: 'diamond', color: 'text-primary', bg: 'bg-primary/10', desc: 'I need high-level insights, runway forecasts, and key metrics.' },
                                { id: 'finance', title: 'Finance Manager', icon: 'bar_chart', color: 'text-primary', bg: 'bg-beige-200', desc: 'I need deep dives, reconciliation tools, and detailed reports.' },
                                { id: 'ops', title: 'Operations / Admin', icon: 'settings_suggest', color: 'text-primary', bg: 'bg-beige-300', desc: 'I manage day-to-day expenses, invoices, and payroll.' },
                                { id: 'explore', title: 'Just Exploring', icon: 'explore', color: 'text-primary', bg: 'bg-beige-200', desc: 'Show me a bit of everything. I want to see capabilities.' },
                            ].map(role => (
                                <button
                                    key={role.id}
                                    onClick={nextStep}
                                    className="group p-4 sm:p-6 text-left bg-white border-2 border-beige-200 hover:border-primary rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-all"
                                >
                                    <div className={`w-10 h-10 sm:w-12 sm:h-12 ${role.bg} ${role.color} rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 transition-transform group-hover:scale-110`}>
                                        <span className="material-icons-round text-xl sm:text-2xl">{role.icon}</span>
                                    </div>
                                    <h3 className="font-bold text-base sm:text-lg mb-1">{role.title}</h3>
                                    <p className="text-xs sm:text-sm text-beige-600">{role.desc}</p>
                                </button>
                            ))}
                        </div>
                    </div>
                );

            case 2: // Business Context
                return (
                    <div className="flex flex-col max-w-2xl w-full animate-in fade-in slide-in-from-right-4 duration-500">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 tracking-tight">Business Context</h1>
                        <p className="text-sm sm:text-base lg:text-lg text-beige-600 mb-6 sm:mb-10">ONCA adapts its intelligence based on your business.</p>

                        <form className="space-y-4 sm:space-y-6" onSubmit={(e) => { e.preventDefault(); nextStep(); }}>
                            <div className="space-y-2">
                                <label className="block text-xs sm:text-sm font-semibold">Business Name</label>
                                <div className="relative">
                                    <span className="material-icons-round absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-beige-400 text-lg sm:text-xl">storefront</span>
                                    <input className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-white border border-beige-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-sm sm:text-base" placeholder="e.g. Acme Corp" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                <div className="space-y-2">
                                    <label className="block text-xs sm:text-sm font-semibold">Industry</label>
                                    <select className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-beige-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-primary outline-none appearance-none text-sm sm:text-base">
                                        <option>Tech & SaaS</option>
                                        <option>Retail</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-xs sm:text-sm font-semibold">Country</label>
                                    <select className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-beige-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-primary outline-none text-sm sm:text-base">
                                        <option>United States</option>
                                        <option>India</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="block text-xs sm:text-sm font-semibold">Business Size</label>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                                    {['Solo', '2-10', '11-50', '50+'].map(size => (
                                        <button key={size} type="button" onClick={nextStep} className="py-2.5 sm:py-3 border border-beige-200 rounded-lg sm:rounded-xl hover:bg-primary/5 hover:border-primary transition-all font-medium text-sm sm:text-base">
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
                    <div className="flex flex-col items-center text-center max-w-3xl w-full animate-in fade-in slide-in-from-right-4 duration-500">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 tracking-tight">How can ONCA help you today?</h1>
                        <p className="text-beige-600 text-sm sm:text-base lg:text-lg mb-6 sm:mb-12 px-4">Select your focus areas to tailor your dashboard.</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full">
                            {[
                                { id: 'cf', title: 'Cash Flow Tracking', icon: 'payments', desc: 'Monitor real-time inflows and outflows.' },
                                { id: 'gst', title: 'GST / Compliance', icon: 'verified', desc: 'Automate tax calculations and filing.' },
                                { id: 'exp', title: 'Expense Control', icon: 'pie_chart', desc: 'Identify spending leaks and optimize.' },
                                { id: 'ai', title: 'AI Insights', icon: 'psychology', desc: 'Proactive suggestions for growth.' },
                            ].map(intent => (
                                <button
                                    key={intent.id}
                                    onClick={nextStep}
                                    className="p-4 sm:p-6 text-left bg-white border-2 border-transparent hover:border-primary rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-all flex items-start gap-3 sm:gap-4"
                                >
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 text-primary rounded-lg sm:rounded-xl flex items-center justify-center shrink-0">
                                        <span className="material-icons-round text-xl sm:text-2xl">{intent.icon}</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-base sm:text-lg">{intent.title}</h3>
                                        <p className="text-xs sm:text-sm text-beige-600">{intent.desc}</p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                );

            case 4: // Data Connection
                return (
                    <div className="flex flex-col items-center text-center max-w-3xl w-full animate-in fade-in slide-in-from-right-4 duration-500">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 tracking-tight px-4">Connect data to unlock real insights.</h1>
                        <p className="text-beige-600 text-sm sm:text-base lg:text-lg mb-6 sm:mb-12 px-4">Or skip for now — ONCA works without it.</p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 w-full mb-6 sm:mb-12">
                            {[
                                { id: 'bank', label: 'Bank Account', icon: 'account_balance' },
                                { id: 'acc', label: 'Accounting Tool', icon: 'calculate' },
                                { id: 'upload', label: 'Upload CSV', icon: 'upload_file' },
                            ].map(conn => (
                                <button
                                    key={conn.id}
                                    onClick={nextStep}
                                    className="flex flex-col items-center justify-center p-6 sm:p-8 bg-beige-50 border-2 border-beige-200 hover:border-primary rounded-2xl sm:rounded-3xl transition-all gap-3 sm:gap-4"
                                >
                                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full shadow-sm flex items-center justify-center text-primary">
                                        <span className="material-icons-round text-2xl sm:text-3xl">{conn.icon}</span>
                                    </div>
                                    <span className="font-bold text-beige-900 text-sm sm:text-base">{conn.label}</span>
                                </button>
                            ))}
                        </div>

                        <button onClick={nextStep} className="text-beige-600 hover:text-beige-900 font-medium underline underline-offset-4 transition-colors text-sm sm:text-base">Skip for now</button>
                    </div>
                );

            case 5: // AI Win
                return (
                    <div className="flex flex-col items-center text-center max-w-2xl w-full animate-in zoom-in duration-500">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-glow mb-4 sm:mb-6 text-white animate-bounce">
                            <span className="material-icons-round text-3xl sm:text-4xl">smart_toy</span>
                        </div>
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 px-4">Your First AI Win</h1>
                        <p className="text-beige-600 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 px-4">While setting up, I found a saving opportunity for your business.</p>

                        <div className="w-full bg-white border border-beige-200 p-4 sm:p-8 rounded-2xl sm:rounded-3xl text-left shadow-soft relative overflow-hidden mb-6 sm:mb-8">
                            <div className="absolute right-0 top-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl -mr-12 -mt-12" />
                            <div className="flex items-start gap-3 sm:gap-4">
                                <div className="p-2 sm:p-3 bg-primary/10 rounded-full text-primary shrink-0">
                                    <span className="material-icons-round text-lg sm:text-xl">auto_awesome</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">Cost Saving Opportunity Detected</h3>
                                    <p className="text-beige-600 leading-relaxed text-xs sm:text-sm lg:text-base">Your subscription to <span className="font-bold text-beige-900 underline decoration-primary decoration-2">AWS Infrastructure</span> is currently 15% higher than peers. Switching to annual billing could save you <strong>$450/mo</strong>.</p>
                                </div>
                            </div>
                        </div>

                        <button onClick={nextStep} className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-lg transition-all transform hover:-translate-y-1 text-sm sm:text-base">
                            Show Me Details
                        </button>
                    </div>
                );

            case 6: // Final
                return (
                    <div className="flex flex-col items-center text-center max-w-md w-full animate-in fade-in scale-95 duration-500">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-primary rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-glow mb-6 sm:mb-8 text-white">
                            <span className="material-icons-round text-4xl sm:text-5xl">check_circle</span>
                        </div>
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 px-4">ONCA is ready.</h1>
                        <p className="text-beige-600 text-sm sm:text-base lg:text-lg mb-6 sm:mb-10 px-4">I'll get smarter as you use me. Your financial operating system is configured.</p>

                        <button onClick={nextStep} className="w-full bg-primary text-white font-bold py-3 sm:py-4 rounded-full flex items-center justify-center gap-2 group hover:shadow-xl transition-all text-sm sm:text-base">
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
        <div className="w-full h-full flex flex-col bg-beige-50 relative overflow-hidden">
            {/* Dynamic Background */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-beige-200/30 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            {/* Instagram-style Progress Bar */}
            <div className="w-full px-12 pt-6 pb-2 z-30">
                <div className="flex gap-2 max-w-4xl mx-auto">
                    {[1, 2, 3, 4, 5, 6].map((s) => (
                        <button
                            key={s}
                            onClick={() => setStep(s)}
                            className="flex-1 h-1 bg-beige-200 rounded-full overflow-hidden relative group"
                        >
                            <div
                                className={`h-full transition-all duration-300 ${s < step ? 'bg-primary w-full' :
                                    s === step ? 'bg-primary w-full animate-pulse' :
                                        'bg-beige-200 w-0'
                                    }`}
                            />
                            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                    ))}
                </div>
                <div className="text-center mt-2">
                    <span className="text-sm font-bold text-primary">{step}/6</span>
                </div>
            </div>

            <header className="w-full px-4 sm:px-8 lg:px-12 py-3 sm:py-4 flex justify-between items-center z-20">
                <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                        <img src="/onca-logo.png" alt="ONCA" className="w-full h-full object-contain" />
                    </div>
                    <span className="font-bold text-lg sm:text-xl tracking-tight text-beige-900">ONCA</span>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                    {step < 6 && (
                        <button
                            onClick={nextStep}
                            className="bg-primary hover:bg-primary-dark text-white font-semibold px-4 sm:px-6 py-2 sm:py-2.5 rounded-full transition-all shadow-sm hover:shadow-md text-sm sm:text-base flex items-center gap-1.5"
                        >
                            Next
                            <span className="material-icons-round text-sm sm:text-base">arrow_forward</span>
                        </button>
                    )}
                    <button className="text-beige-600 font-medium hover:text-primary transition-colors text-sm sm:text-base">Help</button>
                </div>
            </header>

            <div className="flex-1 flex items-center justify-center p-4 sm:p-8 lg:p-12 z-10">
                <div className="w-full max-w-4xl bg-white/80 backdrop-blur-3xl rounded-3xl sm:rounded-[3rem] p-6 sm:p-10 lg:p-12 shadow-soft border border-white/50 flex flex-col items-center overflow-hidden">
                    {renderStep()}
                </div>
            </div>

            <footer className="w-full py-8 text-center text-beige-500 text-xs">
                © 2024 ONCA Inc. • Secure Connection
            </footer>
        </div>
    );
};

export default Onboarding;
