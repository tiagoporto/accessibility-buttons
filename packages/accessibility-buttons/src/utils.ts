const STORAGE = 'a11y-buttons'
const CLASSES = {
  contrast: 'a11y-contrast',
  font: 'a11y-font',
}

export const storage = (type: 'contrast' | 'font', action?: 'increase' | 'decrease') => {
  const storage = localStorage[`${STORAGE}-${type}`]
  const $body = document.documentElement

  if (action === 'increase') {
    const currentSize = getComputedStyle($body)
      .getPropertyValue('--a11y-font-size')
      .trim() // the current size from body
    const newSize = (parseFloat(currentSize) || 16) + 3 // create the new size
    $body.style.setProperty('--a11y-font-size', `${newSize}px`) //set the neqw size
    $body.classList.add(CLASSES[type])
    localStorage.setItem(`${STORAGE}-${type}`, 'true')

    return true
  } else if (action === 'decrease') { // same thing thing, but decrese
    const currentSize = getComputedStyle($body)
      .getPropertyValue('--a11y-font-size')
      .trim()
    const newSize = (parseFloat(currentSize) || 16) - 3
    $body.style.setProperty('--a11y-font-size', `${newSize}px`)
    $body.classList.add(CLASSES[type])
    localStorage.setItem(`${STORAGE}-${type}`, 'true')

    return false
  } else if (storage === 'true') {
    $body.classList.remove(CLASSES[type])
    localStorage.removeItem(`${STORAGE}-${type}`)

    return false
  }

  $body.classList.add(CLASSES[type])
  localStorage.setItem(`${STORAGE}-${type}`, 'true')
  return true
}

export const hasStorage = (type: 'contrast' | 'font') => {
  const storage = localStorage[`${STORAGE}-${type}`]

  const $body = document.documentElement

  $body.classList.toggle(CLASSES[type], storage === 'true')

  return !!storage
}
