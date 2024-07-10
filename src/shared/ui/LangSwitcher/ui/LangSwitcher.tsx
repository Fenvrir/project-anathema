import { useTheme } from "@/app/providers/ThemeProvider"
import { Button } from "@/shared/ui/Button/Button"
import { useTranslation } from "react-i18next"

interface LangSwitcherProps {
	className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
	const { i18n } = useTranslation()

	const onLanguageToggle = () => {
		i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru")
	}

	return (
		<Button margin={5} onClick={onLanguageToggle}>
			Change language
		</Button>
	)
}
