import { Link, LinkProps } from "react-router-dom"
import * as cls from "./AppLink.module.scss"
import { FC } from "react"
import { classNames } from "@/shared/lib/className"
import { ValueOf } from "type-fest"

export const THEMES = {
	PRIMARY: "primary",
	SECONDARY: "secondary",
} as const

type Theme = ValueOf<typeof THEMES>

interface AppLinkProps extends LinkProps {
	className?: string
	theme?: Theme
}

export const AppLink: FC<AppLinkProps> = props => {
	const {
		className = "",
		to,
		children,
		theme = THEMES.PRIMARY,
		...otherProps
	} = props

	return (
		<Link
			to={to}
			className={classNames(cls.appLink, {}, [className, cls[theme]])}
			{...otherProps}
		>
			{children}
		</Link>
	)
}
