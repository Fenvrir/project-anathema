import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RoutesLinks from "./Routes/RoutesLinks";
import { useTheme } from "./theme/useTheme";

const router = createBrowserRouter([
  {
    path: "/",
    element: RoutesLinks(),
    children: [
      {
        path: "/about-page",
        async lazy() {
          const AboutPage = await import("./pages/about-page/AboutPage");
          return { Component: AboutPage.default };
        },
      },
      {
        path: "/main-page",
        async lazy() {
          const MainPage = await import("./pages/main-page/MainPage");
          return { Component: MainPage.default };
        },
      },
    ],
  },
]);

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <React.StrictMode>
      <div className={`app ${theme}`}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <RouterProvider router={router} />
      </div>
    </React.StrictMode>
  );
};

export default App;
