# Accessibility Buttons

[![Build Status](https://travis-ci.org/tiagoporto/accessibility-buttons.svg)](https://travis-ci.org/tiagoporto/accessibility-buttons)
[![Coverage Status](https://img.shields.io/coveralls/tiagoporto/accessibility-buttons.svg)](https://coveralls.io/github/tiagoporto/accessibility-buttons)
[![NPM Downloads](https://img.shields.io/npm/dt/accessibility-buttons.svg)](https://www.npmjs.com/package/accessibility-buttons)
[![Github Release](https://img.shields.io/github/release/tiagoporto/accessibility-buttons.svg)](https://github.com/tiagoporto/accessibility-buttons/releases)
[![Github Issues](https://img.shields.io/github/issues/tiagoporto/accessibility-buttons.svg)](https://github.com/tiagoporto/accessibility-buttons/issues)
[![Github License](https://img.shields.io/github/license/tiagoporto/accessibility-buttons.svg)](https://raw.githubusercontent.com/tiagoporto/accessibility-buttons/master/LICENSE.md)

Accessibility Buttons to add/remove contrast and increase/decrease font size.

## Table of Contents

* [Usage](#usage)
* [Settings](#settings)
* [Credits](#credits)
* [License](license)

## Usage

###Download with [Bower](http://bower.io/)

```sh
    $ bower install accessibility-buttons --save
```

###Download with [NPM](https://www.npmjs.com/)

```sh
    $ bower install accessibility-buttons --save
```

###Include the Files

    ```html
    <link rel="stylesheet" href="css/accessibility-buttons.css">


    <script src="js/accessibility-buttons.js"></script>
    ```


###Insert the Buttons

    ```html
    <button aria-label="Increase Font" id="accessibility-font" class="js-acessibility">+A</button>
    <button aria-label="Add Contrast" id="accessibility-contrast" class="js-acessibility">Add Contrast</button>
    ```

**Note:** To get `font-size` to work, it's necessary to use `em` or `rem` units.


###Initialize the Plugin

```
    accessibilityButtons();
```

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