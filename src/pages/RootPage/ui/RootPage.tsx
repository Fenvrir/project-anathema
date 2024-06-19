import { NavBar } from "@/widgets/NavBar";
import * as classes from "./RootPage.module.scss";
import { Outlet } from "react-router-dom";
import { AppLink } from "@/shared";

function RootPage() {
  return (
    <div className={classes.RootContainer}>
      <div className={classes.sidebar}>
        <h1>Sidebar</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div className={classes.searchSpinner} aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <AppLink to={`/about`} >About Page</AppLink>
            </li>
            <li>
              <AppLink to={`/`}>Main Page</AppLink>
            </li>
          </ul>
        </nav>
      </div>

      <div className={classes.detail}>
        <Outlet />
      </div>
    </div>
  );
}

export { RootPage };
