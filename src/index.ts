import hljs from 'highlight.js'
import cmake from 'highlight.js/lib/languages/cmake'
import javascript from 'highlight.js/lib/languages/javascript'
import xml from 'highlight.js/lib/languages/xml'
import 'highlight.js/styles/atom-one-dark.min.css'

import 'accessibility-buttons/ContrastButton'
import 'accessibility-buttons/FontSizeButton'

import './styles'

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('xml', xml)
hljs.registerLanguage('bash', cmake)

type Language = 'en' | 'es' | 'pt'

type Translation = {
  pageTitle: string
  description: string
  install: string
  usage: string
  import: string
  addButtons: string
  fontSizeInfo: string
  documentation: string
  documentationText: string
  languageSelector: string
  contrastAdd: string
  contrastRemove: string
  contrastAddAria: string
  contrastRemoveAria: string
  fontIncrease: string
  fontDecrease: string
  fontIncreaseAria: string
  fontDecreaseAria: string
}

type A11yButtonElement = HTMLElement & {
  updateLabel: (featEnabled?: boolean) => void
}

const translations: Record<Language, Translation> = {
  en: {
    pageTitle: 'Accessibility Buttons',
    description:
      'Buttons to add/remove contrast and increase/decrease font size.',
    install: 'Install',
    usage: 'Usage',
    import: 'Import',
    addButtons: 'Add buttons',
    fontSizeInfo:
      'Font size works only with relative units, example <kbd>em</kbd> or <kbd>rem</kbd>.',
    documentation: 'Documentation',
    documentationText: 'Full documentation is available at',
    languageSelector: 'Language selector',
    contrastAdd: 'Click me and things will be darken',
    contrastRemove: 'Click me and things will be lighten again',
    contrastAddAria: 'Add contrast',
    contrastRemoveAria: 'Remove contrast',
    fontIncrease: 'Click me and things will be big',
    fontDecrease: 'Click me and things will be back to normal',
    fontIncreaseAria: 'Increase font',
    fontDecreaseAria: 'Decrease font',
  },

  es: {
    pageTitle: 'Botones de accesibilidad',
    description:
      'Botones para añadir o quitar contraste y aumentar o disminuir el tamaño de la fuente.',
    install: 'Instalar',
    usage: 'Uso',
    import: 'Importar',
    addButtons: 'Añadir botones',
    fontSizeInfo:
      'El tamaño de la fuente funciona solo con unidades relativas, por ejemplo <kbd>em</kbd> o <kbd>rem</kbd>.',
    documentation: 'Documentación',
    documentationText: 'La documentación completa está disponible en',
    languageSelector: 'Selector de idioma',
    contrastAdd: 'Activar contraste',
    contrastRemove: 'Desactivar contraste',
    contrastAddAria: 'Activar contraste',
    contrastRemoveAria: 'Desactivar contraste',
    fontIncrease: 'Aumentar fuente',
    fontDecrease: 'Restaurar fuente',
    fontIncreaseAria: 'Aumentar tamaño de fuente',
    fontDecreaseAria: 'Restaurar tamaño de fuente',
  },

  pt: {
    pageTitle: 'Botões de acessibilidade',
    description:
      'Botões para adicionar ou remover contraste e aumentar ou diminuir o tamanho da fonte.',
    install: 'Instalar',
    usage: 'Uso',
    import: 'Importar',
    addButtons: 'Adicionar botões',
    fontSizeInfo:
      'O tamanho da fonte funciona apenas com unidades relativas, por exemplo <kbd>em</kbd> ou <kbd>rem</kbd>.',
    documentation: 'Documentação',
    documentationText: 'A documentação completa está disponível no',
    languageSelector: 'Seletor de idioma',
    contrastAdd: 'Ativar contraste',
    contrastRemove: 'Desativar contraste',
    contrastAddAria: 'Ativar contraste',
    contrastRemoveAria: 'Desativar contraste',
    fontIncrease: 'Aumentar fonte',
    fontDecrease: 'Restaurar fonte',
    fontIncreaseAria: 'Aumentar tamanho da fonte',
    fontDecreaseAria: 'Restaurar tamanho da fonte',
  },
}

