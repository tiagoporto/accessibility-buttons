import { test, expect } from '@playwright/test'

test('should apply font size', async ({ page }) => {
  await page.goto('http://localhost:8080/')

  await expect(page.locator('html')).not.toHaveClass('a11y-font')

  page.getByRole('button', { name: 'Increase Font' }).click()

  await expect(page.locator('html')).toHaveClass('a11y-font')
})

test('should have font applied from storage', async ({ page }) => {
  await page.context().addInitScript(() => {
    localStorage.setItem('a11y-buttons-font', 'true')
  })

  await page.goto('http://localhost:8080/')

  await expect(page.locator('html')).toHaveClass('a11y-font')

  await page.getByRole('button', { name: 'Decrease Font' }).click()

  await expect(page.locator('html')).not.toHaveClass('a11y-font')
})
