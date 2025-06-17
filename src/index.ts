import 'accessibility-buttons/FontSizeButton'

import 'accessibility-buttons/ContrastButton'

import './styles'

const ready = (callback: () => void) => {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', callback)
  } else {
    callback()
  }
}

ready(() => {
  const yearElement = document.querySelector('#year')
  if (yearElement) {
    yearElement.innerHTML = String(new Date().getFullYear())
  }

  // var $accessibilityButtons = document.getElementsByClassName('js-acessibility')
  // for (var i = 0; i < $accessibilityButtons.length; i++) {
  //   $accessibilityButtons[i].addEventListener('click', analytics())
  //   // $accessibilityButtons[i].addEventListener('click', analytics())
  // }
})

// const hasClass = (element: HTMLElement, clazz: string) => {
//   return ` ${element.className} `.includes(` ${clazz} `)
// }

// function analytics() {
// return function () {
//   var $this = this
//   var $body = document.body
//   if ($this.getAttribute('id') === 'accessibility-contrast') {
//     if (
//       hasClass($body, $this.getAttribute('id') && typeof ga === 'function')
//     ) {
//       ga('send', 'event', 'accessibility', 'click', 'Add Contrast')
//     } else {
//       ga('send', 'event', 'accessibility', 'click', 'Remove Contrast')
//     }
//   }
//   if ($this.getAttribute('id') === 'accessibility-font') {
//     if (
//       hasClass($body, $this.getAttribute('id')) &&
//       typeof ga === 'function'
//     ) {
//       ga('send', 'event', 'accessibility', 'click', 'Increase Font')
//     } else {
//       ga('send', 'event', 'accessibility', 'click', 'Decrease Font')
//     }
//   }
// }
// }
