import { createContext } from "react";
import { ValueOf } from "type-fest";

export const Theme = {
  BASIC: "basic",
  DARK: "dark",
} as const;

export type ThemesType = ValueOf<typeof Theme>;

export interface ThemeContextProps {
  theme?: ThemesType;
  setTheme?: (theme: ThemesType) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = "theme";
