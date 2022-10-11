import { classNames } from "shared/lib/classNames/classNames";
import { useTheme, Theme } from "app/providers/ThemeProvider";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import LightIcon from "shared/assets/icons/theme-light.svg";

import { Button, ButtonTheme } from "shared/ui/Button/Button";
import cls from "./ThemeSwitcher.module.scss";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      type="button"
      theme={ButtonTheme.CLEAR}
      onClick={toggleTheme}
      className={classNames(cls.themeswitcher, {}, [className])}
    >
      {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
    </Button>
  );
};
