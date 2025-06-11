# accessibility-buttons

Buttons to add/remove contrast and increase/decrease font size.

[![Release](https://img.shields.io/npm/v/accessibility-buttons.svg?style=flat-square&label=release)](https://github.com/tiagoporto/accessibility-buttons/releases)
[![Downloads](https://img.shields.io/npm/d18m/accessibility-buttons.svg?style=flat-square)](https://www.npmjs.com/package/accessibility-buttons)
[![License](https://img.shields.io/github/license/tiagoporto/accessibility-buttons.svg?style=flat-square)](https://raw.githubusercontent.com/tiagoporto/accessibility-buttons/master/LICENSE)

[![Coverage Status](https://img.shields.io/coverallsCoverage/github/tiagoporto/accessibility-buttons.svg?style=flat-square)](https://coveralls.io/github/tiagoporto/accessibility-buttons)

## Read in other languages

- [🇧🇷](./README.pt-br.md)
- 🇺🇸

## Install

```bash
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

## Settings

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

[Check how to contribute](https://github.com/tiagoporto/.github/blob/main/CONTRIBUTING.md).

## License

Accessibility Buttons © 2015 by Tiago Porto is licensed under [MIT License](LICENSE).
