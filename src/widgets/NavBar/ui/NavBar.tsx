import * as classes from "./NavBar.module.scss";
import { classNames } from "@/shared/lib/className";
import { AppLink } from "@/shared/ui/AppLink";
import { useTranslation } from "react-i18next";

interface NavBarProps {
  className?: string;
}

const NavBar = ({ className = "" }: NavBarProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(classes.NavBar, {}, [className])}>
      <div className={classes.links}>
        <AppLink to={`/`}> {t("main_page")}</AppLink>
        <AppLink to={`/about`}>{t("about_page")}</AppLink>
      </div>
    </div>
  );
};

export default NavBar;
