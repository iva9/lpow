(function () {
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30], {
    /***/
    "OR5t":
    /*!******************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js ***!
      \******************************************************************/

    /*! exports provided: ion_searchbar */

    /***/
    function OR5t(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ion_searchbar", function () {
        return Searchbar;
      });
      /* harmony import */


      var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-7a8b7a1c.js */
      "wEJo");
      /* harmony import */


      var _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ionic-global-63a97a32.js */
      "E/Mt");
      /* harmony import */


      var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./helpers-dd7e4b7b.js */
      "1vRN");
      /* harmony import */


      var _theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./theme-ff3fc52f.js */
      "74mu");

      var searchbarIosCss = ".sc-ion-searchbar-ios-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;color:var(--color);font-family:var(--ion-font-family, inherit);-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-searchbar-ios-h{color:var(--ion-color-contrast)}.ion-color.sc-ion-searchbar-ios-h .searchbar-input.sc-ion-searchbar-ios{background:var(--ion-color-base)}.ion-color.sc-ion-searchbar-ios-h .searchbar-clear-button.sc-ion-searchbar-ios,.ion-color.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios,.ion-color.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios{color:inherit}.searchbar-search-icon.sc-ion-searchbar-ios{color:var(--icon-color);pointer-events:none}.searchbar-input-container.sc-ion-searchbar-ios{display:block;position:relative;-ms-flex-negative:1;flex-shrink:1;width:100%}.searchbar-input.sc-ion-searchbar-ios{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;border-radius:var(--border-radius);display:block;width:100%;border:0;outline:none;background:var(--background);font-family:inherit;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-input.sc-ion-searchbar-ios::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios::-moz-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios::-webkit-search-cancel-button,.searchbar-input.sc-ion-searchbar-ios::-ms-clear{display:none}.searchbar-cancel-button.sc-ion-searchbar-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:none;height:100%;border:0;outline:none;color:var(--cancel-button-color);cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-cancel-button.sc-ion-searchbar-ios>div.sc-ion-searchbar-ios{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.searchbar-clear-button.sc-ion-searchbar-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:none;min-height:0;outline:none;color:var(--clear-button-color);-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-has-value.searchbar-should-show-clear.sc-ion-searchbar-ios-h .searchbar-clear-button.sc-ion-searchbar-ios{display:block}.searchbar-disabled.sc-ion-searchbar-ios-h{cursor:default;opacity:0.4;pointer-events:none}.sc-ion-searchbar-ios-h{--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.07);--border-radius:10px;--box-shadow:none;--cancel-button-color:var(--ion-color-primary, #3880ff);--clear-button-color:var(--ion-color-step-600, #666666);--color:var(--ion-text-color, #000);--icon-color:var(--ion-color-step-600, #666666);padding-left:12px;padding-right:12px;padding-top:12px;padding-bottom:12px;height:60px;contain:strict}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.sc-ion-searchbar-ios-h{padding-left:unset;padding-right:unset;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px}}.searchbar-input-container.sc-ion-searchbar-ios{height:36px}.searchbar-search-icon.sc-ion-searchbar-ios{margin-left:calc(50% - 60px);left:5px;top:0;position:absolute;width:22px;height:100%;contain:strict}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.searchbar-search-icon.sc-ion-searchbar-ios{margin-left:unset;-webkit-margin-start:calc(50% - 60px);margin-inline-start:calc(50% - 60px)}}[dir=rtl].sc-ion-searchbar-ios .searchbar-search-icon.sc-ion-searchbar-ios,[dir=rtl].sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios,[dir=rtl] .sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios{left:unset;right:unset;right:5px}.searchbar-input.sc-ion-searchbar-ios{padding-left:28px;padding-right:28px;padding-top:0;padding-bottom:0;height:100%;font-size:17px;font-weight:400;contain:strict}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.searchbar-input.sc-ion-searchbar-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:28px;padding-inline-start:28px;-webkit-padding-end:28px;padding-inline-end:28px}}.searchbar-clear-button.sc-ion-searchbar-ios{right:0;top:0;background-position:center;position:absolute;width:30px;height:100%;border:0;background-color:transparent}[dir=rtl].sc-ion-searchbar-ios .searchbar-clear-button.sc-ion-searchbar-ios,[dir=rtl].sc-ion-searchbar-ios-h .searchbar-clear-button.sc-ion-searchbar-ios,[dir=rtl] .sc-ion-searchbar-ios-h .searchbar-clear-button.sc-ion-searchbar-ios{left:unset;right:unset;left:0}.searchbar-clear-icon.sc-ion-searchbar-ios{width:18px;height:100%}.searchbar-cancel-button.sc-ion-searchbar-ios{padding-left:8px;padding-right:0;padding-top:0;padding-bottom:0;-ms-flex-negative:0;flex-shrink:0;background-color:transparent;font-size:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.searchbar-cancel-button.sc-ion-searchbar-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:0;padding-inline-end:0}}.searchbar-left-aligned.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios{margin-left:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.searchbar-left-aligned.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios{margin-left:unset;-webkit-margin-start:0;margin-inline-start:0}}.searchbar-left-aligned.sc-ion-searchbar-ios-h .searchbar-input.sc-ion-searchbar-ios{padding-left:30px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.searchbar-left-aligned.sc-ion-searchbar-ios-h .searchbar-input.sc-ion-searchbar-ios{padding-left:unset;-webkit-padding-start:30px;padding-inline-start:30px}}.searchbar-has-focus.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios,.searchbar-should-show-cancel.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios,.searchbar-animated.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{display:block}.searchbar-animated.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios,.searchbar-animated.sc-ion-searchbar-ios-h .searchbar-input.sc-ion-searchbar-ios{-webkit-transition:all 300ms ease;transition:all 300ms ease}.searchbar-animated.searchbar-has-focus.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios,.searchbar-animated.searchbar-should-show-cancel.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{opacity:1;pointer-events:auto}.searchbar-animated.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{margin-right:-100%;-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0);-webkit-transition:all 300ms ease;transition:all 300ms ease;opacity:0;pointer-events:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.searchbar-animated.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{margin-right:unset;-webkit-margin-end:-100%;margin-inline-end:-100%}}.searchbar-no-animate.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios,.searchbar-no-animate.sc-ion-searchbar-ios-h .searchbar-input.sc-ion-searchbar-ios,.searchbar-no-animate.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{-webkit-transition-duration:0ms;transition-duration:0ms}.ion-color.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{color:var(--ion-color-base)}@media (any-hover: hover){.ion-color.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios:hover{color:var(--ion-color-tint)}}ion-toolbar.sc-ion-searchbar-ios-h,ion-toolbar .sc-ion-searchbar-ios-h{padding-top:1px;padding-bottom:15px;height:52px}ion-toolbar.ion-color.sc-ion-searchbar-ios-h:not(.ion-color),ion-toolbar.ion-color .sc-ion-searchbar-ios-h:not(.ion-color){color:inherit}ion-toolbar.ion-color.sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-cancel-button.sc-ion-searchbar-ios,ion-toolbar.ion-color .sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-cancel-button.sc-ion-searchbar-ios{color:currentColor}ion-toolbar.ion-color.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios,ion-toolbar.ion-color .sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios{color:currentColor;opacity:0.5}ion-toolbar.ion-color.sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-input.sc-ion-searchbar-ios,ion-toolbar.ion-color .sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-input.sc-ion-searchbar-ios{background:rgba(var(--ion-color-contrast-rgb), 0.07);color:currentColor}ion-toolbar.ion-color.sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-clear-button.sc-ion-searchbar-ios,ion-toolbar.ion-color .sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-clear-button.sc-ion-searchbar-ios{color:currentColor;opacity:0.5}";
      var searchbarMdCss = ".sc-ion-searchbar-md-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;color:var(--color);font-family:var(--ion-font-family, inherit);-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-searchbar-md-h{color:var(--ion-color-contrast)}.ion-color.sc-ion-searchbar-md-h .searchbar-input.sc-ion-searchbar-md{background:var(--ion-color-base)}.ion-color.sc-ion-searchbar-md-h .searchbar-clear-button.sc-ion-searchbar-md,.ion-color.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md,.ion-color.sc-ion-searchbar-md-h .searchbar-search-icon.sc-ion-searchbar-md{color:inherit}.searchbar-search-icon.sc-ion-searchbar-md{color:var(--icon-color);pointer-events:none}.searchbar-input-container.sc-ion-searchbar-md{display:block;position:relative;-ms-flex-negative:1;flex-shrink:1;width:100%}.searchbar-input.sc-ion-searchbar-md{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;border-radius:var(--border-radius);display:block;width:100%;border:0;outline:none;background:var(--background);font-family:inherit;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-input.sc-ion-searchbar-md::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::-moz-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::-webkit-search-cancel-button,.searchbar-input.sc-ion-searchbar-md::-ms-clear{display:none}.searchbar-cancel-button.sc-ion-searchbar-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:none;height:100%;border:0;outline:none;color:var(--cancel-button-color);cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-cancel-button.sc-ion-searchbar-md>div.sc-ion-searchbar-md{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.searchbar-clear-button.sc-ion-searchbar-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:none;min-height:0;outline:none;color:var(--clear-button-color);-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-has-value.searchbar-should-show-clear.sc-ion-searchbar-md-h .searchbar-clear-button.sc-ion-searchbar-md{display:block}.searchbar-disabled.sc-ion-searchbar-md-h{cursor:default;opacity:0.4;pointer-events:none}.sc-ion-searchbar-md-h{--background:var(--ion-background-color, #fff);--border-radius:2px;--box-shadow:0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);--cancel-button-color:var(--ion-color-step-900, #1a1a1a);--clear-button-color:initial;--color:var(--ion-color-step-850, #262626);--icon-color:var(--ion-color-step-600, #666666);padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;background:inherit}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.sc-ion-searchbar-md-h{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.searchbar-search-icon.sc-ion-searchbar-md{left:16px;top:11px;width:21px;height:21px}[dir=rtl].sc-ion-searchbar-md .searchbar-search-icon.sc-ion-searchbar-md,[dir=rtl].sc-ion-searchbar-md-h .searchbar-search-icon.sc-ion-searchbar-md,[dir=rtl] .sc-ion-searchbar-md-h .searchbar-search-icon.sc-ion-searchbar-md{left:unset;right:unset;right:16px}.searchbar-cancel-button.sc-ion-searchbar-md{left:5px;top:0;background-color:transparent;font-size:1.6em}[dir=rtl].sc-ion-searchbar-md .searchbar-cancel-button.sc-ion-searchbar-md,[dir=rtl].sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md,[dir=rtl] .sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md{left:unset;right:unset;right:5px}.searchbar-search-icon.sc-ion-searchbar-md,.searchbar-cancel-button.sc-ion-searchbar-md{position:absolute}.searchbar-search-icon.ion-activated.sc-ion-searchbar-md,.searchbar-cancel-button.ion-activated.sc-ion-searchbar-md{background-color:transparent}.searchbar-input.sc-ion-searchbar-md{padding-left:55px;padding-right:55px;padding-top:6px;padding-bottom:6px;background-position:left 8px center;height:auto;font-size:16px;font-weight:400;line-height:30px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.searchbar-input.sc-ion-searchbar-md{padding-left:unset;padding-right:unset;-webkit-padding-start:55px;padding-inline-start:55px;-webkit-padding-end:55px;padding-inline-end:55px}}[dir=rtl].sc-ion-searchbar-md .searchbar-input.sc-ion-searchbar-md,[dir=rtl].sc-ion-searchbar-md-h .searchbar-input.sc-ion-searchbar-md,[dir=rtl] .sc-ion-searchbar-md-h .searchbar-input.sc-ion-searchbar-md{background-position:right 8px center}.searchbar-clear-button.sc-ion-searchbar-md{right:13px;top:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;position:absolute;height:100%;border:0;background-color:transparent}[dir=rtl].sc-ion-searchbar-md .searchbar-clear-button.sc-ion-searchbar-md,[dir=rtl].sc-ion-searchbar-md-h .searchbar-clear-button.sc-ion-searchbar-md,[dir=rtl] .sc-ion-searchbar-md-h .searchbar-clear-button.sc-ion-searchbar-md{left:unset;right:unset;left:13px}.searchbar-clear-button.ion-activated.sc-ion-searchbar-md{background-color:transparent}.searchbar-clear-icon.sc-ion-searchbar-md{width:22px;height:100%}.searchbar-has-focus.sc-ion-searchbar-md-h .searchbar-search-icon.sc-ion-searchbar-md{display:block}.searchbar-has-focus.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md,.searchbar-should-show-cancel.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md{display:block}.searchbar-has-focus.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md+.searchbar-search-icon.sc-ion-searchbar-md,.searchbar-should-show-cancel.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md+.searchbar-search-icon.sc-ion-searchbar-md{display:none}ion-toolbar.sc-ion-searchbar-md-h,ion-toolbar .sc-ion-searchbar-md-h{padding-left:7px;padding-right:7px;padding-top:3px;padding-bottom:3px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-toolbar.sc-ion-searchbar-md-h,ion-toolbar .sc-ion-searchbar-md-h{padding-left:unset;padding-right:unset;-webkit-padding-start:7px;padding-inline-start:7px;-webkit-padding-end:7px;padding-inline-end:7px}}";

      var Searchbar = /*#__PURE__*/function () {
        function Searchbar(hostRef) {
          var _this = this;

          _classCallCheck(this, Searchbar);

          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
          this.ionInput = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionInput", 7);
          this.ionChange = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionChange", 7);
          this.ionCancel = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionCancel", 7);
          this.ionClear = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionClear", 7);
          this.ionBlur = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionBlur", 7);
          this.ionFocus = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionFocus", 7);
          this.ionStyle = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionStyle", 7);
          this.isCancelVisible = false;
          this.shouldAlignLeft = true;
          this.focused = false;
          this.noAnimate = true;
          /**
           * If `true`, enable searchbar animation.
           */

          this.animated = false;
          /**
           * Set the input's autocomplete property.
           */

          this.autocomplete = 'off';
          /**
           * Set the input's autocorrect property.
           */

          this.autocorrect = 'off';
          /**
           * Set the cancel button icon. Only applies to `md` mode.
           * Defaults to `"arrow-back-sharp"`.
           */

          this.cancelButtonIcon = _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["c"].get('backButtonIcon', 'arrow-back-sharp');
          /**
           * Set the the cancel button text. Only applies to `ios` mode.
           */

          this.cancelButtonText = 'Cancel';
          /**
           * Set the amount of time, in milliseconds, to wait to trigger the `ionChange` event after each keystroke. This also impacts form bindings such as `ngModel` or `v-model`.
           */

          this.debounce = 250;
          /**
           * If `true`, the user cannot interact with the input.
           */

          this.disabled = false;
          /**
           * Set the input's placeholder.
           * `placeholder` can accept either plaintext or HTML as a string.
           * To display characters normally reserved for HTML, they
           * must be escaped. For example `<Ionic>` would become
           * `&lt;Ionic&gt;`
           *
           * For more information: [Security Documentation](https://ionicframework.com/docs/faq/security)
           */

          this.placeholder = 'Search';
          /**
           * Sets the behavior for the cancel button. Defaults to `"never"`.
           * Setting to `"focus"` shows the cancel button on focus.
           * Setting to `"never"` hides the cancel button.
           * Setting to `"always"` shows the cancel button regardless
           * of focus state.
           */

          this.showCancelButton = 'never';
          /**
           * Sets the behavior for the clear button. Defaults to `"focus"`.
           * Setting to `"focus"` shows the clear button on focus if the
           * input is not empty.
           * Setting to `"never"` hides the clear button.
           * Setting to `"always"` shows the clear button regardless
           * of focus state, but only if the input is not empty.
           */

          this.showClearButton = 'focus';
          /**
           * If `true`, enable spellcheck on the input.
           */

          this.spellcheck = false;
          /**
           * Set the type of the input.
           */

          this.type = 'search';
          /**
           * the value of the searchbar.
           */

          this.value = '';
          /**
           * Clears the input field and triggers the control change.
           */

          this.onClearInput = function (ev, shouldFocus) {
            _this.ionClear.emit();

            if (ev) {
              ev.preventDefault();
              ev.stopPropagation();
            } // setTimeout() fixes https://github.com/ionic-team/ionic/issues/7527
            // wait for 4 frames


            setTimeout(function () {
              var value = _this.getValue();

              if (value !== '') {
                _this.value = '';

                _this.ionInput.emit();
                /**
                 * When tapping clear button
                 * ensure input is focused after
                 * clearing input so users
                 * can quickly start typing.
                 */


                if (shouldFocus && !_this.focused) {
                  _this.setFocus();
                }
              }
            }, 16 * 4);
          };
          /**
           * Clears the input field and tells the input to blur since
           * the clearInput function doesn't want the input to blur
           * then calls the custom cancel function if the user passed one in.
           */


          this.onCancelSearchbar = function (ev) {
            if (ev) {
              ev.preventDefault();
              ev.stopPropagation();
            }

            _this.ionCancel.emit();

            _this.onClearInput();

            if (_this.nativeInput) {
              _this.nativeInput.blur();
            }
          };
          /**
           * Update the Searchbar input value when the input changes
           */


          this.onInput = function (ev) {
            var input = ev.target;

            if (input) {
              _this.value = input.value;
            }

            _this.ionInput.emit(ev);
          };
          /**
           * Sets the Searchbar to not focused and checks if it should align left
           * based on whether there is a value in the searchbar or not.
           */


          this.onBlur = function () {
            _this.focused = false;

            _this.ionBlur.emit();

            _this.positionElements();
          };
          /**
           * Sets the Searchbar to focused and active on input focus.
           */


          this.onFocus = function () {
            _this.focused = true;

            _this.ionFocus.emit();

            _this.positionElements();
          };
        }

        _createClass(Searchbar, [{
          key: "debounceChanged",
          value: function debounceChanged() {
            this.ionChange = Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_2__["f"])(this.ionChange, this.debounce);
          }
        }, {
          key: "valueChanged",
          value: function valueChanged() {
            var inputEl = this.nativeInput;
            var value = this.getValue();

            if (inputEl && inputEl.value !== value) {
              inputEl.value = value;
            }

            this.ionChange.emit({
              value: value
            });
          }
        }, {
          key: "showCancelButtonChanged",
          value: function showCancelButtonChanged() {
            var _this2 = this;

            requestAnimationFrame(function () {
              _this2.positionElements();

              Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["j"])(_this2);
            });
          }
        }, {
          key: "connectedCallback",
          value: function connectedCallback() {
            this.emitStyle();
          }
        }, {
          key: "componentDidLoad",
          value: function componentDidLoad() {
            var _this3 = this;

            this.positionElements();
            this.debounceChanged();
            setTimeout(function () {
              _this3.noAnimate = false;
            }, 300);
          }
        }, {
          key: "emitStyle",
          value: function emitStyle() {
            this.ionStyle.emit({
              'searchbar': true
            });
          }
          /**
           * Sets focus on the specified `ion-searchbar`. Use this method instead of the global
           * `input.focus()`.
           */

        }, {
          key: "setFocus",
          value: function () {
            var _setFocus = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (this.nativeInput) {
                        this.nativeInput.focus();
                      }

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function setFocus() {
              return _setFocus.apply(this, arguments);
            }

            return setFocus;
          }()
          /**
           * Returns the native `<input>` element used under the hood.
           */

        }, {
          key: "getInputElement",
          value: function getInputElement() {
            return Promise.resolve(this.nativeInput);
          }
          /**
           * Positions the input search icon, placeholder, and the cancel button
           * based on the input value and if it is focused. (ios only)
           */

        }, {
          key: "positionElements",
          value: function positionElements() {
            var value = this.getValue();
            var prevAlignLeft = this.shouldAlignLeft;
            var mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
            var shouldAlignLeft = !this.animated || value.trim() !== '' || !!this.focused;
            this.shouldAlignLeft = shouldAlignLeft;

            if (mode !== 'ios') {
              return;
            }

            if (prevAlignLeft !== shouldAlignLeft) {
              this.positionPlaceholder();
            }

            if (this.animated) {
              this.positionCancelButton();
            }
          }
          /**
           * Positions the input placeholder
           */

        }, {
          key: "positionPlaceholder",
          value: function positionPlaceholder() {
            var inputEl = this.nativeInput;

            if (!inputEl) {
              return;
            }

            var isRTL = document.dir === 'rtl';
            var iconEl = (this.el.shadowRoot || this.el).querySelector('.searchbar-search-icon');

            if (this.shouldAlignLeft) {
              inputEl.removeAttribute('style');
              iconEl.removeAttribute('style');
            } else {
              // Create a dummy span to get the placeholder width
              var doc = document;
              var tempSpan = doc.createElement('span');
              tempSpan.innerText = this.placeholder || '';
              doc.body.appendChild(tempSpan); // Get the width of the span then remove it

              Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_2__["r"])(function () {
                var textWidth = tempSpan.offsetWidth;
                tempSpan.remove(); // Calculate the input padding

                var inputLeft = 'calc(50% - ' + textWidth / 2 + 'px)'; // Calculate the icon margin

                var iconLeft = 'calc(50% - ' + (textWidth / 2 + 30) + 'px)'; // Set the input padding start and icon margin start

                if (isRTL) {
                  inputEl.style.paddingRight = inputLeft;
                  iconEl.style.marginRight = iconLeft;
                } else {
                  inputEl.style.paddingLeft = inputLeft;
                  iconEl.style.marginLeft = iconLeft;
                }
              });
            }
          }
          /**
           * Show the iOS Cancel button on focus, hide it offscreen otherwise
           */

        }, {
          key: "positionCancelButton",
          value: function positionCancelButton() {
            var isRTL = document.dir === 'rtl';
            var cancelButton = (this.el.shadowRoot || this.el).querySelector('.searchbar-cancel-button');
            var shouldShowCancel = this.shouldShowCancelButton();

            if (cancelButton && shouldShowCancel !== this.isCancelVisible) {
              var cancelStyle = cancelButton.style;
              this.isCancelVisible = shouldShowCancel;

              if (shouldShowCancel) {
                if (isRTL) {
                  cancelStyle.marginLeft = '0';
                } else {
                  cancelStyle.marginRight = '0';
                }
              } else {
                var offset = cancelButton.offsetWidth;

                if (offset > 0) {
                  if (isRTL) {
                    cancelStyle.marginLeft = -offset + 'px';
                  } else {
                    cancelStyle.marginRight = -offset + 'px';
                  }
                }
              }
            }
          }
        }, {
          key: "getValue",
          value: function getValue() {
            return this.value || '';
          }
        }, {
          key: "hasValue",
          value: function hasValue() {
            return this.getValue() !== '';
          }
          /**
           * Determines whether or not the cancel button should be visible onscreen.
           * Cancel button should be shown if one of two conditions applies:
           * 1. `showCancelButton` is set to `always`.
           * 2. `showCancelButton` is set to `focus`, and the searchbar has been focused.
           */

        }, {
          key: "shouldShowCancelButton",
          value: function shouldShowCancelButton() {
            if (this.showCancelButton === 'never' || this.showCancelButton === 'focus' && !this.focused) {
              return false;
            }

            return true;
          }
          /**
           * Determines whether or not the clear button should be visible onscreen.
           * Clear button should be shown if one of two conditions applies:
           * 1. `showClearButton` is set to `always`.
           * 2. `showClearButton` is set to `focus`, and the searchbar has been focused.
           */

        }, {
          key: "shouldShowClearButton",
          value: function shouldShowClearButton() {
            if (this.showClearButton === 'never' || this.showClearButton === 'focus' && !this.focused) {
              return false;
            }

            return true;
          }
        }, {
          key: "render",
          value: function render() {
            var _Object,
                _this4 = this;

            var cancelButtonText = this.cancelButtonText;

            var animated = this.animated && _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["c"].getBoolean('animated', true);

            var mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
            var clearIcon = this.clearIcon || (mode === 'ios' ? 'close-circle' : 'close-sharp');
            var searchIcon = this.searchIcon || (mode === 'ios' ? 'search-outline' : 'search-sharp');
            var shouldShowCancelButton = this.shouldShowCancelButton();
            var cancelButton = this.showCancelButton !== 'never' && Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", {
              "aria-label": cancelButtonText,
              "aria-hidden": shouldShowCancelButton ? undefined : 'true',
              type: "button",
              tabIndex: mode === 'ios' && !shouldShowCancelButton ? -1 : undefined,
              onMouseDown: this.onCancelSearchbar,
              onTouchStart: this.onCancelSearchbar,
              "class": "searchbar-cancel-button"
            }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "aria-hidden": "true"
            }, mode === 'md' ? Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-icon", {
              "aria-hidden": "true",
              mode: mode,
              icon: this.cancelButtonIcon,
              lazy: false
            }) : cancelButtonText));
            return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
              role: "search",
              "aria-disabled": this.disabled ? 'true' : null,
              "class": Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_3__["c"])(this.color, (_Object = {}, _defineProperty(_Object, mode, true), _defineProperty(_Object, 'searchbar-animated', animated), _defineProperty(_Object, 'searchbar-disabled', this.disabled), _defineProperty(_Object, 'searchbar-no-animate', animated && this.noAnimate), _defineProperty(_Object, 'searchbar-has-value', this.hasValue()), _defineProperty(_Object, 'searchbar-left-aligned', this.shouldAlignLeft), _defineProperty(_Object, 'searchbar-has-focus', this.focused), _defineProperty(_Object, 'searchbar-should-show-clear', this.shouldShowClearButton()), _defineProperty(_Object, 'searchbar-should-show-cancel', this.shouldShowCancelButton()), _Object))
            }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": "searchbar-input-container"
            }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", {
              "aria-label": "search text",
              disabled: this.disabled,
              ref: function ref(el) {
                return _this4.nativeInput = el;
              },
              "class": "searchbar-input",
              inputMode: this.inputmode,
              enterKeyHint: this.enterkeyhint,
              onInput: this.onInput,
              onBlur: this.onBlur,
              onFocus: this.onFocus,
              placeholder: this.placeholder,
              type: this.type,
              value: this.getValue(),
              autoComplete: this.autocomplete,
              autoCorrect: this.autocorrect,
              spellcheck: this.spellcheck
            }), mode === 'md' && cancelButton, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-icon", {
              "aria-hidden": "true",
              mode: mode,
              icon: searchIcon,
              lazy: false,
              "class": "searchbar-search-icon"
            }), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", {
              "aria-label": "reset",
              type: "button",
              "no-blur": true,
              "class": "searchbar-clear-button",
              onMouseDown: function onMouseDown(ev) {
                return _this4.onClearInput(ev, true);
              },
              onTouchStart: function onTouchStart(ev) {
                return _this4.onClearInput(ev, true);
              }
            }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-icon", {
              "aria-hidden": "true",
              mode: mode,
              icon: clearIcon,
              lazy: false,
              "class": "searchbar-clear-icon"
            }))), mode === 'ios' && cancelButton);
          }
        }, {
          key: "el",
          get: function get() {
            return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["i"])(this);
          }
        }], [{
          key: "watchers",
          get: function get() {
            return {
              "debounce": ["debounceChanged"],
              "value": ["valueChanged"],
              "showCancelButton": ["showCancelButtonChanged"]
            };
          }
        }]);

        return Searchbar;
      }();

      Searchbar.style = {
        ios: searchbarIosCss,
        md: searchbarMdCss
      };
      /***/
    }
  }]);
})();
//# sourceMappingURL=30-es5.js.map