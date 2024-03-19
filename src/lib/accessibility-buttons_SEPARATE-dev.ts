// /**
//  * accessibilityButtons
//  * @param  {object} options Options to execute the lib
//  */

// /* exported accessibilityButtons */
// const accessibilityButtons = (userOptions) => {
//   'use strict'

//   /**
//    * hasClass
//    * @param  {string}  element - DOM element
//    * @param  {string}  clazz   - Class Name
//    * @return {Boolean}
//    */
//   const hasClass = (element, clazz) => {
//     return ` ${element.className} `.indexOf(` ${clazz} `) > -1
//   }

//   const fontOptions = userOptions && userOptions.font
//   const fontOptionsSteps = userOptions.font && userOptions.font.steps
//   const contrastOptions = userOptions && userOptions.contrast

//   const settings = {
//     font: {
//       nameButtonIncrease:
//         (fontOptions && fontOptions.nameButtonIncrease) || '+A',
//       ariaLabelButtonIncrease:
//         (fontOptions && fontOptions.ariaLabelButtonIncrease) || 'Increase Font',
//       nameButtonDecrease:
//         (fontOptions && fontOptions.nameButtonDecrease) || '-A',
//       ariaLabelButtonDecrease:
//         (fontOptions && fontOptions.ariaLabelButtonDecrease) || 'Decrease Font',
//       steps: {
//         enable: fontOptionsSteps && !!fontOptions.steps.enable,
//         increase: (fontOptionsSteps && fontOptions.steps.increase) || 2,
//         decrease: (fontOptionsSteps && fontOptions.steps.decrease) || 2,
//       },
//     },

//     contrast: {
//       nameButtonAdd:
//         (contrastOptions && contrastOptions.nameButtonAdd) || 'Add Contrast',
//       ariaLabelButtonAdd:
//         (contrastOptions && contrastOptions.ariaLabelButtonAdd) ||
//         'Add Contrast',
//       nameButtonRemove:
//         (contrastOptions && contrastOptions.nameButtonRemove) ||
//         'Remove Contrast',
//       ariaLabelButtonRemove:
//         (contrastOptions && contrastOptions.ariaLabelButtonRemove) ||
//         'Remove Contrast',
//     },
//   }

//   // const $body = document.body;
//   const $accessibilityButtons = document.getElementsByClassName(
//     'accessibility-buttons'
//   )
//   // const $fontButton = document.getElementById('accessibility-font');
//   const $contrastButton = document.getElementsByClassName(
//     'accessibility-buttons--contrast'
//   )[0]

//   // storageFont = localStorage.accessibility_font,
//   const storageContrast = localStorage.accessibility_contrast

//   // // Check if exist storage and set the correct button names and aria attributes
//   // if (!settings.font.steps.enable) {
//   //     if (storageFont && $fontButton) {
//   //         $body.classList.add('accessibility-font');

//   //         $fontButton.innerHTML = settings.font.nameButtonDecrease;
//   //         $fontButton.setAttribute('aria-label', settings.font.ariaLabelButtonDecrease);
//   //     } else if ($fontButton) {
//   //         $fontButton.innerHTML = settings.font.nameButtonIncrease;
//   //         $fontButton.setAttribute('aria-label', settings.font.ariaLabelButtonIncrease);
//   //     }
//   // }

//   if (storageContrast && $contrastButton) {
//     //     $body.classList.add('accessibility-contrast');

//     $contrastButton.innerHTML = settings.contrast.nameButtonRemove
//     $contrastButton.setAttribute(
//       'aria-label',
//       settings.contrast.ariaLabelButtonRemove
//     )
//   } else if ($contrastButton) {
//     $contrastButton.innerHTML = settings.contrast.nameButtonAdd
//     $contrastButton.setAttribute(
//       'aria-label',
//       settings.contrast.ariaLabelButtonAdd
//     )
//   }

//   /**
//    * Bind click event
//    * Rename the buttons
//    * Apply/Remove Contrast or Font Size
//    * Manage storage
//    */
//   function applyActions() {
//     return function () {
//       const context = this

//       //         if (hasClass($body, context.getAttribute('id'))) {
//       //             $body.classList.remove(context.getAttribute('id'));

//       if (hasClass(context, 'accessibility-buttons--contrast')) {
//         console.log('context', context)
//         context.innerHTML = settings.font.nameButtonIncrease
//         // context.innerHTML = settings.font.nameButtonIncrease;
//         // context.setAttribute('aria-label', settings.font.ariaLabelButtonIncrease);

//         //                 localStorage.removeItem('accessibility_font');
//         //             } else {
//         //                 context.innerHTML = settings.contrast.nameButtonAdd;
//         //                 context.setAttribute('aria-label', settings.contrast.ariaLabelButtonAdd);

//         //                 localStorage.removeItem('accessibility_contrast');
//         //             }
//         //         } else {
//         //             $body.classList.add(context.getAttribute('id'));

//         //             if (context.getAttribute('id') === 'accessibility-font') {
//         //                 if (!storageFont) {
//         //                     localStorage.setItem('accessibility_font', true);
//         //                 }
//         //                 context.innerHTML = settings.font.nameButtonDecrease;
//         //                 context.setAttribute('aria-label', settings.font.ariaLabelButtonDecrease);
//         //             } else {
//         //                 if (!storageContrast) {
//         //                     localStorage.setItem('accessibility_contrast', true);
//         //                 }
//         //                 context.innerHTML = settings.contrast.nameButtonRemove;
//         //                 context.setAttribute('aria-label', settings.contrast.ariaLabelButtonRemove);
//         //             }
//       }
//     }
//   }

//   // Listening Click Event
//   for (let i = 0; i < $accessibilityButtons.length; i++) {
//     $accessibilityButtons[i].addEventListener('click', applyActions())
//   }
// }
