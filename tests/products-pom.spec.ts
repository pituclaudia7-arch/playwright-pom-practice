import { test, expect } from '@playwright/test';
import { ProductsPage } from '../pages/ProductsPage';

test('User can open a product with POM', async ({ page }) => {
  const productsPage = new ProductsPage(page);

  // Arrange
  await productsPage.gotoHomePage();

  // Act
  await productsPage.openMakeupCategory();
  await productsPage.openBronzerProduct();

  // Assert
  await expect(page).toHaveURL(/product/i);
  await expect(await productsPage.isProductPageVisible()).toBeVisible();
  await expect(page.getByText('$')).toBeVisible();
});