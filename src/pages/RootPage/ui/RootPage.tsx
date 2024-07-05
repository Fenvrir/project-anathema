import * as classes from "./RootPage.module.scss";
import { Outlet } from "react-router-dom";
import { NavBar } from "@/widgets/Navbar";
import { SideBar } from "@/widgets/Sidebar";

function RootPage() {
  return (
    <div className={classes.RootContainer}>
      <NavBar />

      <div className={classes.detail}>
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
}

export { RootPage };
