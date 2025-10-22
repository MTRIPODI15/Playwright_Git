import { test, expect } from '@playwright/test';

/* Este test fue realizaro 100% con Codegen de Playwright grabando cada paso en el navegador */

test('test', async ({ page }) => {
  await page.goto('https://mercadolibre.com/');
  await page.getByRole('link', { name: 'Argentina' }).click();
  await page.getByRole('combobox', { name: 'Ingresá lo que quieras' }).click();
  await page.getByRole('combobox', { name: 'Ingresá lo que quieras' }).fill('auriculares');
  await page.getByRole('button', { name: 'Buscar' }).click();
  await page.getByRole('button', { name: 'Buscar' }).click();
});