import { createContext } from "react"
import { ValueOf } from "type-fest"

const Theme = {
	BASIC: "basic",
	DARK: "dark",
} as const

export type ThemesType = ValueOf<typeof Theme>

export interface ThemeContextProps {
	theme?: ThemesType
	setTheme?: (theme: ThemesType) => void
}

const ThemeContext = createContext<ThemeContextProps>({})

const LOCAL_STORAGE_THEME_KEY = "theme"

export { ThemeContext, LOCAL_STORAGE_THEME_KEY, Theme }
