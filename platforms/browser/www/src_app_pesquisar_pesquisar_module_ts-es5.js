(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkOreon"] = self["webpackChunkOreon"] || []).push([["src_app_pesquisar_pesquisar_module_ts"], {
    /***/
    50196:
    /*!*******************************************************!*\
      !*** ./src/app/pesquisar/pesquisar-routing.module.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PesquisarPageRoutingModule": function PesquisarPageRoutingModule() {
          return (
            /* binding */
            _PesquisarPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _pesquisar_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./pesquisar.page */
      67928);

      var routes = [{
        path: '',
        component: _pesquisar_page__WEBPACK_IMPORTED_MODULE_0__.PesquisarPage
      }];

      var _PesquisarPageRoutingModule = /*#__PURE__*/_createClass(function PesquisarPageRoutingModule() {
        _classCallCheck(this, PesquisarPageRoutingModule);
      });

      _PesquisarPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _PesquisarPageRoutingModule);
      /***/
    },

    /***/
    46257:
    /*!***********************************************!*\
      !*** ./src/app/pesquisar/pesquisar.module.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PesquisarPageModule": function PesquisarPageModule() {
          return (
            /* binding */
            _PesquisarPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      81864);
      /* harmony import */


      var _pesquisar_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./pesquisar-routing.module */
      50196);
      /* harmony import */


      var _pesquisar_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pesquisar.page */
      67928);

      var _PesquisarPageModule = /*#__PURE__*/_createClass(function PesquisarPageModule() {
        _classCallCheck(this, PesquisarPageModule);
      });

      _PesquisarPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _pesquisar_routing_module__WEBPACK_IMPORTED_MODULE_0__.PesquisarPageRoutingModule],
        declarations: [_pesquisar_page__WEBPACK_IMPORTED_MODULE_1__.PesquisarPage]
      })], _PesquisarPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pesquisar_pesquisar_module_ts-es5.js.map