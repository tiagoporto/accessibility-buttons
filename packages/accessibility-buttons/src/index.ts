// import './accessibility-buttons.css'

interface Setting {
  font?: {
    nameButtonIncrease?: string
    ariaLabelButtonIncrease?: string
    nameButtonDecrease?: string
    ariaLabelButtonDecrease?: string
  }
  contrast?: {
    nameButtonAdd?: string
    ariaLabelButtonAdd?: string
    nameButtonRemove?: string
    ariaLabelButtonRemove?: string
  }
}

const hasClass = (element: HTMLElement, clazz: string) => {
  return ` ${element.className} `.includes(` ${clazz} `)
}

export const accessibilityButtons = ({ font, contrast }: Setting = {}) => {
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
  const $fontButton = document.querySelector('[data-accessibility="font"]')
  const $contrastButton = document.querySelector(
    '[data-accessibility="contrast"]',
  )
  const storageFont = localStorage.accessibility_font
  const storageContrast = localStorage.accessibility_contrast

  // Check if exist storage and set the correct button names and aria attributes
  if (storageFont && $fontButton) {
    $body.classList.add('accessibility-font')

    $fontButton.innerHTML = setting.font.nameButtonDecrease
    $fontButton.setAttribute('aria-label', setting.font.ariaLabelButtonDecrease)
  } else if ($fontButton) {
    $fontButton.innerHTML = setting.font.nameButtonIncrease
    $fontButton.setAttribute('aria-label', setting.font.ariaLabelButtonIncrease)
  }

  if (storageContrast && $contrastButton) {
    $body.classList.add('accessibility-contrast')

    $contrastButton.innerHTML = setting.contrast.nameButtonRemove
    $contrastButton.setAttribute(
      'aria-label',
      setting.contrast.ariaLabelButtonRemove,
    )
  } else if ($contrastButton) {
    $contrastButton.innerHTML = setting.contrast.nameButtonAdd
    $contrastButton.setAttribute(
      'aria-label',
      setting.contrast.ariaLabelButtonAdd,
    )
  }

  // Rename buttons on click
  // Apply/Remove Contrast or Font Size
  // Manage storage
  const accessibility = (event: Event) => {
    const $button = event.currentTarget as HTMLButtonElement | null
    const type = $button?.dataset.accessibility
    const classname = `accessibility-${type}`

    if (hasClass($body, classname)) {
      $body.classList.remove(classname)

      if (type === 'font') {
        if ($fontButton) {
          $fontButton.innerHTML = setting.font.nameButtonIncrease
          $fontButton.setAttribute(
            'aria-label',
            setting.font.ariaLabelButtonIncrease,
          )
        }

        localStorage.removeItem('accessibility_font')
      } else if (type === 'contrast') {
        if ($contrastButton) {
          $contrastButton.innerHTML = setting.contrast.nameButtonAdd
          $contrastButton.setAttribute(
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
          localStorage.setItem('accessibility_font', 'true')
        }
        if ($fontButton) {
          $fontButton.innerHTML = setting.font.nameButtonDecrease
          $fontButton.setAttribute(
            'aria-label',
            setting.font.ariaLabelButtonDecrease,
          )
        }
      } else if (type === 'contrast') {
        if (!storageContrast) {
          localStorage.setItem('accessibility_contrast', 'true')
        }
        if ($contrastButton) {
          $contrastButton.innerHTML = setting.contrast.nameButtonRemove
          $contrastButton.setAttribute(
            'aria-label',
            setting.contrast.ariaLabelButtonRemove,
          )
        }
      }
    }
  }

  // Listening Click Event
  for (const $accessibilityButton of [$fontButton, $contrastButton]) {
    $accessibilityButton?.addEventListener('click', accessibility)
  }
}
