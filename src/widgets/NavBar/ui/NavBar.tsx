import * as classes from "./NavBar.module.scss";
import { classNames } from "@/shared/lib/className";
import { AppLink } from "@/shared";
import { Outlet } from "react-router-dom";

interface NavBarProps {
  className?: string;
}

const NavBar = ({ className = "" }: NavBarProps) => {
  return (
    <div className={classNames(classes.NavBar, {}, [className])}>
      <div className={classes.links}>
        <AppLink theme="secondary" to={`/about`}>
          About page
        </AppLink>
        <AppLink to={`/`}>Main page</AppLink>
      <Outlet />
      </div>
    </div>
  );
};

export default NavBar;
