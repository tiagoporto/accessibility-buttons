# Accessibility Buttons

Version: 2.0.0

**Accessibility functions**

* Contrast
* Font Size

[Example Page](http://tiagoporto.github.io/accessibility-buttons/)

## Usage

* Requires [Jquery](http://jquery.com/download/).

* Include `accessibility-buttons.js` or `accessibility-buttons.min.js` and `accessibility-buttons.css`.

* Insert the buttons in HTML

	```html
	<button aria-label="" id="accessibility-font" class="js-acessibility"></button>
	<button aria-label="" id="accessibility-contrast" class="js-acessibility"></button>
	```

**Note:** To `font-size` works, it's necessary work with `em` unit.

##Configure

To setup names and buttons aria-labels, change the variables in the `accessibility-buttons.js` or `accessibility-buttons.min.js` at the initial lines.

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
/* Accessibility */
.accessibility-font {
	font-size: 1.125em;
}

.accessibility-contrast {
	color: white;
	background: black;
}
```

##Bower

To download with [Bower](http://bower.io/)

```sh
	$ bower install accessibility-buttons --save
```

##Credit

Accessibility `arial-label` tip - [Bruno Pulis](https://github.com/brunopulis)

Included the $ sign in the name of the jQuery element cache variable for easy identification  - [Adler Parnas](https://github.com/adlerparnas)

##License
[MIT License](http://opensource.org/licenses/MIT)





