<p align="right"><img src="https://badges.frapsoft.com/os/v3/open-source.svg?v=103" alt="Open Source Love"></p>
<p align="center"><img src="http://tiagoporto.github.io/accessibility-buttons/img/logos/accessibility-buttons-logo.svg" alt="Accessibility Buttons" width="600" /></p>

<p align="right">
  <code>CURTIU ? Deixe uma <a href="https://github.com/tiagoporto/accessibility-buttons/stargazers">⭐</a> : <a href="https://github.com/tiagoporto/accessibility-buttons/issues">😞</a></code>
</p>

[![Release](https://img.shields.io/npm/v/accessibility-buttons.svg?style=flat-square&label=release)](https://github.com/tiagoporto/accessibility-buttons/releases)
[![Downloads](https://img.shields.io/npm/dt/accessibility-buttons.svg?style=flat-square)](https://www.npmjs.com/package/accessibility-buttons)
[![License](https://img.shields.io/github/license/tiagoporto/accessibility-buttons.svg?style=flat-square)](https://raw.githubusercontent.com/tiagoporto/accessibility-buttons/master/LICENSE)
<!-- [![Build Status](https://img.shields.io/travis/tiagoporto/accessibility-buttons/master.svg?style=flat-square&logo=travis&label=test)](https://travis-ci.org/tiagoporto/accessibility-buttons) -->
[![Coverage Status](https://img.shields.io/coveralls/tiagoporto/accessibility-buttons.svg?style=flat-square)](https://coveralls.io/github/tiagoporto/accessibility-buttons)
[![devDependencies Status](https://img.shields.io/david/dev/tiagoporto/accessibility-buttons.svg?style=flat-square)](https://david-dm.org/tiagoporto/accessibility-buttons?type=dev)

> Botões para adicionar/remover contraste e aumentar/diminuir o tamanho da fonte.

## Ler em [outros idiomas](./translations.md).

[🇺🇸](../README.md)

## Instalação

```
npm install accessibility-buttons --save
```
## Usage

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

# Configurações

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

`Font size` e `cores do contraste` podem ser customizados sobreescrevendo as classes.

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

[Veja como contribuir](CONTRIBUTING.md).

## Créditos

Dica de acessibilidade `arial-label` - [Bruno Pulis](https://github.com/brunopulis)

Incluido o sinal `$` no nome da variável dos elementos cacheados para facilitar a identificação - [Adler Parnas](https://github.com/adlerparnas)

## Licença

Accessibility Buttons é lançado sob os termos da licença [MIT license](https://github.com/tiagoporto/accessibility-buttons/blob/master/LICENSE).
