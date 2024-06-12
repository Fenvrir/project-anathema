import { BuildPaths } from "./types/config";
import webpack from "webpack";
import type { WebpackPluginInstance } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

export const buildPlugins = (paths: BuildPaths): WebpackPluginInstance[] => {
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
  ];
};
