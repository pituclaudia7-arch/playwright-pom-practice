import { Page, Locator } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly makeupLink: Locator;
  readonly bronzerProductLink: Locator;
  readonly productHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.makeupLink = page.getByRole('link', { name: /^Makeup$/i });
    this.bronzerProductLink = page.getByRole('link', { name: /Skinsheen Bronzer Stick/i });
    this.productHeading = page.getByRole('heading', { name: /Skinsheen Bronzer Stick/i });
  }

  async gotoHomePage() {
    await this.page.goto('/');
  }

  async openMakeupCategory() {
    await this.makeupLink.click();
  }

  async openBronzerProduct() {
    await this.bronzerProductLink.click();
  }
}
