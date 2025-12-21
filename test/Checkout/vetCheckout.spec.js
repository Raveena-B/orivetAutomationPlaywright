import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://www.orivet.com/");
  await page.locator(".w-10").click();
  await page.getByRole("link", { name: "Login" }).click();
  await page.getByRole("textbox", { name: "Email (Username)" }).click();
  await page
    .getByRole("textbox", { name: "Email (Username)" })
    .fill("charlie2016");
  await page.getByRole("textbox", { name: "Password" }).click();
  await page.getByRole("textbox", { name: "Password" }).fill("Charlie2017");
  await page.getByRole("button", { name: "Login" }).click();
  await page.goto("https://www.orivet.com/my/my-patients");
  await page.goto("https://www.orivet.com/vet/ancestry-and-health-panels");
  await page.getByRole("button", { name: "ORDER NOW" }).first().click();
  await page.getByRole("button", { name: "Go to checkout" }).click();
  await page.getByRole("textbox", { name: "Select Animal" }).click();
  await page.getByText("genovettest3").click();
  await page.getByRole("textbox", { name: "Add Barcode" }).click();
  await page.getByRole("textbox", { name: "Add Barcode" }).fill("656356645");
  await page.getByLabel("", { exact: true }).check();
  await page.getByRole("button", { name: "Continue" }).click();
  await page.getByRole("button", { name: "Continue" }).click();
  await page.getByRole("button", { name: "BACK TO STORE" }).click();
});
