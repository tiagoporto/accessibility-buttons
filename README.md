<p align="right"><img src="https://github.com/ellerbrock/open-source-badges/blob/master/badges/open-source-v3/open-source.svg" alt="Open Source Love"></p>

<p align="center"><img src="http://tiagoporto.github.io/accessibility-buttons/img/logos/accessibility-buttons-logo.svg" alt="Accessibility Buttons" width="600" /></p>

<p align="right">
  <code>LIKED ? Leave a <a href="https://github.com/tiagoporto/accessibility-buttons/stargazers">⭐</a> : <a href="https://github.com/tiagoporto/accessibility-buttons/issues">😞</a></code>
</p>

[![Release](https://img.shields.io/npm/v/accessibility-buttons.svg?style=flat-square&label=release)](https://github.com/tiagoporto/accessibility-buttons/releases)
[![Downloads](https://img.shields.io/npm/dt/accessibility-buttons.svg?style=flat-square)](https://www.npmjs.com/package/accessibility-buttons)
[![License](https://img.shields.io/github/license/tiagoporto/accessibility-buttons.svg?style=flat-square)](https://raw.githubusercontent.com/tiagoporto/accessibility-buttons/master/LICENSE)
<!-- [![Build Status](https://img.shields.io/travis/tiagoporto/accessibility-buttons/master.svg?style=flat-square&logo=travis&label=test)](https://travis-ci.org/tiagoporto/accessibility-buttons) -->
[![Coverage Status](https://img.shields.io/coveralls/tiagoporto/accessibility-buttons.svg?style=flat-square)](https://coveralls.io/github/tiagoporto/accessibility-buttons)
[![devDependencies Status](https://img.shields.io/david/dev/tiagoporto/accessibility-buttons.svg?style=flat-square)](https://david-dm.org/tiagoporto/accessibility-buttons?type=dev)

> Buttons to add/remove contrast and increase/decrease font size.

## Read in [other languages](translations/translations.md).

[🇧🇷](translations/README.pt_br.md)

## Install

```
npm install accessibility-buttons --save
```

## Usage

Import

- accessibility-buttons/dist/css/accessibility-buttons.css
- accessibility-buttons/dist/js/accessibility-buttons.js

Add buttons

```html
<button type="button" data-accessibility="font">+A</button>
<button type="button" data-accessibility="contrast">Add Contrast</button>
```

Initialize after DOM ready

```js
accessibilityButtons()
```

**Note:** Note: Font size works only with `em` or `rem` units.

# Settings

To set up `buttons names` and `aria-labels`, use the following parameters.

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

`Font size` and `contrast colors` could be customized only overwritting class values.

Example:

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


## Contributing

[Check how to contribute](CONTRIBUTING.md).

## Credits

Accessibility `arial-label` tip - [Bruno Pulis](https://github.com/brunopulis)

Included the `$` sign in the variable name of the cached elements for easy identification  - [Adler Parnas](https://github.com/adlerparnas)

## License

Accessibility Buttons is released under the terms of the [MIT license](https://github.com/tiagoporto/accessibility-buttons/blob/master/LICENSE).
