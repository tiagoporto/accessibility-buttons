/*!
*	Accessibility Buttons v3.0.1
*	https://github.com/tiagoporto/accessibility-buttons
*	Copyright (c) 2014-2015 Tiago Porto (http://www.tiagoporto.com)
*	Released under the MIT license
*/


/**
 * accessibilityButtons
 * @param  {Array}  -
 * @return
 */

/*exported accessibilityButtons */
var accessibilityButtons = function(options) {
	'use strict';

	/**
	* getCookie
	* @param  {string} cname - Cookie name
	* @return {string}       - Return the name of the cookie if they exist or return empty
	*/
	function getCookie(cname){
		var name = cname + '=';
		var ca = document.cookie.split(';');
		for(var i=0; i<ca.length; i++){
			var c = ca[i].trim();
			if (c.indexOf(name)===0){
				return c.substring(name.length,c.length);
			}
		}
		return '';
	}

	/**
	 * hasClass
	 * @param  {string}  element - DOM element
	 * @param  {string}  clazz   - Class Name
	 * @return {Boolean}
	 */
	function hasClass(element, clazz) {
		return (' ' + element.className + ' ' ).indexOf( ' '+clazz+' ' ) > -1;
	}

	var setting = {
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
	};

	// Set buttons name and aria label
	if (options) {
		for (var key in options) {

			if(options.hasOwnProperty(i)) {

				var obj = options[key];

				for (var prop in obj) {
					if(obj.hasOwnProperty(i)) {
						setting[key][prop] = obj[prop];
					}
				}
			}
		}
	}

	var	$_body = document.body,
		$_fontButton = document.getElementById('accessibility-font'),
		$_contrastButton = document.getElementById('accessibility-contrast'),
		$_accessibilityButtons = document.getElementsByClassName('js-acessibility'),

		cookieFont = getCookie('accessibility_font'),
		cookieContrast = getCookie('accessibility_contrast');

	// Check if exist cookies and set the correct button names and aria attributes
	if (cookieFont) {
		$_body.classList.add('accessibility-font');

		$_fontButton.innerHTML = setting.font.nameButtonDecrease;
		$_fontButton.setAttribute('aria-label', setting.font.ariaLabelButtonDecrease);
	}else{
		$_fontButton.innerHTML = setting.font.nameButtonIncrease;
		$_fontButton.setAttribute('aria-label', setting.font.ariaLabelButtonIncrease);
	}

	if (cookieContrast) {
		$_body.classList.add('accessibility-contrast');

		$_contrastButton.innerHTML = setting.contrast.nameButtonRemove;
		$_contrastButton.setAttribute('aria-label', setting.contrast.ariaLabelButtonRemove);
	}else{
		$_contrastButton.innerHTML = setting.contrast.nameButtonAdd;
		$_contrastButton.setAttribute('aria-label', setting.contrast.ariaLabelButtonAdd);
	}

	/**
	 * Get the click event
	 * Rename the buttons
	 * Apply/Remove Contrast or Font Size
	 * Manage cookies
	 */
	function accessibility() {
		return function () {
			var $_this = this;

			if(hasClass($_body, $_this.getAttribute('id'))){
				$_body.classList.remove($_this.getAttribute('id'));

				if ($_this.getAttribute('id') === 'accessibility-font') {
					$_this.innerHTML = setting.font.nameButtonIncrease;
					$_this.setAttribute('aria-label', setting.font.ariaLabelButtonIncrease);

					document.cookie = 'accessibility_font=True; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
				}else{
					$_this.innerHTML = setting.contrast.nameButtonAdd;
					$_this.setAttribute('aria-label', setting.contrast.ariaLabelButtonAdd);

					document.cookie = 'accessibility_contrast=True; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
				}
			}else{
				$_body.classList.add($_this.getAttribute('id'));

				if ($_this.getAttribute('id') === 'accessibility-font') {
					if (!cookieFont) {
						document.cookie = 'accessibility_font=True; path=/';
					}
					$_this.innerHTML = setting.font.nameButtonDecrease;
					$_this.setAttribute('aria-label', setting.font.ariaLabelButtonDecrease);

				}else{
					if (!cookieContrast) {
						document.cookie = 'accessibility_contrast=True; path=/';
					}
					$_this.innerHTML = setting.contrast.nameButtonRemove;
					$_this.setAttribute('aria-label', setting.contrast.ariaLabelButtonRemove);
				}
			}
		};
	}

	// Listening Click Event
	for(var i = 0; i < $_accessibilityButtons.length; i++) {
		$_accessibilityButtons[i].addEventListener('click', accessibility());
	}
};