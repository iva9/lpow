(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["criar-user-criar-user-module"], {
    /***/
    "/uNq":
    /*!*********************************************************!*\
      !*** ./src/app/criar-user/criar-user-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: CriarUserPageRoutingModule */

    /***/
    function uNq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CriarUserPageRoutingModule", function () {
        return CriarUserPageRoutingModule;
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


      var _criar_user_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./criar-user.page */
      "tzKc");

      var routes = [{
        path: '',
        component: _criar_user_page__WEBPACK_IMPORTED_MODULE_3__["CriarUserPage"]
      }];

      var CriarUserPageRoutingModule = /*#__PURE__*/_createClass(function CriarUserPageRoutingModule() {
        _classCallCheck(this, CriarUserPageRoutingModule);
      });

      CriarUserPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CriarUserPageRoutingModule);
      /***/
    },

    /***/
    "Gbqg":
    /*!*************************************************!*\
      !*** ./src/app/criar-user/criar-user.module.ts ***!
      \*************************************************/

    /*! exports provided: CriarUserPageModule */

    /***/
    function Gbqg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CriarUserPageModule", function () {
        return CriarUserPageModule;
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


      var _criar_user_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./criar-user-routing.module */
      "/uNq");
      /* harmony import */


      var _criar_user_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./criar-user.page */
      "tzKc");

      var CriarUserPageModule = /*#__PURE__*/_createClass(function CriarUserPageModule() {
        _classCallCheck(this, CriarUserPageModule);
      });

      CriarUserPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _criar_user_routing_module__WEBPACK_IMPORTED_MODULE_5__["CriarUserPageRoutingModule"]],
        exports: [_criar_user_page__WEBPACK_IMPORTED_MODULE_6__["CriarUserPage"]],
        declarations: [_criar_user_page__WEBPACK_IMPORTED_MODULE_6__["CriarUserPage"]]
      })], CriarUserPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=criar-user-criar-user-module-es5.js.map