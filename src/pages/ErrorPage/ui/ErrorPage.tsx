import cls from "./ErrorPage.module.scss"
// import { useRouteError } from "react-router-dom"

export function ErrorPage() {
	// TODO: поправить тип
	// const error: any = useRouteError()
	// console.error(error)

	return (
		<div className={cls.error}>
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			{/* <p>
				<i>{error.statusText || error.message}</i>
			</p> */}
		</div>
	)
}
