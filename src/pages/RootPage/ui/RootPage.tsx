import classes from "./RootPage.module.scss"
import { Outlet } from "react-router-dom"
import { NavBar } from "@/widgets/Navbar"
import { Sidebar } from "@/widgets/Sidebar"
import { Suspense } from "react"
import { PageLoader } from "@/shared/ui/PageLoader/PageLoader"

function RootPage() {
	return (
		<div className={classes["root-container"]}>
			<Suspense fallback={<PageLoader />}>
				<NavBar />
				<div className={classes.detail}>
					<Sidebar />
					<Outlet />
				</div>
			</Suspense>
		</div>
	)
}

export { RootPage }
