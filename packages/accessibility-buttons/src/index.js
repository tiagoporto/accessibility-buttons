import './accessibility-buttons.css'

function savePreference(key, value) {
  try {
    localStorage.setItem(key, value)
  } catch (e) {
    console.warn('Não foi possível salvar a preferência:', e)
  }
}

function loadPreference(key) {
  try {
    return localStorage.getItem(key)
  } catch (e) {
    console.warn('Não foi possível carregar a preferência:', e)
    return null
  }
}

/**
 * accessibilityButtons
 * @param  {Array}  -
 * @return
 */

export const accessibilityButtons = (options) => {
  'use strict'

  /**
   * hasClass
   * @param  {string}  element - DOM element
   * @param  {string}  clazz   - Class Name
   * @return {Boolean}
   */
  function hasClass(element, clazz) {
    return ` ${element.className} `.indexOf(` ${clazz} `) > -1
  }

  var setting = {
    font: {
      nameButtonIncrease: '+A',
      ariaLabelButtonIncrease: 'Increase Font',
      nameButtonDecrease: '-A',
      ariaLabelButtonDecrease: 'Decrease Font',
    },

    contrast: {
      nameButtonAdd: 'Add Contrast',
      ariaLabelButtonAdd: 'Add Contrast',
      nameButtonRemove: 'Remove Contrast',
      ariaLabelButtonRemove: 'Remove Contrast',
    },
  }

  // Set buttons name and aria label
  if (options) {
    for (var key in options) {
      if (options.hasOwnProperty(key)) {
        var obj = options[key]

        for (var prop in obj) {
          if (obj.hasOwnProperty(prop)) {
            setting[key][prop] = obj[prop]
          }
        }
      }
    }
  }

  var $body = document.body,
    $accessibilityButtons = [
      ...document.querySelectorAll('[data-accessibility]'),
    ],
    $fontButton = $accessibilityButtons.filter((button) => {
      return button.getAttribute('data-accessibility') === 'font'
    }),
    $contrastButton = $accessibilityButtons.filter((button) => {
      return button.getAttribute('data-accessibility') === 'contrast'
    })

  var storageFont = loadPreference('accessibility_font')
  var storageContrast = loadPreference('accessibility_contrast')

  // Check if exist storage and set the correct button names and aria attributes
  if (storageFont && $fontButton) {
    $body.classList.add('accessibility-font')

    $fontButton.forEach((button) => {
      button.innerHTML = setting.font.nameButtonDecrease
      button.setAttribute('aria-label', setting.font.ariaLabelButtonDecrease)
    })
  } else if ($fontButton) {
    $fontButton.forEach((button) => {
      button.innerHTML = setting.font.nameButtonIncrease
      button.setAttribute('aria-label', setting.font.ariaLabelButtonIncrease)
    })
  }

  if (storageContrast && $contrastButton) {
    $body.classList.add('accessibility-contrast')

    $contrastButton.forEach((button) => {
      button.innerHTML = setting.contrast.nameButtonRemove
      button.setAttribute('aria-label', setting.contrast.ariaLabelButtonRemove)
    })
  } else if ($contrastButton) {
    $contrastButton.forEach((button) => {
      button.innerHTML = setting.contrast.nameButtonAdd
      button.setAttribute('aria-label', setting.contrast.ariaLabelButtonAdd)
    })
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
      const type = $this.getAttribute('data-accessibility')
      const classname = `accessibility-${type}`

      if (hasClass($body, classname)) {
        $body.classList.remove(classname)

        if (type === 'font') {
          $fontButton.forEach((button) => {
            button.innerHTML = setting.font.nameButtonIncrease
            button.setAttribute(
              'aria-label',
              setting.font.ariaLabelButtonIncrease,
            )
          })

          savePreference('accessibility_font', 'false')
        } else if (type === 'contrast') {
          $contrastButton.forEach((button) => {
            button.innerHTML = setting.contrast.nameButtonAdd
            button.setAttribute(
              'aria-label',
              setting.contrast.ariaLabelButtonAdd,
            )
          })

          savePreference('accessibility_contrast', 'false')
        }
      } else {
        $body.classList.add(classname)

        if (type === 'font') {
          savePreference('accessibility_font', 'true')

          $fontButton.forEach((button) => {
            button.innerHTML = setting.font.nameButtonDecrease
            button.setAttribute(
              'aria-label',
              setting.font.ariaLabelButtonDecrease,
            )
          })
        } else if (type === 'contrast') {
          savePreference('accessibility_contrast', 'true')

          $contrastButton.forEach((button) => {
            button.innerHTML = setting.contrast.nameButtonRemove
            button.setAttribute(
              'aria-label',
              setting.contrast.ariaLabelButtonRemove,
            )
          })
        }
      }
    }
  }

  // Listening Click Event
  for (var i = 0; i < $accessibilityButtons.length; i++) {
    $accessibilityButtons[i].addEventListener('click', accessibility())
  }
}

// Apply System Theme Preference
function applySystemThemePreference() {
  if (window.matchMedia) {
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches

    if (prefersDark) {
      document.body.style.backgroundColor = 'black'
      document.body.style.color = 'white'
      console.info('Dark theme applied.')
    } else {
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      console.info('Light theme applied.')
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
  applySystemThemePreference()
})
