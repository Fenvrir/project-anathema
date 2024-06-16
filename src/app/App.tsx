import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBarOld from "@/widgets/NavBarOld";
import { NavBar } from "@/widgets/NavBar";
import { useTheme } from "@/app/providers/ThemeProvider";
import { classNames } from "@/shared/lib/className";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      {
        path: "/about-page",
        async lazy() {
          const component = await import("@/pages/AboutPage/index");
          return { Component: component.AboutPage };
        },
      },
      {
        path: "/main-page",
        async lazy() {
          const component = await import("@/pages/MainPage/index");
          return { Component: component.MainPage };
        },
      },
    ],
  },
]);

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <React.StrictMode>
      <div className={classNames("app", {}, [theme])}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <RouterProvider router={router} />
      </div>
    </React.StrictMode>
  );
};

export default App;
