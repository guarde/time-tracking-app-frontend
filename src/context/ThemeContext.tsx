import { createContext, useContext, useState } from 'react';

interface ThemeContextValue {
    dark: boolean;
    toggle: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [dark, setDark] = useState(true);

    return <ThemeContext.Provider value={{ dark, toggle: () => setDark(dark => !dark) }}>
        {children}
    </ThemeContext.Provider>
}

export function useTheme(): ThemeContextValue {
    const ctx = useContext(ThemeContext);
    if(!ctx) throw new Error("useTheme must be used inside a <ThemeProvider>");
    return ctx;
}