import { Theme, ThemeContext, LOCAL_STORAGE_THEME_KEY } from "./ThemeContext";
import { useContext } from "react";

interface UseThemeResult {
  theme: Theme;
  toggleTheme: () => void;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;

    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    setTheme(newTheme);
  };

  return {
    theme,
    toggleTheme,
  };
}