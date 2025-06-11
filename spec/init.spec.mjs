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

describe('Init Accessibility Buttons', () => {
  beforeEach(function () {
    const body = document.body
    body.outerHTML = `
    <body>
    <button type="button" data-accessibility="font" data-testid="accessibility-font"></button>

    <button type="button" data-accessibility="contrast" data-testid="accessibility-contrast"></button>
    </body>
    `
  })

  it('Button Font', () => {
    globalThis.localStorage = storageMock()

    accessibilityButtons({
      font: {
        nameButtonIncrease: 'A+',
        ariaLabelButtonIncrease: 'Plus Font',
        nameButtonDecrease: 'A-',
        ariaLabelButtonDecrease: 'Minus Font',
      },
    })

    expect(queryByTestId(document, 'accessibility-font')).toHaveTextContent(
      'A+',
    )
    expect(queryByTestId(document, 'accessibility-font')).toHaveAttribute(
      'aria-label',
      'Plus Font',
    )
  })

  it('Contrast Font', () => {
    globalThis.localStorage = storageMock()

    accessibilityButtons({
      contrast: {
        nameButtonAdd: 'Add Contrast',
        ariaLabelButtonAdd: 'Add Contrast',
        nameButtonRemove: 'Remove Contrast',
        ariaLabelButtonRemove: 'Remove Contrast',
      },
    })

    expect(queryByTestId(document, 'accessibility-contrast')).toHaveTextContent(
      'Add Contrast',
    )

    expect(queryByTestId(document, 'accessibility-contrast')).toHaveAttribute(
      'aria-label',
      'Add Contrast',
    )
  })
})
