import { describe, expect, it } from '@jest/globals'
import { screen } from 'shadow-dom-testing-library'

import './a11y-font-size-button'

/**
 *
 */
function cleanup() {
  document.documentElement.className = ''
  document.body.innerHTML = ''
  localStorage.clear()
}

describe('a11y-font-size-button', () => {
  it('renders default props', async () => {
    expect.assertions(4)

    cleanup()
    document.body.innerHTML += '<a11y-font-size-button></a11y-font-size-button>'
    const button = await screen.findByShadowRole('button')

    expect(button).toHaveAttribute('aria-label', 'Increase Font')
    expect(button).toHaveTextContent('A+')

    await button.click()

    expect(button).toHaveAttribute('aria-label', 'Decrease Font')
    expect(button).toHaveTextContent('A-')
  })

  it('renders custom props', async () => {
    expect.assertions(4)

    cleanup()
    document.body.innerHTML += `
    <a11y-font-size-button
      increase-label='Increase Label'
      increase-aria-label='Increase Arial Label'
      decrease-label='Decrease Label'
      decrease-aria-label='Decrease Arial Label'>
    </a11y-font-size-button>
    `
    const button = await screen.findByShadowRole('button')

    expect(button).toHaveAttribute('aria-label', 'Increase Arial Label')
    expect(button).toHaveTextContent('Increase Label')

    await button.click()

    expect(button).toHaveAttribute('aria-label', 'Decrease Arial Label')
    expect(button).toHaveTextContent('Decrease Label')
  })

  it('add font size class on click', async () => {
    expect.assertions(2)

    cleanup()
    document.body.innerHTML += `<a11y-font-size-button></a11y-font-size-button>`
    const button = await screen.findByShadowRole('button')

    expect(document.body).not.toHaveClass('a11y-font')

    await button.click()

    expect(document.documentElement).toHaveClass('a11y-font')
  })

  it('should have font size class if localStorage is set', async () => {
    expect.assertions(2)

    cleanup()
    localStorage.setItem('a11y-buttons-font', 'true')
    document.body.innerHTML += `<a11y-font-size-button></a11y-font-size-button>`
    const button = await screen.findByShadowRole('button')

    expect(document.documentElement).toHaveClass('a11y-font')

    await button.click()

    expect(document.documentElement).not.toHaveClass('a11y-font')
  })
})
