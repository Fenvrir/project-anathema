import { classNames } from "@/shared/lib/className"
import * as cls from "./Button.module.scss"
import { ButtonHTMLAttributes, FC } from "react"
import { ValueOf } from "type-fest"

const ThemeButton = {
	CLEAR: "clear",
} as const

type ThemeButtonType = ValueOf<typeof ThemeButton>

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	theme?: ThemeButtonType
	padding?: number
	margin?: number
}

const Button: FC<ButtonProps> = props => {
	const { className, children, theme, padding, margin, ...otherProps } = props

	return (
		<button
			style={{ padding, margin }}
			className={classNames(cls.button, {}, [className, cls[theme]])}
			{...otherProps}
		>
			{children}
		</button>
	)
}

export { ThemeButton, Button }
