(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["criar-user-criar-user-module"],{

/***/ "/uNq":
/*!*********************************************************!*\
  !*** ./src/app/criar-user/criar-user-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: CriarUserPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriarUserPageRoutingModule", function() { return CriarUserPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _criar_user_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./criar-user.page */ "tzKc");




const routes = [
    {
        path: '',
        component: _criar_user_page__WEBPACK_IMPORTED_MODULE_3__["CriarUserPage"]
    }
];
let CriarUserPageRoutingModule = class CriarUserPageRoutingModule {
};
CriarUserPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CriarUserPageRoutingModule);



/***/ }),

/***/ "Gbqg":
/*!*************************************************!*\
  !*** ./src/app/criar-user/criar-user.module.ts ***!
  \*************************************************/
/*! exports provided: CriarUserPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriarUserPageModule", function() { return CriarUserPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _criar_user_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./criar-user-routing.module */ "/uNq");
/* harmony import */ var _criar_user_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./criar-user.page */ "tzKc");







let CriarUserPageModule = class CriarUserPageModule {
};
CriarUserPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _criar_user_routing_module__WEBPACK_IMPORTED_MODULE_5__["CriarUserPageRoutingModule"]
        ],
        exports: [_criar_user_page__WEBPACK_IMPORTED_MODULE_6__["CriarUserPage"]],
        declarations: [_criar_user_page__WEBPACK_IMPORTED_MODULE_6__["CriarUserPage"]]
    })
], CriarUserPageModule);



/***/ })

}]);
//# sourceMappingURL=criar-user-criar-user-module-es2015.js.map