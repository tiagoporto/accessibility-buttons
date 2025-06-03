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

var accessibilityButtons = function accessibilityButtons(options) {
  'use strict';

  function hasClass(element, clazz) {
    return (" ".concat(element.className, " ").indexOf(" ".concat(clazz, " ")) > -1);
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

  // Personalização via options
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
    storageFont = loadPreference('accessibility_font'),
    storageContrast = loadPreference('accessibility_contrast');

  // Estado inicial baseado no armazenamento
  if (storageFont) {
    $body.classList.add('accessibility-font');
    $fontButton.forEach(function (button) {
      button.innerHTML = setting.font.nameButtonDecrease;
      button.setAttribute('aria-label', setting.font.ariaLabelButtonDecrease);
    });
  } else {
    $fontButton.forEach(function (button) {
      button.innerHTML = setting.font.nameButtonIncrease;
      button.setAttribute('aria-label', setting.font.ariaLabelButtonIncrease);
    });
  }

  if (storageContrast) {
    $body.classList.add('accessibility-contrast');
    $contrastButton.forEach(function (button) {
      button.innerHTML = setting.contrast.nameButtonRemove;
      button.setAttribute('aria-label', setting.contrast.ariaLabelButtonRemove);
    });
  } else {
    $contrastButton.forEach(function (button) {
      button.innerHTML = setting.contrast.nameButtonAdd;
      button.setAttribute('aria-label', setting.contrast.ariaLabelButtonAdd);
    });
  }

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
          savePreference('accessibility_font', '');
        } else if (type === 'contrast') {
          $contrastButton.forEach(function (button) {
            button.innerHTML = setting.contrast.nameButtonAdd;
            button.setAttribute('aria-label', setting.contrast.ariaLabelButtonAdd);
          });
          savePreference('accessibility_contrast', '');
        }
      } else {
        $body.classList.add(classname);
        if (type === 'font') {
          savePreference('accessibility_font', 'true');
          $fontButton.forEach(function (button) {
            button.innerHTML = setting.font.nameButtonDecrease;
            button.setAttribute('aria-label', setting.font.ariaLabelButtonDecrease);
          });
        } else if (type === 'contrast') {
          savePreference('accessibility_contrast', 'true');
          $contrastButton.forEach(function (button) {
            button.innerHTML = setting.contrast.nameButtonRemove;
            button.setAttribute('aria-label', setting.contrast.ariaLabelButtonRemove);
          });
        }
      }
    };
  }

  // Eventos de clique
  $accessibilityButtons.forEach(function (btn) {
    btn.addEventListener('click', accessibility());
  });
};

// Nova funcionalidade: Aplicar preferência de tema do sistema
function applySystemThemePreference() {
  if (window.matchMedia) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (prefersDark) {
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      console.log('Tema escuro aplicado automaticamente.');
    } else {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      console.log('Tema claro aplicado automaticamente.');
    }
  }
}

// Aplicar automaticamente ao carregar a página
document.addEventListener('DOMContentLoaded', function () {
  applySystemThemePreference();
});
