import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly accountHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.accountHeading = page.getByRole('heading', { name: /my account/i });
  }

  async isLoggedIn() {
    await this.accountHeading.waitFor();
    return this.accountHeading;
  }
}