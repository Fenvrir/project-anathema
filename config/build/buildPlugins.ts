import webpack from "webpack"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import type { WebpackPluginInstance } from "webpack"
import HtmlWebpackPlugin from "html-webpack-plugin"
import { BuildOptions } from "./types/config"
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin"

export const buildPlugins = ({
	paths,
	isDev,
}: BuildOptions): WebpackPluginInstance[] => {
	const plugins = [
		new HtmlWebpackPlugin({
			template: paths.html,
		}),
		new webpack.ProgressPlugin(),
		new webpack.DefinePlugin({
			__IS_DEV__: isDev,
		}),

		new MiniCssExtractPlugin({
			filename: "css/[name].[contenthash:8].css",
			chunkFilename: "css/[name].[contenthash:8].css",
		}),
	]

	// Если сборка для девелопа, тогда у нас должна быть горячая замена кода.
	// Следовательно используем плагины для этого.
	//
	// Вообще devserver выдает warning:
	//! [webpack-dev-server] "hot: true" automatically applies HMR plugin, you don't have to add it manually to your webpack configuration.
	// Так что возможно этот код и не нужен уже.
	if (isDev) {
		plugins.push(
			new webpack.HotModuleReplacementPlugin(),
			new ReactRefreshWebpackPlugin(),
		)
	}

	return plugins
}
