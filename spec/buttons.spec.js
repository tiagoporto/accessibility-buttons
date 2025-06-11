import { queryByTestId } from '@testing-library/dom'
import { accessibilityButtons } from 'accessibility-buttons'

const storageMock = () => {
  const storage = {}

  return {
    setItem: function (key, value) {
      storage[key] = value || ''
    },
    getItem: function (key) {
      return key in storage ? storage[key] : null
    },
    removeItem: function (key) {
      delete storage[key]
    },
    get length() {
      return Object.keys(storage).length
    },
    key: function (i) {
      const keys = Object.keys(storage)
      return keys[i] || null
    },
  }
}

describe('Functions events', () => {
  beforeEach(function () {
    const body = document.body
    body.outerHTML = `
        <body>
    <button type="button" data-accessibility="font" data-testid="accessibility-font"></button>

    <button type="button" data-accessibility="contrast" data-testid="accessibility-contrast"></button>
    </body>
    `
  })

  it('Clicked font button', () => {
    globalThis.localStorage = storageMock()
    accessibilityButtons()

    expect(document.body).not.toHaveClass('accessibility-font')

    queryByTestId(document.body, 'accessibility-font').click()
    expect(document.body).toHaveClass('accessibility-font')
    expect(
      queryByTestId(document.body, 'accessibility-font'),
    ).toHaveTextContent('-A')
    expect(queryByTestId(document.body, 'accessibility-font')).toHaveAttribute(
      'aria-label',
      'Decrease Font',
    )
  })

  it('Clicked font button twice', function () {
    globalThis.localStorage = storageMock()
    accessibilityButtons()

    expect(document.body).not.toHaveClass('accessibility-font')

    queryByTestId(document.body, 'accessibility-font').click()
    expect(document.body).toHaveClass('accessibility-font')

    queryByTestId(document.body, 'accessibility-font').click()
    expect(document.body).not.toHaveClass('accessibility-font')
  })

  it('Clicked font contrast', function () {
    globalThis.localStorage = storageMock()
    accessibilityButtons()

    expect(document.body).not.toHaveClass('accessibility-contrast')

    queryByTestId(document.body, 'accessibility-contrast').click()
    expect(document.body).toHaveClass('accessibility-contrast')

    expect(
      queryByTestId(document.body, 'accessibility-contrast'),
    ).toHaveTextContent('Remove Contrast')
    expect(
      queryByTestId(document.body, 'accessibility-contrast'),
    ).toHaveAttribute('aria-label', 'Remove Contrast')
  })

  it('Clicked font contrast twice', function () {
    globalThis.localStorage = storageMock()
    accessibilityButtons()

    expect(document.body).not.toHaveClass('accessibility-contrast')

    queryByTestId(document.body, 'accessibility-contrast').click()
    expect(document.body).toHaveClass('accessibility-contrast')

    queryByTestId(document.body, 'accessibility-contrast').click()
    expect(document.body).not.toHaveClass('accessibility-contrast')

    expect(
      queryByTestId(document.body, 'accessibility-contrast'),
    ).toHaveTextContent('Add Contrast')
    expect(
      queryByTestId(document.body, 'accessibility-contrast'),
    ).toHaveAttribute('aria-label', 'Add Contrast')
  })
})
