// Объявляем тип для [name].module.scss файлов.
declare module "*.module.scss" {
	interface IClassNames {
		[className: string]: string
	}

	const cls: IClassNames
	export = cls
}

declare module "*.png"
declare module "*.jpg"
declare module "*.jpeg"
declare module "*.svg" {
	import React from "react"

	export const ReactComponent: React.FunctionComponent<
		React.SVGProps<SVGSVGElement> & { title?: string }
	>

	const src: string
	export default src
}

declare const __IS_DEV__: boolean
