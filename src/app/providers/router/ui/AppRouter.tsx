import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { routeConfig } from "../config/routeConfig";
import { RootPage } from "@/pages/RootPage";
import { ErrorPage } from "@/pages/ErrorPage";
import { Suspense } from "react";

// Используя оператор спред и Object.values мы получаем только значения объекта с роутами.
export const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootPage />} errorElement={<ErrorPage />}>
      {Object.values(routeConfig).map(({ element, path }) => (
        <Route
          key={path}
          path={path}
          element={
            <Suspense fallback={<div>Loading...</div>}>{element}</Suspense>
          }
        />
      ))}
    </Route>
  )
);
