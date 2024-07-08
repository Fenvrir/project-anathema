import { useContext } from "react"
import {
	LOCAL_STORAGE_THEME_KEY,
	Theme,
	ThemeContext,
	ThemesType,
} from "./ThemeContext"

interface UseThemeResalt {
	theme: ThemesType
	toggleTheme: () => void
}

export function useTheme(): UseThemeResalt {
	const { theme, setTheme } = useContext(ThemeContext)

	const toggleTheme = () => {
		const newTheme = theme === Theme.BASIC ? Theme.DARK : Theme.BASIC

		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
		setTheme(newTheme)
	}

	return { theme, toggleTheme }
}
