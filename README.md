# Accessibility Buttons

[![Build Status](https://travis-ci.org/tiagoporto/accessibility-buttons.svg?branch=master&style=flat-square)](https://travis-ci.org/tiagoporto/accessibility-buttons)
[![Coverage Status](https://img.shields.io/coveralls/tiagoporto/accessibility-buttons.svg)](https://coveralls.io/github/tiagoporto/accessibility-buttons)
[![Github Release](https://img.shields.io/github/release/tiagoporto/accessibility-buttons.svg)](https://github.com/tiagoporto/accessibility-buttons/releases)
[![Github License](https://img.shields.io/github/license/tiagoporto/accessibility-buttons.svg)](http://opensource.org/licenses/MIT)

Accessibility Buttons to add/remove contrast and increase/decrease font size.


## Usage

Download with [Bower](http://bower.io/)

```sh
	$ bower install accessibility-buttons --save
```

* Include the files

    ```html
    <link rel="stylesheet" href="css/accessibility-buttons.css">


    <script src="js/accessibility-buttons.js"></script>
    ```


* Insert the buttons

	```html
	<button aria-label="Increase Font" id="accessibility-font" class="js-acessibility">+A</button>
	<button aria-label="Add Contrast" id="accessibility-contrast" class="js-acessibility">Add Contrast</button>
	```

**Note:** To `font-size` works, it's necessary work with `em` or `rem` units.


Init the plugin

```
    accessibilityButtons();
```

# Settings

To setup buttons names and aria-labels, call the plugin with additional options.

```javascript
    accessibilityButtons({
        font: {
            nameButtonIncrease: '+A', //Default
            ariaLabelButtonIncrease: 'Increase Font', //Default
            nameButtonDecrease: '-A', //Default
            ariaLabelButtonDecrease: 'Decrease Font' //Default
        },

        contrast: {
            nameButtonAdd: 'Add Contrast', //Default
            ariaLabelButtonAdd: 'Add Contrast', //Default
            nameButtonRemove: 'Remove Contrast', //Default
            ariaLabelButtonRemove: 'Remove Contrast' //Default
        }
    });
```

To change font-size and contrast colors change the values in the `accessibility-buttons.css`.

```css
.accessibility-font {
/* First font-size fallback to older browsers*/
  font-size: 1.25em;
  font-size: 1.25rem;
}

.accessibility-contrast {
  color: #fff;
  background: #000;
}
```


## Credits

Accessibility `arial-label` tip - [Bruno Pulis](https://github.com/brunopulis)

Included the $ sign in the variable name of the cached elements for easy identification  - [Adler Parnas](https://github.com/adlerparnas)

## License

Accessibility Buttons is released under the terms of the [MIT license](http://opensource.org/licenses/MIT).
