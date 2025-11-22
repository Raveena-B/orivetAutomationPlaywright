import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://www.orivet.com/");
  await page.locator(".w-10").click();
  await page.getByRole("link", { name: "Login" }).click();
  await page.getByRole("textbox", { name: "Email (Username)" }).click();
  await page.getByRole("textbox", { name: "Email (Username)" }).fill("Charlie");
  await page.getByRole("textbox", { name: "Password" }).click();
  await page.getByRole("textbox", { name: "Password" }).fill("Charlie2017");
  await page.getByRole("button", { name: "Login" }).click();
});
