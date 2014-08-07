# Accessibility Buttons

Accessibility functions

* Contrast

* Font Size


[Example Page](http://tiagoporto.github.io/accessibility/)

## Usage

* Requires [Jquery](http://jquery.com/download/).

* Include `main.js` or `main.min.js` and `styles.css`.

* Insert the buttons in HTML

	```html
	<button title="" id="accessibility-font" class="js-acessibility"></button>
	<button title="" id="accessibility-contrast" class="js-acessibility"></button>
	```

To `font-size` works it's necessary work with `em` unit.

##Configure

To setup names and buttons titles, change the variables in the `main.js` or `main.min.js` at the initial lines.

```javascript
	//Font Button
	var nameButtonIncreaseFont = "+A";
	var nameTitleButtonIncreaseFont = "Increase Font";

	var nameButtonDecreaseFont = "-A";
	var nameTitleButtonDecreaseFont = "Decrease Font";

	//Contrast Button
	var nameButtonAddContrast = "Add Contrast";
	var nameTitleButtonAddContrast = "Add Contrast";

	var nameButtonRemoveContrast = "Remove Contrast";
	var nameTitleButtonRemoveContrast = "Remove Contrast";
```

To change font-size and contrast colors change the values in the `styles.css`.

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



