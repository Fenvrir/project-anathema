import { classNames } from "./className"

describe("className", () => {
	test("С одним параметром", () => {
		expect(classNames("some_class")).toBe("some_class")
	})

	test("С двумя параметрами", () => {
		expect(classNames("some_class", { some_class_2: true })).toBe("some_class some_class_2")
	})

	test("С тремя параметрами", () => {
		expect(classNames("some_class", { some_class_2: true }, ["some_class_3"])).toBe(
			"some_class some_class_3 some_class_2",
		)
	})

	test("С тремя параметрами. Второй false.", () => {
		expect(classNames("some_class", { some_class_2: false }, ["some_class_3"])).toBe(
			"some_class some_class_3",
		)
	})

	test("С тремя параметрами. Второй false. Третий undefined", () => {
		expect(classNames("some_class", { some_class_2: false }, [undefined])).toBe("some_class")
	})

	test("С тремя параметрами. Второй и третий пустые.", () => {
		expect(classNames("some_class", {}, [])).toBe("some_class")
	})
})
