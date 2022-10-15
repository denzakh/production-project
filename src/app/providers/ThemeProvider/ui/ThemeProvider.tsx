import { useState, useMemo, FC } from 'react';
import {
    Theme,
    ThemeContext,
    LOCAL_STORAGE_THEME_KEY,
} from '../lib/ThemeContext';

const ThemeProvider: FC = ({ children }) => {
    const local = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme;
    const defaultTheme = local || Theme.LIGHT;
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme],
    );

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
