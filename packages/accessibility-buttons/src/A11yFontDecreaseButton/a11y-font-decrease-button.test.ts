import { describe, expect, it, beforeEach } from '@jest/globals'
import { screen } from 'shadow-dom-testing-library'

import './a11y-font-decrease-button'

function cleanup() {
  document.documentElement.className = ''
  document.documentElement.style.removeProperty('--a11y-font-size')
  document.body.innerHTML = ''
  localStorage.clear()
}

describe('a11y-font-decrease-button', () => {
  beforeEach(cleanup)

  it('renders default label and aria-label', async () => {
    expect.assertions(2)

    document.body.innerHTML += '<a11y-font-decrease-button></a11y-font-decrease-button>'
    const button = await screen.findByShadowRole('button')

    expect(button).toHaveTextContent('A-')
    expect(button).toHaveAttribute('aria-label', 'Decrease font size')
  })

  it('renders custom label and aria-label via attributes', async () => {
    expect.assertions(2)

    document.body.innerHTML += `
      <a11y-font-decrease-button
        decrease-label="-A"
        decrease-aria-label="Make text smaller">
      </a11y-font-decrease-button>
    `
    const button = await screen.findByShadowRole('button')

    expect(button).toHaveTextContent('-A')
    expect(button).toHaveAttribute('aria-label', 'Make text smaller')
  })

  it('decreases --a11y-font-size on each click', async () => {
    expect.assertions(2)

    // Start with a known size so decrease has something to work from
    document.documentElement.style.setProperty('--a11y-font-size', '20px')

    document.body.innerHTML += '<a11y-font-decrease-button></a11y-font-decrease-button>'
    const button = await screen.findByShadowRole('button')

    await button.click()
    const sizeAfterFirst = getComputedStyle(document.documentElement)
      .getPropertyValue('--a11y-font-size')
      .trim()

    await button.click()
    const sizeAfterSecond = getComputedStyle(document.documentElement)
      .getPropertyValue('--a11y-font-size')
      .trim()

    expect(parseFloat(sizeAfterFirst)).toBeLessThan(20)
    expect(parseFloat(sizeAfterSecond)).toBeLessThan(parseFloat(sizeAfterFirst))
  })

  it('persists state to localStorage on click', async () => {
    expect.assertions(1)

    document.body.innerHTML += '<a11y-font-decrease-button></a11y-font-decrease-button>'
    const button = await screen.findByShadowRole('button')

    await button.click()

    expect(localStorage.getItem('a11y-buttons-font')).toBe('true')
  })
})
