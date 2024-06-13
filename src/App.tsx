import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RoutesLinks from "./Routes/RoutesLinks";

const router = createBrowserRouter([
  {
    path: "/",
    element: RoutesLinks(),
    children: [
      {
        path: "/about-page",
        async lazy() {
          const AboutPage = await import("./pages/about-page/AboutPage")
          return {Component: AboutPage.default}
        }
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
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

export default App;
