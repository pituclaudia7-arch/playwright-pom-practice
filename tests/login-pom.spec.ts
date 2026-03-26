import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage'; 



test('Valid login with POM', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);

  // Arrange
  await loginPage.goto();

  // Act
  await loginPage.login('aguspe', '12341234');

  // Assert
  await expect(await homePage.isLoggedIn()).toBeVisible();
});

test('Invalid login with POM', async ({ page }) => {
  const loginPage = new LoginPage(page);

  // Arrange
  await loginPage.goto();

  // Act
  await loginPage.login('aguspe', 'wrongpassword');

  // Assert
  await expect(page).toHaveURL(/login/i);
  await expect(page.getByText(/error|incorrect|invalid/i)).toBeVisible();
});

test('Empty login fields with POM', async ({ page }) => {
  const loginPage = new LoginPage(page);

  // Arrange
  await loginPage.goto();

  // Act
  await loginPage.login('', '');

  // Assert
  await expect(page).toHaveURL(/login/i);
  await expect(page.locator('#loginFrm_loginname')).toHaveAttribute('required', '');
  await expect(page.locator('#loginFrm_password')).toHaveAttribute('required', '');
});
