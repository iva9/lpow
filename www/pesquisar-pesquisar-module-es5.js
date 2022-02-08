(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pesquisar-pesquisar-module"], {
    /***/
    "9aJR":
    /*!*******************************************************!*\
      !*** ./src/app/pesquisar/pesquisar-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: PesquisarPageRoutingModule */

    /***/
    function aJR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PesquisarPageRoutingModule", function () {
        return PesquisarPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _pesquisar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pesquisar.page */
      "WyfB");

      var routes = [{
        path: '',
        component: _pesquisar_page__WEBPACK_IMPORTED_MODULE_3__["PesquisarPage"]
      }];

      var PesquisarPageRoutingModule = /*#__PURE__*/_createClass(function PesquisarPageRoutingModule() {
        _classCallCheck(this, PesquisarPageRoutingModule);
      });

      PesquisarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PesquisarPageRoutingModule);
      /***/
    },

    /***/
    "x+p+":
    /*!***********************************************!*\
      !*** ./src/app/pesquisar/pesquisar.module.ts ***!
      \***********************************************/

    /*! exports provided: PesquisarPageModule */

    /***/
    function xP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PesquisarPageModule", function () {
        return PesquisarPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _pesquisar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./pesquisar-routing.module */
      "9aJR");
      /* harmony import */


      var _pesquisar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pesquisar.page */
      "WyfB");

      var PesquisarPageModule = /*#__PURE__*/_createClass(function PesquisarPageModule() {
        _classCallCheck(this, PesquisarPageModule);
      });

      PesquisarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _pesquisar_routing_module__WEBPACK_IMPORTED_MODULE_5__["PesquisarPageRoutingModule"]],
        declarations: [_pesquisar_page__WEBPACK_IMPORTED_MODULE_6__["PesquisarPage"]]
      })], PesquisarPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pesquisar-pesquisar-module-es5.js.map