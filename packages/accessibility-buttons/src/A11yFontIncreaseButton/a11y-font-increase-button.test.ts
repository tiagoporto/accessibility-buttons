import { describe, expect, it, beforeEach } from '@jest/globals'
import { screen } from 'shadow-dom-testing-library'

import './a11y-font-increase-button'

function cleanup() {
  document.documentElement.className = ''
  document.documentElement.style.removeProperty('--a11y-font-size')
  document.body.innerHTML = ''
  localStorage.clear()
}

describe('a11y-font-increase-button', () => {
  beforeEach(cleanup)

  it('renders default label and aria-label', async () => {
    expect.assertions(2)

    document.body.innerHTML += '<a11y-font-increase-button></a11y-font-increase-button>'
    const button = await screen.findByShadowRole('button')

    expect(button).toHaveTextContent('A+')
    expect(button).toHaveAttribute('aria-label', 'Increase font size')
  })

  it('renders custom label and aria-label via attributes', async () => {
    expect.assertions(2)

    document.body.innerHTML += `
      <a11y-font-increase-button
        increase-label="+A"
        increase-aria-label="Make text bigger">
      </a11y-font-increase-button>
    `
    const button = await screen.findByShadowRole('button')

    expect(button).toHaveTextContent('+A')
    expect(button).toHaveAttribute('aria-label', 'Make text bigger')
  })

  it('increases --a11y-font-size on each click', async () => {
    expect.assertions(2)

    document.body.innerHTML += '<a11y-font-increase-button></a11y-font-increase-button>'
    const button = await screen.findByShadowRole('button')

    await button.click()
    const sizeAfterFirst = getComputedStyle(document.documentElement)
      .getPropertyValue('--a11y-font-size')
      .trim()

    await button.click()
    const sizeAfterSecond = getComputedStyle(document.documentElement)
      .getPropertyValue('--a11y-font-size')
      .trim()

    expect(parseFloat(sizeAfterFirst)).toBeGreaterThan(0)
    expect(parseFloat(sizeAfterSecond)).toBeGreaterThan(parseFloat(sizeAfterFirst))
  })

  it('persists state to localStorage on click', async () => {
    expect.assertions(1)

    document.body.innerHTML += '<a11y-font-increase-button></a11y-font-increase-button>'
    const button = await screen.findByShadowRole('button')

    await button.click()

    expect(localStorage.getItem('a11y-buttons-font')).toBe('true')
  })
})
