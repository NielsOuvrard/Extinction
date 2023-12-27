import React, { createContext, useContext, useState } from 'react';

interface AuthContextType {
    user: { username: string } | null;
    login: (username: string, password: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: React.FC = () => {
    const [user, setUser] = useState<{ username: string } | null>(null);

    const login = (username: string, password: string) => {
        // Perform your login logic here
        setUser({ username });
    };

    const logout = () => {
        // Perform your logout logic here
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {"name"}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}