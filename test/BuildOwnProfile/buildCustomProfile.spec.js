import { test, expect } from "@playwright/test";
import { BuildCustomProfilePage } from "./buildCustomProfile.page";

test.describe("Build Custom Profile - AU Breeder", () => {

  test.beforeEach(async ({ page }) => {
    // Assume login is already handled or reused
    await page.goto("https://www.orivet.com//my-animals");
  });

  test("Build custom profile - Select 2–5 products", async ({ page }) => {
    const profilePage = new BuildCustomProfilePage(page);

    await profilePage.buildProfile({
      breed: "labrador",
      petName: "Buddy",
      productCount: 3
    });

    await expect(profilePage.totalPrice).toHaveText("$114.00");
    await expect(profilePage.customProfileTable).toBeVisible();
    await expect(page.locator("text=DNA Profile")).toBeVisible();
  });

  test("Build custom profile - Select 6–10 products", async ({ page }) => {
    const profilePage = new BuildCustomProfilePage(page);

    await profilePage.buildProfile({
      breed: "labrador",
      petName: "Max",
      productCount: 7
    });

    await expect(profilePage.totalPrice).toHaveText("$212.00");
    await expect(profilePage.customProfileTable).toBeVisible();
    await expect(page.locator("text=DNA Profile")).toBeVisible();
  });

  test("Build custom profile - Select more than 10 products", async ({ page }) => {
    const profilePage = new BuildCustomProfilePage(page);

    await profilePage.buildProfile({
      breed: "labrador",
      petName: "Rocky",
      productCount: 11
    });

    await expect(profilePage.totalPrice).toHaveText("$240.00");
    await expect(profilePage.customProfileTable).toBeVisible();
    await expect(page.locator("text=DNA Profile")).toBeVisible();
  });

});
