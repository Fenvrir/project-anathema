import { classNames } from "@/shared/lib/classNames/className"
import cls from "./SideBar.module.scss"
import { useState } from "react"
import { ThemeSwitcher } from "@/shared/ui/ThemeSwtitcher"
import { Button } from "@/shared/ui/Button/Button"
import { LangSwitcher } from "@/shared/ui/LangSwitcher"

interface SidebarProps {
	className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false)

	const onToggle = () => {
		setCollapsed(prev => !prev)
	}

	return (
		<div
			data-testid="sidebar"
			className={classNames(cls.sideBar, { [cls.collapsed]: collapsed }, [
				className,
			])}
		>
			<Button data-testid="sidebar-toggle" margin={5} onClick={onToggle}>
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
