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

// Funções auxiliares de armazenamento
function savePreference(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (e) {
    console.warn('Não foi possível salvar a preferência:', e);
  }
}

function loadPreference(key) {
  try {
    return localStorage.getItem(key);
  } catch (e) {
    console.warn('Não foi possível carregar a preferência:', e);
    return null;
  }
}

function accessibilityButtons(options) {
  'use strict';

  function hasClass(element, clazz) {
    return (" " + element.className + " ").indexOf(" " + clazz + " ") > -1;
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
    });

  var storageFont = loadPreference('accessibility_font');
  var storageContrast = loadPreference('accessibility_contrast');

  if (storageFont === 'true' && $fontButton) {
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

  if (storageContrast === 'true' && $contrastButton) {
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

  function accessibility() {
    return function () {
      var $this = this;
      var type = $this.getAttribute('data-accessibility');
      var classname = "accessibility-" + type;

      if (hasClass($body, classname)) {
        $body.classList.remove(classname);
        if (type === 'font') {
          $fontButton.forEach(function (button) {
            button.innerHTML = setting.font.nameButtonIncrease;
            button.setAttribute('aria-label', setting.font.ariaLabelButtonIncrease);
          });
          savePreference('accessibility_font', false);
        } else if (type === 'contrast') {
          $contrastButton.forEach(function (button) {
            button.innerHTML = setting.contrast.nameButtonAdd;
            button.setAttribute('aria-label', setting.contrast.ariaLabelButtonAdd);
          });
          savePreference('accessibility_contrast', false);
        }
      } else {
        $body.classList.add(classname);
        if (type === 'font') {
          savePreference('accessibility_font', true);
          $fontButton.forEach(function (button) {
            button.innerHTML = setting.font.nameButtonDecrease;
            button.setAttribute('aria-label', setting.font.ariaLabelButtonDecrease);
          });
        } else if (type === 'contrast') {
          savePreference('accessibility_contrast', true);
          $contrastButton.forEach(function (button) {
            button.innerHTML = setting.contrast.nameButtonRemove;
            button.setAttribute('aria-label', setting.contrast.ariaLabelButtonRemove);
          });
        }
      }
    };
  }

  $accessibilityButtons.forEach(function (button) {
    button.addEventListener('click', accessibility());
  });
}

// Funções de toggle independentes
function toggleContrast() {
  document.body.classList.toggle('accessibility-contrast');
  var hasContrast = document.body.classList.contains('accessibility-contrast');
  savePreference('accessibility_contrast', hasContrast);
}

function toggleFontSize() {
  document.body.classList.toggle('accessibility-fontsize');
  var hasFontSize = document.body.classList.contains('accessibility-fontsize');
  savePreference('accessibility_fontsize', hasFontSize);
}

// Restaurar preferências ao carregar a página
document.addEventListener('DOMContentLoaded', function () {
  var contrastPref = loadPreference('accessibility_contrast');
  var fontSizePref = loadPreference('accessibility_fontsize');

  if (contrastPref === 'true') {
    document.body.classList.add('accessibility-contrast');
  }
  if (fontSizePref === 'true') {
    document.body.classList.add('accessibility-fontsize');
  }
});
