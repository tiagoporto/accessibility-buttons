# Accessibility Buttons

Accessibility Buttons to contrast and font size. [Demo Page](http://tiagoporto.github.io/accessibility-buttons/)

__Version:__ 3.0.0

**Accessibility functions**

* Contrast
* Font Size


## Usage

* Include the files

    ```html
    <link rel="stylesheet" href="css/accessibility-buttons.css">
    ```

    ```html
    <script src="js/accessibility-buttons.js"></script>
    ```


* Insert the buttons

	```html
	<button aria-label="" id="accessibility-font" class="js-acessibility"></button>
	<button aria-label="" id="accessibility-contrast" class="js-acessibility"></button>
	```

**Note:** To `font-size` works, it's necessary work with `em` or `rem` unitr.

## Configure

To setup buttons names and aria-labels, change the variables in the `accessibility-buttons.js`.

```javascript
	//Font Button
	var nameButtonIncreaseFont		  = "+A",
		ariaLabelButtonIncreaseFont   = "Increase Font",
		nameButtonDecreaseFont		  = "-A",
		ariaLabelButtonDecreaseFont   = "Decrease Font",
	//Contrast Button
		nameButtonAddContrast		  = "Add Contrast",
		ariaLabelButtonAddContrast 	  = "Add Contrast",
		nameButtonRemoveContrast	  = "Remove Contrast",
		ariaLabelButtonRemoveContrast = "Remove Contrast",
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

##Bower

To download with [Bower](http://bower.io/)

```sh
	$ bower install accessibility-buttons --save
```

## Credits

Accessibility `arial-label` tip - [Bruno Pulis](https://github.com/brunopulis)

Included the $ sign in the variable name of the cached elements for easy identification  - [Adler Parnas](https://github.com/adlerparnas)

## License

Accessibility Buttons is released under the terms of the [MIT license](http://opensource.org/licenses/MIT).