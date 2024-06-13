import { Outlet, Link } from "react-router-dom";
import * as classes from "./Routes.module.scss";

const RoutesLinks = () => {
  return (
    <div className={classes.linksWrapper}>
      <Link to={`/about-page`}>About page</Link>
      <Link to={`/main-page`}>Main page</Link>

      <Outlet />
    </div>
  );
};

export default RoutesLinks;
