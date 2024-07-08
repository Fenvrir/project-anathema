import { classNames } from "@/shared/lib/className"
import * as cls from "./SideBar.module.scss"
import { useState } from "react"
import { ThemeSwitcher } from "@/shared/ui/ThemeSwtitcher"
import { Button } from "@/shared/ui/Button/Button"
import { LangSwitcher } from "@/shared/ui/LangSwitcher"

interface SidebarProps {
	className?: string
}

export const SideBar = ({ className }: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false)

	const onToggle = () => {
		setCollapsed(prev => !prev)
	}

	return (
		<div
			className={classNames(cls.sideBar, { [cls.collapsed]: collapsed }, [
				className,
			])}
		>
			<Button margin={5} onClick={onToggle}>
				toggle
			</Button>
			<br />
			<LangSwitcher />

			<div className={cls.switchers}>
				<ThemeSwitcher />
			</div>
		</div>
	)
}
