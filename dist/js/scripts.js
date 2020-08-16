/*!
*   Accessibility Buttons v4.0.0
*   http://tiagoporto.github.io/accessibility-buttons
*   Copyright (c) 2014-present Tiago Porto (http://tiagoporto.com)
*   Released under the MIT license
*/

jQuery(document).ready(function($) {

"use strict";

/* global accessibilityButtons */
var ready = function ready(fn) {
  'use strict';

  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
};

ready(function () {
  'use strict';

  accessibilityButtons({
    font: {
      nameButtonIncrease: 'Click me and things will be big',
      nameButtonDecrease: 'Click me and things will be back to normal'
    },
    contrast: {
      nameButtonAdd: 'Click me and things will be darken',
      nameButtonRemove: 'Click me and things will be lighten again'
    }
  });
  document.getElementById('year').innerHTML = new Date().getFullYear();

  function hasClass(element, clazz) {
    return " ".concat(element.className, " ").indexOf(" ".concat(clazz, " ")) > -1;
  }

  function analytics() {
    return function () {
      var $this = this;
      var $body = document.body;

      if ($this.getAttribute('id') === 'accessibility-contrast') {
        if (hasClass($body, $this.getAttribute('id'))) {
          typeof ga === 'function' && ga('send', 'event', 'accessibility', 'click', 'Add Contrast');
        } else {
          typeof ga === 'function' && ga('send', 'event', 'accessibility', 'click', 'Remove Contrast');
        }
      }

      if ($this.getAttribute('id') === 'accessibility-font') {
        if (hasClass($body, $this.getAttribute('id'))) {
          typeof ga === 'function' && ga('send', 'event', 'accessibility', 'click', 'Increase Font');
        } else {
          typeof ga === 'function' && ga('send', 'event', 'accessibility', 'click', 'Decrease Font');
        }
      }
    };
  }

  var $accessibilityButtons = document.getElementsByClassName('js-acessibility');

  for (var i = 0; i < $accessibilityButtons.length; i++) {
    $accessibilityButtons[i].addEventListener('click', analytics());
  }
});
});