const isLanguage = (value: string | null): value is Language =>
  value === 'en' || value === 'es' || value === 'pt'

const updateMetaDescription = (description: string) => {
  const selectors = [
    'meta[name="description"]',
    'meta[property="og:description"]',
    'meta[name="twitter:description"]',
  ]

  for (const selector of selectors) {
    document.querySelector(selector)?.setAttribute('content', description)
  }
}

const updateMetaTitle = (title: string) => {
  const selectors = [
    'meta[property="og:title"]',
    'meta[name="twitter:title"]',
  ]

  for (const selector of selectors) {
    document.querySelector(selector)?.setAttribute('content', title)
  }
}

const changeLanguage = (language: Language) => {
  const translation = translations[language]

  document.documentElement.lang = language
  document.title = translation.pageTitle

  updateMetaDescription(translation.description)
  updateMetaTitle(translation.pageTitle)

  const languageSwitcher = document.querySelector('.language-switcher')
  languageSwitcher?.setAttribute('aria-label', translation.languageSelector)

  const textElements =
    document.querySelectorAll<HTMLElement>('[data-i18n]')

  for (const element of textElements) {
    const key = element.dataset.i18n as keyof Translation | undefined

    if (key && key in translation) {
      element.textContent = translation[key]
    }
  }

  const htmlElements =
    document.querySelectorAll<HTMLElement>('[data-i18n-html]')

  for (const element of htmlElements) {
    const key = element.dataset.i18nHtml as keyof Translation | undefined

    if (key && key in translation) {
      element.innerHTML = translation[key]
    }
  }

  const contrastButton = document.querySelector(
    'a11y-contrast-button',
  ) as A11yButtonElement | null

  if (contrastButton) {
    contrastButton.setAttribute('add-contrast-label', translation.contrastAdd)
    contrastButton.setAttribute(
      'remove-contrast-label',
      translation.contrastRemove,
    )
    contrastButton.setAttribute(
      'add-contrast-aria-label',
      translation.contrastAddAria,
    )
    contrastButton.setAttribute(
      'remove-contrast-aria-label',
      translation.contrastRemoveAria,
    )

    const contrastEnabled =
      document.documentElement.classList.contains('a11y-contrast')

    contrastButton.updateLabel(contrastEnabled)
  }

  const fontButton = document.querySelector(
    'a11y-font-size-button',
  ) as A11yButtonElement | null

  if (fontButton) {
    fontButton.setAttribute('increase-label', translation.fontIncrease)
    fontButton.setAttribute('decrease-label', translation.fontDecrease)
    fontButton.setAttribute(
      'increase-aria-label',
      translation.fontIncreaseAria,
    )
    fontButton.setAttribute(
      'decrease-aria-label',
      translation.fontDecreaseAria,
    )

    const fontEnabled = document.documentElement.classList.contains('a11y-font')

    fontButton.updateLabel(fontEnabled)
  }

  const languageButtons =
    document.querySelectorAll<HTMLButtonElement>(
      '.language-switcher__button',
    )

  for (const button of languageButtons) {
    const active = button.dataset.language === language

    button.classList.toggle('is-active', active)
    button.setAttribute('aria-pressed', String(active))
  }

  localStorage.setItem('preferred-language', language)
}

const ready = (callback: () => void) => {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', callback)
  } else {
    callback()
  }
}

ready(() => {
  const codeBlocks = document.querySelectorAll('pre code')
  const yearElement = document.querySelector('#year')

  if (yearElement) {
    yearElement.innerHTML = String(new Date().getFullYear())
  }

  for (const element of codeBlocks) {
    hljs.highlightElement(element as HTMLElement)
  }

  const languageButtons =
    document.querySelectorAll<HTMLButtonElement>(
      '.language-switcher__button',
    )

  for (const button of languageButtons) {
    button.addEventListener('click', () => {
      const language = button.dataset.language

      if (isLanguage(language ?? null)) {
        changeLanguage(language)
      }
    })
  }

  const storedLanguage = localStorage.getItem('preferred-language')

  changeLanguage(isLanguage(storedLanguage) ? storedLanguage : 'en')

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
