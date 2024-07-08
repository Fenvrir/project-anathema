import { AboutPage } from "@/pages/AboutPage"
import { RouteObject } from "react-router-dom"
import { ValueOf } from "type-fest"

export const AppRoutes = {
	ABOUT: "about",
} as const

type AppRoutesType = ValueOf<typeof AppRoutes>

export const RoutePath: Record<AppRoutesType, string> = {
	[AppRoutes.ABOUT]: "/about",
}

// Формируем объект роутов, его можно заменить и на массив.
// При этом можно использовать синтаксис tsx, а не объектами прокидывать.
export const routeConfig: Record<AppRoutesType, RouteObject> = {
	[AppRoutes.ABOUT]: {
		path: RoutePath.about,
		element: <AboutPage />,
	},
}
