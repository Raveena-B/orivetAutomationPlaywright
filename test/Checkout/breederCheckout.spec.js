import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://www.orivet.com/");

  await page.locator(".w-10").click();
  await page.getByRole("link", { name: "Login" }).click();

  await page.getByRole("textbox", { name: "Email (Username)" }).fill("charlie");
  await page.getByRole("textbox", { name: "Password" }).fill("Charlie2017");
  await page.getByRole("button", { name: "Login" }).click();

  await page.getByText("Best Sellers").first().click();
  await page.getByRole("button", { name: "ORDER NOW" }).nth(2).click();
  await page.getByRole("button", { name: "Go to checkout" }).click();

  await page.getByLabel("", { exact: true }).check();
  await page.getByRole("button", { name: "Continue" }).click();

  await page.getByPlaceholder("Enter loyalty points").fill("54.30");
  await page.getByRole("button", { name: "Apply" }).nth(1).click();

  await page.getByRole("button", { name: "Continue" }).click();
  await page.getByRole("button", { name: "Continue" }).click();

  // ✅ Capture Order ID (UPDATE selector if needed)
  const orderId = await page.locator(".order-id").innerText();

  console.log("✅ Order ID:", orderId);

  await page.getByRole("button", { name: "BACK TO STORE" }).click();
});
