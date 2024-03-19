import './accessibility-buttons.styl'
const STORAGE = 'accessibility_buttons'

export const storage = (type: 'font' | 'contrast') => {
  const storage = localStorage[STORAGE] && JSON.parse(localStorage[STORAGE])
  const classes = {
    font: 'accessibility-font',
    contrast: 'accessibility-contrast',
  }
  const $body = document.body

  if (storage && storage[type]) {
    $body.classList.add(classes[type])
    localStorage.setItem(STORAGE, JSON.stringify({ ...storage, [type]: false }))
  } else {
    $body.classList.remove(classes[type])
    localStorage.setItem(STORAGE, JSON.stringify({ ...storage, [type]: true }))
  }
}

export const hasStorage = (type: 'font' | 'contrast') => {
  const storage = localStorage[STORAGE] && JSON.parse(localStorage[STORAGE])

  return !!(storage && storage[type])
}
