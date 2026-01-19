export class BuildCustomProfilePage {
  constructor(page) {
    this.page = page;

    this.buildCustomProfileBtn = page.getByRole("button", { name: "Build Custom Profile" });
    this.breedDropdown = page.locator("#breed"); // update selector
    this.petNameInput = page.locator("#pet-name"); // update selector
    this.buyNowBtn = page.getByRole("button", { name: "Buy now" });
    this.addToCartBtn = page.getByRole("button", { name: "Add to cart" });
    this.goToCheckoutBtn = page.getByRole("button", { name: "Go to checkout" });

    this.totalPrice = page.locator(".total-price"); // update selector
    this.customProfileTable = page.locator("#custom-profile-table"); // update selector
  }

  async buildProfile({ breed, petName, productCount }) {
    await this.buildCustomProfileBtn.click();
    await this.breedDropdown.selectOption(breed);
    await this.petNameInput.fill(petName);

    // Select products dynamically
    for (let i = 1; i <= productCount; i++) {
      await this.page.locator(`input[type="checkbox"]`).nth(i).check();
    }

    await this.buyNowBtn.click();
    await this.addToCartBtn.click();
  }
}
