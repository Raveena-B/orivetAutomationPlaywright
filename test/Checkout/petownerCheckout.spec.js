import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://www.orivet.com/");
  await page.getByRole("link", { name: "Login" }).click();
  await page.locator("svg").nth(5).click();
  await page.getByRole("textbox", { name: "Email (Username)" }).click();
  await page.getByRole("textbox", { name: "Email (Username)" }).fill("newuser");
  await page.getByRole("textbox", { name: "Password" }).click();
  await page.getByRole("textbox", { name: "Password" }).fill("Charlie2017");
  await page.getByRole("button", { name: "Login" }).click();
  await page.goto("https://www.orivet.com/my/my-animals");
  await page.getByRole("link", { name: "Shop Now" }).click();
  await page.getByRole("button", { name: "ORDER NOW" }).first().click();
  await page.getByRole("button", { name: "Go to checkout" }).click();
  await page.getByLabel("", { exact: true }).check();
  await page.getByRole("button", { name: "Continue" }).click();
  await page.getByRole("textbox", { name: "Enter coupon code" }).click();
  await page
    .getByRole("textbox", { name: "Enter coupon code" })
    .fill("testcoupon610");
  await page.locator(".flex.w-2\\/5").click();
  await page.getByRole("textbox", { name: "Enter coupon code" }).click();
  await page
    .getByRole("textbox", { name: "Enter coupon code" })
    .fill("testcoupon610");
  await page.getByRole("button", { name: "Apply" }).click();
  await page.getByRole("button", { name: "Continue" }).click();
  await page.getByRole("button", { name: "Continue" }).click();
  await page
    .locator('[data-test-id="chat-widget-iframe"]')
    .contentFrame()
    .locator('[data-test-id="ai-welcome-msg-close-button"]')
    .click();
  await page.getByRole("button", { name: "BACK TO STORE" }).click();
});
