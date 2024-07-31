import { StyleDecorator } from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator"
import type { Preview } from "@storybook/react"

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	decorators: [Story => Story(StyleDecorator)],
}

export default preview
