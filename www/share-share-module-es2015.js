(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["share-share-module"],{

/***/ "ADsi":
/*!***************************************!*\
  !*** ./src/app/share/share.module.ts ***!
  \***************************************/
/*! exports provided: SharePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharePageModule", function() { return SharePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _share_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./share-routing.module */ "uxXr");
/* harmony import */ var _share_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./share.page */ "u5XX");







let SharePageModule = class SharePageModule {
};
SharePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _share_routing_module__WEBPACK_IMPORTED_MODULE_5__["SharePageRoutingModule"]
        ],
        declarations: [_share_page__WEBPACK_IMPORTED_MODULE_6__["SharePage"]]
    })
], SharePageModule);



/***/ }),

/***/ "cUFh":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/share/share.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title *ngIf=\"x\" size=\"large\"  class=\"centertt\">{{ x.nome }}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button class=\"corbot\" defaultHref=\"home\" text=\"\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"card\">\n    <img *ngIf=\"x\"  [src]=\"x.url\" />\n  </ion-card>\n  <ion-list class=\"fundo\">\n    <ion-item *ngIf=\"x\" >\n      <ion-icon  class=\"branco\"   name=\"location-sharp\" size=\"large\"></ion-icon>\n      <h2 class=\"com\">{{ x.local.description }}</h2>\n    </ion-item>\n    <ion-item *ngIf=\"x\" >\n      <ion-icon  class=\"branco\"  name=\"calendar-outline\" item-start></ion-icon>\n      <h2 class=\"com\"> {{ x.dia }} </h2>\n    </ion-item>\n    <ion-item *ngIf=\"x\">\n      <ion-icon  class=\"branco\"  name=\"globe-outline\"></ion-icon>\n      <h2 class=\"com\">Link</h2>\n    </ion-item>\n    <ion-item *ngIf=\"x\" >\n      <ion-icon  class=\"branco\"  name=\"person-sharp\"></ion-icon>\n      <h2 class=\"com\">{{ x.userID[1] }}</h2>\n    </ion-item>\n  </ion-list>\n\n\n  <ion-fab *ngIf=\"aparecer\" vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\">\n    <ion-fab-button>\n      <ion-icon name=\"radio-button-off-outline\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"end\">\n      <ion-fab-button (click)=\"shareInstagram()\" >\n        <ion-icon name=\"logo-instagram\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button (click)=\"shareWatsapp()\">\n        <ion-icon name=\"logo-whatsapp\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab-list>\n    <ion-fab-list side=\"start\">\n      <ion-fab-button (click)=\"shareTwitter()\">\n        <ion-icon name=\"logo-twitter\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button (click)=\"shareFacebook()\">\n        <ion-icon name=\"logo-facebook\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>");

/***/ }),

/***/ "iTT4":
/*!***************************************!*\
  !*** ./src/app/share/share.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nion-toolbar {\n  --padding-top: 24px ;\n  --background: black;\n  --color: white;\n}\n\nion-content {\n  --background: black;\n}\n\n#center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background-color: black;\n}\n\n.centertext {\n  text-align: center;\n}\n\n.centertt {\n  text-align: center;\n  background-color: black;\n  color: white;\n}\n\n.branco {\n  color: white;\n}\n\n.card {\n  align-content: center;\n  background-color: #1C1C1C;\n  color: white;\n  text-align: center;\n}\n\n.fundo {\n  background-color: black;\n  color: white;\n}\n\n.imagem {\n  align-content: center;\n}\n\n.centertt {\n  text-align: center;\n  background-color: black;\n  color: white;\n}\n\n.textevent {\n  color: white;\n  margin-right: 25ex;\n}\n\nion-item {\n  --background: #000000;\n  --color:#FFFFFF;\n}\n\n.a {\n  margin-top: 1ex;\n  font-family: sans-serif;\n  font-style: Trebuchet;\n  font-weight: bold;\n  font-size: x-large;\n}\n\n.com {\n  font-size: 2ex;\n  padding-left: 1ex;\n}\n\n.inic {\n  --padding-start: 18ex;\n  letter-spacing: 0, 5ex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NoYXJlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQURKOztBQUlFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBREo7O0FBSUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQUhKOztBQU1FO0VBQ0UscUJBQUE7QUFISjs7QUFLRTtFQUNFLG9CQUFBO0VBQ0YsbUJBQUE7RUFDQSxjQUFBO0FBRkY7O0FBS0U7RUFDRSxtQkFBQTtBQUZKOztBQUlFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBREo7O0FBR0U7RUFDSSxrQkFBQTtBQUFOOztBQUVFO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFDRTtFQUNFLFlBQUE7QUFFSjs7QUFDRTtFQUNFLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFBRTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtBQUdKOztBQURFO0VBQ0UscUJBQUE7QUFJSjs7QUFERTtFQUNFLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBSUo7O0FBRkU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUFLSjs7QUFIRTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtBQU1KOztBQUpFO0VBQ0UsZUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBT0o7O0FBSkU7RUFDRSxjQUFBO0VBQ0EsaUJBQ0E7QUFNSjs7QUFKRTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7QUFPSiIsImZpbGUiOiJzaGFyZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiNjb250YWluZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB9XG4gIFxuICAjY29udGFpbmVyIHN0cm9uZyB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICB9XG4gIFxuICAjY29udGFpbmVyIHAge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgXG4gICAgY29sb3I6ICM4YzhjOGM7XG4gIFxuICAgIG1hcmdpbjogMDtcbiAgfVxuICBcbiAgI2NvbnRhaW5lciBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgaW9uLXRvb2xiYXJ7XG4gICAgLS1wYWRkaW5nLXRvcDogMjRweCA7XG4gIC0tYmFja2dyb3VuZDogYmxhY2s7XG4gIC0tY29sb3IgOiB3aGl0ZTtcbiAgfVxuICBcbiAgaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogYmxhY2s7XG4gIH1cbiAgI2NlbnRlcntcbiAgICBkaXNwbGF5OiBmbGV4LDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIH1cbiAgLmNlbnRlcnRleHR7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmNlbnRlcnR0e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgLmJyYW5jb3tcbiAgICBjb2xvcjp3aGl0ZTtcbiAgfVxuICBcbiAgLmNhcmR7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxQzFDMUM7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5mdW5kb3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgLmltYWdlbXtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICBcbiAgfVxuICAuY2VudGVydHR7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAudGV4dGV2ZW50e1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDI1ZXg7XG4gIH1cbiAgaW9uLWl0ZW17XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICAgIC0tY29sb3I6I0ZGRkZGRjtcbn1cbiAgLmF7XG4gICAgbWFyZ2luLXRvcDogMWV4O1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc3R5bGU6IFRyZWJ1Y2hldDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6eC1sYXJnZTtcbiAgfVxuICBcbiAgLmNvbXtcbiAgICBmb250LXNpemU6IDJleDtcbiAgICBwYWRkaW5nLWxlZnQ6IFxuICAgIDFleDtcbiAgfSBcbiAgLmluaWN7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxOGV4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLDVleDtcbiAgfSJdfQ== */");

