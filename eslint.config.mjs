import globals from "globals"
import pluginJs from "@eslint/js"
import tseslint from "typescript-eslint"
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js"
import { fixupConfigRules } from "@eslint/compat"
import stylisticTs from "@stylistic/eslint-plugin-ts"
import stylisticJsx from "@stylistic/eslint-plugin-jsx"
import i18next from "eslint-plugin-i18next"

export default [
	{ files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
	{ languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	...fixupConfigRules(pluginReactConfig),
	{
		plugins: {
			"@stylistic/ts": stylisticTs,
			"@stylistic/jsx": stylisticJsx,
			"i18next": i18next,
		},

		rules: {
			"react/react-in-jsx-scope": "off",
			"react/jsx-uses-react": "off",
			"@typescript-eslint/no-unused-vars": [
				"error",
				{
					args: "all",
					argsIgnorePattern: "^_",
					caughtErrors: "all",
					caughtErrorsIgnorePattern: "^_",
					destructuredArrayIgnorePattern: "^_",
					varsIgnorePattern: "^_",
					ignoreRestSiblings: true,
				},
			],
		},
	},
]
