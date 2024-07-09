import { classNames } from "@/shared/lib/className"
import { Loader } from "@/shared/ui/Loader/Loader"
import * as cls from "./PageLoader.module.scss"

interface PageLoaderProps {
	className?: string
}

export const PageLoader = ({ className }: PageLoaderProps) => (
	<div className={classNames(cls.pageLoader, {}, [className])}>
		<Loader />
	</div>
)
