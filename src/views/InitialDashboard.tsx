
import React, { useEffect, useState } from 'react';

interface InitialDashboardProps {
    onTransition: () => void;
}

const InitialDashboard: React.FC<InitialDashboardProps> = ({ onTransition }) => {
    const [progress, setProgress] = useState(0);
    const [statusText, setStatusText] = useState('Initializing core...');

    useEffect(() => {
        const statuses = [
            'Synchronizing ledgers...',
            'Mapping accounts...',
            'Verifying identity...',
            'Preparing your workspace...',
            'Ready!'
        ];

        const timer = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                const next = prev + (Math.random() * 4);

                // Update status text based on progress
                const statusIdx = Math.min(Math.floor((next / 100) * statuses.length), statuses.length - 1);
                setStatusText(statuses[statusIdx]);

                return Math.min(next, 100);
            });
        }, 100);

        const transitionTimer = setTimeout(() => {
            onTransition();
        }, 4500);

        return () => {
            clearInterval(timer);
            clearTimeout(transitionTimer);
        };
    }, [onTransition]);

    return (
        <div className="w-full h-full flex flex-col p-12 overflow-hidden relative bg-white">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.05),transparent)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.05),transparent)] pointer-events-none" />

            <div className="flex-1 flex flex-col justify-center items-center max-w-xl mx-auto w-full text-center">
                <div className="mb-12 animate-in fade-in zoom-in duration-1000">
                    <div className="relative inline-block">
                        <div className="w-32 h-32 bg-beige-50 rounded-full flex items-center justify-center mb-8 relative z-10 p-6">
                            <img src="/onca-logo.png" alt="ONCA" className="w-full h-full object-contain animate-pulse" />
                        </div>
                        <div className="absolute inset-0 bg-primary/10 rounded-full blur-2xl animate-ping opacity-20" />
                    </div>
                    <h1 className="text-5xl font-extrabold mb-4 tracking-tight text-gray-900 leading-tight">Syncing your <br /><span className="text-primary underline decoration-primary/20 underline-offset-8">Financial OS</span></h1>
                    <p className="text-gray-400 text-lg">We're building your real-time dashboard from connected data points.</p>
                </div>

                <div className="w-full space-y-4">
                    <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden shadow-inner border border-gray-50">
                        <div
                            className="h-full bg-gradient-to-r from-primary to-emerald-300 transition-all duration-300 ease-out"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                    <div className="flex justify-between items-center text-sm font-bold px-1">
                        <span className="text-primary flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" />
                            {statusText}
                        </span>
                        <span className="text-gray-400">{Math.floor(progress)}%</span>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-[2rem] shadow-2xl animate-in slide-in-from-bottom-8 duration-700">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-extrabold tracking-wide uppercase">AI Engine Active</span>
            </div>
        </div>
    );
};

export default InitialDashboard;
