"use strict";
(self["webpackChunkOreon"] = self["webpackChunkOreon"] || []).push([["src_app_criar-user_criar-user_module_ts"],{

/***/ 57122:
/*!*********************************************************!*\
  !*** ./src/app/criar-user/criar-user-routing.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CriarUserPageRoutingModule": function() { return /* binding */ CriarUserPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _criar_user_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./criar-user.page */ 81185);




const routes = [
    {
        path: '',
        component: _criar_user_page__WEBPACK_IMPORTED_MODULE_0__.CriarUserPage
    }
];
let CriarUserPageRoutingModule = class CriarUserPageRoutingModule {
};
CriarUserPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CriarUserPageRoutingModule);



/***/ }),

/***/ 7197:
/*!*************************************************!*\
  !*** ./src/app/criar-user/criar-user.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CriarUserPageModule": function() { return /* binding */ CriarUserPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var _criar_user_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./criar-user-routing.module */ 57122);
/* harmony import */ var _criar_user_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./criar-user.page */ 81185);







let CriarUserPageModule = class CriarUserPageModule {
};
CriarUserPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _criar_user_routing_module__WEBPACK_IMPORTED_MODULE_0__.CriarUserPageRoutingModule
        ],
        exports: [_criar_user_page__WEBPACK_IMPORTED_MODULE_1__.CriarUserPage],
        declarations: [_criar_user_page__WEBPACK_IMPORTED_MODULE_1__.CriarUserPage]
    })
], CriarUserPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_criar-user_criar-user_module_ts-es2015.js.map