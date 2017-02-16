# Accessibility Buttons

[![Build Status](https://travis-ci.org/tiagoporto/accessibility-buttons.svg)](https://travis-ci.org/tiagoporto/accessibility-buttons)
[![Coverage Status](https://img.shields.io/coveralls/tiagoporto/accessibility-buttons.svg)](https://coveralls.io/github/tiagoporto/accessibility-buttons)
[![devDependencies Status](https://david-dm.org/tiagoporto/accessibility-buttons/dev-status.svg)](https://david-dm.org/tiagoporto/accessibility-buttons?type=dev)
[![NPM Downloads](https://img.shields.io/npm/dt/accessibility-buttons.svg)](https://www.npmjs.com/package/accessibility-buttons)
[![Github Release](https://img.shields.io/github/release/tiagoporto/accessibility-buttons.svg)](https://github.com/tiagoporto/accessibility-buttons/releases)
[![Github License](https://img.shields.io/github/license/tiagoporto/accessibility-buttons.svg)](https://raw.githubusercontent.com/tiagoporto/accessibility-buttons/master/LICENSE.md)

Buttons to add/remove contrast and increase/decrease font size.

<p align="right">
  <img src="http://icons.iconarchive.com/icons/icons8/christmas-flat-color/256/star-icon.png" alt="Star" height="25"><img src="http://icons.iconarchive.com/icons/icons8/christmas-flat-color/256/star-icon.png" alt="Star" height="25"><img src="http://icons.iconarchive.com/icons/icons8/christmas-flat-color/256/star-icon.png" alt="Star" height="25"><br>
  <code>LIKE ? Leave a <a href="https://github.com/tiagoporto/accessibility-buttons">Star</a> : Make a DEV sad</code>
</p>


## Table of Contents

* [Usage](#usage)
* [Settings](#settings)
* [Credits](#credits)
* [License](#license)

## Usage

Download with [NPM](https://npmjs.com)

```sh
$ npm install accessibility-buttons --save
```

Or download with [Bower](http://bower.io/)

```sh
$ bower install accessibility-buttons --save
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
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

ready(function() {
    accessibilityButtons();
});
```

If you use jQuery
```js
$(document).ready(function() {
    accessibilityButtons();
})
```

**Note:** To get `font-size` to work, it's necessary to use `em` or `rem` units.

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
});
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

[See how to contribute](CONTRIBUTING.md).

## Credits

Accessibility `arial-label` tip - [Bruno Pulis](https://github.com/brunopulis)

Included the `$` sign in the variable name of the cached elements for easy identification  - [Adler Parnas](https://github.com/adlerparnas)

## License

Accessibility Buttons is released under the terms of the [MIT license](https://github.com/tiagoporto/accessibility-buttons/blob/master/LICENSE).
