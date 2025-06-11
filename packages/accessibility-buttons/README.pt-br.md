<p align="right"><img src="https://raw.githubusercontent.com/ellerbrock/open-source-badges/refs/heads/master/badges/open-source-v3/open-source.svg" alt="Open Source Love"></p>

<p align="center"><img src="./public/img//logos/accessibility-buttons-logo.svg" alt="Accessibility Buttons" width="600" /></p>

Botões para adicionar/remover contraste e aumentar/diminuir o tamanho da fonte.

[![Release](https://img.shields.io/npm/v/accessibility-buttons.svg?style=flat-square&label=release)](https://github.com/tiagoporto/accessibility-buttons/releases)
[![Downloads](https://img.shields.io/npm/d18m/accessibility-buttons.svg?style=flat-square)](https://www.npmjs.com/package/accessibility-buttons)
[![License](https://img.shields.io/github/license/tiagoporto/accessibility-buttons.svg?style=flat-square)](https://raw.githubusercontent.com/tiagoporto/accessibility-buttons/master/LICENSE)

<!-- [![Build Status](https://img.shields.io/travis/tiagoporto/accessibility-buttons/master.svg?style=flat-square&logo=travis&label=test)](https://travis-ci.org/tiagoporto/accessibility-buttons) -->

[![Coverage Status](https://img.shields.io/coverallsCoverage/github/tiagoporto/accessibility-buttons.svg?style=flat-square)](https://coveralls.io/github/tiagoporto/accessibility-buttons)

## Ler em outros idiomas

- 🇧🇷
- [🇺🇸](./README.md)

## Instalação

```bash
npm install accessibility-buttons --save
```

## Uso

Importe

- accessibility-buttons/dist/css/accessibility-buttons.css
- accessibility-buttons/dist/js/accessibility-buttons.js

Insira os botões

```html
<button type="button" data-accessibility="font">+A</button>
<button type="button" data-accessibility="contrast">Add Contrast</button>
```

Inicializando após o DOM ser carregado

```js
accessibilityButtons()
```

**Observação:** Font size só funciona com as unidades `em` ou `rem`.

## Configurações

Para configurar os `nomes dos botões` e `aria-labels`, use os seguinte parâmetros:

```js
// default values
accessibilityButtons({
  font: {
    nameButtonIncrease: '+A',
    ariaLabelButtonIncrease: 'Increase Font',
    nameButtonDecrease: '-A',
    ariaLabelButtonDecrease: 'Decrease Font'
  },

  contrast: {
    nameButtonAdd: 'Add Contrast',
    ariaLabelButtonAdd: 'Add Contrast',
    nameButtonRemove: 'Remove Contrast',
    ariaLabelButtonRemove: 'Remove Contrast'
  }
})
```

`Font size` e `cores do contraste` podem ser customizados sobrescrevendo as classes.

Exemplo

```css
body {
  font-size: 1em;
  color: #a9a9a9;
  background: #000;
}

body input,
body textarea,
body select,
body button {
  /* The default font-size of these elements is approximately 20% less than the body */
  font-size: 0.9em;
}

body.accessibility-font {
  font-size: 1.5em;
}

body.accessibility-font input,
body.accessibility-font textarea,
body.accessibility-font select,
body.accessibility-font button {
  /* The default font-size of these elements is approximately 20% less than the body */
  font-size: 1.2em;
}

body.accessibility-contrast {
  color: #000;
  background: #a9a9a9;
}
```

## Contribua

[Veja como contribuir](https://github.com/tiagoporto/.github/blob/main/CONTRIBUTING.md).

## Licença

Accessibility Buttons © 2015 por Tiago Porto está sob os termos da [MIT License](LICENSE).
