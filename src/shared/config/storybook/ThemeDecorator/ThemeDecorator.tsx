import { ThemesType } from "@/app/providers/ThemeProvider/lib/ThemeContext"
import { FC } from "react"

interface Props {
	children: React.ReactNode
	theme: ThemesType
}

export const ThemeDecorator: FC<Props> = ({ theme, children }) => {
	return (
		<div style={{ padding: "30px" }} className={`app ${theme}`}>
			{children}
		</div>
	)
}
