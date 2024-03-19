interface FontOptions {
  nameButtonIncrease: string
  ariaLabelButtonIncrease: string
  nameButtonDecrease: string
  ariaLabelButtonDecrease: string
}

interface ContrastOptions {
  nameButtonAdd: string
  ariaLabelButtonAdd: string
  nameButtonRemove: string
  ariaLabelButtonRemove: string
}

const STORAGE = 'accessibility_buttons'

const storage = (type: 'font' | 'contrast') => {
  const storage = JSON.parse(localStorage.accessibility_buttons)
  const classes = {
    font: 'accessibility-font',
    contrast: 'accessibility-contrast',
  }
  const $body = document.body

  if (storage[type]) {
    const $button = document.getElementById('buttons')
    $button.innerHTML = 'setting.font.nameButtonDecrease'
    $body.classList.add(classes[type])
    localStorage.setItem(STORAGE, JSON.stringify({ ...storage, [type]: false }))
  } else {
    $body.classList.remove(classes[type])
    localStorage.setItem(STORAGE, JSON.stringify({ ...storage, [type]: true }))
  }
}

/**
 * accessibilityButtons
 * @param  {Array}  -
 * @return
 */
export const accessibilityFont = ({
  nameButtonIncrease = '+A',
  ariaLabelButtonIncrease = 'Increase Font',
  nameButtonDecrease = '-A',
  ariaLabelButtonDecrease = 'Decrease Font',
}: Partial<FontOptions>) => {
  return (): void => {
    storage('font')
  }
}

export const accessibilityContrast = ({
  nameButtonAdd = 'Add Contrast',
  ariaLabelButtonAdd = 'Add Contrast',
  nameButtonRemove = 'Remove Contrast',
  ariaLabelButtonRemove = 'Remove Contrast',
}: Partial<ContrastOptions>) => {
  return (): void => storage('contrast')
}

export const onLoad = () => {}

/**
 * hasClass
 * @param  {string}  element - DOM element
 * @param  {string}  clazz   - Class Name
 * @return {Boolean}
 */
function hasClass(element, className) {
  return element.className.indexOf(` ${className} `) > -1
}

// // Check if exist storage and set the correct button names and aria attributes
// if (storageFont && $fontButton) {
//   $body.classList.add('accessibility-font')

//   $fontButton.forEach((button) => {
//     button.innerHTML = setting.font.nameButtonDecrease
//     button.setAttribute('aria-label', setting.font.ariaLabelButtonDecrease)
//   })
// } else if ($fontButton) {
//   $fontButton.forEach((button) => {
//     button.innerHTML = setting.font.nameButtonIncrease
//     button.setAttribute('aria-label', setting.font.ariaLabelButtonIncrease)
//   })
// }

// if (storageContrast && $contrastButton) {
//   $body.classList.add('accessibility-contrast')

//   $contrastButton.forEach((button) => {
//     button.innerHTML = setting.contrast.nameButtonRemove
//     button.setAttribute('aria-label', setting.contrast.ariaLabelButtonRemove)
//   })
// } else if ($contrastButton) {
//   $contrastButton.forEach((button) => {
//     button.innerHTML = setting.contrast.nameButtonAdd
//     button.setAttribute('aria-label', setting.contrast.ariaLabelButtonAdd)
//   })
// }

// /**
//  * Get the click event
//  * Rename the buttons
//  * Apply/Remove Contrast or Font Size
//  * Manage storage
//  */
// function accessibility() {
//   return () => {
//     const type = this.getAttibute('data-accessibility')
//     const classname = `accessibility-${type}`

//     if (hasClass($body, classname)) {
//       $body.classList.remove(classname)

//       if (type === 'font') {
//         $fontButton.forEach((button) => {
//           button.innerHTML = setting.font.nameButtonIncrease
//           button.setAttribute(
//             'aria-label',
//             setting.font.ariaLabelButtonIncrease
//           )
//         })

//         localStorage.removeItem('accessibility_font')
//       } else if (type === 'contrast') {
//         $contrastButton.forEach((button) => {
//           button.innerHTML = setting.contrast.nameButtonAdd
//           button.setAttribute(
//             'aria-label',
//             setting.contrast.ariaLabelButtonAdd
//           )
//         })

//         localStorage.removeItem('accessibility_contrast')
//       }
//     } else {
//       $body.classList.add(classname)

//       if (type === 'font') {
//         if (!storageFont) {
//           localStorage.setItem('accessibility_font', 'true')
//         }
//         $fontButton.forEach((button) => {
//           button.innerHTML = setting.font.nameButtonDecrease
//           button.setAttribute(
//             'aria-label',
//             setting.font.ariaLabelButtonDecrease
//           )
//         })
//       } else if (type === 'contrast') {
//         if (!storageContrast) {
//           localStorage.setItem('accessibility_contrast', 'true')
//         }
//         $contrastButton.forEach((button) => {
//           button.innerHTML = setting.contrast.nameButtonRemove
//           button.setAttribute(
//             'aria-label',
//             setting.contrast.ariaLabelButtonRemove
//           )
//         })
//       }
//     }
//   }
// }
