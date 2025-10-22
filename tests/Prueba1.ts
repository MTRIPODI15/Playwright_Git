import { test, expect } from '@playwright/test';

/*Prueba Basica de busqueda en MercadoLibre*/

test('test', async ({ page }) => {
  await page.goto('https://www.mercadolibre.com.ar');
  await page.click('text=Categorías');
  await page.click('text=Electrónica');
  await page.fill('input[name="as_word"]', 'auriculares');
  await page.press('input[name="as_word"]', 'Enter');
});