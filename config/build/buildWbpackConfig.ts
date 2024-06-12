import webpack from "webpack";

import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildPlugins } from "./buildPlugins";
import { BuildOptions } from "./types/config";

export const BuildWebpackConfig = (
  options: BuildOptions
): webpack.Configuration => {
  const { mode, paths } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
    },
    devtool: "inline-source-map",
    module: buildLoaders(),
    resolve: buildResolvers(),
    plugins: buildPlugins(paths),
  };
};
