/*!
*	Accessibility Buttons v3.0.0
*	https://github.com/tiagoporto/accessibility-buttons
*	Copyright (c) 2014-2015 Tiago Porto (http://www.tiagoporto.com)
*	Released under the MIT license
*/

	//Font Button
var	nameButtonIncreaseFont		  = '+A',
	ariaLabelButtonIncreaseFont   = 'Increase Font',
	nameButtonDecreaseFont		  = '-A',
	ariaLabelButtonDecreaseFont   = 'Decrease Font',

	//Contrast Button
	nameButtonAddContrast		  = 'Add Contrast',
	ariaLabelButtonAddContrast 	  = 'Add Contrast',
	nameButtonRemoveContrast	  = 'Remove Contrast',
	ariaLabelButtonRemoveContrast = 'Remove Contrast',

	//Cache Elements
	$_body = document.body,
	$_fontButton = document.getElementById('accessibility-font'),
	$_contrastButton = document.getElementById('accessibility-contrast'),
	$_accessibilityButtons = document.getElementsByClassName('js-acessibility'),

	//Cookies
	cookieFont = getCookie('accessibility_font'),
	cookieContrast = getCookie('accessibility_contrast');

// Functions
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

function hasClass(element, clazz) {
	return (' ' + element.className + ' ' ).indexOf( ' '+clazz+' ' ) > -1;
}

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload !== 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            if (oldonload) {
                oldonload();
            }
            func();
        };
    }
}

// Init
addLoadEvent(function(){
	//Set buttons names and aria attributes
	if (cookieFont) {
		$_body.classList.add('accessibility-font');

		$_fontButton.innerHTML = nameButtonDecreaseFont;
		$_fontButton.setAttribute('aria-label', ariaLabelButtonDecreaseFont);
	}else{
		$_fontButton.innerHTML = nameButtonIncreaseFont;
		$_fontButton.setAttribute('aria-label', ariaLabelButtonIncreaseFont);
	}

	if (cookieContrast) {
		$_body.classList.add('accessibility-contrast');

		$_contrastButton.innerHTML = nameButtonRemoveContrast;
		$_contrastButton.setAttribute('aria-label', ariaLabelButtonRemoveContrast);
	}else{
		$_contrastButton.innerHTML = nameButtonAddContrast;
		$_contrastButton.setAttribute('aria-label', ariaLabelButtonAddContrast);
	}

	function makeClickHandler(i) {
		return function () {
			var $_this = this;

			if(hasClass($_body, $_this.getAttribute('id'))){
				$_body.classList.remove($_this.getAttribute('id'));

				if ($_this.getAttribute('id') === 'accessibility-font') {
					$_this.innerHTML = nameButtonIncreaseFont;
					$_this.setAttribute('aria-label', ariaLabelButtonIncreaseFont);

					document.cookie = 'accessibility_font=True; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
				}else{
					$_this.innerHTML = nameButtonAddContrast;
					$_this.setAttribute('aria-label', ariaLabelButtonAddContrast);

					document.cookie = 'accessibility_contrast=True; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
				}
			}else{
				$_body.classList.add($_this.getAttribute('id'));

				if ($_this.getAttribute('id') === 'accessibility-font') {
					if (!cookieFont) {
						document.cookie = 'accessibility_font=True; path=/';
					}
					$_this.innerHTML = nameButtonDecreaseFont;
					$_this.setAttribute('aria-label', ariaLabelButtonDecreaseFont);

				}else{
					if (!cookieContrast) {
						document.cookie = 'accessibility_contrast=True; path=/';
					}
					$_this.innerHTML = nameButtonRemoveContrast;
					$_this.setAttribute('aria-label', ariaLabelButtonRemoveContrast);
				}
			}
		};
	}

	//get onclick
	for(var i = 0; i < $_accessibilityButtons.length; i++) {
		$_accessibilityButtons[i].addEventListener('click', makeClickHandler(i));
	}
});
