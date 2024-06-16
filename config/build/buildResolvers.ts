import { ResolveOptions } from "webpack"
import { BuildPaths } from "./types/config"

export function buildResolvers({ src }: BuildPaths): ResolveOptions {
	return {
		// Позволяет не указывать расширения при импорте.
		extensions: [".tsx", ".ts", ".js"],
		// Эти опции нужны для абсолютного пути ./src/*
		modules: [src, "node_modules"],
		// Элиас для абсолютного пути ./src/*
		alias: {
			"@": src,
		},
		preferAbsolute: true,
	}
}
