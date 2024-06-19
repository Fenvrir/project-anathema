import React from "react";
import {
  RouterProvider,
} from "react-router-dom";

import { useTheme } from "@/app/providers/ThemeProvider";
import { classNames } from "@/shared/lib/className";
import { AppRouter } from "./providers/router";


const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <React.StrictMode>
      <div className={classNames("app", {}, [theme])}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <RouterProvider router={AppRouter} />
      </div>
    </React.StrictMode>
  );
};

export default App;
