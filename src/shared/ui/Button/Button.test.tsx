import { render, screen } from "@testing-library/react"
import { Button, ThemeButton } from "./Button"

describe("Button", () => {
	test("Test render", () => {
		render(<Button padding={10}>TEST</Button>)
		expect(screen.getByText("TEST")).toBeInTheDocument()
	})

	test("Test clear theme", () => {
		render(<Button theme={ThemeButton.CLEAR}>TEST2</Button>)
        console.log(ThemeButton.CLEAR)
		expect(screen.getByText("TEST2")).toHaveClass("clear")
	})
})
