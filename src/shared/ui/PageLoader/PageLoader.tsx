import { classNames } from "@/shared/lib/classNames/className"
import { Loader } from "@/shared/ui/Loader/Loader"
import cls from "./PageLoader.module.scss"

interface PageLoaderProps {
	className?: string
}

export const PageLoader = ({ className }: PageLoaderProps) => (
	<div className={classNames(cls["page-loader"], {}, [className])}>
		<Loader />
	</div>
)
