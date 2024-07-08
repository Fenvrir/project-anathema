import MiniCssExtractPlugin from "mini-css-extract-plugin"
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
		issuer: /\.[jt]sx?$/,
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

	const sassLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			// Creates `style` nodes from JS strings  "style-loader"
			// В зависимости от типа сборки мы используем разные лоадеры стилей.
			// TODO: Возможно стоит отказаться от "style-loader"
			isDev ? "style-loader" : MiniCssExtractPlugin.loader,
			// Translates CSS into CommonJS
			{
				loader: "css-loader",
				options: {
					esModule: true,
					modules: {
						// Эта проверка даёт возможность использовать модульный подход в файлах,
						// которые включает в своё название ".module."
						// Для всех остальных файлов будет использоваться обычный подход.
						auto: (resPath: string) => Boolean(resPath.includes(".module.")),
						localIdentName: isDev
							? "[path][name]__[local]--[hash:base64:5]"
							: "[hash:base64:5]",
						namedExport: true,
					},
				},
			},
			// Compiles Sass to CSS
			"sass-loader",
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

	return [babelLoader, typeScriptLoader, sassLoader, svgLoader, fileLoader]
}
