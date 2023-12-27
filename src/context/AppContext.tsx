import React, { createContext, useState } from 'react';

interface AppState {
    theme: string;
    setTheme: (theme: string) => void;
}

export const AppContext = createContext<AppState | undefined>(undefined);

const AppProvider: React.FC = () => {
    const [theme, setTheme] = useState('light');

    return (
        <AppContext.Provider value={{ theme, setTheme }}>
            {"name"}
        </AppContext.Provider>
    );
};

export default AppProvider;