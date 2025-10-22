import { test, expect } from '@playwright/test';

test('Buscar auriculares en MercadoLibre', async ({ page }) => {
  // Ir a la página principal
  await page.goto('https://www.mercadolibre.com.ar');

  // Aceptar cookies si aparece
  const aceptarCookies = page.getByRole('button', { name: /entendido/i });
  if (await aceptarCookies.isVisible()) {
    await aceptarCookies.click();
  }

  // Usar getByRole para buscar el input de búsqueda
  const buscador = page.getByRole('textbox', { name: /ingresá lo que quieras encontrar/i });
  await buscador.fill('auriculares');

  // Usar getByRole para hacer clic en el botón de búsqueda
  await page.getByRole('button', { name: /buscar/i }).click();

  // Validar que haya resultados usando locator() + CSS
  const resultados = page.locator('li.ui-search-layout__item');
  await expect(resultados).toHaveCountGreaterThan(0);

  // Usar getByText para validar que aparece la palabra "auriculares"
  await expect(page.getByText(/auriculares/i)).toBeVisible();

  // Usar XPath para encontrar un producto destacado (opcional)
  const destacado = page.locator('//span[contains(text(),"Más relevantes")]');
  await expect(destacado).toBeVisible();
});