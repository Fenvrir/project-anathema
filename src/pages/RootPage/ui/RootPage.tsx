import * as classes from "./RootPage.module.scss"
import { Outlet } from "react-router-dom"
import { NavBar } from "@/widgets/Navbar"
import { SideBar } from "@/widgets/Sidebar"
import { Suspense } from "react"

function RootPage() {
	return (
		<div className={classes.rootContainer}>
			<Suspense fallback='Loading'>
				<NavBar />
				<div>some text</div>
				<div className={classes.detail}>
					<SideBar />
					<Outlet />
				</div>
			</Suspense>
		</div>
	)
}

export { RootPage }
