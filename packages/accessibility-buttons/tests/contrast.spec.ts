import { test, expect } from '@chromatic-com/playwright'

test('should apply contrast', async ({ page }) => {
  await page.goto('http://localhost:8080/')

  await expect(page.locator('html')).not.toHaveClass('a11y-contrast')

  page.getByRole('button', { name: 'Add contrast' }).click()

  await expect(page.locator('html')).toHaveClass('a11y-contrast')
})

test('should have contrast applied from storage', async ({ page }) => {
  await page.context().addInitScript(() => {
    localStorage.setItem('a11y-buttons-contrast', 'true')
  })

  await page.goto('http://localhost:8080/')

  await expect(page.locator('html')).toHaveClass('a11y-contrast')

  await page.getByRole('button', { name: 'Remove contrast' }).click()

  await expect(page.locator('html')).not.toHaveClass('a11y-contrast')
})
