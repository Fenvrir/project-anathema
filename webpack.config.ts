import webpack from "webpack";
import { BuildWebpackConfig } from "./config/build/buildWbpackConfig";
import { BuildMode, BuildPaths } from "./config/build/types/config";
import path from "path";

const paths: BuildPaths = {
  entry: path.resolve(__dirname, "src", "index.ts"),
  build: path.resolve(__dirname, "dist"),
  html: path.resolve(__dirname, "public", "index.html"),
};

const mode: BuildMode = "development";
const isDev = mode === "development" ?? true;


const config: webpack.Configuration = BuildWebpackConfig({
  mode: "development",
  paths,
  isDev,
});


export default config;
