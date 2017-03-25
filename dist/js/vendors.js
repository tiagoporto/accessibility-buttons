// event listener: DOM ready
function addLoadEvent(func) {
    'use strict';
    var oldonload = window.onload;
    if (typeof window.onload !== 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        };
    }
}
addLoadEvent(
    // call plugins after DOM ready
    $('#logo').downloadTip({ 'position': 'bottom' })
);
