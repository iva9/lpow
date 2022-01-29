(function () {
  "use strict";

  (self["webpackChunkOreon"] = self["webpackChunkOreon"] || []).push([["common"], {
    /***/
    47158:
    /*!*********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/focus-visible-02bf7a99.js ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "startFocusVisible": function startFocusVisible() {
          return (
            /* binding */
            _startFocusVisible
          );
        }
        /* harmony export */

      });
      /*!
       * (C) Ionic http://ionicframework.com - MIT License
       */


      var ION_FOCUSED = 'ion-focused';
      var ION_FOCUSABLE = 'ion-focusable';
      var FOCUS_KEYS = ['Tab', 'ArrowDown', 'Space', 'Escape', ' ', 'Shift', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'Home', 'End'];

      var _startFocusVisible = function _startFocusVisible(rootEl) {
        var currentFocus = [];
        var keyboardMode = true;
        var ref = rootEl ? rootEl.shadowRoot : document;
        var root = rootEl ? rootEl : document.body;

        var setFocus = function setFocus(elements) {
          currentFocus.forEach(function (el) {
            return el.classList.remove(ION_FOCUSED);
          });
          elements.forEach(function (el) {
            return el.classList.add(ION_FOCUSED);
          });
          currentFocus = elements;
        };

        var pointerDown = function pointerDown() {
          keyboardMode = false;
          setFocus([]);
        };

        var onKeydown = function onKeydown(ev) {
          keyboardMode = FOCUS_KEYS.includes(ev.key);

          if (!keyboardMode) {
            setFocus([]);
          }
        };

        var onFocusin = function onFocusin(ev) {
          if (keyboardMode && ev.composedPath) {
            var toFocus = ev.composedPath().filter(function (el) {
              if (el.classList) {
                return el.classList.contains(ION_FOCUSABLE);
              }

              return false;
            });
            setFocus(toFocus);
          }
        };

        var onFocusout = function onFocusout() {
          if (ref.activeElement === root) {
            setFocus([]);
          }
        };

        ref.addEventListener('keydown', onKeydown);
        ref.addEventListener('focusin', onFocusin);
        ref.addEventListener('focusout', onFocusout);
        ref.addEventListener('touchstart', pointerDown);
        ref.addEventListener('mousedown', pointerDown);

        var destroy = function destroy() {
          ref.removeEventListener('keydown', onKeydown);
          ref.removeEventListener('focusin', onFocusin);
          ref.removeEventListener('focusout', onFocusout);
          ref.removeEventListener('touchstart', pointerDown);
          ref.removeEventListener('mousedown', pointerDown);
        };

        return {
          destroy: destroy,
          setFocus: setFocus
        };
      };
      /***/

    },

    /***/
    511:
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/index-3f6412b6.js ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "a": function a() {
          return (
            /* binding */
            arrowDown
          );
        },

        /* harmony export */
        "b": function b() {
          return (
            /* binding */
            chevronForwardOutline
          );
        },

        /* harmony export */
        "c": function c() {
          return (
            /* binding */
            caretBackSharp
          );
        },

        /* harmony export */
        "d": function d() {
          return (
            /* binding */
            chevronBack
          );
        },

        /* harmony export */
        "e": function e() {
          return (
            /* binding */
            ellipsisHorizontal
          );
        },

        /* harmony export */
        "f": function f() {
          return (
            /* binding */
            chevronForward
          );
        },

        /* harmony export */
        "g": function g() {
          return (
            /* binding */
            chevronDown
          );
        },

        /* harmony export */
        "h": function h() {
          return (
            /* binding */
            caretUpSharp
          );
        },

        /* harmony export */
        "i": function i() {
          return (
            /* binding */
            caretDownSharp
          );
        }
        /* harmony export */

      });
      /*!
       * (C) Ionic http://ionicframework.com - MIT License
       */

      /* Ionicons v6.0.0, ES Modules */


      var arrowDown = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>";
      var caretBackSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Back</title><path d='M368 64L144 256l224 192V64z'/></svg>";
      var caretDownSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>";
      var caretUpSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>";
      var chevronBack = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>";
      var chevronDown = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>";
      var chevronForward = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
      var chevronForwardOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
      var ellipsisHorizontal = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map