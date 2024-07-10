import webpack from "webpack"

import { buildLoaders } from "./buildLoaders"
import { buildResolvers } from "./buildResolvers"
import { buildPlugins } from "./buildPlugins"
import { BuildOptions } from "./types/config"
import { buildDevServer } from "./buildDevServer"

export const BuildWebpackConfig = (
	options: BuildOptions,
): webpack.Configuration => {
	const { mode, paths, isDev } = options

	return {
		//Указываем путь до __dirname == рабочая директория и участков путей (src и index.js).
		mode,
		entry: paths.entry,
		output: {
			filename: "[name].[contenthash].js",
			path: paths.build,
			// Очищаем build
			clean: true,
		},
		devtool: isDev ? "inline-source-map" : undefined,
		module: {
			rules: buildLoaders(options),
		},
		resolve: buildResolvers(paths),
		plugins: buildPlugins(options),
		devServer: isDev ? buildDevServer(options) : undefined,
	}
}
