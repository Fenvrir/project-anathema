import webpack from "webpack"
import { BuildWebpackConfig } from "./config/build/buildWbpackConfig"
import { BuildMode, BuildPaths, EnvTypes } from "./config/build/types/config"
import path from "path"

export default (env: EnvTypes) => {
	const paths: BuildPaths = {
		entry: path.resolve(__dirname, "src", "index.tsx"),
		build: path.resolve(__dirname, "dist"),
		html: path.resolve(__dirname, "public", "index.html"),
		src: path.resolve(__dirname, "src"),
	}

	const mode: BuildMode = env.mode || "development"
	const port = env.port || 3000

	const isDev = mode === "development"

	const config: webpack.Configuration = BuildWebpackConfig({
		mode,
		paths,
		isDev,
		port,
	})

	return config
}
