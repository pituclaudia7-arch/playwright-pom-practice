# Playwright Page Object Model practice

Playwright and TypeScript tests for login and product navigation on a demo store. This project separates reusable page interactions from test scenarios using the Page Object Model (POM).

## Start here

| Scenario | Test | Page objects |
| --- | --- | --- |
| Valid login, invalid password, and blank form | [Login spec](tests/login-pom.spec.ts) | [LoginPage](pages/LoginPage.ts), [HomePage](pages/HomePage.ts) |
| Open the Makeup category and verify the Skinsheen Bronzer Stick product page | [Product spec](tests/products-pom.spec.ts) | [ProductsPage](pages/ProductsPage.ts) |

## Verified CI run

The [default-branch run](https://github.com/pituclaudia7-arch/playwright-pom-practice/actions/runs/42270227488) passed all four scenarios in Chromium, Firefox, and WebKit (11 browser-test executions).

## Run locally

Use Node.js LTS and npm. From the repository root:

```bash
npm ci
npx playwright install
npx playwright test --project=chromium
npx playwright show-report
```

Run `npx playwright test` to include Chromium, Firefox, and WebKit. The suite uses a hosted demo, so it needs network access.

[GitHub Actions runs](https://github.com/pituclaudia7-arch/playwright-pom-practice/actions/workflows/playwright.yml) show workflow results. Runs that reach test execution can include a downloadable HTML report.
