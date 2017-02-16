/* global accessibilityButtons */

const ready = fn => {
    'use strict';

    if (document.readyState !== 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
};

ready(() => {
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
