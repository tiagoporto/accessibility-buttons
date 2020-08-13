/**
 * accessibilityButtons
 * @param  {Array}  -
 * @return
 */

/* exported accessibilityButtons */
const accessibilityButtons = options => {
    'use strict';

    /**
     * hasClass
     * @param  {string}  element - DOM element
     * @param  {string}  clazz   - Class Name
     * @return {Boolean}
     */
    function hasClass(element, clazz) {
        return (` ${element.className} `).indexOf(` ${clazz} `) > -1;
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
            if (options.hasOwnProperty(key)) {
                var obj = options[key];

                for (var prop in obj) {
                    if (obj.hasOwnProperty(prop)) {
                        setting[key][prop] = obj[prop];
                    }
                }
            }
        }
    }

    var $body = document.body,
        $accessibilityButtons = [...document.querySelectorAll('[data-accessibility]')],
        $fontButton = $accessibilityButtons.filter(button => { return button.getAttribute('data-accessibility') === 'font' }),
        $contrastButton = $accessibilityButtons.filter(button => { return button.getAttribute('data-accessibility') === 'contrast' }),
        storageFont = localStorage.accessibility_font,
        storageContrast = localStorage.accessibility_contrast;

    // Check if exist storage and set the correct button names and aria attributes
    if (storageFont && $fontButton) {
        $body.classList.add('accessibility-font');

        $fontButton.forEach(button => {
            button.innerHTML = setting.font.nameButtonDecrease;
            button.setAttribute('aria-label', setting.font.ariaLabelButtonDecrease);
        })
    } else if ($fontButton) {
        $fontButton.forEach(button => {
            button.innerHTML = setting.font.nameButtonIncrease;
            button.setAttribute('aria-label', setting.font.ariaLabelButtonIncrease);
        })
    }

    if (storageContrast && $contrastButton) {
        $body.classList.add('accessibility-contrast');

        $contrastButton.forEach(button => {
            button.innerHTML = setting.contrast.nameButtonRemove;
            button.setAttribute('aria-label', setting.contrast.ariaLabelButtonRemove);
        })
    } else if ($contrastButton) {
        $contrastButton.forEach(button => {
            button.innerHTML = setting.contrast.nameButtonAdd;
            button.setAttribute('aria-label', setting.contrast.ariaLabelButtonAdd);
        })
    }

    /**
     * Get the click event
     * Rename the buttons
     * Apply/Remove Contrast or Font Size
     * Manage storage
     */
    function accessibility() {
        return function () {
            const $this = this;
            const type = $this.getAttribute('data-accessibility')
            const classname = `accessibility-${type}`


            if (hasClass($body, classname)) {
                $body.classList.remove(classname);

                if (type === 'font') {
                    $fontButton.forEach(button => {
                        button.innerHTML = setting.font.nameButtonIncrease;
                        button.setAttribute('aria-label', setting.font.ariaLabelButtonIncrease);
                    })

                    localStorage.removeItem('accessibility_font');
                } else if (type === 'contrast') {
                    $contrastButton.forEach(button => {
                        button.innerHTML = setting.contrast.nameButtonAdd;
                        button.setAttribute('aria-label', setting.contrast.ariaLabelButtonAdd);
                    })

                    localStorage.removeItem('accessibility_contrast');
                }
            } else {
                $body.classList.add(classname);

                if (type === 'font') {
                    if (!storageFont) {
                        localStorage.setItem('accessibility_font', true);
                    }
                    $fontButton.forEach(button => {
                        button.innerHTML = setting.font.nameButtonDecrease;
                        button.setAttribute('aria-label', setting.font.ariaLabelButtonDecrease);
                    })
                } else if (type === 'contrast') {
                    if (!storageContrast) {
                        localStorage.setItem('accessibility_contrast', true);
                    }
                    $contrastButton.forEach(button => {
                        button.innerHTML = setting.contrast.nameButtonRemove;
                        button.setAttribute('aria-label', setting.contrast.ariaLabelButtonRemove);
                    })
                }
            }
        };
    }

    // Listening Click Event
    for (var i = 0; i < $accessibilityButtons.length; i++) {
        $accessibilityButtons[i].addEventListener('click', accessibility());
    }
};