/***/ }),

/***/ "u5XX":
/*!*************************************!*\
  !*** ./src/app/share/share.page.ts ***!
  \*************************************/
/*! exports provided: SharePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharePage", function() { return SharePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_share_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./share.page.html */ "cUFh");
/* harmony import */ var _share_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./share.page.scss */ "iTT4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_native_screenshot_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/screenshot/ngx */ "jAoO");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "/XPu");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);









let SharePage = class SharePage {
    constructor(screenshot, sharing, route, firestore) {
        this.screenshot = screenshot;
        this.sharing = sharing;
        this.route = route;
        this.firestore = firestore;
        this.aparecer = true;
        this.eventoID = this.route.snapshot.paramMap.get('chave');
        this.getevento();
    }
    ngOnInit() {
    }
    screenShotURI() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            (yield this.x) != null;
            this.screenshot.URI(100).then(res => {
                this.screen = res.URI;
                console.log(res.URI, res);
                this.aparecer = true;
            });
        });
    }
    getevento() {
        this.evento = this.firestore.collection('eventos', ref => ref.where('chave2', '==', `${this.eventoID}`)); // Firestore evento
        return this.evento.get().subscribe(b => {
            b.forEach(com => {
                const val = com.data();
                moment__WEBPACK_IMPORTED_MODULE_8__["locale"]('pt-BR');
                this.m = moment__WEBPACK_IMPORTED_MODULE_8__(val.dia).format('ddd DD MMM - HH:mm');
                val.dia = this.m;
                this.x = val;
            });
        });
    }
    shareInstagram() {
        setTimeout(() => {
            this.screenShotURI();
        }, 3000);
        this.aparecer = true;
        // 2 arguments
        this.sharing.shareViaInstagram(this.x.nome, this.screen);
    }
    shareTwitter() {
        setTimeout(() => {
            this.screenShotURI();
        }, 3000);
        this.aparecer = true;
        this.sharing.shareViaTwitter(this.x.nome, this.screen);
    }
    shareWatsapp() {
        setTimeout(() => {
            this.screenShotURI();
        }, 3000);
        this.aparecer = true;
        this.sharing.shareViaWhatsApp(this.x.nome, this.screen);
    }
    shareFacebook() {
        setTimeout(() => {
            this.screenShotURI();
        }, 3000);
        this.aparecer = true;
        this.sharing.shareViaFacebook(this.x.nome, this.screen);
    }
};
SharePage.ctorParameters = () => [
    { type: _ionic_native_screenshot_ngx__WEBPACK_IMPORTED_MODULE_6__["Screenshot"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__["SocialSharing"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] }
];
SharePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-share',
        template: _raw_loader_share_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_share_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_native_screenshot_ngx__WEBPACK_IMPORTED_MODULE_6__["Screenshot"],
        _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__["SocialSharing"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]])
], SharePage);



/***/ }),

/***/ "uxXr":
/*!***********************************************!*\
  !*** ./src/app/share/share-routing.module.ts ***!
  \***********************************************/
/*! exports provided: SharePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharePageRoutingModule", function() { return SharePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _share_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./share.page */ "u5XX");




const routes = [
    {
        path: '',
        component: _share_page__WEBPACK_IMPORTED_MODULE_3__["SharePage"]
    }
];
let SharePageRoutingModule = class SharePageRoutingModule {
};
SharePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SharePageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=share-share-module-es2015.js.map