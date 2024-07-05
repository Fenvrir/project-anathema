import { classNames } from "@/shared/lib/className";
import * as cls from "./ThemeSwitcher.module.scss";
import { useTheme } from "@/app/providers/ThemeProvider";
import DarkIcon from "@/shared/assets/icons/theme-dark.svg";
import LightIcon from "@/shared/assets/icons/theme-light.svg";
import { Theme } from "@/app/providers/ThemeProvider";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className={classNames("", {}, [className])}>
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </button>
  );
};
