// import './accessibility-buttons.css'

const hasClass = (element, clazz) => {
  return ` ${element.className} `.includes(` ${clazz} `)
}

export const accessibilityButtons = ({ font, contrast } = {}) => {
  const setting = {
    font: {
      nameButtonIncrease: '+A',
      ariaLabelButtonIncrease: 'Increase Font',
      nameButtonDecrease: '-A',
      ariaLabelButtonDecrease: 'Decrease Font',
      ...font,
    },

    contrast: {
      nameButtonAdd: 'Add Contrast',
      ariaLabelButtonAdd: 'Add Contrast',
      nameButtonRemove: 'Remove Contrast',
      ariaLabelButtonRemove: 'Remove Contrast',
      ...contrast,
    },
  }

  const $body = document.body
  const $accessibilityButtons = [
    ...document.querySelectorAll('[data-accessibility]'),
  ]
  const $fontButton = $accessibilityButtons.filter((button) => {
    return button.dataset.accessibility === 'font'
  })
  const $contrastButton = $accessibilityButtons.filter((button) => {
    return button.dataset.accessibility === 'contrast'
  })
  const storageFont = localStorage.accessibility_font
  const storageContrast = localStorage.accessibility_contrast

  // Check if exist storage and set the correct button names and aria attributes
  if (storageFont && $fontButton) {
    $body.classList.add('accessibility-font')

    for (const button of $fontButton) {
      button.innerHTML = setting.font.nameButtonDecrease
      button.setAttribute('aria-label', setting.font.ariaLabelButtonDecrease)
    }
  } else if ($fontButton) {
    for (const button of $fontButton) {
      button.innerHTML = setting.font.nameButtonIncrease
      button.setAttribute('aria-label', setting.font.ariaLabelButtonIncrease)
    }
  }

  if (storageContrast && $contrastButton) {
    $body.classList.add('accessibility-contrast')

    for (const button of $contrastButton) {
      button.innerHTML = setting.contrast.nameButtonRemove
      button.setAttribute('aria-label', setting.contrast.ariaLabelButtonRemove)
    }
  } else if ($contrastButton) {
    for (const button of $contrastButton) {
      button.innerHTML = setting.contrast.nameButtonAdd
      button.setAttribute('aria-label', setting.contrast.ariaLabelButtonAdd)
    }
  }

  /**
   * Get the click event
   * Rename the buttons
   * Apply/Remove Contrast or Font Size
   * Manage storage
   */
  function accessibility() {
    return function () {
      const $this = this
      const type = $this.dataset.accessibility
      const classname = `accessibility-${type}`

      if (hasClass($body, classname)) {
        $body.classList.remove(classname)

        if (type === 'font') {
          for (const button of $fontButton) {
            button.innerHTML = setting.font.nameButtonIncrease
            button.setAttribute(
              'aria-label',
              setting.font.ariaLabelButtonIncrease,
            )
          }

          localStorage.removeItem('accessibility_font')
        } else if (type === 'contrast') {
          for (const button of $contrastButton) {
            button.innerHTML = setting.contrast.nameButtonAdd
            button.setAttribute(
              'aria-label',
              setting.contrast.ariaLabelButtonAdd,
            )
          }

          localStorage.removeItem('accessibility_contrast')
        }
      } else {
        $body.classList.add(classname)

        if (type === 'font') {
          if (!storageFont) {
            localStorage.setItem('accessibility_font', true)
          }
          for (const button of $fontButton) {
            button.innerHTML = setting.font.nameButtonDecrease
            button.setAttribute(
              'aria-label',
              setting.font.ariaLabelButtonDecrease,
            )
          }
        } else if (type === 'contrast') {
          if (!storageContrast) {
            localStorage.setItem('accessibility_contrast', true)
          }
          for (const button of $contrastButton) {
            button.innerHTML = setting.contrast.nameButtonRemove
            button.setAttribute(
              'aria-label',
              setting.contrast.ariaLabelButtonRemove,
            )
          }
        }
      }
    }
  }

  // Listening Click Event
  for (const $accessibilityButton of $accessibilityButtons) {
    $accessibilityButton.addEventListener('click', accessibility())
  }
}
