import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"
import { Button } from "./Button"
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator"

const meta = {
	title: "shared/Button",
	component: Button,
	parameters: {
		layout: "centered",
	},

	argTypes: {
		children: {
			options: ["Normal", "Bold", "Italic"],
			mapping: {
				Normal: <span>Normal</span>,
				Bold: <b>Bold</b>,
				Italic: <i>Italic</i>,
			},
		},
	},
	// decorators: [
	// 	Story => (
	// 		<ThemeDecorator theme="dark">
	// 			<Story />
	// 		</ThemeDecorator>
	// 	),
	// ],

	args: { onClick: fn() },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		children: "Normal",
	},
}

export const Clear: Story = {
	args: {
		theme: "clear",
		children: "Italic",
	},
}

export const WithPaddingsAndBasicTheme: Story = {
	args: {
		padding: 20,
		children: "Bold",
	},
	decorators:[
		Story => (
			<ThemeDecorator theme="basic">
				<Story />
			</ThemeDecorator>
		),
	]
}

export const WithPaddingsAndDarkTheme: Story = {
	args: {
		padding: 20,
		children: "Bold",
	},
	decorators:[
		Story => (
			<ThemeDecorator theme="dark">
				<Story />
			</ThemeDecorator>
		),
	]
}

