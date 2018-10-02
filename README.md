<p align="right"><img src="https://badges.frapsoft.com/os/v3/open-source.svg?v=103" alt="Open Source Love"></p>
<p align="center"><img src="http://tiagoporto.github.io/accessibility-buttons/img/logos/accessibility-buttons-logo.svg" alt="Accessibility Buttons" width="600" /></p>

<p align="right">
  <code>LIKED ? Leave a <a href="https://github.com/tiagoporto/accessibility-buttons/stargazers">⭐</a> : <a href="https://github.com/tiagoporto/accessibility-buttons/issues">😞</a></code>
</p>

[![Release](https://img.shields.io/npm/v/accessibility-buttons.svg?style=flat-square&label=release)](https://github.com/tiagoporto/accessibility-buttons/releases)
[![Downloads](https://img.shields.io/npm/dt/accessibility-buttons.svg?style=flat-square)](https://www.npmjs.com/package/accessibility-buttons)
[![License](https://img.shields.io/github/license/tiagoporto/accessibility-buttons.svg?style=flat-square)](https://raw.githubusercontent.com/tiagoporto/accessibility-buttons/master/LICENSE)
[![Build Status](https://img.shields.io/travis/tiagoporto/accessibility-buttons/master.svg?style=flat-square&logo=travis&label=test)](https://travis-ci.org/tiagoporto/accessibility-buttons)
[![Coverage Status](https://img.shields.io/coveralls/tiagoporto/accessibility-buttons.svg?style=flat-square)](https://coveralls.io/github/tiagoporto/accessibility-buttons)
[![devDependencies Status](https://img.shields.io/david/dev/tiagoporto/accessibility-buttons.svg?style=flat-square)](https://david-dm.org/tiagoporto/accessibility-buttons?type=dev)

> Buttons to add/remove contrast and increase/decrease font size.

#### *Read this in [other languages](translations/Translations.md).*

[🇧🇷](translations/README.hi.md) [🇲🇲](translations/README.mm_unicode.md) [🇮🇩]

## Table of Contents

* [Usage](#usage)
* [Settings](#settings)
* [Credits](#credits)
* [License](#license)

## Usage

Download with [NPM](https://npmjs.com)

```
npm install accessibility-buttons --save
```

Include the Files

```html
<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" href="node_modules/accessibility-buttons/dist/css/accessibility-buttons.css">
</head>
<body>
	<!-- content -->

	<script src="node_modules/accessibility-buttons/dist/js/accessibility-buttons.js"></script>
</body>
</html>
```


Insert the Buttons

```html
<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" href="node_modules/accessibility-buttons/dist/css/accessibility-buttons.css">
</head>
<body>
    <button aria-label="Increase Font" id="accessibility-font" class="js-acessibility">+A</button>
    <button aria-label="Add Contrast" id="accessibility-contrast" class="js-acessibility">Add Contrast</button>

	<!-- content -->

	<script src="node_modules/accessibility-buttons/dist/js/accessibility-buttons.js"></script>
</body>
</html>
```


Initialize the Plugin after the dom ready

If you don't use jQuery (support IE9+)
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

If you use jQuery
```js
$(document).ready(function() {
    accessibilityButtons()
})
```

**Note:** It's necessary use `em` or `rem` units in `font-size`.

# Settings

To set up button names and aria-labels, call the plugin with additional options as shown below:

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

To change `font-size` and contrast colors, change the values in the `accessibility-buttons.css`.

```css
.accessibility-font {
  /* First font-size fallback to older browsers */
  font-size: 1.25em;
  font-size: 1.25rem;
}

.accessibility-contrast {
  color: #fff;
  background: #000;
}
```


## Contributing

[Check how to contribute](CONTRIBUTING.md).

## Credits

Accessibility `arial-label` tip - [Bruno Pulis](https://github.com/brunopulis)

Included the `$` sign in the variable name of the cached elements for easy identification  - [Adler Parnas](https://github.com/adlerparnas)

## License

Accessibility Buttons is released under the terms of the [MIT license](https://github.com/tiagoporto/accessibility-buttons/blob/master/LICENSE).
