import { test, expect } from "@playwright/test";

test("invalid login test", async ({ page }) => {
  await page.goto("https://www.orivet.com/");
  await page.locator(".w-10").click();
  await page.getByRole("link", { name: "Login" }).click();

  await page
    .getByRole("textbox", { name: "Email (Username)" })
    .fill("invalidUser");
  await page.getByRole("textbox", { name: "Password" }).fill("wrongPassword");

  await page.getByRole("button", { name: "Login" }).click();

  // Wait for error message
  const errorMessage = page.getByText(/invalid|incorrect|wrong|failed/i);
  await expect(errorMessage).toBeVisible();
});
