import React, { useState } from 'react';
import FullPortal from './views/FullPortal';
import Onboarding from './views/Onboarding';
import InitialDashboard from './views/InitialDashboard';
import { SettingsProvider } from './contexts/SettingsContext';

type AppStage = 'LOADING' | 'ONBOARDING' | 'PORTAL';

const App: React.FC = () => {
    const [stage, setStage] = useState<AppStage>('LOADING');

    const handleLoadingComplete = () => {
        const isOnboarded = localStorage.getItem('onca_onboarded') === 'true';
        setStage(isOnboarded ? 'PORTAL' : 'ONBOARDING');
    };

    const handleOnboardingComplete = () => {
        localStorage.setItem('onca_onboarded', 'true');
        setStage('PORTAL');
    };

    const renderStage = () => {
        switch (stage) {
            case 'LOADING':
                return <InitialDashboard onTransition={handleLoadingComplete} />;
            case 'ONBOARDING':
                return <Onboarding onComplete={handleOnboardingComplete} />;
            case 'PORTAL':
                return <FullPortal />;
            default:
                return <InitialDashboard onTransition={handleLoadingComplete} />;
        }
    };

    return (
        <SettingsProvider>
            <div className="flex h-screen bg-beige-50 dark:bg-dark-bg font-sans text-beige-900 transition-colors duration-300">
                {renderStage()}
            </div>
        </SettingsProvider>
    );
};

export default App;
