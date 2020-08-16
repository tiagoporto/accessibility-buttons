/*!
*   Accessibility Buttons v4.0.0
*   http://tiagoporto.github.io/accessibility-buttons
*   Copyright (c) 2014-present Tiago Porto (http://tiagoporto.com)
*   Released under the MIT license
*/

"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * accessibilityButtons
 * @param  {Array}  -
 * @return
 */

/* exported accessibilityButtons */
var accessibilityButtons = function accessibilityButtons(options) {
  'use strict';
  /**
   * hasClass
   * @param  {string}  element - DOM element
   * @param  {string}  clazz   - Class Name
   * @return {Boolean}
   */

  function hasClass(element, clazz) {
    return " ".concat(element.className, " ").indexOf(" ".concat(clazz, " ")) > -1;
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
  }; // Set buttons name and aria label

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
      $accessibilityButtons = _toConsumableArray(document.querySelectorAll('[data-accessibility]')),
      $fontButton = $accessibilityButtons.filter(function (button) {
    return button.getAttribute('data-accessibility') === 'font';
  }),
      $contrastButton = $accessibilityButtons.filter(function (button) {
    return button.getAttribute('data-accessibility') === 'contrast';
  }),
      storageFont = localStorage.accessibility_font,
      storageContrast = localStorage.accessibility_contrast; // Check if exist storage and set the correct button names and aria attributes


  if (storageFont && $fontButton) {
    $body.classList.add('accessibility-font');
    $fontButton.forEach(function (button) {
      button.innerHTML = setting.font.nameButtonDecrease;
      button.setAttribute('aria-label', setting.font.ariaLabelButtonDecrease);
    });
  } else if ($fontButton) {
    $fontButton.forEach(function (button) {
      button.innerHTML = setting.font.nameButtonIncrease;
      button.setAttribute('aria-label', setting.font.ariaLabelButtonIncrease);
    });
  }

  if (storageContrast && $contrastButton) {
    $body.classList.add('accessibility-contrast');
    $contrastButton.forEach(function (button) {
      button.innerHTML = setting.contrast.nameButtonRemove;
      button.setAttribute('aria-label', setting.contrast.ariaLabelButtonRemove);
    });
  } else if ($contrastButton) {
    $contrastButton.forEach(function (button) {
      button.innerHTML = setting.contrast.nameButtonAdd;
      button.setAttribute('aria-label', setting.contrast.ariaLabelButtonAdd);
    });
  }
  /**
   * Get the click event
   * Rename the buttons
   * Apply/Remove Contrast or Font Size
   * Manage storage
   */


  function accessibility() {
    return function () {
      var $this = this;
      var type = $this.getAttribute('data-accessibility');
      var classname = "accessibility-".concat(type);

      if (hasClass($body, classname)) {
        $body.classList.remove(classname);

        if (type === 'font') {
          $fontButton.forEach(function (button) {
            button.innerHTML = setting.font.nameButtonIncrease;
            button.setAttribute('aria-label', setting.font.ariaLabelButtonIncrease);
          });
          localStorage.removeItem('accessibility_font');
        } else if (type === 'contrast') {
          $contrastButton.forEach(function (button) {
            button.innerHTML = setting.contrast.nameButtonAdd;
            button.setAttribute('aria-label', setting.contrast.ariaLabelButtonAdd);
          });
          localStorage.removeItem('accessibility_contrast');
        }
      } else {
        $body.classList.add(classname);

        if (type === 'font') {
          if (!storageFont) {
            localStorage.setItem('accessibility_font', true);
          }

          $fontButton.forEach(function (button) {
            button.innerHTML = setting.font.nameButtonDecrease;
            button.setAttribute('aria-label', setting.font.ariaLabelButtonDecrease);
          });
        } else if (type === 'contrast') {
          if (!storageContrast) {
            localStorage.setItem('accessibility_contrast', true);
          }

          $contrastButton.forEach(function (button) {
            button.innerHTML = setting.contrast.nameButtonRemove;
            button.setAttribute('aria-label', setting.contrast.ariaLabelButtonRemove);
          });
        }
      }
    };
  } // Listening Click Event


  for (var i = 0; i < $accessibilityButtons.length; i++) {
    $accessibilityButtons[i].addEventListener('click', accessibility());
  }
};