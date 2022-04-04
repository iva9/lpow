(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["criar-criar-module"], {
    /***/
    "O1IZ":
    /*!***************************************!*\
      !*** ./src/app/criar/criar.module.ts ***!
      \***************************************/

    /*! exports provided: CriarPageModule */

    /***/
    function O1IZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CriarPageModule", function () {
        return CriarPageModule;
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


      var _criar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./criar-routing.module */
      "RrCG");
      /* harmony import */


      var _criar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./criar.page */
      "gEee");

      var CriarPageModule = /*#__PURE__*/_createClass(function CriarPageModule() {
        _classCallCheck(this, CriarPageModule);
      });

      CriarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _criar_routing_module__WEBPACK_IMPORTED_MODULE_5__["CriarPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_criar_page__WEBPACK_IMPORTED_MODULE_6__["CriarPage"]]
      })], CriarPageModule);
      /***/
    },

    /***/
    "RrCG":
    /*!***********************************************!*\
      !*** ./src/app/criar/criar-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: CriarPageRoutingModule */

    /***/
    function RrCG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CriarPageRoutingModule", function () {
        return CriarPageRoutingModule;
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


      var _criar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./criar.page */
      "gEee");

      var routes = [{
        path: '',
        component: _criar_page__WEBPACK_IMPORTED_MODULE_3__["CriarPage"]
      }];

      var CriarPageRoutingModule = /*#__PURE__*/_createClass(function CriarPageRoutingModule() {
        _classCallCheck(this, CriarPageRoutingModule);
      });

      CriarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CriarPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=criar-criar-module-es5.js.map