<p align="right"><img src="https://badges.frapsoft.com/os/v3/open-source.svg?v=103" alt="Open Source Love"></p>
<p align="center"><img src="http://tiagoporto.github.io/accessibility-buttons/img/logos/accessibility-buttons-logo.svg" alt="Accessibility Buttons" width="600" /></p>

<p align="right">
  <code>CURTIU ? Deixe uma <a href="https://github.com/tiagoporto/accessibility-buttons/stargazers">⭐</a> : <a href="https://github.com/tiagoporto/accessibility-buttons/issues">😞</a></code>
</p>

[![Release](https://img.shields.io/npm/v/accessibility-buttons.svg?style=flat-square&label=release)](https://github.com/tiagoporto/accessibility-buttons/releases)
[![Downloads](https://img.shields.io/npm/dt/accessibility-buttons.svg?style=flat-square)](https://www.npmjs.com/package/accessibility-buttons)
[![License](https://img.shields.io/github/license/tiagoporto/accessibility-buttons.svg?style=flat-square)](https://raw.githubusercontent.com/tiagoporto/accessibility-buttons/master/LICENSE)
[![Build Status](https://img.shields.io/travis/tiagoporto/accessibility-buttons/master.svg?style=flat-square&logo=travis&label=test)](https://travis-ci.org/tiagoporto/accessibility-buttons)
[![Coverage Status](https://img.shields.io/coveralls/tiagoporto/accessibility-buttons.svg?style=flat-square)](https://coveralls.io/github/tiagoporto/accessibility-buttons)
[![devDependencies Status](https://img.shields.io/david/dev/tiagoporto/accessibility-buttons.svg?style=flat-square)](https://david-dm.org/tiagoporto/accessibility-buttons?type=dev)

> Botões para adicionar/remover contraste e aumentar/diminuir o tamanho da fonte.

## Ler em [outros idiomas](translations/Translations.md).

[🇺🇸](../README.md)

## Índice

* [Como usar](#como-usar)
* [Configurações](#configurações)
* [Contribuindo](#contribuindo)
* [Creditos](#creditos)
* [Licença](#licença)

## Como usar

Baixe com o [NPM](https://npmjs.com)

```
npm install accessibility-buttons --save
```

Inclua os arquivos

```html
<!DOCTYPE html>
<html>
<head>
    <!-- css dos botões -->
	<link rel="stylesheet" href="node_modules/accessibility-buttons/dist/css/accessibility-buttons.css">
</head>
<body>
	<!-- conteúdo da página -->

    <!-- javascript dos botões -->
	<script src="node_modules/accessibility-buttons/dist/js/accessibility-buttons.js"></script>
</body>
</html>
```


Inserir os botões

```html
<!DOCTYPE html>
<html>
<head>
    <!-- css dos botões -->
	<link rel="stylesheet" href="node_modules/accessibility-buttons/dist/css/accessibility-buttons.css">
</head>
<body>
    <!-- Exemplo de botões -->
    <button aria-label="Increase Font" id="accessibility-font" class="js-acessibility">+A</button>
    <button aria-label="Add Contrast" id="accessibility-contrast" class="js-acessibility">Add Contrast</button>

	<!-- conteúdo da página -->

    <!-- javascript dos botões -->
	<script src="node_modules/accessibility-buttons/dist/js/accessibility-buttons.js"></script>
</body>
</html>
```


Inicializando o plugin após o DOM ser carregado

Se você não usa jQuery (suporte para IE9+)
```js
function ready(fn) {
    if (document.readyState !== 'loading') {
        fn()
    } else {
        document.addEventListener('DOMContentLoaded', fn)
    }
}

ready(function() {
    accessibilityButtons()
});
```

Se você usa Jquery
```js
$(document).ready(function() {
    accessibilityButtons()
})
```

**Observação:** É necessário usar as unidades `em` ou `rem` no `font-size` (tamanho da fonte).

# Configurações

Para configurar os nomes dos botões e aria-labels, invoque o plugin com opções adicionais, como é mostrado abaixo:

```javascript
accessibilityButtons({
    font: {
        nameButtonIncrease: '+A', // Default
        ariaLabelButtonIncrease: 'Increase Font', // Default
        nameButtonDecrease: '-A', // Default
        ariaLabelButtonDecrease: 'Decrease Font' // Default
    },

    contrast: {
        nameButtonAdd: 'Add Contrast', // Default
        ariaLabelButtonAdd: 'Add Contrast', // Default
        nameButtonRemove: 'Remove Contrast', // Default
        ariaLabelButtonRemove: 'Remove Contrast' // Default
    }
})
```

Para alterar o `font-size` (tamanho da fonte) e cores de contraste, altere os valores no arquivo CSS: `accessibility-buttons.css`.

```css
.accessibility-font {
  /* O primeiro `font-size` (tamanho de fonte) é o padrão e o segundo é para o modo fallback em navegadores antigos */
  font-size: 1.25em;
  font-size: 1.25rem;
}

.accessibility-contrast {
  color: #fff;
  background: #000;
}
```


## Contribuindo

[Veja como contribuir](CONTRIBUTING.md).

## Creditos

Dica de acessibilidade `arial-label` - [Bruno Pulis](https://github.com/brunopulis)

Incluido o sinal `$` no nome da variável dos elementos cacheados para facilitar a identificação - [Adler Parnas](https://github.com/adlerparnas)

## Licença

Accessibility Buttons é lançado sob os termos da licença [MIT license](https://github.com/tiagoporto/accessibility-buttons/blob/master/LICENSE).
