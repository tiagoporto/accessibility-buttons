import { describe, expect, it } from '@jest/globals'
import { screen } from 'shadow-dom-testing-library'

import './a11y-contrast-button'

/**
 *
 */
function cleanup() {
  document.documentElement.className = ''
  document.body.innerHTML = ''
  localStorage.clear()
}

describe('a11y-contrast-button', () => {
  it('renders default props', async () => {
    expect.assertions(4)

    cleanup()
    document.body.innerHTML += '<a11y-contrast-button></a11y-contrast-button>'
    const button = await screen.findByShadowRole('button')

    expect(button).toHaveAttribute('aria-label', 'Add contrast')
    expect(button).toHaveTextContent('Add Contrast')

    await button.click()

    expect(button).toHaveAttribute('aria-label', 'Remove contrast')
    expect(button).toHaveTextContent('Remove Contrast')
  })

  it('renders custom props', async () => {
    expect.assertions(4)

    cleanup()
    document.body.innerHTML += `
    <a11y-contrast-button
      add-contrast-label='Add Label'
      add-contrast-aria-label='Add Arial Label'
      remove-contrast-label='Remove Label'
      remove-contrast-aria-label='Remove Arial Label'>
    </a11y-contrast-button>
    `
    const button = await screen.findByShadowRole('button')

    expect(button).toHaveAttribute('aria-label', 'Add Arial Label')
    expect(button).toHaveTextContent('Add Label')

    await button.click()

    expect(button).toHaveAttribute('aria-label', 'Remove Arial Label')
    expect(button).toHaveTextContent('Remove Label')
  })

  it('add page contrast class on click', async () => {
    expect.assertions(2)

    cleanup()
    document.body.innerHTML += `<a11y-contrast-button></a11y-contrast-button>`
    const button = await screen.findByShadowRole('button')

    expect(document.body).not.toHaveClass('a11y-contrast')

    await button.click()

    expect(document.documentElement).toHaveClass('a11y-contrast')
  })

  it('should have contrast class if localStorage is set', async () => {
    expect.assertions(2)

    cleanup()
    localStorage.setItem('a11y-buttons-contrast', 'true')
    document.body.innerHTML += `<a11y-contrast-button></a11y-contrast-button>`
    const button = await screen.findByShadowRole('button')

    expect(document.documentElement).toHaveClass('a11y-contrast')

    await button.click()

    expect(document.documentElement).not.toHaveClass('a11y-contrast')
  })
})
