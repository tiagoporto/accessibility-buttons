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

/* eslint-disable */

// Google Analytics: change UA-XXXXX-X to be your site's ID.
(function(i,s,o,g,r,a,m){i.GoogleAnalyticsObject=r;i[r]=i[r]
||function(){(i[r].q=i[r].q||[]).push(arguments);},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m);
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-32351360-4', 'auto');
ga('send', 'pageview');

// This is the "Offline copy of pages" service worker

// Add this below content to your HTML page, or add the js file to your page at the very top to register service worker
if (navigator.serviceWorker.controller) {
  console.log('Active service worker found, no need to register')
} else {
  // Register the ServiceWorker
  navigator.serviceWorker.register('service-worker.js', { scope: './' }).then(function (reg) {
    console.log('Service worker has been registered for scope: ' + reg.scope)
  })
}
