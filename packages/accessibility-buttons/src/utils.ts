const STORAGE = 'a11y-buttons'
const CLASSES = {
  contrast: 'a11y-contrast',
  font: 'a11y-font',
}

export const storage = (type: 'contrast' | 'font') => {
  const storage = localStorage[`${STORAGE}-${type}`]
  const $body = document.documentElement

  if (storage === 'true') {
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

  if (storage === 'true') {
    $body.classList.add(CLASSES[type])
  } else {
    $body.classList.remove(CLASSES[type])
  }

  return !!storage
}
