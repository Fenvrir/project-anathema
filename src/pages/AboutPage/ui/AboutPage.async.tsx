import { lazy } from "react"

export const AboutPageAsync = lazy(
	() =>
		new Promise(resolve => {
			// @ts-expect-error Искуственно проверяю работу лэйзи.
			setTimeout(() => resolve(import("./AboutPage")), 1500)
		}),
)
