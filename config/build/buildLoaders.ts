import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  // Лоадеры нужно выносить в переменные,
  // потому что важен порядок их вызова.
  const typeScriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

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
  };

  return [typeScriptLoader, sassLoader];
}
