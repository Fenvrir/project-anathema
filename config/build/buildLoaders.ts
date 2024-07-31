import { sassLoader } from "./loaders/css-loader"
import webpack from "webpack"
import { BuildOptions } from "./types/config"

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
	// Лоадеры нужно выносить в переменные,
	// потому что важен порядок их вызова.
	const typeScriptLoader = {
		test: /\.tsx?$/,
		use: "ts-loader",
		exclude: /node_modules/,
	}

	const svgLoader = {
		test: /\.svg$/i,
		use: ["@svgr/webpack"],
	}

	// В фалй-лоадер можно в будущем добавить шрифты.
	const fileLoader = {
		test: /\.(png|jpe?g|gif)$/i,
		use: [
			{
				loader: "file-loader",
			},
		],
	}

	const babelLoader = {
		test: /\.(?:js|ts|mjs|cjs|jsx|tsx)$/,
		exclude: /node_modules/,
		use: {
			loader: "babel-loader",
			options: {
				presets: [["@babel/preset-env", { targets: "defaults" }]],
				// Чтобы следующий плагин работал, нужно чтобы ключи были обернуты в ковычки.
				// Не знаю с чего это вдруг
				// prettier-ignore
				"plugins": [
					[
						"i18next-extract",
						{
							"locales": ["ru", "en"],
						},
					],
				],
			},
		},
	}

	return [babelLoader, typeScriptLoader, sassLoader(isDev), svgLoader, fileLoader]
}
