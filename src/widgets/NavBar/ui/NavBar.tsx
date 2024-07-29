import { classNames } from "@/shared/lib/classNames/className"
import { AppLink } from "@/shared/ui/AppLink"
import { useTranslation } from "react-i18next"

import classes from "./NavBar.module.scss"

interface NavBarProps {
	className?: string
}

const NavBar = ({ className = "" }: NavBarProps) => {
	const { t } = useTranslation()

	return (
		<div className={classNames(classes.navbar, {}, [className])}>
			<div className={classes.links}>
				<AppLink to={`/`}> {t("main_page")}</AppLink>
				<AppLink to={`/about`}>{t("about_page")}</AppLink>
			</div>
		</div>
	)
}

export default NavBar
