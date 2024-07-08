import globals from "globals"
import pluginJs from "@eslint/js"
import tseslint from "typescript-eslint"
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js"
import stylisticTs from "@stylistic/eslint-plugin-ts"
import stylisticJsx from "@stylistic/eslint-plugin-jsx"

export default [
	{ files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
	{ languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	pluginReactConfig,
	{
		plugins: [
			{ "@stylistic/js": stylisticTs },
			{ "@stylistic/jsx": stylisticJsx },
		],

		rules: {
			"react/react-in-jsx-scope": "off",
			"react/jsx-uses-react": "off",

			//@stylistic/js/indent
			"@stylistic/js/indent": ["error", 2],
			"@stylistic/semi": "error",
			"@stylistic/jsx-indent": "error",
		},
	},
]
