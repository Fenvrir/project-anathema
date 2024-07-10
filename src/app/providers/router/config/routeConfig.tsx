import { AboutPage } from "@/pages/AboutPage"
import { ErrorPage } from "@/pages/ErrorPage"
import { RouteObject } from "react-router-dom"
import { ValueOf } from "type-fest"

export const AppRoutes = {
	ABOUT: "about",
	ERROR: "error",
} as const

type AppRoutesType = ValueOf<typeof AppRoutes>

export const RoutePath: Record<AppRoutesType, string> = {
	[AppRoutes.ABOUT]: "/about",
	// Держать послденим
	[AppRoutes.ERROR]: "*",
}

// Формируем объект роутов, его можно заменить и на массив.
// При этом можно использовать синтаксис tsx, а не объектами прокидывать.
export const routeConfig: Record<AppRoutesType, RouteObject> = {
	[AppRoutes.ABOUT]: {
		path: RoutePath.about,
		element: <AboutPage />,
	},

	[AppRoutes.ERROR]: {
		path: RoutePath.error,
		element: <ErrorPage />,
	},
}
