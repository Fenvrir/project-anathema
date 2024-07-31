import { test, expect } from "@playwright/test"

test("home page visual test", async ({ page }) => {
	await page.goto(" http://localhost:3000/")
	await expect(page).toHaveScreenshot({
		fullPage: true,
	})
})
