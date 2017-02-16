/*!
*   Accessibility Buttons v3.1.2
*   http://tiagoporto.github.io/accessibility-buttons
*   Copyright (c) 2014-2017 Tiago Porto (http://tiagoporto.com)
*   Released under the MIT license
*/

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
            nameButtonIncrease: 'Click me and things will be great',
            nameButtonDecrease: 'Click me and things will turn to normal size'
        },

        contrast: {
            nameButtonAdd: 'Click me and things will be darken',
            nameButtonRemove: 'Click me and things will be clean again'
        }
    });

    document.getElementById('year').innerHTML = new Date().getFullYear();
});