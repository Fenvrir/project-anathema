import path from "path"
import webpack from "webpack"

import { BuildPaths } from "./../build/types/config"
import { sassLoader } from "../build/loaders/css-loader"

export default ({ config }: { config: webpack.Configuration }) => {
	const pathSrc: BuildPaths["src"] = path.resolve(__dirname, "..", "..", "src")

	if (config.resolve) {
		config.resolve.modules?.push("node_modules", pathSrc)
		config.resolve.extensions?.push(".ts", ".tsx")
		config.resolve.alias = {
			...config.resolve.alias,
			'@': path.resolve(pathSrc + "/"),
		  };
	}

	config.module?.rules?.push(sassLoader(true))

	return config
}
