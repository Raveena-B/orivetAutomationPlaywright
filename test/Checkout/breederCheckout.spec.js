// Checkout/breederCheckout.spec.js
import { test, expect } from '@playwright/test';
import { loginValid } from '../Login/loginValid.spec.js'; // import the login function

test('Breeder Checkout Test', async ({ page }) => {
    
    // Used login function
    await loginValid(page);

    // Continue with checkout steps
    await page.getByRole('link', { name: 'Order Tests for Dogs' }).click();
    await page.getByText('Best Sellers').first().click();
    await page.getByRole('button', { name: 'ORDER NOW' }).nth(2).click();
    await page.getByRole('button', { name: 'Go to checkout' }).click();
    await page.getByLabel('', { exact: true }).check();
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByPlaceholder('Enter loyalty points').fill('53.90');
    await page.getByRole('button', { name: 'Apply' }).nth(1).click();
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByRole('button', { name: 'BACK TO STORE' }).click();

});
