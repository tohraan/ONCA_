
import React, { useState } from 'react';
import InitialDashboard from './views/InitialDashboard';
import Onboarding from './views/Onboarding';
import FullPortal from './views/FullPortal';
import { AppView } from './types';

const App: React.FC = () => {
    const [currentView, setCurrentView] = useState<AppView>('DASHBOARD');

    const handleInitialDashboardComplete = () => {
        setCurrentView('ONBOARDING');
    };

    const handleOnboardingComplete = () => {
        setCurrentView('PORTAL');
    };

    return (
        <div className="w-full h-screen bg-beige-100 flex items-center justify-center">
            <div className="w-full h-full bg-white shadow-2xl overflow-hidden relative flex">
                {currentView === 'DASHBOARD' && (
                    <InitialDashboard onTransition={handleInitialDashboardComplete} />
                )}

                {currentView === 'ONBOARDING' && (
                    <Onboarding onComplete={handleOnboardingComplete} />
                )}

                {currentView === 'PORTAL' && (
                    <FullPortal />
                )}
            </div>
        </div>
    );
};

export default App;
