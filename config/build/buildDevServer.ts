import { Configuration } from "webpack-dev-server";
import { BuildOptions } from "./types/config";

export const buildDevServer = ({ port }: BuildOptions): Configuration => {
  return {
    port: port,
    open: true,
    // Нужно чтобы исправить ошибку Cannot GET,
    // после подключения react-router-dom
    historyApiFallback: true,
  };
};
