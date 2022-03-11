(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/cSS":
/*!***********************************************************!*\
  !*** ./src/app/evento-pesquisa/evento-pesquisa.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n.margin {\n  padding-right: 1em;\n  margin-right: 1em;\n  --icon-margin-end: 1em;\n  --icon-padding-end: 1em;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nion-toolbar {\n  --padding-top: 24px ;\n  --background: black;\n  --color: white;\n}\n\nion-content {\n  --background: black;\n}\n\n#center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background-color: black;\n}\n\n.centertext {\n  text-align: center;\n}\n\n.centertt {\n  margin-left: 0.5em;\n  text-align: center;\n  background-color: black;\n  color: white;\n}\n\n.branco {\n  color: white;\n}\n\n.card {\n  align-content: center;\n  background-color: #1C1C1C;\n  color: white;\n  text-align: center;\n}\n\n.fundo {\n  background-color: black;\n  color: white;\n}\n\n.imagem {\n  height: 50%;\n  width: 100%;\n  align-content: center !important;\n  max-height: 35vh !important;\n  width: 100% !important;\n  -o-object-fit: cover !important;\n     object-fit: cover !important;\n}\n\n.textevent {\n  color: white;\n  margin-right: 25ex;\n}\n\nion-item {\n  --background: #000000;\n  --color:#FFFFFF;\n}\n\n.a {\n  margin-top: 1ex;\n  font-family: sans-serif;\n  font-style: Trebuchet;\n  font-weight: bold;\n  font-size: x-large;\n}\n\n.com {\n  font-size: 2ex;\n  padding-left: 1ex;\n}\n\n.inic {\n  --padding-start: 18ex;\n  letter-spacing: 0, 5ex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2V2ZW50by1wZXNxdWlzYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFESjs7QUFJRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQURKOztBQUlFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUVBLFNBQUE7QUFISjs7QUFLRTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBRko7O0FBSUU7RUFDRSxxQkFBQTtBQURKOztBQUdFO0VBRUUsb0JBQUE7RUFDRixtQkFBQTtFQUNBLGNBQUE7QUFERjs7QUFJRTtFQUNFLG1CQUFBO0FBREo7O0FBR0U7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUFBSjs7QUFFRTtFQUNJLGtCQUFBO0FBQ047O0FBQ0U7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQUU7RUFDRSxZQUFBO0FBR0o7O0FBQUU7RUFDRSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBR0o7O0FBREU7RUFDRSx1QkFBQTtFQUNBLFlBQUE7QUFJSjs7QUFGRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsK0JBQUE7S0FBQSw0QkFBQTtBQUtKOztBQURFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBSUo7O0FBRkU7RUFDRSxxQkFBQTtFQUNBLGVBQUE7QUFLSjs7QUFIRTtFQUNFLGVBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQU1KOztBQUhFO0VBQ0UsY0FBQTtFQUNBLGlCQUNBO0FBS0o7O0FBSEU7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0FBTUoiLCJmaWxlIjoiZXZlbnRvLXBlc3F1aXNhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuI2NvbnRhaW5lciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIH1cbiAgXG4gICNjb250YWluZXIgc3Ryb25nIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gIH1cbiAgXG4gICNjb250YWluZXIgcCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBcbiAgICBjb2xvcjogIzhjOGM4YztcbiAgXG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIC5tYXJnaW57XG4gICAgcGFkZGluZy1yaWdodDogMWVtO1xuICAgIG1hcmdpbi1yaWdodDogMWVtO1xuICAgIC0taWNvbi1tYXJnaW4tZW5kOiAxZW07XG4gICAgLS1pY29uLXBhZGRpbmctZW5kOiAxZW07XG4gIH1cbiAgI2NvbnRhaW5lciBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgaW9uLXRvb2xiYXJ7XG4gICAgXG4gICAgLS1wYWRkaW5nLXRvcDogMjRweCA7XG4gIC0tYmFja2dyb3VuZDogYmxhY2s7XG4gIC0tY29sb3IgOiB3aGl0ZTtcbiAgfVxuXG4gIGlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IGJsYWNrO1xuICB9XG4gICNjZW50ZXJ7XG4gICAgZGlzcGxheTogZmxleCw7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICB9XG4gIC5jZW50ZXJ0ZXh0e1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5jZW50ZXJ0dHtcbiAgICBtYXJnaW4tbGVmdDogMC41ZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAuYnJhbmNve1xuICAgIGNvbG9yOndoaXRlO1xuICB9XG4gIFxuICAuY2FyZHtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFDMUMxQztcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmZ1bmRve1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAuaW1hZ2Vte1xuICAgIGhlaWdodDogNTAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDM1dmggICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBvYmplY3QtZml0OiBjb3ZlciAhaW1wb3J0YW50O1xuICAgXG4gIH1cbiAgXG4gIC50ZXh0ZXZlbnR7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1yaWdodDogMjVleDtcbiAgfVxuICBpb24taXRlbXtcbiAgICAtLWJhY2tncm91bmQ6ICMwMDAwMDA7XG4gICAgLS1jb2xvcjojRkZGRkZGO1xufVxuICAuYXtcbiAgICBtYXJnaW4tdG9wOiAxZXg7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgZm9udC1zdHlsZTogVHJlYnVjaGV0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTp4LWxhcmdlO1xuICB9XG4gIFxuICAuY29te1xuICAgIGZvbnQtc2l6ZTogMmV4O1xuICAgIHBhZGRpbmctbGVmdDogXG4gICAgMWV4O1xuICB9IFxuICAuaW5pY3tcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE4ZXg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAsNWV4O1xuICB9Il19 */");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ivanovmachadodossantos/Documents/OreonIos/src/main.ts */"zUnb");


/***/ }),

/***/ "1J1b":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/eventos-do-usuario/proximo-evento.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header><ion-toolbar>\n  <ion-title size=\"large\" class=\"centertt\"> Eventos </ion-title>\n  <ion-buttons slot=\"start\">\n    <ion-back-button defaultHref=\"home\" text=\"\"></ion-back-button>\n  </ion-buttons>\n</ion-toolbar>\n</ion-header>\n");

/***/ }),

/***/ "34Y5":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.page.html */ "V6Ie");
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss */ "r67e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../user.service */ "xdv0");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "up+p");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! firebase */ "iqUP");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_11__);












let LoginPage = class LoginPage {
    constructor(afauth, alertController, router, loadingC, user, google, firestore, afdatabase) {
        this.afauth = afauth;
        this.alertController = alertController;
        this.router = router;
        this.loadingC = loadingC;
        this.user = user;
        this.google = google;
        this.firestore = firestore;
        this.afdatabase = afdatabase;
        this.email = "";
        this.password = "";
        this.emailrecu = "";
        this.abrir = false;
        this.temqverificar = false;
    }
    ngOnInit() {
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingC.create({
                cssClass: 'my-custom-class',
                message: 'Espere um momento...',
            });
            yield this.loading.present();
        });
    }
    login() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.presentLoading();
            const { email, password } = this;
            try {
                const res = yield this.user.login(email, password);
                if (res.user) {
                    this.user.setUser({
                        username: res.user.displayName,
                        uid: res.user.uid,
                        foto: res.user.photoURL,
                    });
                    this.showalert('', 'Login com sucesso');
                    this.router.navigate(['./home']);
                    this.email = "";
                    this.password = "";
                }
            }
            catch (err) {
                if (err.code == "auth/invalid-password") {
                    this.loadingC.dismiss();
                    return this.showalert("Erro", "Senha errada");
                }
                if (err.code == "auth/user-not-found") {
                    this.loadingC.dismiss();
                    return this.showalert("Erro", "Usuario não encontrado.");
                }
                else {
                    this.loadingC.dismiss();
                    return this.showalert(err.code, err.message);
                }
            }
            this.loadingC.dismiss();
        });
    }
    abriu() {
        this.abrir = !this.abrir;
    }
    voltar() {
        this.router.navigate(['./criar-user']);
    }
    enviar() {
        var auth = this.afauth;
        auth.sendPasswordResetEmail(this.emailrecu).catch(error => {
            return this.showalert("Erro", error);
        });
        this.showalert("Email enviado!", "cheque lixo/spam");
    }
    showalert(header, message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header,
                message,
                buttons: ["Ok"]
            });
            yield alert.present();
        });
    }
    emailverificado() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var foi = (yield this.afauth.currentUser).emailVerified;
            console.log(foi);
        });
    }
    enviaremaildeverific() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            (yield this.afauth.currentUser).sendEmailVerification();
            this.temqverificar = true;
            this.emailverificado();
        });
    }
    loginGooglecom() {
        this.LoginGoogle().then(() => {
            //const res =  this.Afauth.currentUser
            this.presentLoading();
            this.mostraale();
        }).catch(err => {
            this.showalert("erro", err);
        });
    }
    LoginGoogle() {
        return this.google.login({}).then(result => {
            const user_data_google = result;
            return this.afauth.signInWithCredential(firebase__WEBPACK_IMPORTED_MODULE_11__["auth"].GoogleAuthProvider.credential(null, user_data_google.accesToken));
        });
    }
    mostraale() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.afauth.currentUser;
            this.firestore.collection('users', ref => ref.where('iduser', '==', `${res.uid}`)).snapshotChanges().subscribe(usergg => {
                if (usergg.length > 0) {
                    this.loadingC.dismiss();
                    this.router.navigate(['/home']);
                    this.showalert('', 'Login com sucesso');
                }
                else {
                    var username = "Usuario";
                    var imgUser = "https://firebasestorage.googleapis.com/v0/b/oreon-4bfc2.appspot.com/o/profile.png?alt=media&token=3ac5e17d-8119-46e5-9a20-e2e8d1080b18";
                    var iduser = res.uid;
                    //display name ja existe
                    this.firestore.collection("users").doc(`${res.uid}`).set({
                        username, iduser, imgUser
                    });
                    this.afdatabase.database.ref(`users/${res.uid}/username`).set({
                        username, iduser, imgUser
                    });
                    this.router.navigate(['/home']);
                    this.loadingC.dismiss();
                }
            });
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_9__["GooglePlus"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_10__["AngularFireDatabase"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
        _user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
        _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_9__["GooglePlus"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"],
        _angular_fire_database__WEBPACK_IMPORTED_MODULE_10__["AngularFireDatabase"]])
], LoginPage);

//ae


/***/ }),

/***/ "5dUu":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/criar-user/criar-user.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"aloha\">\n  <ion-title size=\"large\" class=\"title\">Oreon</ion-title>\n  </ion-toolbar>\n </ion-header> \n\n<ion-content padding class=\"ff\">\n  <div class=\"spaço\">\n    <h1 class=\"titlee\">Bem Vindo</h1>\n    <div>\n    <ion-col>\n    <ion-button  color=\"primary\"  routerLink=\"/criar\" style=\"padding-left:75px\">Criar</ion-button>\n    <ion-button color=\"primary\" routerLink=\"/login\" style=\"padding-right:75px\">Login</ion-button>\n    </ion-col>\n  </div>\n  <a class=\"later\" (click)=\"home()\">Talvez depois</a>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "5o7k":
/*!*******************************************!*\
  !*** ./src/app/tutorial/tutorial.page.ts ***!
  \*******************************************/
/*! exports provided: TutorialPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialPage", function() { return TutorialPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tutorial_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tutorial.page.html */ "8bPp");
/* harmony import */ var _tutorial_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tutorial.page.scss */ "m29k");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let TutorialPage = class TutorialPage {
    constructor(modal) {
        this.modal = modal;
    }
    ngOnInit() {
    }
    close() {
        this.modal.dismiss();
    }
};
TutorialPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
TutorialPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tutorial',
        template: _raw_loader_tutorial_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tutorial_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
], TutorialPage);



/***/ }),

/***/ "6MGo":
/*!*********************************************!*\
  !*** ./src/app/tutorial/tutorial.module.ts ***!
  \*********************************************/
/*! exports provided: TutorialPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialPageModule", function() { return TutorialPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _tutorial_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tutorial-routing.module */ "SF65");
/* harmony import */ var _tutorial_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tutorial.page */ "5o7k");







let TutorialPageModule = class TutorialPageModule {
};
TutorialPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tutorial_routing_module__WEBPACK_IMPORTED_MODULE_5__["TutorialPageRoutingModule"]
        ],
        declarations: [_tutorial_page__WEBPACK_IMPORTED_MODULE_6__["TutorialPage"]]
    })
], TutorialPageModule);



/***/ }),

/***/ "6P/g":
/*!*********************************************************************!*\
  !*** ./src/app/eventos-do-usuario/proximo-evento-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ProximoEventoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProximoEventoPageRoutingModule", function() { return ProximoEventoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _proximo_evento_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./proximo-evento.page */ "BfPd");




const routes = [
    {
        path: '',
        component: _proximo_evento_page__WEBPACK_IMPORTED_MODULE_3__["ProximoEventoPage"]
    }
];
let ProximoEventoPageRoutingModule = class ProximoEventoPageRoutingModule {
};
ProximoEventoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProximoEventoPageRoutingModule);



/***/ }),

/***/ "8bPp":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tutorial/tutorial.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"title\">Tutorial</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content> \n  <ion-slides class=\"slide\" pager=\"true\" >\n    <ion-slide>\n      <div>\n      <img src=\"../../assets/Tutorial1.png\">\n      <img src=\"../../assets/tutorial2.jpg\">\n      <h2 class=\"p\">No texto azul deslize pro lado para checar outras listas.</h2>\n     </div>\n    </ion-slide>\n    <ion-slide>\n      <div>\n        <img src=\"../../assets/tutorial3.png\">\n        <h2 class=\"p\">Toque na imagem para abrir/fechar detalhes do evento.</h2>\n       </div>\n    </ion-slide>\n    <ion-slide >\n      <div>\n        <img class=\"slide3\" src=\"../../assets/tutorial5.png\">\n        <h2 class=\"p\">Ups determinam a posição do evento. Quanto mais Ups, mais acima nas listas.</h2>\n       </div>\n    </ion-slide>\n  </ion-slides> \n</ion-content>\n\n\n\n<ion-footer>\n\n    <ion-button shape=\"round\" expand=\"full\" type=\"submit\" (click)=\"close()\">Pular</ion-button>\n\n</ion-footer>");

/***/ }),

/***/ "AClZ":
/*!*******************************************************************!*\
  !*** ./src/app/evento-pesquisa/evento-pesquisa-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: EventoPesquisaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventoPesquisaPageRoutingModule", function() { return EventoPesquisaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _evento_pesquisa_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./evento-pesquisa.page */ "yeiI");




const routes = [
    {
        path: '',
        component: _evento_pesquisa_page__WEBPACK_IMPORTED_MODULE_3__["EventoPesquisaPage"]
    }
];
let EventoPesquisaPageRoutingModule = class EventoPesquisaPageRoutingModule {
};
EventoPesquisaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EventoPesquisaPageRoutingModule);



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BfPd":
/*!***********************************************************!*\
  !*** ./src/app/eventos-do-usuario/proximo-evento.page.ts ***!
  \***********************************************************/
/*! exports provided: ProximoEventoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProximoEventoPage", function() { return ProximoEventoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_proximo_evento_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./proximo-evento.page.html */ "1J1b");
/* harmony import */ var _proximo_evento_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./proximo-evento.page.scss */ "f5aN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");








let ProximoEventoPage = class ProximoEventoPage {
    constructor(auth, firestore, firebase) {
        this.auth = auth;
        this.firestore = firestore;
        this.firebase = firebase;
        this.criados = new Array();
        this.ups = new Array();
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.auth.currentUser;
            console.log(res.uid);
            this.listadecriados(res.uid).subscribe(data => {
                this.criados = data;
            });
        });
    }
    listadecriados(cria) {
        //console.log(cria)
        this.eventocriado = this.firestore.collection('eventos', ref => ref.where('userID', '==', `${cria}`));
        return this.eventocriado.snapshotChanges((['added'])).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                return Object.assign({}, data);
            });
        }));
    }
    delete(evento) {
        this.firestore.collection("eventos").doc(`${evento.id}`).delete().then(function () {
            console.log("Document successfully deleted!");
        });
        this.firebase.database.ref(`eventDetails/${evento.chave2}`).remove();
        console.log(evento.id);
    }
};
ProximoEventoPage.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"] }
];
ProximoEventoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-proximo-evento',
        template: _raw_loader_proximo_evento_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_proximo_evento_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"]])
], ProximoEventoPage);



/***/ }),

/***/ "Bp9i":
/*!*************************************************************!*\
  !*** ./src/app/usuario-pesquisa/usuario-pesquisa.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color: #000000;\n}\n\nion-toolbar {\n  --padding-top: 24px ;\n  --background: black;\n  --color: white;\n}\n\n.centertt {\n  text-align: center;\n  background-color: black;\n  color: white;\n}\n\n.branco {\n  color: white;\n}\n\n.a {\n  padding-top: 10ex;\n  font-family: sans-serif;\n  font-style: Trebuchet;\n  font-weight: bold;\n  font-size: x-large;\n}\n\n.imagem {\n  border-radius: 50%;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 250px;\n  height: 250px;\n}\n\n.title {\n  text-align: center;\n  color: white;\n}\n\n.card {\n  align-content: center;\n  background-color: black;\n}\n\n.com {\n  font-size: 3ex;\n  padding-left: 1ex;\n  font-family: sans-serif;\n  font-style: Trebuchet;\n  font-weight: bold;\n  color: white;\n  padding-bottom: 1ex;\n}\n\n.imag {\n  padding-top: 1ex;\n  padding-bottom: 1ex;\n}\n\nion-item {\n  --background: black;\n  color: white;\n}\n\n.sub {\n  font-size: 15px;\n  color: #5f5f5f;\n  padding-left: 2ex;\n  font-family: sans-serif;\n  font-style: Trebuchet;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3VzdWFyaW8tcGVzcXVpc2EucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQUE7QUFDRjs7QUFFRTtFQUNFLG9CQUFBO0VBQ0gsbUJBQUE7RUFDQSxjQUFBO0FBQ0Q7O0FBQ0E7RUFDQyxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQUVEOztBQUFFO0VBQ0UsWUFBQTtBQUdKOztBQUFFO0VBQ0UsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUdKOztBQURFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBSUo7O0FBRkU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUFLSjs7QUFIQztFQUNHLHFCQUFBO0VBQ0EsdUJBQUE7QUFNSjs7QUFKQztFQUNDLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQU9GOztBQUZBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQUtKOztBQUhBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FBTUY7O0FBSkE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FBT0oiLCJmaWxlIjoidXN1YXJpby1wZXNxdWlzYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIH1cblxuICBpb24tdG9vbGJhcntcbiAgICAtLXBhZGRpbmctdG9wOiAyNHB4IDtcblx0LS1iYWNrZ3JvdW5kOiBibGFjaztcblx0LS1jb2xvciA6IHdoaXRlO1xufVxuLmNlbnRlcnR0e1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuXHRjb2xvcjogd2hpdGU7XG4gIH1cbiAgLmJyYW5jb3tcbiAgICBjb2xvcjp3aGl0ZTtcbiAgfVxuICBcbiAgLmF7XG4gICAgcGFkZGluZy10b3A6IDEwZXg7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgZm9udC1zdHlsZTogVHJlYnVjaGV0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTp4LWxhcmdlO1xuICB9XG4gIC5pbWFnZW17XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgaGVpZ2h0OiAyNTBweDtcbn1cbiAgLnRpdGxle1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gfVxuIC5jYXJke1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiB9IFxuIC5jb217XG4gIGZvbnQtc2l6ZTogM2V4O1xuICBwYWRkaW5nLWxlZnQ6IDFleDtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IFRyZWJ1Y2hldDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy1ib3R0b206IDFleDtcblxufVxuXG5cbi5pbWFne1xuICAgIHBhZGRpbmctdG9wOiAxZXg7XG4gICAgcGFkZGluZy1ib3R0b206IDFleDtcbn1cbmlvbi1pdGVte1xuICAtLWJhY2tncm91bmQ6IGJsYWNrO1xuICBjb2xvcjp3aGl0ZTtcbn1cbi5zdWJ7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGNvbG9yOiAjNWY1ZjVmO1xuICAgIHBhZGRpbmctbGVmdDogMmV4O1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc3R5bGU6IFRyZWJ1Y2hldDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "CM9R":
/*!***********************************************************!*\
  !*** ./src/app/eventomodal/eventomodal-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: EventomodalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventomodalPageRoutingModule", function() { return EventomodalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _eventomodal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eventomodal.page */ "wuIU");




const routes = [
    {
        path: '',
        component: _eventomodal_page__WEBPACK_IMPORTED_MODULE_3__["EventomodalPage"]
    }
];
let EventomodalPageRoutingModule = class EventomodalPageRoutingModule {
};
EventomodalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EventomodalPageRoutingModule);



/***/ }),

/***/ "D9P7":
/*!*********************************************************************!*\
  !*** ./src/app/usuario-pesquisa/usuario-pesquisa-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: UsuarioPesquisaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioPesquisaPageRoutingModule", function() { return UsuarioPesquisaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _usuario_pesquisa_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./usuario-pesquisa.page */ "V4wL");




const routes = [
    {
        path: '',
        component: _usuario_pesquisa_page__WEBPACK_IMPORTED_MODULE_3__["UsuarioPesquisaPage"]
    }
];
let UsuarioPesquisaPageRoutingModule = class UsuarioPesquisaPageRoutingModule {
};
UsuarioPesquisaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UsuarioPesquisaPageRoutingModule);



/***/ }),

/***/ "DZGe":
/*!*************************************************!*\
  !*** ./src/app/criar-user/criar-user.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.fundo {\n  background-color: black;\n  color: white;\n}\n.title {\n  text-align: center;\n  color: white;\n  background-color: black;\n}\n.aloha {\n  background-color: black;\n}\n.titlee {\n  text-align: center;\n  color: white;\n  background-color: black;\n}\n.later {\n  color: #3388ff;\n  padding-top: 2em;\n}\n.spaço {\n  text-align: center;\n  color: white;\n  background-color: black;\n  margin-top: 25em;\n}\nion-content {\n  --ion-background-color: #000000;\n}\nion-toolbar {\n  margin-top: 0.7em;\n  --background: black;\n  --padding-top: 15px ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NyaWFyLXVzZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtBQUVKO0FBQUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQUdGO0FBREE7RUFDRSx1QkFBQTtBQUlGO0FBRkU7RUFDTSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQUtSO0FBRkk7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFLTjtBQUZBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQUtKO0FBSEE7RUFDSSwrQkFBQTtBQU1KO0FBSEk7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFNTiIsImZpbGUiOiJjcmlhci11c2VyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdW5kb3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG59XG4udGl0bGV7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cbi5hbG9oYXtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7ICAgICAgICAgICBcbn1cbiAgLnRpdGxlZXtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIH1cbiBcbiAgICAubGF0ZXJ7XG4gICAgICBjb2xvcjogIzMzODhmZjtcbiAgICAgIHBhZGRpbmctdG9wOiAyZW07XG4gICAgfVxuXG4uc3Bhw6dve1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgbWFyZ2luLXRvcDogMjVlbTtcbn1cbmlvbi1jb250ZW50IHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICB9XG5cbiAgICBpb24tdG9vbGJhcntcbiAgICAgIG1hcmdpbi10b3A6IDAuN2VtIDtcbiAgICAgIC0tYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAtLXBhZGRpbmctdG9wOiAxNXB4IDtcbiAgICB9XG5cbiAgIl19 */");

/***/ }),

/***/ "HCKi":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/editar-modal/editar-modal.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title (click)=\"close()\" size=\"large\" class=\"centertt\">Editar </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"center\">\n    <input type=\"file\" (change)=\"showPreview($event)\" class=\"filebtn\" #fileButton/>\n    <img class=\"imagem\"  (click)=\"writeUserData()\" [src]=\"img\">\n    <ion-list class=\"margintop\" no-lines>\n      <ion-item lines=\"none\" >\n        <ion-input type=\"text\" placeholder=\"Nome de Usuario\" name=\"id\" [(ngModel)]=\"newUsername\"></ion-input>\n      </ion-item>\n      </ion-list>\n      </div>\n      <div class=\"publicar\">    \n      <ion-button shape=\"round\"  (click)=\"editar() \"  class=\"publicar\">Concluir</ion-button>\n      </div>\n</ion-content>\n");

/***/ }),

/***/ "I6jx":
/*!***************************************************!*\
  !*** ./src/app/novo-evento/novo-evento.module.ts ***!
  \***************************************************/
/*! exports provided: NovoEventoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovoEventoPageModule", function() { return NovoEventoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _novo_evento_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./novo-evento-routing.module */ "b0Dx");
/* harmony import */ var _novo_evento_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./novo-evento.page */ "y/1N");







let NovoEventoPageModule = class NovoEventoPageModule {
};
NovoEventoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _novo_evento_routing_module__WEBPACK_IMPORTED_MODULE_5__["NovoEventoPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        declarations: [_novo_evento_page__WEBPACK_IMPORTED_MODULE_6__["NovoEventoPage"]]
    })
], NovoEventoPageModule);



/***/ }),

/***/ "JBpm":
/*!***************************************************!*\
  !*** ./src/app/eventomodal/eventomodal.module.ts ***!
  \***************************************************/
/*! exports provided: EventomodalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventomodalPageModule", function() { return EventomodalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _eventomodal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./eventomodal-routing.module */ "CM9R");
/* harmony import */ var _eventomodal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./eventomodal.page */ "wuIU");







let EventomodalPageModule = class EventomodalPageModule {
};
EventomodalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _eventomodal_routing_module__WEBPACK_IMPORTED_MODULE_5__["EventomodalPageRoutingModule"]
        ],
        declarations: [_eventomodal_page__WEBPACK_IMPORTED_MODULE_6__["EventomodalPage"]],
        exports: [_eventomodal_page__WEBPACK_IMPORTED_MODULE_6__["EventomodalPage"]],
    })
], EventomodalPageModule);



/***/ }),

/***/ "MUNy":
/*!***************************************************!*\
  !*** ./src/app/novo-evento/novo-evento.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".corbot {\n  color: #3880ff;\n}\n\n.shw {\n  margin-top: -10em;\n  padding-top: -4em;\n}\n\nion-slide {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 90%;\n}\n\n.icon {\n  color: #FFFFFF;\n  margin-top: -1em;\n}\n\n.th2 {\n  color: #FFFFFF;\n  text-align: left;\n}\n\nion-content {\n  --ion-background-color: #000000;\n}\n\n.item1 {\n  margin-top: 0.1em;\n  --background: #000000;\n  --color:#FFFFFF;\n}\n\n.itemm {\n  margin-top: 1em;\n  --background: #000000;\n  --color:#FFFFFF;\n}\n\nion-toolbar {\n  --padding-top: 24px ;\n  --background: black;\n}\n\n.searchbar {\n  --color: #FFFFFF;\n  --placeholder-color:#FFFFFF;\n  --background:#1C1C1C;\n}\n\n.imag {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.ma {\n  margin-left: 1em;\n}\n\n.card {\n  max-height: 35vh;\n  align-content: center;\n  background: rgba(92, 92, 92, 0.473);\n  color: white;\n}\n\n.holder {\n  --color: #FFFFFF;\n  --placeholder-color:#FFFFFF;\n  --background:#000000;\n}\n\n.centertt {\n  text-align: center;\n  background-color: black;\n  color: white;\n}\n\n.publicar {\n  text-align: center;\n}\n\nion-list {\n  --background-color: #1C1C1C;\n  --color: white;\n}\n\n.filtro {\n  --background-color:#1C1C1C;\n  --color: white;\n}\n\n.filebtn {\n  opacity: 0;\n  position: absolute;\n  top: -100em;\n  left: -100em;\n}\n\n.btn {\n  margin-top: 85%;\n}\n\n.btn2 {\n  margin-top: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vdm8tZXZlbnRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGNBQUE7QUFBSjs7QUFJRTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUFESjs7QUFHRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBQUo7O0FBR0U7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFFRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNFO0VBQ0UsK0JBQUE7QUFFSjs7QUFDSTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBRU47O0FBQUU7RUFDRSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBR0o7O0FBQUk7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0FBR047O0FBREU7RUFDRSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7QUFJSjs7QUFGQztFQUNDLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQUtGOztBQUhDO0VBQ0UsZ0JBQUE7QUFNSDs7QUFKQztFQUNDLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQ0FBQTtFQUNBLFlBQUE7QUFPRjs7QUFKQTtFQUNFLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtBQU9GOztBQUxBO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFRRjs7QUFOQTtFQUNFLGtCQUFBO0FBU0Y7O0FBUEE7RUFDQywyQkFBQTtFQUNDLGNBQUE7QUFVRjs7QUFSQTtFQUNFLDBCQUFBO0VBQ0EsY0FBQTtBQVdGOztBQVRBO0VBQ0MsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFZRDs7QUFWQTtFQUNFLGVBQUE7QUFhRjs7QUFYQTtFQUNFLGVBQUE7QUFjRiIsImZpbGUiOiJub3ZvLWV2ZW50by5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgLmNvcmJvdHtcbiAgICBjb2xvciA6IzM4ODBmZjtcbiAgfVxuICBcblxuICAuc2h3e1xuICAgIG1hcmdpbi10b3A6IC0xMGVtO1xuICAgIHBhZGRpbmctdG9wOiAtNGVtO1xuICB9XG4gIGlvbi1zbGlkZXsgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogOTAlXG4gIH1cblxuICAuaWNvbntcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBtYXJnaW4tdG9wOiAtMWVtO1xuICB9XG4gIC50aDJ7ICBcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG4gIGlvbi1jb250ZW50IHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO31cblxuICAgIFxuICAgIC5pdGVtMXtcbiAgICAgIG1hcmdpbi10b3A6MC4xZW07XG4gICAgICAtLWJhY2tncm91bmQ6ICMwMDAwMDA7XG4gICAgICAtLWNvbG9yOiNGRkZGRkY7XG4gIH1cbiAgLml0ZW1te1xuICAgIG1hcmdpbi10b3A6MWVtO1xuICAgIC0tYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgICAtLWNvbG9yOiNGRkZGRkY7XG59XG5cbiAgICBpb24tdG9vbGJhcntcbiAgICAgIC0tcGFkZGluZy10b3A6IDI0cHggO1xuICAgICAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbiAgfVxuICAuc2VhcmNoYmFye1xuICAgIC0tY29sb3I6ICNGRkZGRkY7IFxuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6I0ZGRkZGRjtcbiAgICAtLWJhY2tncm91bmQ6IzFDMUMxQztcbiB9XG4gLmltYWd7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuIH1cbiAubWF7XG4gICBtYXJnaW4tbGVmdDogMWVtO1xuIH1cbiAuY2FyZHtcbiAgbWF4LWhlaWdodDogMzV2aCA7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjs7XG4gIGJhY2tncm91bmQ6cmdiYSg5MiwgOTIsIDkyLCAwLjQ3Myk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmhvbGRlcntcbiAgLS1jb2xvcjogI0ZGRkZGRjsgXG4gIC0tcGxhY2Vob2xkZXItY29sb3I6I0ZGRkZGRjtcbiAgLS1iYWNrZ3JvdW5kOiMwMDAwMDA7XG59ICBcbi5jZW50ZXJ0dHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xufVxuLnB1YmxpY2Fye1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tbGlzdHtcbiAtLWJhY2tncm91bmQtY29sb3I6ICMxQzFDMUM7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuLmZpbHRyb3tcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiMxQzFDMUM7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuLmZpbGVidG4ge1xuXHRvcGFjaXR5OiAwO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogLTEwMGVtO1xuXHRsZWZ0OiAtMTAwZW07XG59XG4uYnRue1xuICBtYXJnaW4tdG9wOiA4NSU7XG59XG4uYnRuMntcbiAgbWFyZ2luLXRvcDogMTAlO1xufVxuIl19 */");

/***/ }),

/***/ "PX0j":
/*!***********************************************!*\
  !*** ./src/app/pesquisar/pesquisar.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --background: #000000;\n  --color:#FFFFFF;\n}\n\nion-content {\n  --ion-background-color: #000000;\n}\n\n.searchbar {\n  margin-top: 25px;\n  --color: #FFFFFF;\n  --placeholder-color:#FFFFFF;\n  --background:#1C1C1C;\n}\n\nion-toolbar {\n  --background: black;\n}\n\n.margin {\n  margin-top: 25px;\n}\n\n.com {\n  font-size: 3ex;\n  padding-left: 1ex;\n  font-family: sans-serif;\n  font-style: Trebuchet;\n  font-weight: bold;\n}\n\n.imag {\n  padding-top: 1ex;\n  padding-bottom: 1ex;\n}\n\n.sub {\n  font-size: 15px;\n  color: #5f5f5f;\n  padding-left: 2ex;\n  font-family: sans-serif;\n  font-style: Trebuchet;\n  font-weight: bold;\n}\n\n.tec {\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Blc3F1aXNhci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLCtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtBQUVKOztBQUFDO0VBQ0csbUJBQUE7QUFHSjs7QUFEQTtFQUNJLGdCQUFBO0FBSUo7O0FBRkE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUFLSjs7QUFIRTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUFNTjs7QUFKRTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUFPTjs7QUFMRTtFQUNJLHVCQUFBO0FBUU4iLCJmaWxlIjoicGVzcXVpc2FyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVte1xuICAgIC0tYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgICAtLWNvbG9yOiNGRkZGRkY7XG4gIFxufVxuaW9uLWNvbnRlbnQge1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG59XG4uc2VhcmNoYmFye1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgLS1jb2xvcjogI0ZGRkZGRjsgXG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjojRkZGRkZGO1xuICAgIC0tYmFja2dyb3VuZDojMUMxQzFDO1xuIH1cbiBpb24tdG9vbGJhcntcbiAgICAtLWJhY2tncm91bmQ6IGJsYWNrO1xufVxuLm1hcmdpbntcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuLmNvbXtcbiAgICBmb250LXNpemU6IDNleDtcbiAgICBwYWRkaW5nLWxlZnQ6IDFleDtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICBmb250LXN0eWxlOiBUcmVidWNoZXQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgLmltYWd7XG4gICAgICBwYWRkaW5nLXRvcDogMWV4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDFleDtcbiAgfVxuICAuc3Vie1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgY29sb3I6ICM1ZjVmNWY7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDJleDtcbiAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgZm9udC1zdHlsZTogVHJlYnVjaGV0O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgLnRlY3tcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB9Il19 */");

/***/ }),

/***/ "PgrP":
/*!*****************************!*\
  !*** ./src/app/firebase.ts ***!
  \*****************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyDyDuNFJVPzYBLP-kEXrncANN9LyDUQeKc",
        authDomain: "oreon-4bfc2.firebaseapp.com",
        databaseURL: "https://oreon-4bfc2.firebaseio.com",
        projectId: "oreon-4bfc2",
        storageBucket: "oreon-4bfc2.appspot.com",
        messagingSenderId: "373924502179",
        appId: "1:373924502179:web:febb65430787c34e4b7d16",
        measurementId: "G-PJNS85YMGR"
    }
};


/***/ }),

/***/ "QfZD":
/*!***************************************!*\
  !*** ./src/app/criar/criar.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --padding-top: 56px ;\n  --background: black;\n}\n\nion-content {\n  --ion-background-color: #000000;\n  --ion-color:#FFFFFF;\n}\n\nion-title {\n  --color: white;\n  size: large;\n}\n\n.holder {\n  --color: #FFFFFF;\n  --placeholder-color:#FFFFFF;\n  --background:black;\n}\n\n.p {\n  color: white;\n  margin-left: 1em;\n  margin-top: 0.5em;\n  margin-right: 1em;\n  padding-bottom: 1em;\n}\n\n.google {\n  color: white;\n  padding-left: 10%;\n}\n\n.pp {\n  color: white;\n  margin-left: 2ex;\n  margin-top: 2ex;\n}\n\n.title {\n  text-align: center;\n  color: white;\n  font-size: 30px;\n}\n\n.holder2 {\n  color: #FFFFFF;\n  margin-top: -1ex;\n  --placeholder-color:#FFFFFF;\n  --placeholder-opacity: -100%;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NyaWFyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNHLCtCQUFBO0VBQ0EsbUJBQUE7QUFDSDs7QUFDQztFQUNTLGNBQUE7RUFDQSxXQUFBO0FBRVY7O0FBQ0E7RUFDSSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFBQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUdKOztBQURFO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FBSUo7O0FBQUU7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBR0o7O0FBREE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBSUo7O0FBRkM7RUFDRyxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUFLSiIsImZpbGUiOiJjcmlhci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhcntcbiAgICAtLXBhZGRpbmctdG9wOiA1NnB4IDtcbiAgICAtLWJhY2tncm91bmQ6IGJsYWNrO1xufVxuICBcbmlvbi1jb250ZW50IHtcbiAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gICAtLWlvbi1jb2xvcjojRkZGRkZGO1xuIH1cbiBpb24tdGl0bGV7XG4gICAgICAgICAgLS1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgc2l6ZTogbGFyZ2U7XG4gfVxuXG4uaG9sZGVye1xuICAgIC0tY29sb3I6ICNGRkZGRkY7IFxuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6I0ZGRkZGRjtcbiAgICAtLWJhY2tncm91bmQ6YmxhY2s7XG59XG4ucHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xuICB9XG4gIC5nb29nbGV7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XG4gIFxuICAgXG4gIH1cbiAgLnBwe1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tbGVmdDogMmV4O1xuICAgIG1hcmdpbi10b3A6IDJleDtcbn1cbi50aXRsZXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiB9XG4gLmhvbGRlcjJ7XG4gICAgY29sb3I6ICNGRkZGRkY7IFxuICAgIG1hcmdpbi10b3A6IC0xZXg7XG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjojRkZGRkZGO1xuICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogLTEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */");

/***/ }),

/***/ "RFKi":
/*!*************************************************************!*\
  !*** ./src/app/editar-modal/editar-modal-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: EditarModalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarModalPageRoutingModule", function() { return EditarModalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _editar_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editar-modal.page */ "vkXh");




const routes = [
    {
        path: '',
        component: _editar_modal_page__WEBPACK_IMPORTED_MODULE_3__["EditarModalPage"]
    }
];
let EditarModalPageRoutingModule = class EditarModalPageRoutingModule {
};
EditarModalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditarModalPageRoutingModule);



/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "SF65":
/*!*****************************************************!*\
  !*** ./src/app/tutorial/tutorial-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: TutorialPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialPageRoutingModule", function() { return TutorialPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tutorial_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tutorial.page */ "5o7k");




const routes = [
    {
        path: '',
        component: _tutorial_page__WEBPACK_IMPORTED_MODULE_3__["TutorialPage"]
    }
];
let TutorialPageRoutingModule = class TutorialPageRoutingModule {
};
TutorialPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TutorialPageRoutingModule);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/network/ngx */ "kwrG");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _home_home_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.page */ "zpKS");










let AppComponent = class AppComponent {
    constructor(home, platform, Auth, splashScreen, toastController, network) {
        this.home = home;
        this.platform = platform;
        this.Auth = Auth;
        this.splashScreen = splashScreen;
        this.toastController = toastController;
        this.network = network;
        this.initializeApp();
        this.network.onDisconnect().subscribe(() => {
            this.presentToast();
        });
        this.Auth.onAuthStateChanged((user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                var uid = user.uid;
                console.log("logado por aqui");
                this.home.AuthstateLogado(user);
                // ...
            }
            else {
                this.home.AuthstateDeslogado();
                console.log("Deslogado");
                // User is signed out
                // ...
            }
        });
    }
    initializeApp() {
        this.platform.ready().then(() => {
        });
        this.splashScreen.hide();
    }
    ;
    presentToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Sem conexão com a Internet',
                duration: 2000
            });
            toast.present();
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _home_home_page__WEBPACK_IMPORTED_MODULE_8__["HomePage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"] },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__["Network"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_home_home_page__WEBPACK_IMPORTED_MODULE_8__["HomePage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"],
        _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__["Network"]])
], AppComponent);



/***/ }),

/***/ "V43p":
/*!***************************************************!*\
  !*** ./src/app/eventomodal/eventomodal.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: black;\n}\n\n.card {\n  background-color: #1C1C1C;\n  color: white;\n}\n\n.imag {\n  height: 50%;\n  width: 100%;\n  align-content: center !important;\n  max-height: 35vh !important;\n  width: 100% !important;\n  -o-object-fit: cover !important;\n     object-fit: cover !important;\n}\n\nion-item {\n  --background: #000000;\n  --color:#FFFFFF;\n}\n\nion-col {\n  --background: #000000;\n  --color:#FFFFFF;\n}\n\n.p {\n  margin-bottom: -25px;\n}\n\n.black {\n  background-color: black;\n}\n\n.textevent {\n  color: white;\n  margin-right: 25ex;\n}\n\n.icon {\n  color: white;\n}\n\nion-toolbar {\n  --padding-top: 24px ;\n  --background: black;\n  --color: white;\n}\n\n.centertt {\n  text-align: center;\n  background-color: black;\n  color: white;\n}\n\n.branco {\n  color: white;\n  text-align: center;\n}\n\n.com {\n  font-size: 2ex;\n  padding-left: 1ex;\n}\n\n.badge {\n  font-size: 2ex;\n}\n\n.inic {\n  --min-height:2em;\n  letter-spacing: 0, 5ex;\n}\n\n.icon {\n  padding-left: 46ex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2V2ZW50b21vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FBQ0o7O0FBQ0U7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUFFSjs7QUFBQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsK0JBQUE7S0FBQSw0QkFBQTtBQUdKOztBQURFO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0FBSUo7O0FBRkE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7QUFLRjs7QUFIQTtFQUNFLG9CQUFBO0FBTUY7O0FBSkE7RUFDRSx1QkFBQTtBQU9GOztBQUxBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBUUY7O0FBTkE7RUFDRSxZQUFBO0FBU0Y7O0FBUEE7RUFDRSxvQkFBQTtFQUNGLG1CQUFBO0VBQ0EsY0FBQTtBQVVBOztBQVJBO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFXRjs7QUFUQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQVlGOztBQVZDO0VBQ0UsY0FBQTtFQUNBLGlCQUNBO0FBWUg7O0FBVkE7RUFDRSxjQUFBO0FBYUY7O0FBWEE7RUFDRSxnQkFBQTtFQUNBLHNCQUFBO0FBY0Y7O0FBWkE7RUFDRSxrQkFBQTtBQWVGIiwiZmlsZSI6ImV2ZW50b21vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IGJsYWNrO1xuICB9XG4gIC5jYXJke1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxQzFDMUM7XG4gICAgY29sb3I6d2hpdGU7XG4gIH1cbi5pbWFne1xuICAgIGhlaWdodDogNTAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDM1dmggICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBvYmplY3QtZml0OiBjb3ZlciAhaW1wb3J0YW50O1xuICB9XG4gIGlvbi1pdGVte1xuICAgIC0tYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgICAtLWNvbG9yOiNGRkZGRkY7XG59XG5pb24tY29se1xuICAtLWJhY2tncm91bmQ6ICMwMDAwMDA7XG4gIC0tY29sb3I6I0ZGRkZGRjtcbn1cbi5we1xuICBtYXJnaW4tYm90dG9tOiAtMjVweDtcbn1cbi5ibGFja3tcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG4udGV4dGV2ZW50e1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1yaWdodDogMjVleDtcbn1cbi5pY29ue1xuICBjb2xvcjp3aGl0ZTtcbn1cbmlvbi10b29sYmFye1xuICAtLXBhZGRpbmctdG9wOiAyNHB4IDtcbi0tYmFja2dyb3VuZDogYmxhY2s7XG4tLWNvbG9yIDogd2hpdGU7XG59XG4uY2VudGVydHR7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5icmFuY297XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuIH1cbiAuY29te1xuICAgZm9udC1zaXplOiAyZXg7XG4gICBwYWRkaW5nLWxlZnQ6IFxuICAgMWV4O1xuIH1cbi5iYWRnZXtcbiAgZm9udC1zaXplOiAyZXg7XG59XG4uaW5pY3tcbiAgLS1taW4taGVpZ2h0OjJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAsNWV4O1xufVxuLmljb257XG4gIHBhZGRpbmctbGVmdDogNDZleDtcbn0iXX0= */");

/***/ }),

/***/ "V4wL":
/*!***********************************************************!*\
  !*** ./src/app/usuario-pesquisa/usuario-pesquisa.page.ts ***!
  \***********************************************************/
/*! exports provided: UsuarioPesquisaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioPesquisaPage", function() { return UsuarioPesquisaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_usuario_pesquisa_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./usuario-pesquisa.page.html */ "b3v9");
/* harmony import */ var _usuario_pesquisa_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./usuario-pesquisa.page.scss */ "Bp9i");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _eventomodal_eventomodal_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../eventomodal/eventomodal.page */ "wuIU");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! firebase/app */ "Wcq6");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../user.service */ "xdv0");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);














let UsuarioPesquisaPage = class UsuarioPesquisaPage {
    constructor(route, firestore, auth, eventModal, modalCtrl, actionSheetCtrl, user) {
        this.route = route;
        this.firestore = firestore;
        this.auth = auth;
        this.eventModal = eventModal;
        this.modalCtrl = modalCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.user = user;
        this.hjdia = new Date().toISOString();
        this.eventos = new Array();
        this.eventos2 = new Array();
        this.criados = new Array();
        this.criados2 = new Array();
        this.y = new Array();
        this.w = new Array();
        this.y2 = new Array();
        this.w2 = new Array();
    }
    ngOnInit() {
        this.userID = this.route.snapshot.paramMap.get('uid');
        this.getUser(this.userID).subscribe(data => {
            this.userrr = data;
            console.log(data);
        });
        console.log(this.userID);
        this.listadeup(this.userID);
        this.eventos = this.y;
        console.log(this.eventos);
        const uniqueUps = this.eventos.filter(function (elem, i, array) {
            return array.indexOf(elem) === i;
        });
        console.log(this.eventos);
        this.listadecriados(this.userID);
        this.criados = this.w;
    }
    loadups(event) {
        setTimeout(() => {
            console.log();
            this.listadeup2(this.userID);
            this.eventos2 = this.y2;
            event.target.complete();
        }, 2000);
    }
    loadcriados(event) {
        setTimeout(() => {
            console.log();
            this.listadecriados2(this.userID);
            this.criados2 = this.w2;
            event.target.complete();
        }, 2000);
    }
    presentActionSheet() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetCtrl.create({
                header: 'Configurações',
                cssClass: 'my-custom-class',
                buttons: [{
                        text: 'Denunciar',
                        icon: 'alert',
                        handler: () => {
                            this.denuncia();
                        }
                    },
                    // text: 'ligar notificações',
                    // icon: 'notifications',
                    // handler: () => {
                    //}
                    // }
                    {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
    getUser(user) {
        this.userDOC = this.firestore.collection(`users`, ref => ref.where('iduser', '==', `${user}`));
        return this.userDOC.snapshotChanges(['added']).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(actions => {
            return actions.map(use => {
                const data = use.payload.doc.data();
                const id = use.payload.doc['id'];
                return Object.assign({ id }, data);
            });
        }));
    }
    showmodal(zeta) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _eventomodal_eventomodal_page__WEBPACK_IMPORTED_MODULE_8__["EventomodalPage"],
                componentProps: {
                    customid: zeta
                }
            });
            modal.present();
            ;
            this.eventModal.criandomodal(zeta);
        });
    }
    follow() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.auth.currentUser;
            this.followReference = this.firestore.doc(`users/${this.userrr[0].id}`);
            this.followReference.update({
                followed: firebase_app__WEBPACK_IMPORTED_MODULE_10___default.a.firestore.FieldValue.arrayUnion(res.uid)
            });
        });
    }
    denuncia() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.user.denuncia(this.userID);
            if (this.userrr[0].Denuncias > 25) {
                this.user.todasdenuncias(this.userrr[0]);
            }
        });
    }
    unfollow() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.auth.currentUser;
            this.followReference = this.firestore.doc(`users/${this.userrr[0].id}`);
            this.followReference.update({
                followed: firebase_app__WEBPACK_IMPORTED_MODULE_10___default.a.firestore.FieldValue.arrayRemove(res.uid)
            });
        });
    }
    listadecriados(cria) {
        //console.log(cria)
        this.eventocriado = this.firestore.collection('eventos', ref => ref.where('userID', 'array-contains', `${cria}`).orderBy("UPnum", "desc").limit(10));
        this.eventocriado.get().subscribe(criados => {
            criados.forEach(Evcup => {
                const data = Evcup.data();
                const id = Evcup.id;
                if (data.fim < this.hjdia) {
                    console.log(data.fim, " menor que ", this.hjdia); // checar se data do  evento esta no futuro
                    this.passadostate = this.firestore.doc(`eventos/${id}`);
                    this.passadostate.update({
                        passado: true
                    });
                }
                moment__WEBPACK_IMPORTED_MODULE_12__["locale"]('pt-BR');
                this.m = moment__WEBPACK_IMPORTED_MODULE_12__(data.dia).format('ddd DD MMM - HH:mm');
                data.dia = this.m;
                this.provCria1 = Object.assign({ id }, data);
                this.w.push(this.provCria1);
                this.nextQueryCriados = Evcup;
            });
        });
    }
    listadecriados2(cria2) {
        const lastC = this.nextQueryCriados;
        this.eventocriado2 = this.firestore.collection('eventos', ref => ref.where('userID', 'array-contains', `${cria2}`).orderBy("UPnum", "desc").startAfter(lastC).limit(10));
        return this.eventocriado2.get().subscribe(criados => {
            criados.forEach(cRia => {
                const data = cRia.data();
                const id = cRia.id;
                if (data.fim < this.hjdia) {
                    //   console.log(data.fim, " menor que ", this.hjdia) // checar se data do  evento esta no futuro
                    this.passadostate = this.firestore.doc(`eventos/${id}`);
                    this.passadostate.update({
                        passado: true
                    });
                }
                moment__WEBPACK_IMPORTED_MODULE_12__["locale"]('pt-BR');
                this.m = moment__WEBPACK_IMPORTED_MODULE_12__(data.dia).format('ddd DD MMM - HH:mm');
                data.dia = this.m;
                this.provCria2 = Object.assign({ id }, data);
                this.w2.push(this.provCria2);
                this.nextQueryCriados = cRia;
            });
        });
    }
    listadeup(up_us) {
        this.eventoup = this.firestore.collection('eventos', ref => ref.where('up', 'array-contains', `${up_us}`).orderBy("UPnum", "desc").limit(10));
        return this.eventoup.get().subscribe(upados => {
            upados.forEach(Ups => {
                const data = Ups.data();
                const id = Ups.id;
                if (data.fim < this.hjdia) {
                    //   console.log(data.fim, " menor que ", this.hjdia) // checar se data do  evento esta no futuro
                    this.passadostate = this.firestore.doc(`eventos/${id}`);
                    this.passadostate.update({
                        passado: true
                    });
                }
                moment__WEBPACK_IMPORTED_MODULE_12__["locale"]('pt-BR');
                this.m = moment__WEBPACK_IMPORTED_MODULE_12__(data.dia).format('ddd DD MMM - HH:mm');
                data.dia = this.m;
                this.provUp1 = Object.assign({ id }, data);
                this.y.push(this.provUp1);
                this.nextQueryUp = Ups;
                console.log("this ", this.nextQueryUp);
            });
        });
    }
    listadeup2(user) {
        const last = this.nextQueryUp;
        console.log(last);
        this.eventoup2 = this.firestore.collection('eventos', ref => ref.where('up', 'array-contains', `${user}`).orderBy("UPnum", "desc").startAfter(last).limit(10));
        return this.eventoup2.get().subscribe(upei => {
            upei.forEach(upi2 => {
                const data = upi2.data();
                const id = upi2.id;
                if (data.fim < this.hjdia) {
                    //   console.log(data.fim, " menor que ", this.hjdia) // checar se data do  evento esta no futuro
                    this.passadostate = this.firestore.doc(`eventos/${id}`);
                    this.passadostate.update({
                        passado: true
                    });
                }
                moment__WEBPACK_IMPORTED_MODULE_12__["locale"]('pt-BR');
                this.m = moment__WEBPACK_IMPORTED_MODULE_12__(data.dia).format('ddd DD MMM - HH:mm');
                data.dia = this.m;
                this.provUp2 = Object.assign({ id }, data);
                this.y2.push(this.provUp2);
                this.nextQueryUp = upi2;
            });
        });
    }
    ngOnDestroy() {
        this.user.w = [];
        this.user.w2 = [];
        this.user.y = [];
        this.user.w2 = [];
    }
};
UsuarioPesquisaPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__["AngularFireAuth"] },
    { type: _eventomodal_eventomodal_page__WEBPACK_IMPORTED_MODULE_8__["EventomodalPage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ActionSheetController"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"] }
];
UsuarioPesquisaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-usuario-pesquisa',
        template: _raw_loader_usuario_pesquisa_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_usuario_pesquisa_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__["AngularFireAuth"],
        _eventomodal_eventomodal_page__WEBPACK_IMPORTED_MODULE_8__["EventomodalPage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ActionSheetController"],
        _user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"]])
], UsuarioPesquisaPage);



/***/ }),

/***/ "V6Ie":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title  class=\"title\">Log in</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"criar-user\" text=\"\" class=\"margin\" (click)=\"voltar()\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content [hidden]=\"abrir\">\n  <ion-list *ngIf=\"!temqverificar\">\n    <ion-item class=\"holder\">\n      <ion-label position=\"floating\" >Email :</ion-label>\n      <ion-input type=\"email\" [(ngModel)]=\"email\"></ion-input>\n    </ion-item>\n  \n    <ion-item class=\"holder\">\n      <ion-label position=\"floating\">senha :</ion-label>\n      <ion-input type=\"password\" [(ngModel)]=\"password\"></ion-input>\n    </ion-item>\n\n    <div>\n    <p class=\"p\" (click)=\"abriu()\">Esqueci minha senha</p>\n    \n  </div>\n\n    <ion-button  shape=\"round\" expand=\"full\" type=\"submit\" (click)=\"login()\">Log in</ion-button>\n  </ion-list>\n\n  <ion-list>\n    <div *ngIf=\"temqverificar\">\n      <h2 class=\"p\" >Enviamos um e-mail de verificação pra você</h2>\n      <ion-item class=\"holder2\"  lines=\"none\">\n        <ion-button size=\"default\" type=\"submit\"  (click)=\"enviaremaildeverific()\">Re-enviar</ion-button>\n        <ion-button size=\"default\" type=\"submit\"  (click)=\"emailverificado()\">Confirmar</ion-button>\n      </ion-item>\n    </div>  \n  </ion-list>\n  <!--\n  <p class=\"p2\" >Log in com Gmail:</p>\n  <ion-button (click)=\"loginGooglecom()\" class=\"google\" >\n    <ion-icon name=\"logo-google\" size=\"large\"></ion-icon>\n  </ion-button>\n\n-->\n</ion-content>\n\n<ion-content [hidden]=\"!abrir\">\n  <div> \n    <p class=\"p\" (click)=\"abriu()\">Voltar</p>\n    <ion-item class=\"holder2\" >\n      <ion-label position=\"floating\">Email da conta :</ion-label>\n      <ion-input type=\"email\" [(ngModel)]=\"emailrecu\"></ion-input>\n      <ion-button type=\"submit\"  (click)=\"enviar()\">enviar</ion-button>\n    </ion-item>\n  </div>\n</ion-content>");

/***/ }),

/***/ "VG/Z":
/*!***********************************************************!*\
  !*** ./src/app/evento-pesquisa/evento-pesquisa.module.ts ***!
  \***********************************************************/
/*! exports provided: EventoPesquisaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventoPesquisaPageModule", function() { return EventoPesquisaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _evento_pesquisa_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./evento-pesquisa-routing.module */ "AClZ");
/* harmony import */ var _evento_pesquisa_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./evento-pesquisa.page */ "yeiI");







let EventoPesquisaPageModule = class EventoPesquisaPageModule {
};
EventoPesquisaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _evento_pesquisa_routing_module__WEBPACK_IMPORTED_MODULE_5__["EventoPesquisaPageRoutingModule"]
        ],
        declarations: [_evento_pesquisa_page__WEBPACK_IMPORTED_MODULE_6__["EventoPesquisaPage"]]
    })
], EventoPesquisaPageModule);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-router-outlet class=\"ff\"></ion-router-outlet>\n</ion-app>\n\n<style>\n  ion-navbar.toolbar.toolbar-ios.statusbar-padding,\n  ion-navbar.toolbar-ios ion-title.title-ios,\n  ion-toolbar.toolbar.toolbar-ios.statusbar-padding,\n  ion-toolbar.toolbar-ios ion-title.title-ios {\n    padding-top: constant(safe-area-inset-top);\n    padding-top: env(safe-area-inset-top);\n  }\n  </style>\n  ");

/***/ }),

/***/ "W6WT":
/*!*******************************************************!*\
  !*** ./src/app/selective-loading-strategy.service.ts ***!
  \*******************************************************/
/*! exports provided: SimpleLoadingStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleLoadingStrategy", function() { return SimpleLoadingStrategy; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");

class SimpleLoadingStrategy {
    constructor() {
        this.routesToPreload = [];
    }
    preload(route, load) {
        if (route.data && route.data.preload) {
            return load();
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null);
    }
    preloadRoute(path) {
        return new Promise((resolve) => {
            if (this.routesToPreload &&
                this.routesToPreload.length > 0) {
                const routeToPreload = this.routesToPreload.find((filterRouteToPreload) => filterRouteToPreload.routePath === path);
                if (routeToPreload) {
                    routeToPreload.load();
                }
            }
            resolve();
        });
    }
}


/***/ }),

/***/ "W8eC":
/*!***************************************!*\
  !*** ./src/app/perfil/perfil.page.ts ***!
  \***************************************/
/*! exports provided: PerfilPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPage", function() { return PerfilPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_perfil_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./perfil.page.html */ "uuZe");
/* harmony import */ var _perfil_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./perfil.page.scss */ "oKkR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user.service */ "xdv0");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _eventos_do_usuario_proximo_evento_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../eventos-do-usuario/proximo-evento.page */ "BfPd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _editar_modal_editar_modal_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../editar-modal/editar-modal.page */ "vkXh");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _eventomodal_eventomodal_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../eventomodal/eventomodal.page */ "wuIU");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _tutorial_tutorial_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../tutorial/tutorial.page */ "5o7k");

















let PerfilPage = class PerfilPage {
    constructor(afd, editar, firestore, user, afAuth, proxEvento, tutorial, modalCtrl, route, actionSheetCtrl, alertController, loadingC, eventModal) {
        this.afd = afd;
        this.editar = editar;
        this.firestore = firestore;
        this.user = user;
        this.afAuth = afAuth;
        this.proxEvento = proxEvento;
        this.tutorial = tutorial;
        this.modalCtrl = modalCtrl;
        this.route = route;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertController = alertController;
        this.loadingC = loadingC;
        this.eventModal = eventModal;
        this.hjdia = new Date().toISOString();
        this.item = "";
        this.cidade = "";
        this.abrir = false;
        this.perfilUP = false;
        this.escolha = "Data";
        this.criados = new Array();
        this.criados2 = new Array();
        this.ups = new Array();
        this.ups2 = new Array();
    }
    ionViewDidEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dadosperfil();
            //bug entrar com outra conta
            this.afAuth.onAuthStateChanged((user) => {
                if (user) {
                    // User is signed in, see docs for a list of available properties
                    // https://firebase.google.com/docs/reference/js/firebase.User
                    var uid = user.uid;
                    var res = user;
                    this.usuario = res.uid;
                    this.getDataFromFire();
                    this.user.listadecriados(res.uid);
                    this.criados = this.user.w;
                    this.user.listadeup(res.uid);
                    this.ups = this.user.y;
                }
                else {
                    this.noAuth = true;
                }
            });
        });
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        });
    }
    presentActionSheet() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetCtrl.create({
                header: 'Configurações',
                cssClass: 'my-custom-class',
                buttons: [
                    {
                        text: 'Tutorial',
                        icon: 'help',
                        handler: () => {
                            this.showmodalTutorial();
                        }
                    },
                    {
                        text: 'Criar Evento',
                        icon: 'add',
                        handler: () => {
                            this.route.navigate(['/add']);
                        }
                    }, {
                        text: 'Editar perfil',
                        icon: 'settings',
                        handler: () => {
                            this.showmodal();
                        }
                    }, {
                        text: 'Ordenar eventos por ' + this.escolha,
                        icon: 'options',
                        handler: () => {
                            this.orderBy();
                        }
                    }, {
                        text: 'Sair',
                        role: 'destructive',
                        icon: 'log-out',
                        handler: () => {
                            this.logout();
                        }
                    }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingC.create({
                cssClass: 'my-custom-class',
                message: 'Espere um momento...',
                duration: 3000
            });
            yield this.loading.present();
        });
    }
    modalevento(zeta) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _eventomodal_eventomodal_page__WEBPACK_IMPORTED_MODULE_12__["EventomodalPage"],
                componentProps: {
                    customid: zeta
                }
            });
            modal.present();
            ;
            this.eventModal.criandomodal(zeta);
        });
    }
    orderBy() {
        this.user.ordenar(this.usuario, this.perfilUP);
    }
    voltar() {
        this.route.navigate(['./home']);
    }
    showmodalTutorial() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _tutorial_tutorial_page__WEBPACK_IMPORTED_MODULE_14__["TutorialPage"],
                componentProps: {}
            });
            modal.present();
        });
    }
    dadosperfil() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.afAuth.currentUser;
            if (res != null) {
                this.noAuth = false;
                this.mainuser = this.firestore.doc(`users/${res.uid}`);
                this.sub = this.mainuser.valueChanges().subscribe(usuario => {
                    this.perfilnome = usuario.username;
                    this.perfilimg = usuario.imgUser;
                    this.perfilUP = usuario.UP;
                    if (this.perfilUP == false) {
                        this.escolha = "Data";
                    }
                    else {
                        this.escolha = "UP";
                    }
                });
            }
        });
    }
    showmodal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _editar_modal_editar_modal_page__WEBPACK_IMPORTED_MODULE_10__["EditarModalPage"],
                componentProps: {}
            });
            modal.present();
            ;
            this.editar.criandomodal();
        });
    }
    initializeItems() {
        this.items;
        console.log(this.items);
    }
    abriu() {
        this.abrir = !this.abrir;
    }
    getItems(ev) {
        // Reset items back to all of the items
        this.todositems = this.items;
        this.allitems = this.todositems;
        let val = ev.target.value;
        console.log(this.todositems);
        if (val && val.trim() != '') {
            this.todositems = lodash__WEBPACK_IMPORTED_MODULE_13___default.a.values(this.allitems);
            this.todositems = this.todositems.filter((cidade) => {
                return (cidade.lugar.toLocaleLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.todositems = this.allitems;
        }
    }
    logout() {
        this.presentLoading();
        this.afAuth.signOut().then(function () {
        }).catch(function (error) {
            console.log(error);
            // An error happened.
        });
        this.loadingC.dismiss();
        setTimeout(() => {
            this.route.navigate(['/criar-user']);
        }, 3500);
        this.ngOnDestroy();
    }
    loadups(event) {
        setTimeout(() => {
            console.log();
            if (this.ups2.length == 0) {
                this.user.listadeup2(this.usuario);
                this.ups2 = this.user.y2;
                const uniqueUps2 = this.ups2.filter(function (elem, i, array) {
                    return array.indexOf(elem) === i;
                });
                this.ups2 = uniqueUps2;
            }
            event.target.complete();
        }, 2000);
    }
    loadcriados(event) {
        setTimeout(() => {
            console.log();
            if (this.criados2.length == 0) {
                this.user.listadecriados2(this.usuario);
                this.criados2 = this.user.w2;
            }
            event.target.complete();
        }, 2000);
    }
    getDataFromFire() {
        this.afd.list('cidades').valueChanges().subscribe(data => {
            this.trataDados(data);
        });
    }
    trataDados(dados) {
        this.items = Object.keys(dados).map(i => dados[i]);
        this.todositems = this.items;
    }
    meuslugares(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // esta fazendo 4 leituras na home por cada alteração
            var meulugar = item;
            const res = yield this.afAuth.currentUser;
            console.log(meulugar, "aki");
            this.firestore.collection(`users`).doc(`${res.uid}`).update({ cidade: meulugar
            });
            this.afd.database.ref(`users/${res.uid}/cidade`).set(meulugar);
            this.showalert("Pronto", "Cidade alterada para " + meulugar);
        });
    }
    deletaract(rte) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Excluir Evento?',
                message: 'Esta ação não poderá ser desfeita',
                buttons: [{
                        text: 'Cancelar',
                        handler: () => {
                        }
                    },
                    {
                        text: 'Confirmar',
                        handler: () => {
                            this.delete(rte);
                        }
                    },
                ]
            });
            yield alert.present();
        });
    }
    delete(evento) {
        this.firestore.collection("eventos").doc(`${evento.id}`).delete().then(function () {
            console.log("Document successfully deleted!");
        });
        this.afd.database.ref(`eventDetails/${evento.chave2}`).remove();
        console.log(evento.id);
        this.showalert("Excluido!", "O evento irá desaparecer em instantes.");
    }
    showalert(header, message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header,
                message,
                buttons: ["Ok"]
            });
            yield alert.present();
        });
    }
    ngOnDestroy() {
        console.log("Destroy perfil");
        this.user.w = [];
        this.user.w2 = [];
        this.user.y = [];
        this.user.w2 = [];
        this.criados = [];
        this.criados2 = [];
        this.ups = [];
        this.ups2 = [];
    }
    ionViewDidLeave() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.user.w = [];
            this.user.w2 = [];
            this.user.y = [];
            this.user.w2 = [];
            this.criados = [];
            this.criados2 = [];
            this.ups = [];
            this.ups2 = [];
        });
    }
};
PerfilPage.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"] },
    { type: _editar_modal_editar_modal_page__WEBPACK_IMPORTED_MODULE_10__["EditarModalPage"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"] },
    { type: _eventos_do_usuario_proximo_evento_page__WEBPACK_IMPORTED_MODULE_8__["ProximoEventoPage"] },
    { type: _tutorial_tutorial_page__WEBPACK_IMPORTED_MODULE_14__["TutorialPage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["LoadingController"] },
    { type: _eventomodal_eventomodal_page__WEBPACK_IMPORTED_MODULE_12__["EventomodalPage"] }
];
PerfilPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-perfil',
        template: _raw_loader_perfil_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_perfil_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"],
        _editar_modal_editar_modal_page__WEBPACK_IMPORTED_MODULE_10__["EditarModalPage"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"],
        _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"],
        _eventos_do_usuario_proximo_evento_page__WEBPACK_IMPORTED_MODULE_8__["ProximoEventoPage"],
        _tutorial_tutorial_page__WEBPACK_IMPORTED_MODULE_14__["TutorialPage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["ModalController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["ActionSheetController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["LoadingController"],
        _eventomodal_eventomodal_page__WEBPACK_IMPORTED_MODULE_12__["EventomodalPage"]])
], PerfilPage);



/***/ }),

/***/ "WcN3":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title size=\"large\" class=\"centertt\" (click)=\"ss()\">Oreon</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" class=\"fundo\" #content>\n  <ion-slides  class=\"centertt\" #slides>\n    <ion-slide *ngIf=\"cidade.length > 0 && noAuth == false\">\n      <div>\n        <a class=\"a\">{{ cidadesDoUsuario }}</a>\n        <ion-card *ngFor=\"let evento of cidade\" class=\"card\" (click)=\"showmodal(evento)\" >\n          <img class=\"imagem\" [src]=\"evento.url\" />\n          <ion-card-header class=\"\">\n            <ion-card-subtitle class=\"branco\">{{ evento.dia }}</ion-card-subtitle>\n            <ion-card-title class=\"brancotitle\">{{ evento.nome }}</ion-card-title>\n            <ion-badge item-end>\n              {{ evento.UPnum }}</ion-badge>\n          </ion-card-header>\n        </ion-card>\n        <ion-card *ngFor=\"let evento of cidade3\" class=\"card\"(click)=\"showmodal(evento)\">\n          <img class=\"imagem\" [src]=\"evento.url\"/>\n          <ion-card-header class=\"\">\n            <ion-card-subtitle class=\"branco\">{{ evento.dia }}</ion-card-subtitle>\n            <ion-card-title class=\"brancotitle\">{{ evento.nome }}</ion-card-title>\n            <ion-badge item-end>\n              {{ evento.UPnum }}</ion-badge>\n          </ion-card-header>\n        </ion-card>\n        <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadcidade($event)\">\n          <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Carregando...\">\n          </ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n      </div>\n    </ion-slide>\n\n\n    <ion-slide>\n      <div>\n        <a class=\"a\" (click)=\"ss()\"> Nacional </a>\n        <ion-card *ngFor=\"let evento of nacionais \" class=\"card\"(click)=\"showmodal(evento)\">\n          <img class=\"imagem\" [src]=\"evento.url\"  />\n          <ion-card-header class=\"\">\n            <ion-card-subtitle class=\"branco\">{{ evento.dia }}</ion-card-subtitle>\n            <ion-card-subtitle *ngIf=\"evento.lugar\" class=\"branco\">{{ evento.lugar }}</ion-card-subtitle>\n            <ion-card-title class=\"brancotitle\">{{ evento.nome }}</ion-card-title>\n            <ion-badge item-end>{{ evento.UPnum }}</ion-badge>\n          </ion-card-header>\n        </ion-card>\n        <ion-card *ngFor=\"let evento of nacional\" class=\"card\" (click)=\"showmodal(evento)\" >\n          <img class=\"imagem\" [src]=\"evento.url\" />\n          <ion-card-header class=\"\">\n            <ion-card-subtitle class=\"branco\">{{ evento.dia }}</ion-card-subtitle>\n            <ion-card-subtitle *ngIf=\"evento.lugar\" class=\"branco\">{{ evento.lugar }}</ion-card-subtitle>\n            <ion-card-title class=\"brancotitle\">{{ evento.nome }}</ion-card-title>\n            <ion-badge item-end>{{ evento.UPnum }}</ion-badge>\n          </ion-card-header>\n        </ion-card>\n        <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadnacional($event)\">\n          <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Carregando...\">\n          </ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n      </div>\n    </ion-slide>\n\n\n\n\n    <ion-slide *ngIf=\"noAuth\">\n      <div class=\"noauth\">\n        <a class=\"a\" >{{ escolhaNoAuth }}</a>\n        <ion-searchbar class=\"searchbar\" placeholder=\"Escolher cidade\" (ionInput)=\"getItems($event)\" (click)=\"abriu()\"\n          [(ngModel)]=\"_cidade\" clearInput></ion-searchbar>\n        <ion-list *ngIf=\"abrir\" class=\"filtro\" lines=\"none\" no-lines>\n          <ion-item (click)=\"noAuth_cidade(item.lugar)\" *ngFor=\"let item of todositems\" class=\"filtro\">\n            {{ item.lugar }}\n          </ion-item>\n        </ion-list>\n        <ion-card *ngFor=\"let evento of cidade\" class=\"card\" (click)=\"showmodal(evento)\" >\n          <img class=\"imagem\" [src]=\"evento.url\" />\n          <ion-card-header class=\"\">\n            <ion-card-subtitle class=\"branco\">{{ evento.dia }}</ion-card-subtitle>\n            <ion-card-title class=\"brancotitle\">{{ evento.nome }}</ion-card-title>\n            <ion-badge item-end>\n              {{ evento.UPnum }}</ion-badge>\n          </ion-card-header>\n        </ion-card>\n        <ion-card *ngFor=\"let evento of cidade3\"   class=\"card\" (click)=\"showmodal(evento)\" >\n          <img class=\"imagem\" [src]=\"evento.url\"  />\n          <ion-card-header class=\"\">\n            <ion-card-subtitle class=\"branco\">{{ evento.dia }}</ion-card-subtitle>\n            <ion-card-title class=\"brancotitle\">{{ evento.nome }}</ion-card-title>\n            <ion-badge item-end>\n              {{ evento.UPnum }}</ion-badge>\n          </ion-card-header>\n        </ion-card>\n        <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadcidade($event)\">\n          <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Carregando...\">\n          </ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n      </div>\n    </ion-slide> \n\n    <ion-slide *ngIf=\"online.length > 0\">\n      <div>\n        <a class=\"a\"> Online </a>\n        <ion-card *ngFor=\"let evento of online \" class=\"card\"  (click)=\"showmodal(evento)\">\n          <img class=\"imagem\" [src]=\"evento.url\" />\n          <ion-card-header class=\"\">\n            <ion-card-subtitle class=\"branco\">{{ evento.dia }}</ion-card-subtitle>\n            <ion-card-title class=\"brancotitle\">{{ evento.nome }}</ion-card-title>\n            <ion-badge item-end>{{ evento.UPnum }}</ion-badge>\n          </ion-card-header>\n        </ion-card>\n        <ion-card *ngFor=\"let evento of onlines\" class=\"card\" (click)=\"showmodal(evento)\">\n          <img class=\"imagem\" [src]=\"evento.url\"  />\n          <ion-card-header class=\"\">\n            <ion-card-subtitle class=\"branco\">{{ evento.dia }}</ion-card-subtitle>\n            <ion-card-title class=\"brancotitle\">{{ evento.nome }}</ion-card-title>\n            <ion-badge item-end>{{ evento.UPnum }}</ion-badge>\n          </ion-card-header>\n        </ion-card>\n        <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadOnline($event)\">\n          <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Carregando...\">\n          </ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n      </div>\n    </ion-slide>\n  \n  </ion-slides>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\">\n    <ion-fab-button>\n      <ion-icon name=\"radio-button-off-outline\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"start\">\n      <ion-fab-button   routerLink=\"/perfil\"  replaceUrl=\"true\" routerDirection=\"forward\">\n        <ion-icon name=\"person-outline\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab-list>\n    <ion-fab-list side=\"end\">\n      <ion-fab-button routerLink=\"/pesquisar\"  replaceUrl=\"true\" routerDirection=\"forward\">\n        <ion-icon name=\"search\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab-list>\n    <ion-fab-list *ngIf=\"noAuth\" side=\"top\">\n      <ion-fab-button (click)=\"ajuda()\">\n        <ion-icon name=\"help\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>");

/***/ }),

/***/ "WyfB":
/*!*********************************************!*\
  !*** ./src/app/pesquisar/pesquisar.page.ts ***!
  \*********************************************/
/*! exports provided: PesquisarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PesquisarPage", function() { return PesquisarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pesquisar_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pesquisar.page.html */ "el7J");
/* harmony import */ var _pesquisar_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pesquisar.page.scss */ "PX0j");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _eventomodal_eventomodal_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../eventomodal/eventomodal.page */ "wuIU");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "TEn/");











let PesquisarPage = class PesquisarPage {
    constructor(fd, firestore, router, modalCtrl, eventModal) {
        this.fd = fd;
        this.firestore = firestore;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.eventModal = eventModal;
        this.queryText = '';
        console.log("pré LoAD");
    }
    ngOnInit() {
        this.eventosDB();
        console.log("pré LoAD");
        this.initializeitems();
    }
    modalevento(zeta) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _eventomodal_eventomodal_page__WEBPACK_IMPORTED_MODULE_9__["EventomodalPage"],
                componentProps: {
                    x: zeta
                }
            });
            modal.present();
            ;
            this.eventModal.criandomodal(zeta);
        });
    }
    eventosDB() {
        this.fd.list('eventDetails').valueChanges().subscribe(data => {
            this.trataEventos(data);
        });
    }
    trataEventos(even) {
        this.eventos = Object.keys(even).map(i => even[i]);
    }
    filterEvento(cid) {
        this.eventoY = this.eventos;
        this.alleventos = this.eventoY;
        let val = cid.target.value;
        if (val && val.trim() != '') {
            this.eventoY = lodash__WEBPACK_IMPORTED_MODULE_6___default.a.values(this.alleventos);
            this.eventoY = this.eventoY.filter((evento) => {
                return (evento.dataseet.nome.toLocaleLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    }
    voltar() {
        this.router.navigate(['./home']);
    }
    initializeitems() {
        const eventoslist = this.firestore.collection('eventos', ref => ref.limit(7)).valueChanges().pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["first"])())).toPromise();
        return eventoslist;
    }
    filterlist(evt) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.eventolist = yield this.initializeitems();
            const searchtemrs = evt.srcElement.value;
            if (!searchtemrs) {
                return;
            }
            this.eventolist = this.eventolist.filter(currentevento => {
                if (currentevento.nome && searchtemrs) {
                    return (currentevento.nome.toLowerCase().indexOf(searchtemrs.toLowerCase()) > -1);
                }
            });
        });
    }
    pesq(evento) {
        // lugar , url , nome , chave
        this.eventoID = evento.chave;
        this.router.navigate(['/evento-pesquisa/' + this.eventoID]);
    }
};
PesquisarPage.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ModalController"] },
    { type: _eventomodal_eventomodal_page__WEBPACK_IMPORTED_MODULE_9__["EventomodalPage"] }
];
PesquisarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-pesquisar',
        template: _raw_loader_pesquisar_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pesquisar_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ModalController"],
        _eventomodal_eventomodal_page__WEBPACK_IMPORTED_MODULE_9__["EventomodalPage"]])
], PesquisarPage);



/***/ }),

/***/ "XITf":
/*!***********************************!*\
  !*** ./src/app/evento.service.ts ***!
  \***********************************/
/*! exports provided: EventoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventoService", function() { return EventoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");



//import { FirebaseListObservable } from '';


let EventoService = class EventoService {
    constructor(firebase, firestore, auth) {
        this.firebase = firebase;
        this.firestore = firestore;
        this.auth = auth;
        this.dataSet = {
            nome: '',
            url: '',
            ingresso: "",
            dia: '',
            fim: '',
            local: '',
            lugar: '',
            up: [],
            userID: [],
            UPnum: 0
        };
        this.dataSet2 = {
            nome: '',
            url: '',
            ingresso: "",
            dia: '',
            fim: '',
            local: '',
            lugar: '',
            up: [],
            userID: [],
            // chave2:'',
            passado: false,
            UPnum: 0
        };
        this.dataSet3 = {
            online: 'online',
            nome: '',
            url: '',
            link: '',
            dia: '',
            fim: '',
            up: [],
            userID: [],
            chave2: '',
            passado: false,
            UPnum: 0
        };
        this.dataSet4 = {
            online: 'online',
            nome: '',
            url: '',
            link: '',
            dia: '',
            fim: '',
            up: [],
            passado: false,
            userID: [],
            UPnum: 0,
        };
        this.msg = 'error';
        this.eventocolection = this.firestore.collection('eventos', ref => ref.orderBy('up', 'desc'));
        this.eventocidade = this.firestore.collection('eventos', ref => ref.orderBy('up', 'desc').where('lugar', '==', `Brasilia`));
    }
    //this.test = this.firestore.collection<Data>('eventos' , ref => ref.where('lugar ','==' ,`${this.cidadesDoUsuario[0].item}`).orderBy('up').limit(20))
    getImageDetailList() {
        this.eventDetailListRealtime = this.firebase.list('eventDetails');
        this.eventDetailList = this.firestore.collection('eventos');
    }
    insertImageDetails(nome, url, ingresso, dia, fim, local, lugar) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.auth.currentUser;
            this.dataSet = {
                nome: nome,
                url: url,
                ingresso: ingresso,
                dia: dia,
                fim: fim,
                local: local,
                lugar: lugar,
                up: [res.uid],
                userID: [res.uid, res.displayName],
                UPnum: 1
            };
            yield this.eventDetailListRealtime.push(this.dataSet).then(result => {
                console.log(result.key);
                var chave = result.key;
                this.keydb2 = chave;
                var dataseet = this.dataSet;
                this.firebase.database.ref(`eventDetails/${result.key}/`).set({ chave, dataseet });
            });
            this.dataSet2 = {
                nome: nome,
                url: url,
                ingresso: ingresso,
                dia: dia,
                fim: fim,
                local: local,
                lugar: lugar,
                up: [res.uid],
                userID: [res.uid, res.displayName],
                //chave2 : this.keydb2,
                passado: false,
                UPnum: 1,
            };
            yield this.eventDetailList.add(this.dataSet2);
        });
    }
    //----------------------------------------------------------------------------------------------//
    insertOnline(nome, url, link, dia, fim) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.auth.currentUser;
            this.dataSet4 = {
                online: 'online',
                nome: nome,
                url: url,
                link: link,
                dia: dia,
                fim: fim,
                passado: false,
                up: [res.uid],
                userID: [res.uid, res.displayName],
                UPnum: 1,
            };
            yield this.eventDetailListRealtime.push(this.dataSet4).then(result => {
                console.log(result.key);
                var chave = result.key;
                this.keydb2 = chave;
                var dataseet = this.dataSet4;
                this.firebase.database.ref(`eventDetails/${result.key}/`).set({ chave, dataseet });
            });
            this.dataSet3 = {
                online: 'online',
                nome: nome,
                url: url,
                link: link,
                dia: dia,
                fim: fim,
                up: [res.uid],
                userID: [res.uid, res.displayName],
                chave2: this.keydb2,
                passado: false,
                UPnum: 1
            };
            yield this.eventDetailList.add(this.dataSet3);
        });
    }
    getEventos() {
        // return this.eventocolection.snapshotChanges((['added'])).pipe(
        //   map(actions => {
        //   return actions.map(a => {
        //   const data = a.payload.doc.data();
        // const id = a.payload.doc.id;
        //return { id, ...data };
        // });
        // })
        //) 
    }
};
EventoService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"],] }] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] }
];
EventoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]])
], EventoService);



/***/ }),

/***/ "Xzod":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/evento-pesquisa/evento-pesquisa.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title  *ngIf=\"pode\" size=\"large\" class=\"centertt\">{{ eventodb.nome }}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button class=\"margin\" defaultHref=\"pesquisar\" text=\"\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content  *ngIf=\"pode\">\n  <div>\n    <ion-card class=\"card\">\n      <img class=\"imagem\" [src]=\"eventodb.url\" />\n    </ion-card>\n    <ion-list lines=\"none\">\n      <ion-item >\n        <ion-button size=\"small\"color=\"primary\"  [disabled]=\"jadeuUP\" (click)=\"UP()\" slot=\"start\">UP</ion-button>\n        {{ eventodb.UPnum }}\n    </ion-item>\n    <ion-item > \n        <ion-icon  size=\"large\" name=\"chatbubble-sharp\" slot=\"start\"></ion-icon>\n        {{ numcoments }}\n    </ion-item>\n      <ion-item>\n        <ion-icon name=\"calendar-outline\" item-start></ion-icon>\n        <h2 class=\"com\"> {{ eventodb.dia }} </h2>\n      </ion-item>\n      <ion-item (click)=\"redirectlink()\">\n        <ion-icon name=\"globe-outline\"></ion-icon>\n        <h2 class=\"com\">Link</h2>\n      </ion-item>\n      <ion-item *ngIf=\"eventodb.local\" (click)=\"redirectmap()\">\n        <ion-icon name=\"location-sharp\" size=\"large\"></ion-icon>\n        <h2 class=\"com\">{{ eventodb.local.description }}</h2>\n      </ion-item>\n      <ion-item (click)=\"redirectUser()\">\n        <ion-icon name=\"person-sharp\"></ion-icon>\n        <h2 class=\"com\">{{ eventodb.userID[1] }}</h2>\n      </ion-item>\n    </ion-list>\n  </div>\n\n\n\n  <ion-list lines=\"none\">\n    <ion-item  no-lines>\n      <ion-input placeholder=\"Comentario:\" type=\"string\" [(ngModel)]=\"comentario\"></ion-input>\n      <ion-button color=\"primary\" (click)=\"setcoment()\"   [disabled]=\"noAuth\"> Enviar\n      </ion-button>\n    </ion-item>\n  </ion-list>\n  <ion-list lines=\"none\">\n    <div *ngFor=\"let kdcoment of coments\">\n      <ion-item id=\"output\">\n        <ion-avatar item-start>\n          <img [src]=\"kdcoment.img\">\n        </ion-avatar>\n        <h2 class=\"com\">{{ kdcoment.username }} : {{ kdcoment.comentarioU }} </h2>\n      </ion-item>\n    </div>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "YwU1":
/*!*****************************************************!*\
  !*** ./src/app/editar-modal/editar-modal.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".filebtn {\n  opacity: 0;\n  position: absolute;\n  top: -100em;\n  left: -100em;\n}\n\nion-content {\n  --background: black;\n}\n\nion-toolbar {\n  --padding-top: 24px ;\n  --background: black;\n  --color: white;\n}\n\nion-item {\n  --placeholder-color:#FFFFFF;\n  --background:black;\n  --color: white;\n}\n\n.vertical-center {\n  text-align: center;\n  margin: auto;\n  position: absolute;\n  transform: translateX(-50%, -50%);\n}\n\n.centertt {\n  text-align: center;\n  background-color: black;\n  color: white;\n}\n\n.publicar {\n  text-align: center;\n}\n\n.imagem {\n  border-radius: 50%;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 250px;\n  height: 250px;\n}\n\n.margintop {\n  margin-top: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VkaXRhci1tb2RhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNEOztBQUNBO0VBQ0MsbUJBQUE7QUFFRDs7QUFDRTtFQUNFLG9CQUFBO0VBQ0gsbUJBQUE7RUFDQSxjQUFBO0FBRUQ7O0FBQUE7RUFDQywyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUdEOztBQUFBO0VBQ0Msa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFFQyxpQ0FBQTtBQUdGOztBQURFO0VBQ0Qsa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFJRDs7QUFERTtFQUNELGtCQUFBO0FBSUQ7O0FBREU7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFJSjs7QUFGQTtFQUNDLGVBQUE7QUFLRCIsImZpbGUiOiJlZGl0YXItbW9kYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbGVidG4ge1xuXHRvcGFjaXR5OiAwO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogLTEwMGVtO1xuXHRsZWZ0OiAtMTAwZW07XG59XG5pb24tY29udGVudCB7XG5cdC0tYmFja2dyb3VuZDogYmxhY2s7XG4gIH1cblxuICBpb24tdG9vbGJhcntcbiAgICAtLXBhZGRpbmctdG9wOiAyNHB4IDtcblx0LS1iYWNrZ3JvdW5kOiBibGFjaztcblx0LS1jb2xvciA6IHdoaXRlO1xufVxuaW9uLWl0ZW17XG5cdC0tcGxhY2Vob2xkZXItY29sb3I6I0ZGRkZGRjtcblx0LS1iYWNrZ3JvdW5kOmJsYWNrO1xuXHQtLWNvbG9yOiB3aGl0ZTtcbiAgXG59XG4udmVydGljYWwtY2VudGVyIHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRtYXJnaW46IGF1dG87XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0LW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUsIC01MCUpO1xuICB9XG4gIC5jZW50ZXJ0dHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcblx0Y29sb3I6IHdoaXRlO1xuICB9XG5cbiAgLnB1YmxpY2Fye1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuaW1hZ2Vte1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGhlaWdodDogMjUwcHg7XG59XG4ubWFyZ2ludG9we1xuXHRtYXJnaW4tdG9wOiAxZW07XG59XG4iXX0= */");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/http */ "qlzE");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/auth-guard */ "HTFn");
/* harmony import */ var _awesome_cordova_plugins_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @awesome-cordova-plugins/native-geocoder/ngx */ "itIa");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "tAfe");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/file/ngx */ "FAH8");
/* harmony import */ var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/google-maps */ "tBOM");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./firebase */ "PgrP");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./user.service */ "xdv0");
/* harmony import */ var _perfil_perfil_page__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./perfil/perfil.page */ "W8eC");
/* harmony import */ var _login_login_page__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./login/login.page */ "34Y5");
/* harmony import */ var _home_home_page__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./home/home.page */ "zpKS");
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ "gAW/");
/* harmony import */ var _eventomodal_eventomodal_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./eventomodal/eventomodal.module */ "JBpm");
/* harmony import */ var _eventomodal_eventomodal_page__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./eventomodal/eventomodal.page */ "wuIU");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ionic-native/network/ngx */ "kwrG");
/* harmony import */ var _selective_loading_strategy_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./selective-loading-strategy.service */ "W6WT");
/* harmony import */ var _editar_modal_editar_modal_page__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./editar-modal/editar-modal.page */ "vkXh");
/* harmony import */ var _editar_modal_editar_modal_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./editar-modal/editar-modal.module */ "h1CP");
/* harmony import */ var _novo_evento_novo_evento_page__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./novo-evento/novo-evento.page */ "y/1N");
/* harmony import */ var _novo_evento_novo_evento_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./novo-evento/novo-evento.module */ "I6jx");
/* harmony import */ var _ionic_native_screenshot_ngx__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @ionic-native/screenshot/ngx */ "jAoO");
/* harmony import */ var _usuario_pesquisa_usuario_pesquisa_page__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./usuario-pesquisa/usuario-pesquisa.page */ "V4wL");
/* harmony import */ var _usuario_pesquisa_usuario_pesquisa_module__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./usuario-pesquisa/usuario-pesquisa.module */ "n+sE");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./home/home.module */ "ct+p");
/* harmony import */ var _evento_pesquisa_evento_pesquisa_page__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./evento-pesquisa/evento-pesquisa.page */ "yeiI");
/* harmony import */ var _evento_pesquisa_evento_pesquisa_module__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./evento-pesquisa/evento-pesquisa.module */ "VG/Z");
/* harmony import */ var _criar_user_criar_user_page__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./criar-user/criar-user.page */ "tzKc");
/* harmony import */ var _tutorial_tutorial_page__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./tutorial/tutorial.page */ "5o7k");
/* harmony import */ var _tutorial_tutorial_module__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./tutorial/tutorial.module */ "6MGo");
/* harmony import */ var _eventos_do_usuario_proximo_evento_module__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./eventos-do-usuario/proximo-evento.module */ "sFwW");
/* harmony import */ var _eventos_do_usuario_proximo_evento_page__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./eventos-do-usuario/proximo-evento.page */ "BfPd");
/* harmony import */ var _pesquisar_pesquisar_page__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./pesquisar/pesquisar.page */ "WyfB");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "/XPu");
/* harmony import */ var _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @ionic-native/background-mode/ngx */ "1xeP");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "up+p");
var AppModule_1;





















































let AppModule = AppModule_1 = class AppModule {
    constructor(injector) {
        this.injector = injector;
        AppModule_1.injector = injector;
    }
};
AppModule.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
AppModule = AppModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"],],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_19__["AppRoutingModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestoreModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"].initializeApp(_firebase__WEBPACK_IMPORTED_MODULE_20__["environment"].firebaseConfig),
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__["AngularFireStorageModule"],
            _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AngularFireAuthGuardModule"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_11__["AngularFireDatabaseModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _home_home_module__WEBPACK_IMPORTED_MODULE_37__["HomePageModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__["AngularFireAuthModule"],
            _eventomodal_eventomodal_module__WEBPACK_IMPORTED_MODULE_26__["EventomodalPageModule"],
            _novo_evento_novo_evento_module__WEBPACK_IMPORTED_MODULE_33__["NovoEventoPageModule"],
            _eventos_do_usuario_proximo_evento_module__WEBPACK_IMPORTED_MODULE_43__["ProximoEventoPageModule"],
            _editar_modal_editar_modal_module__WEBPACK_IMPORTED_MODULE_31__["EditarModalPageModule"],
            _tutorial_tutorial_module__WEBPACK_IMPORTED_MODULE_42__["TutorialPageModule"],
            _usuario_pesquisa_usuario_pesquisa_module__WEBPACK_IMPORTED_MODULE_36__["UsuarioPesquisaPageModule"],
            _evento_pesquisa_evento_pesquisa_module__WEBPACK_IMPORTED_MODULE_39__["EventoPesquisaPageModule"],
            _angular_http__WEBPACK_IMPORTED_MODULE_7__["HttpModule"],],
        providers: [
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_28__["Network"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"],
            _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_17__["GoogleMaps"],
            _user_service__WEBPACK_IMPORTED_MODULE_21__["UserService"],
            _perfil_perfil_page__WEBPACK_IMPORTED_MODULE_22__["PerfilPage"],
            _criar_user_criar_user_page__WEBPACK_IMPORTED_MODULE_40__["CriarUserPage"],
            _pesquisar_pesquisar_page__WEBPACK_IMPORTED_MODULE_45__["PesquisarPage"],
            _novo_evento_novo_evento_page__WEBPACK_IMPORTED_MODULE_32__["NovoEventoPage"],
            _tutorial_tutorial_page__WEBPACK_IMPORTED_MODULE_41__["TutorialPage"],
            _login_login_page__WEBPACK_IMPORTED_MODULE_23__["LoginPage"],
            _selective_loading_strategy_service__WEBPACK_IMPORTED_MODULE_29__["SimpleLoadingStrategy"],
            _home_home_page__WEBPACK_IMPORTED_MODULE_24__["HomePage"],
            _editar_modal_editar_modal_page__WEBPACK_IMPORTED_MODULE_30__["EditarModalPage"],
            _eventomodal_eventomodal_page__WEBPACK_IMPORTED_MODULE_27__["EventomodalPage"],
            _usuario_pesquisa_usuario_pesquisa_page__WEBPACK_IMPORTED_MODULE_35__["UsuarioPesquisaPage"],
            _ionic_native_screenshot_ngx__WEBPACK_IMPORTED_MODULE_34__["Screenshot"],
            _awesome_cordova_plugins_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_14__["NativeGeocoder"],
            _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_25__["InAppBrowser"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_46__["SocialSharing"],
            _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_47__["BackgroundMode"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"],
            _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_15__["ImagePicker"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_48__["Camera"],
            _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_49__["GooglePlus"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_16__["File"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"],
            _eventos_do_usuario_proximo_evento_page__WEBPACK_IMPORTED_MODULE_44__["ProximoEventoPage"],
            _evento_pesquisa_evento_pesquisa_page__WEBPACK_IMPORTED_MODULE_38__["EventoPesquisaPage"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"], }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], AppModule);



/***/ }),

/***/ "b0Dx":
/*!***********************************************************!*\
  !*** ./src/app/novo-evento/novo-evento-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: NovoEventoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovoEventoPageRoutingModule", function() { return NovoEventoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _novo_evento_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./novo-evento.page */ "y/1N");




const routes = [
    {
        path: '',
        component: _novo_evento_page__WEBPACK_IMPORTED_MODULE_3__["NovoEventoPage"]
    }
];
let NovoEventoPageRoutingModule = class NovoEventoPageRoutingModule {
};
NovoEventoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NovoEventoPageRoutingModule);



/***/ }),

/***/ "b3v9":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/usuario-pesquisa/usuario-pesquisa.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header *ngFor=\"let user of userrr \">\n  <ion-toolbar>\n    <ion-title class=\"title\" size=\"large\">{{ user.username }}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\" text=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\" (click)=\"presentActionSheet()\">\n      <ion-icon name=\"menu-outline\" size=\"large\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <img *ngFor=\"let user of userrr \" class=\"imagem\" [src]=\"user.imgUser\" />\n<h2>  </h2>\n\n  <ion-slides>\n\n    <ion-slide>\n      <div>\n        <a class=\"a\">Lista de Up</a>\n        <ion-list>\n          <ion-item lines=\"none\" *ngFor=\"let evento of eventos\" (click)=\"showmodal(evento)\">\n            <ion-thumbnail>\n              <img class=\"imag\" [src]=\"evento.url\">\n            </ion-thumbnail>\n            <h2 class=\"com\">{{ evento.nome }} </h2>\n            <ion-badge slot=\"end\">{{ evento.UPnum }}</ion-badge>\n          </ion-item>\n        </ion-list>\n        <ion-list>\n          <ion-item lines=\"none\" *ngFor=\"let evento of eventos2\" (click)=\"showmodal(evento)\">\n            <ion-thumbnail>\n              <img class=\"imag\" [src]=\"evento.url\">\n            </ion-thumbnail>\n            <h2 class=\"com\">{{ evento.nome }} </h2>\n            <ion-badge slot=\"end\">{{ evento.UPnum }}</ion-badge>\n          </ion-item>\n        </ion-list>\n        <ion-infinite-scroll threshold=\"40%\" (ionInfinite)=\"loadups($event)\">\n          <ion-infinite-scroll-content\n            loadingSpinner=\"bubbles\"\n            loadingText=\"Carregando...\">\n          </ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n      </div>\n    </ion-slide>\n\n    <ion-slide *ngIf=\"criados.length > 0\">\n      <div>\n        <a class=\"a\">Eventos Publicados</a>\n        <ion-list lines=\"none\">\n          <ion-item *ngFor=\"let evento of criados\" class=\"card\" (click)=\"showmodal(evento)\" lines=\"none\">\n            <ion-thumbnail (click)=\"showmodal(evento)\">\n              <img class=\"imag\" [src]=\"evento.url\">\n            </ion-thumbnail>\n            <h2 class=\"com\">{{ evento.nome }} </h2>\n            <ion-badge slot=\"end\">{{ evento.UPnum }}</ion-badge>\n          </ion-item>\n        </ion-list>\n        <ion-list lines=\"none\">\n          <ion-item *ngFor=\"let evento of criados2\" class=\"card\" (click)=\"showmodal(evento)\" lines=\"none\">\n            <ion-thumbnail (click)=\"showmodal(evento)\">\n              <img class=\"imag\" [src]=\"evento.url\">\n            </ion-thumbnail>\n            <h2 class=\"com\">{{ evento.nome }} </h2>\n            <ion-badge slot=\"end\">{{ evento.UPnum }}</ion-badge>\n          </ion-item>\n        </ion-list>\n        <ion-infinite-scroll threshold=\"40%\" (ionInfinite)=\"loadcriados($event)\">\n          <ion-infinite-scroll-content\n            loadingSpinner=\"bubbles\"\n            loadingText=\"Carregando...\">\n          </ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n      </div>\n    </ion-slide>\n\n  </ion-slides>\n\n\n  <ion-content>");

/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "zpKS");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        exports: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]],
        entryComponents: []
    })
], HomePageModule);



/***/ }),

/***/ "d6N1":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/novo-evento/novo-evento.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title size=\"large\" class=\"centertt\" >Publicar Evento</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"perfil\" text=\"\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-slides  #slides>\n\n  <ion-slide >\n\n    <h2 class=\"th2\">Seu evento é <br> Presencial ou Online?</h2>\n    <ion-button class=\"btn\" expand=\"block\" shape=\"round\" (click)=\"Presencial()\"> Presencial </ion-button>\n    <ion-button expand=\"block\" shape=\"round\" (click)=\"Online()\"> Online </ion-button>\n    <h2 class=\"th2\"></h2>\n   \n</ion-slide>  \n\n    <ion-slide>    \n        <h2 class=\"th2\">Banner do evento</h2>\n        <ion-card class=\"card\">\n          <input type=\"file\" (change)=\"showPreview($event)\" class=\"filebtn\" #fileButton/>\n          <img class=\"imagem\"  (click)=\"writeUserData()\" [src]=\"img\">\n        </ion-card>\n        <h2 class=\"th2\"></h2>\n    </ion-slide>\n\n    <ion-slide>\n     \n        <h2 class=\"th2\">O nome</h2>\n        <ion-list class=\"fundo\">\n          <ion-item  lines=\"none\" class=\"itemm\">\n            <ion-input  #myinput enterkeyhint=\"done\" placeholder=\"Show do Kleb\"  type=\"text\" [(ngModel)]=\"nome\" ></ion-input>\n            <ion-button  (click)=\"next()\" color=\"primary\"  [disabled]=\"!nome\"> Confirmar\n            </ion-button>\n          </ion-item>\n        </ion-list>\n  \n    </ion-slide>\n\n    <ion-slide>\n      <h2 class=\"th2\">A data</h2>\n      <ion-list lines=\"none\" >\n        <ion-item class=\"holder\">\n          <ion-datetime  placeholder=\"Início\" displayFormat=\"DD MMMM HH:mm\"[(ngModel)]=\"dia\"\n            monthNames=\"Janeiro, Fevereiro, Março, Abril, Maio, Junho, Julho, Agosto, Setembro, Outubro, Novembro, Dezembro\">\n          </ion-datetime>\n        </ion-item>\n      \n        <ion-item class=\"holder\">\n          <ion-datetime placeholder=\"Fim\"displayFormat=\"DD MMMM HH:mm\" [(ngModel)]=\"fim\" \n           monthNames=\"Janeiro, Fevereiro, Março, Abril, Maio, Junho, Julho, Agosto, Setembro, Outubro, Novembro, Dezembro\">\n          </ion-datetime>\n  \n        </ion-item>\n        <ion-button class=\"btn2\" expand=\"block\" shape=\"round\" (click)=\"novaData()\"> Ok </ion-button>\n\n    </ion-list>\n      \n    </ion-slide>\n\n\n    <ion-slide *ngIf=\"presenca\">\n      <h2 class=\"th2\">O link </h2>\n      <ion-list class=\"fundo\">\n        <ion-item  lines=\"none\" class=\"itemm\">\n          <ion-input  #myinput enterkeyhint=\"done\" placeholder=\"Link do evento\"  type=\"url\" [(ngModel)]=\"ingresso\" ></ion-input>\n          <ion-button   color=\"primary\"(click)=\"next()\"  [disabled]=\"!ingresso\"> Confirmar\n          </ion-button>\n        </ion-item>\n      </ion-list>\n    </ion-slide>\n\n    <ion-slide  *ngIf=\"!presenca\">\n      <h2 class=\"th2\">O link </h2>\n      <ion-list class=\"fundo\">\n        <ion-item  lines=\"none\" class=\"itemm\">\n          <ion-input  #myinput enterkeyhint=\"done\" placeholder=\"https:\"  type=\"url\" [(ngModel)]=\"link\" ></ion-input>\n          <ion-button   color=\"primary\"(click)=\"next()\"  [disabled]=\"!link\"> Confirmar\n          </ion-button>\n        </ion-item>\n      </ion-list>\n    </ion-slide>\n  \n    <ion-slide *ngIf=\"presenca\">\n      <ion-list lines=\"none\">\n      <ion-item *ngIf=\"local\" class=\"filtro\">\n        {{ local.description }}\n        <ion-icon (click)=\"nextlocal()\" class=\"corbot\" slot=\"end\" name=\"checkmark-circle-outline\"></ion-icon>\n      </ion-item>\n    </ion-list>\n      <ion-searchbar class=\"searchbar\" placeholder=\"Local\" (ionChange)=\"searchChanged()\" [(ngModel)]=\"search\">\n      </ion-searchbar>\n      <ion-list [hidden]=\"!search.length\" class=\"filtro\">\n        <ion-item (click)=\"geocodetest(result.structured_formatting.secondary_text , result)\" *ngFor=\"let result of searchResults\" class=\"holder\">\n          {{ result.description }}\n        </ion-item>\n      \n       </ion-list> \n    </ion-slide>  \n\n    <ion-slide>\n      <ion-card class=\"card\">\n        <input type=\"file\" (change)=\"showPreview($event)\" class=\"filebtn\" #fileButton/>\n        <img class=\"imagem\"  (click)=\"writeUserData()\" [src]=\"img\">\n      </ion-card>\n      <ion-list lines=\"none\">\n        <ion-item (click)=\"editNome()\" *ngIf=\"nome\" class=\"item1\">\n          <ion-icon  name=\"checkmark-done-outline\"></ion-icon>\n          <h6 class=\"ma\">{{ nome }}</h6>\n        </ion-item>\n        <ion-item  (click)=\"editDia()\" *ngIf=\"dia2\" class=\"item1\">\n          <ion-icon  name=\"calendar-outline\" ></ion-icon>\n          <h6 class=\"ma\">{{ dia2 }}</h6>\n        </ion-item>\n        <ion-item (click)=\"editIngresso()\"  *ngIf=\"ingresso\" class=\"item1\">\n          <ion-icon name=\"globe-outline\"></ion-icon>\n          <h6 class=\"ma\">Link</h6>\n        </ion-item>\n        <ion-item (click)=\"editLink()\"  *ngIf=\"link\" class=\"item1\">\n          <ion-icon name=\"globe-outline\"></ion-icon>\n          <h6 class=\"ma\">Link</h6>\n        </ion-item>\n        <ion-item (click)=\"editLocal()\" *ngIf=\"local\" class=\"item1\">\n          <ion-icon name=\"location-sharp\" size=\"large\"></ion-icon>\n          <h6 class=\"ma\">{{ local.description }}</h6>\n        </ion-item>\n        <ion-item *ngIf=\"usuario\" class=\"item1\">\n          <ion-icon  name=\"person-sharp\"></ion-icon>\n          <h6 class=\"ma\">{{ usuario.displayName }}</h6>\n        </ion-item>\n      </ion-list>  \n     \n        <ion-button expand=\"block\" shape=\"round\" (click)=\"save()\"> Publicar </ion-button>\n      \n    </ion-slide>  \n  \n  </ion-slides>\n  <h2></h2>\n</ion-content>\n  \n ");

/***/ }),

/***/ "el7J":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pesquisar/pesquisar.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\" text=\"\" class=\"margin\" (click)=\"voltar()\"></ion-back-button>\n    </ion-buttons>\n    <ion-searchbar class=\"searchbar\" placeholder=\"Eventos\"(ionInput)=\"filterlist($event)\" clearInput>\n    </ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-list lines=\"none\">\n    <ion-item no lines *ngFor=\"let evento of eventolist\">\n      <ion-thumbnail item-start>\n        <img *ngIf=\"evento\" class=\"\" (click)=\"modalevento(evento)\" [src]=\"evento.url\">\n      </ion-thumbnail>\n      <div>\n      <h2 *ngIf=\"evento\" (click)=\"modalevento(evento)\" class=\"com\">{{ evento.nome }}  </h2>\n      <h3 *ngIf=\"evento\" (click)=\"modalevento(evento)\" class=\"sub\">{{ evento.lugar }}</h3>\n    </div>\n    </ion-item>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "f5aN":
/*!*************************************************************!*\
  !*** ./src/app/eventos-do-usuario/proximo-evento.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: black;\n}\n\nion-toolbar {\n  --padding-top: 24px ;\n  --background: black;\n  --color: white;\n}\n\nion-item {\n  --placeholder-color:#FFFFFF;\n  --background:black;\n  --color: white;\n}\n\n.centertt {\n  text-align: center;\n  background-color: black;\n  color: white;\n}\n\n.a {\n  margin-top: 1ex;\n  font-family: sans-serif;\n  font-style: Trebuchet;\n  font-weight: bold;\n  font-size: x-large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb3hpbW8tZXZlbnRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLG1CQUFBO0FBQ0Q7O0FBRUU7RUFDRSxvQkFBQTtFQUNILG1CQUFBO0VBQ0EsY0FBQTtBQUNEOztBQUNBO0VBQ0MsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFFRDs7QUFDQTtFQUNDLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBRUQ7O0FBQUU7RUFDRSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFHSiIsImZpbGUiOiJwcm94aW1vLWV2ZW50by5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG5cdC0tYmFja2dyb3VuZDogYmxhY2s7XG4gIH1cblxuICBpb24tdG9vbGJhcntcbiAgICAtLXBhZGRpbmctdG9wOiAyNHB4IDtcblx0LS1iYWNrZ3JvdW5kOiBibGFjaztcblx0LS1jb2xvciA6IHdoaXRlO1xufVxuaW9uLWl0ZW17XG5cdC0tcGxhY2Vob2xkZXItY29sb3I6I0ZGRkZGRjtcblx0LS1iYWNrZ3JvdW5kOmJsYWNrO1xuXHQtLWNvbG9yOiB3aGl0ZTtcbiAgXG59XG4uY2VudGVydHR7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG5cdGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAuYXtcbiAgICBtYXJnaW4tdG9wOiAxZXg7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgZm9udC1zdHlsZTogVHJlYnVjaGV0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTp4LWxhcmdlO1xuICB9XG4gICJdfQ== */");

/***/ }),

/***/ "f6od":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  margin-top: 0.7em;\n  --background: black;\n  --padding-top: 15px ;\n}\n\n.noauth {\n  width: 100%;\n}\n\nion-item {\n  --background: black;\n  color: white;\n}\n\n.searchbar {\n  --color: #FFFFFF;\n  --placeholder-color:#FFFFFF;\n  --background:#1C1C1C;\n}\n\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nion-content {\n  --background: black;\n}\n\n#center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background-color: black;\n}\n\n.centertext {\n  text-align: center;\n}\n\n.centertt {\n  text-align: center;\n  background-color: black;\n  color: white;\n}\n\n.branco {\n  color: white;\n}\n\n.brancotitle {\n  color: white;\n  margin-bottom: 0.2em;\n}\n\n.card {\n  align-content: center;\n  background-color: #131313;\n  color: white;\n  text-align: center;\n}\n\n.fundo {\n  background-color: black;\n  color: white;\n}\n\n.imagem {\n  align-content: center;\n  max-height: 17em;\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n}\n\n.a {\n  font-family: sans-serif;\n  font-style: Trebuchet;\n  font-weight: bold;\n  font-size: x-large;\n}\n\n.refresh {\n  color: white;\n  --color: white;\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFDQTtFQUNFLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtBQUVGOztBQUFBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBR0Y7O0FBQUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFHRjs7QUFBQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQUVGOztBQUFBO0VBQ0ksa0JBQUE7QUFHSjs7QUFEQTtFQUNFLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBSUY7O0FBRkE7RUFDRSxZQUFBO0FBS0Y7O0FBRkE7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7QUFLRjs7QUFIQTtFQUNFLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFNRjs7QUFKQTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtBQU9GOztBQUxBO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxXQUFBO0FBUUY7O0FBTkE7RUFDRSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQVNGOztBQU5BO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQVNGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXJ7XG4gIG1hcmdpbi10b3A6IDAuN2VtIDtcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbiAgLS1wYWRkaW5nLXRvcDogMTVweCA7XG59XG5cbi5ub2F1dGh7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pb24taXRlbXtcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xufVxuLnNlYXJjaGJhcntcbiAgLS1jb2xvcjogI0ZGRkZGRjsgXG4gIC0tcGxhY2Vob2xkZXItY29sb3I6I0ZGRkZGRjtcbiAgLS1iYWNrZ3JvdW5kOiMxQzFDMUM7XG59XG4jY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbn1cbiNjZW50ZXJ7XG4gIGRpc3BsYXk6IGZsZXgsO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG4uY2VudGVydGV4dHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY2VudGVydHR7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5icmFuY297XG4gIGNvbG9yOndoaXRlO1xufVxuXG4uYnJhbmNvdGl0bGV7XG4gIGNvbG9yOndoaXRlO1xuICBtYXJnaW4tYm90dG9tOiAwLjJlbTtcbn1cbi5jYXJke1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMzEzMTM7XG4gIGNvbG9yOndoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZnVuZG97XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG59XG4uaW1hZ2Vte1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIG1heC1oZWlnaHQ6IDE3ZW07XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB3aWR0aDogMTAwJTtcbn1cbi5he1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogVHJlYnVjaGV0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOngtbGFyZ2U7XG59XG5cbi5yZWZyZXNoe1xuICBjb2xvcjogd2hpdGU7XG4gIC0tY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbiAiXX0= */");

/***/ }),

/***/ "fKwk":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/criar/criar.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"title\">Registro</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"criar-user\" text=\"\" class=\"margin\" (click)=\"voltar()\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content> \n  <ion-list *ngIf=\"!jalogado\">\n  <ion-item class=\"holder\">\n    <ion-label position=\"floating\"> Nome de Usuario :</ion-label>\n    <ion-input type=\"email\" [(ngModel)]=\"username\"></ion-input>\n  </ion-item>\n\n    <ion-item class=\"holder\">\n      <ion-label position=\"floating\">Email :</ion-label>\n      <ion-input type=\"email\" [(ngModel)]=\"email\"></ion-input>\n    </ion-item>\n  \n    <ion-item class=\"holder\">\n      <ion-label position=\"floating\">Senha :</ion-label>\n      <ion-input type=\"password\" [(ngModel)]=\"password\"></ion-input>\n    </ion-item>\n\n    <ion-item class=\"holder\">\n      <ion-label position=\"floating\">Confirme senha :</ion-label>\n      <ion-input type=\"password\" [(ngModel)]=\"cpassword\"></ion-input>\n    </ion-item>\n\n    <ion-button  shape=\"round\" expand=\"full\" type=\"submit\" (click)=\"register()\">Criar</ion-button>\n\n    <!--\n    <p class=\"pp\">Criar com Gmail:</p>\n    <ion-button (click)=\"loginGooglecom()\" class=\"google\">\n      <ion-icon name=\"logo-google\" size=\"large\"></ion-icon>\n    </ion-button>\n    \n-->\n    </ion-list>\n    <div *ngIf=\"jalogado\">\n      <h2 class=\"p\" >Enviamos um link de verificação pro seu email confirme após clickar nele.</h2>\n      <ion-item class=\"holder2\"  lines=\"none\">\n        <ion-button size=\"default\" type=\"submit\"  (click)=\"enviaremaildeverific()\">Reenviar</ion-button>\n        <ion-button  size=\"default\" type=\"submit\"  (click)=\"javerifiquei()\">Confirmar</ion-button>\n      </ion-item>\n    </div>  \n</ion-content>");

/***/ }),

/***/ "gEee":
/*!*************************************!*\
  !*** ./src/app/criar/criar.page.ts ***!
  \*************************************/
/*! exports provided: CriarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriarPage", function() { return CriarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_criar_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./criar.page.html */ "fKwk");
/* harmony import */ var _criar_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./criar.page.scss */ "QfZD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../user.service */ "xdv0");
/* harmony import */ var _tutorial_tutorial_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../tutorial/tutorial.page */ "5o7k");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "up+p");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! firebase */ "iqUP");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_12__);













let CriarPage = class CriarPage {
    constructor(afAuth, google, alert, route, afdatabase, firestore, user, modal, loadingC) {
        this.afAuth = afAuth;
        this.google = google;
        this.alert = alert;
        this.route = route;
        this.afdatabase = afdatabase;
        this.firestore = firestore;
        this.user = user;
        this.modal = modal;
        this.loadingC = loadingC;
        this.arraydenomes = new Array();
        this.username = "";
        this.abrir = false;
        this.jalogado = false;
        this.tem = false;
        this.email = "";
        this.password = "";
        this.cpassword = "";
    }
    ngOnInit() {
        this.getDataFromFire();
    }
    getDataFromFire() {
        this.afdatabase.list('users').valueChanges().subscribe(data => {
            this.trataDados(data);
        });
    }
    trataDados(dados) {
        this.items = Object.keys(dados).map(i => dados[i]);
        for (const key in this.items) {
            this.arraydenomes.push(this.items[key].username.username);
        }
    }
    register() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.presentLoading();
            const cidade = 'Brasília';
            const UP = true;
            const todosnomes = this.items;
            const osnomes = this.username.toLowerCase();
            const { username, email, password, cpassword } = this;
            var imgUser = "https://firebasestorage.googleapis.com/v0/b/oreon-4bfc2.appspot.com/o/profile.png?alt=media&token=3ac5e17d-8119-46e5-9a20-e2e8d1080b18";
            username.toLowerCase();
            if (!username) {
                this.loadingC.dismiss();
                return this.showalert("Erro", "insira nome de usuario");
            }
            if (this.arraydenomes.includes(osnomes)) {
                this.loadingC.dismiss();
                return this.showalert("Erro", "nome ja existente");
            }
            if (password !== cpassword) {
                this.loadingC.dismiss();
                return this.showalert("Erro", "senhas diferentes");
            }
            try {
                const res = yield this.afAuth.createUserWithEmailAndPassword(email, password);
                console.log(res);
                const iduser = res.user.uid;
                this.firestore.collection("users").doc(`${res.user.uid}`).set({
                    username, iduser, imgUser, UP, cidade
                });
                this.afdatabase.database.ref(`users/${res.user.uid}/username`).set({
                    username, iduser, imgUser
                });
                this.enviaremaildeverific();
                this.user.updateProfile(imgUser, username);
            }
            catch (error) {
                if (error.code == "auth/weak-password") {
                    this.loadingC.dismiss();
                    return this.showalert("Senha Fraca", "Senha deve ter no mínimo 6 caracteres");
                }
                if (error.code == "auth/invalid-email") {
                    this.loadingC.dismiss();
                    return this.showalert("Erro", "Email invalido");
                }
                if (error.code == "auth/email-already-in-use") {
                    this.loadingC.dismiss();
                    return this.showalert("Erro", "Email ja em uso");
                }
            }
            this.loadingC.dismiss();
        });
    }
    showalert(header, message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                header,
                message,
                buttons: ["Ok"]
            });
            yield alert.present();
        });
    }
    abriu() {
        this.abrir = !this.abrir;
    }
    loginGooglecom() {
        this.presentLoading();
        this.LoginGoogle().then(() => {
            //const res =  this.Afauth.currentUser
            this.mostraale();
        }).catch(err => {
            this.showalert("erro", err);
        });
    }
    LoginGoogle() {
        return this.google.login({}).then(result => {
            const user_data_google = result;
            return this.afAuth.signInWithCredential(firebase__WEBPACK_IMPORTED_MODULE_12__["auth"].GoogleAuthProvider.credential(null, user_data_google.accessToken));
        });
    }
    voltar() {
        this.route.navigate(['./criar-user']);
    }
    jalogs() {
        this.jalogado = true;
    }
    showmodalTutoria() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: _tutorial_tutorial_page__WEBPACK_IMPORTED_MODULE_10__["TutorialPage"],
                componentProps: {}
            });
            modal.present();
        });
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingC.create({
                cssClass: 'my-custom-class',
                message: 'Espere um momento...',
                duration: 4000
            });
            yield this.loading.present();
        });
    }
    javerifiquei() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.presentLoading();
            const foi = (yield this.afAuth.currentUser);
            foi.reload();
            setTimeout(() => {
                console.log("RELOAD");
                var dd = foi.emailVerified;
                console.log(dd, "email verified na criar user");
                if (dd == true) {
                    this.showmodalTutoria();
                    this.route.navigate(['./home']);
                    this.showalert("Sucesso!", "Bem vindo");
                }
                if (dd == false) {
                    this.showalert("Ops!", "Tente novamente em instantes");
                }
            }, 3500);
        });
    }
    enviaremaildeverific() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            (yield this.afAuth.currentUser).sendEmailVerification();
            this.jalogs();
        });
    }
    mostraale() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.afAuth.currentUser;
            this.firestore.collection('users', ref => ref.where('iduser', '==', `${res.uid}`)).snapshotChanges().subscribe(usergg => {
                if (usergg.length > 0) {
                    this.loadingC.dismiss();
                    this.route.navigate(['/home']);
                    this.showalert('', 'Conta criada com sucesso');
                }
                else {
                    var username = "Usuario";
                    var imgUser = "https://firebasestorage.googleapis.com/v0/b/oreon-4bfc2.appspot.com/o/profile.png?alt=media&token=3ac5e17d-8119-46e5-9a20-e2e8d1080b18";
                    var iduser = res.uid;
                    var cidade = "Brasília";
                    var UP = false;
                    //display name ja existe
                    this.firestore.collection("users").doc(`${res.uid}`).set({
                        username, iduser, imgUser, cidade, UP
                    });
                    this.afdatabase.database.ref(`users/${res.uid}/username`).set({
                        username, iduser, imgUser, cidade, UP
                    });
                    this.showmodalTutorial();
                    this.route.navigate(['/home']);
                    this.loadingC.dismiss();
                }
            });
        });
    }
    showmodalTutorial() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: _tutorial_tutorial_page__WEBPACK_IMPORTED_MODULE_10__["TutorialPage"],
                componentProps: {}
            });
            modal.present();
        });
    }
};
CriarPage.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
    { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_11__["GooglePlus"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabase"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] }
];
CriarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-criar',
        template: _raw_loader_criar_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_criar_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"],
        _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_11__["GooglePlus"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabase"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"],
        _user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]])
], CriarPage);



/***/ }),

/***/ "h1CP":
/*!*****************************************************!*\
  !*** ./src/app/editar-modal/editar-modal.module.ts ***!
  \*****************************************************/
/*! exports provided: EditarModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarModalPageModule", function() { return EditarModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _editar_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editar-modal-routing.module */ "RFKi");
/* harmony import */ var _editar_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editar-modal.page */ "vkXh");







let EditarModalPageModule = class EditarModalPageModule {
};
EditarModalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _editar_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditarModalPageRoutingModule"]
        ],
        declarations: [_editar_modal_page__WEBPACK_IMPORTED_MODULE_6__["EditarModalPage"]],
        exports: [_editar_modal_page__WEBPACK_IMPORTED_MODULE_6__["EditarModalPage"]],
    })
], EditarModalPageModule);



/***/ }),

/***/ "ioSs":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/eventomodal/eventomodal.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title *ngIf=\"x\"(click)=\"close()\" size=\"large\" class=\"centertt\">{{ x.nome }} </ion-title>\n    <ion-icon (click)=\"close()\" class=\"icon\" name=\"chevron-down-sharp\"></ion-icon>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"black\">\n  <ion-card class=\"card\">\n    <img  class=\"imag\"*ngIf=\"x\" (click)=\"close()\"[src]=\"x.url\" />\n  </ion-card>\n  <ion-list lines=\"none\" no-lines>\n    <ion-item >\n        <ion-button size=\"small\"color=\"primary\"  [disabled]=\"jadeuUP\" (click)=\"UP()\" slot=\"start\">UP</ion-button>\n        {{ x.UPnum }}\n    </ion-item>\n    <ion-item > \n        <ion-icon  size=\"large\" name=\"chatbubble-sharp\" slot=\"start\"></ion-icon>\n        {{ numcoments }}\n    </ion-item>\n    <ion-item *ngIf=\"x\" >\n      <ion-icon name=\"calendar-outline\" item-start></ion-icon>\n      <h2 class=\"com\"> {{ x.dia }} </h2>\n    </ion-item>\n    <ion-item *ngIf=\"x\" (click)=\"redirectlink()\" >\n      <ion-icon name=\"globe-outline\"></ion-icon>\n      <h2 class=\"com\">Link</h2>\n    </ion-item>\n    <ion-item  *ngIf=\"x.local\" (click)=\"redirectmap()\">\n      <ion-icon name=\"location-sharp\" size=\"large\"></ion-icon>\n      <h2 class=\"com\">{{ x.local.description }}</h2>\n    </ion-item>\n    <ion-item  *ngIf=\"x\" (click)=\"redirectUser()\">\n      <ion-icon name=\"person-sharp\"></ion-icon>\n      <h2 class=\"com\">{{ x.userID[1] }}</h2>\n    </ion-item>\n  </ion-list>\n  <ion-list *ngIf=\"x.id\" (click)=\"comentauth()\" lines=\"none\">\n    <ion-item no-lines >\n      <ion-input  placeholder=\"Comentario:\" type=\"string\" [disabled]=\"noAuth\" [(ngModel)]=\"comentario\"></ion-input>\n      <ion-button color=\"primary\" (click)=\"setcoment()\" [disabled]=\"!comentario.length\"> Enviar\n      </ion-button>\n    </ion-item>\n  </ion-list>\n  <ion-list *ngIf=\"x.id\" lines=\"none\">\n    <div *ngFor=\"let kdcoment of coments\" (click)=\"page(kdcoment)\">\n      <ion-item id=\"output\" >\n        <ion-avatar item-start>\n          <img [src]=\"kdcoment.img\">\n        </ion-avatar>\n        <h2 class=\"com\">{{ kdcoment.username }} : {{ kdcoment.comentarioU }} </h2>\n      </ion-item>\n    </div>\n  </ion-list>\n  <ion-infinite-scroll [disabled]=\"numTimesLeft <= 0\" threshold=\"40%\" (ionInfinite)=\"loadcoments($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Carregando...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>");

/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "m29k":
/*!*********************************************!*\
  !*** ./src/app/tutorial/tutorial.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --padding-top: 1.5ex ;\n  --background: #0f0f0f;\n  text-align: center;\n}\n\n.p {\n  color: white;\n  margin-left: 1em;\n  margin-top: 0.5em;\n  margin-right: 1em;\n  padding-bottom: 1em;\n}\n\n.slide {\n  margin-top: 10%;\n}\n\nion-slide {\n  --ion-background-color: #1C1C1C;\n}\n\nion-content {\n  --ion-background-color: #0f0f0f;\n  --ion-color:#FFFFFF;\n}\n\nion-footer {\n  --ion-background-color: #0f0f0f;\n  background-color: #0f0f0f;\n  text-align: center;\n}\n\nion-title {\n  --color: white;\n  size: large;\n}\n\n.corbot {\n  color: #3880ff;\n}\n\n.holder {\n  --color: #FFFFFF;\n  --placeholder-color:#FFFFFF;\n  --background:#0f0f0f;\n}\n\n.title {\n  font-family: sans-serif;\n  font-style: Trebuchet;\n  font-weight: bold;\n  font-size: x-large;\n  text-align: center;\n  color: white;\n  background-color: #0f0f0f;\n}\n\n.slide3 {\n  margin-top: 40%;\n}\n\n.holder2 {\n  color: #FFFFFF;\n  margin-top: -1ex;\n  --placeholder-color:#FFFFFF;\n  --placeholder-opacity: -100%;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3R1dG9yaWFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBRUo7O0FBQUE7RUFDSSxlQUFBO0FBR0o7O0FBREE7RUFDRSwrQkFBQTtBQUlGOztBQUZBO0VBQ0ksK0JBQUE7RUFDQSxtQkFBQTtBQUtKOztBQUhFO0VBQ0UsK0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBTUo7O0FBSkU7RUFDUyxjQUFBO0VBQ0EsV0FBQTtBQU9YOztBQUxFO0VBQ0csY0FBQTtBQVFMOztBQU5DO0VBQ0ksZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0FBU0w7O0FBUEM7RUFDRSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBVUw7O0FBUkc7RUFDSSxlQUFBO0FBV1A7O0FBUkU7RUFDQyxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUFXSCIsImZpbGUiOiJ0dXRvcmlhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhcntcbiAgICAtLXBhZGRpbmctdG9wOiAxLjVleCA7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMGYwZjBmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAucHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xuICB9XG4uc2xpZGV7XG4gICAgbWFyZ2luLXRvcDoxMCU7XG59XG5pb24tc2xpZGV7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMxQzFDMUM7XG59XG5pb24tY29udGVudCB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzBmMGYwZjtcbiAgICAtLWlvbi1jb2xvcjojRkZGRkZGO1xuICB9XG4gIGlvbi1mb290ZXJ7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzBmMGYwZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGYwZjBmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBpb24tdGl0bGV7XG4gICAgICAgICAgIC0tY29sb3I6IHdoaXRlO1xuICAgICAgICAgICBzaXplOiBsYXJnZTtcbiAgfVxuICAuY29yYm90e1xuICAgICBjb2xvciA6IzM4ODBmZjtcbiAgIH1cbiAuaG9sZGVye1xuICAgICAtLWNvbG9yOiAjRkZGRkZGOyBcbiAgICAgLS1wbGFjZWhvbGRlci1jb2xvcjojRkZGRkZGO1xuICAgICAtLWJhY2tncm91bmQ6IzBmMGYwZjtcbiB9XG4gLnRpdGxle1xuICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICBmb250LXN0eWxlOiBUcmVidWNoZXQ7XG4gICBmb250LXdlaWdodDogYm9sZDtcbiAgIGZvbnQtc2l6ZTp4LWxhcmdlO1xuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzBmMGYwZjtcbiAgfVxuICAgLnNsaWRlM3tcbiAgICAgICBtYXJnaW4tdG9wOiA0MCU7XG4gICB9XG4gIFxuICAuaG9sZGVyMntcbiAgIGNvbG9yOiAjRkZGRkZGOyBcbiAgIG1hcmdpbi10b3A6IC0xZXg7XG4gICAtLXBsYWNlaG9sZGVyLWNvbG9yOiNGRkZGRkY7XG4gICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IC0xMDAlO1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xuIH0iXX0= */");

/***/ }),

/***/ "n+sE":
/*!*************************************************************!*\
  !*** ./src/app/usuario-pesquisa/usuario-pesquisa.module.ts ***!
  \*************************************************************/
/*! exports provided: UsuarioPesquisaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioPesquisaPageModule", function() { return UsuarioPesquisaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _usuario_pesquisa_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./usuario-pesquisa-routing.module */ "D9P7");
/* harmony import */ var _usuario_pesquisa_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./usuario-pesquisa.page */ "V4wL");







let UsuarioPesquisaPageModule = class UsuarioPesquisaPageModule {
};
UsuarioPesquisaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _usuario_pesquisa_routing_module__WEBPACK_IMPORTED_MODULE_5__["UsuarioPesquisaPageRoutingModule"]
        ],
        declarations: [_usuario_pesquisa_page__WEBPACK_IMPORTED_MODULE_6__["UsuarioPesquisaPage"]]
    })
], UsuarioPesquisaPageModule);



/***/ }),

/***/ "oKkR":
/*!*****************************************!*\
  !*** ./src/app/perfil/perfil.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.Perfil {\n  text-align: center;\n  color: white;\n  size: large;\n}\nion-content {\n  --ion-background-color: #000000;\n}\nion-toolbar {\n  --padding-top: 15px ;\n  --background: black;\n}\nion-icon {\n  color: white;\n}\n.title {\n  text-align: center;\n  color: white;\n}\n.badge {\n  --padding-end: ;\n}\nion-item {\n  --background: black;\n  color: white;\n}\n.p {\n  color: white;\n}\n.titlee {\n  text-align: center;\n  color: white;\n  background-color: black;\n}\n.spaço {\n  text-align: center;\n  color: white;\n  background-color: black;\n  margin-top: 25em;\n}\n.searchbar {\n  --color: #FFFFFF;\n  --placeholder-color:#FFFFFF;\n  --background:#1C1C1C;\n}\n.excl {\n  padding-left: 1ex;\n}\n.imagem {\n  border-radius: 50%;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 250px;\n  height: 250px;\n}\n.a {\n  margin-top: 1ex;\n  font-family: sans-serif;\n  font-style: Trebuchet;\n  font-weight: bold;\n  font-size: x-large;\n}\n.centertt {\n  text-align: center;\n  background-color: black;\n  color: white;\n}\n.com {\n  font-size: 3ex;\n  padding-left: 1ex;\n  font-family: sans-serif;\n  font-style: Trebuchet;\n  font-weight: bold;\n  color: white;\n  padding-bottom: 1ex;\n}\n.imag {\n  padding-top: 1ex;\n  padding-bottom: 1ex;\n}\n.sub {\n  font-size: 15px;\n  color: #5f5f5f;\n  padding-left: 2ex;\n  font-family: sans-serif;\n  font-style: Trebuchet;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BlcmZpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUVKO0FBREE7RUFDSSwrQkFBQTtBQUlKO0FBREM7RUFDRyxvQkFBQTtFQUNBLG1CQUFBO0FBSUo7QUFGQTtFQUNFLFlBQUE7QUFLRjtBQUhBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FBTUo7QUFKQTtFQUNFLGVBQUE7QUFPRjtBQUxDO0VBQ0ksbUJBQUE7RUFDQyxZQUFBO0FBUU47QUFMQztFQUNJLFlBQUE7QUFRTDtBQU5DO0VBQ0Msa0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUFTRjtBQU5BO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQVNBO0FBUEM7RUFDRyxnQkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7QUFVSjtBQVJDO0VBQ0UsaUJBQUE7QUFXSDtBQVRDO0VBQ0csa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBWUo7QUFUQTtFQUNJLGVBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQVlKO0FBVkU7RUFDRCxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQWFEO0FBWEU7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFjSjtBQVpFO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQWVOO0FBYkU7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FBZ0JOIiwiZmlsZSI6InBlcmZpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuUGVyZmlse1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgc2l6ZTogbGFyZ2U7fVxuaW9uLWNvbnRlbnQge1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIH1cbiAgXG4gaW9uLXRvb2xiYXJ7XG4gICAgLS1wYWRkaW5nLXRvcDogMTVweCA7XG4gICAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbn1cbmlvbi1pY29uIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnRpdGxle1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gfVxuLmJhZGdle1xuICAtLXBhZGRpbmctZW5kOiA7XG59XG4gaW9uLWl0ZW17XG4gICAgIC0tYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICBcbiAgICB9XG4gLnB7XG4gICAgIGNvbG9yOiB3aGl0ZTtcbiB9XG4gLnRpdGxlZXtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4uc3Bhw6dve1xudGV4dC1hbGlnbjogY2VudGVyO1xuY29sb3I6IHdoaXRlO1xuYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG5tYXJnaW4tdG9wOiAyNWVtO1xufVxuIC5zZWFyY2hiYXJ7XG4gICAgLS1jb2xvcjogI0ZGRkZGRjsgXG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjojRkZGRkZGO1xuICAgIC0tYmFja2dyb3VuZDojMUMxQzFDO1xuIH1cbiAuZXhjbHtcbiAgIHBhZGRpbmctbGVmdDogMWV4O1xuIH1cbiAuaW1hZ2Vte1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGhlaWdodDogMjUwcHg7XG59IFxuXG4uYXtcbiAgICBtYXJnaW4tdG9wOiAxZXg7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgZm9udC1zdHlsZTogVHJlYnVjaGV0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTp4LWxhcmdlO1xuICB9XG4gIC5jZW50ZXJ0dHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcblx0Y29sb3I6IHdoaXRlO1xuICB9XG4gIC5jb217XG4gICAgZm9udC1zaXplOiAzZXg7XG4gICAgcGFkZGluZy1sZWZ0OiAxZXg7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgZm9udC1zdHlsZTogVHJlYnVjaGV0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMWV4O1xuICB9XG4gIC5pbWFne1xuICAgICAgcGFkZGluZy10b3A6IDFleDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxZXg7XG4gIH1cbiAgLnN1YntcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIGNvbG9yOiAjNWY1ZjVmO1xuICAgICAgcGFkZGluZy1sZWZ0OiAyZXg7XG4gICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAgIGZvbnQtc3R5bGU6IFRyZWJ1Y2hldDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9Il19 */");

/***/ }),

/***/ "r67e":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --padding-top: 56px ;\n  --background: black;\n}\n\nion-content {\n  --ion-background-color: #000000;\n  --ion-color:#FFFFFF;\n}\n\nion-title {\n  --color: white;\n  size: large;\n}\n\n.holder {\n  --color: #FFFFFF;\n  --placeholder-color:#FFFFFF;\n  --background:black;\n}\n\n.holder2 {\n  color: #FFFFFF;\n  margin-top: -1ex;\n  --placeholder-color:#FFFFFF;\n  --placeholder-opacity: -100%;\n}\n\n.holder3 {\n  color: #FFFFFF;\n  margin-top: -1.5ex;\n  --placeholder-color:#FFFFFF;\n  --placeholder-opacity: -100%;\n}\n\n.title {\n  text-align: center;\n  color: white;\n  font-size: 30px;\n}\n\n.p {\n  color: white;\n  margin-left: 1em;\n  margin-top: 0.5em;\n  margin-right: 1em;\n  padding-bottom: 1em;\n}\n\n.google {\n  color: white;\n  padding-left: 10%;\n}\n\n.p2 {\n  color: white;\n  margin-left: 2ex;\n  margin-top: 2ex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFHQTtFQUNHLCtCQUFBO0VBQ0EsbUJBQUE7QUFBSDs7QUFFQztFQUNTLGNBQUE7RUFDQSxXQUFBO0FBQ1Y7O0FBQ0E7RUFDSSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFBQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUFHSjs7QUFEQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUFJSjs7QUFGQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFLSjs7QUFIQztFQUNHLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQU1KOztBQUpFO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FBT0o7O0FBRkE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBS0oiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXJ7XG4gICAgLS1wYWRkaW5nLXRvcDogNTZweCA7XG4gICAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuICBcbmlvbi1jb250ZW50IHtcbiAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gICAtLWlvbi1jb2xvcjojRkZGRkZGO1xuIH1cbiBpb24tdGl0bGV7XG4gICAgICAgICAgLS1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgc2l6ZTogbGFyZ2U7XG4gfVxuLmhvbGRlcntcbiAgICAtLWNvbG9yOiAjRkZGRkZGOyBcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiNGRkZGRkY7XG4gICAgLS1iYWNrZ3JvdW5kOmJsYWNrO1xufVxuLmhvbGRlcjJ7XG4gICAgY29sb3I6ICNGRkZGRkY7IFxuICAgIG1hcmdpbi10b3A6IC0xZXg7XG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjojRkZGRkZGO1xuICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogLTEwMCU7XG59XG4uaG9sZGVyM3tcbiAgICBjb2xvcjogI0ZGRkZGRjsgXG4gICAgbWFyZ2luLXRvcDogLTEuNWV4O1xuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6I0ZGRkZGRjtcbiAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IC0xMDAlO1xufVxuLnRpdGxle1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuIH1cbiAucHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xuICB9XG4gIC5nb29nbGV7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XG5cbiAgIFxufVxuXG4ucDJ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1sZWZ0OiAyZXg7XG4gICAgbWFyZ2luLXRvcDogMmV4O1xufVxuIl19 */");

/***/ }),

/***/ "sFwW":
/*!*************************************************************!*\
  !*** ./src/app/eventos-do-usuario/proximo-evento.module.ts ***!
  \*************************************************************/
/*! exports provided: ProximoEventoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProximoEventoPageModule", function() { return ProximoEventoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _proximo_evento_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./proximo-evento-routing.module */ "6P/g");
/* harmony import */ var _proximo_evento_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./proximo-evento.page */ "BfPd");







let ProximoEventoPageModule = class ProximoEventoPageModule {
};
ProximoEventoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _proximo_evento_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProximoEventoPageRoutingModule"]
        ],
        declarations: [_proximo_evento_page__WEBPACK_IMPORTED_MODULE_6__["ProximoEventoPage"]],
        exports: [_proximo_evento_page__WEBPACK_IMPORTED_MODULE_6__["ProximoEventoPage"]],
    })
], ProximoEventoPageModule);



/***/ }),

/***/ "tzKc":
/*!***********************************************!*\
  !*** ./src/app/criar-user/criar-user.page.ts ***!
  \***********************************************/
/*! exports provided: CriarUserPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriarUserPage", function() { return CriarUserPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_criar_user_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./criar-user.page.html */ "5dUu");
/* harmony import */ var _criar_user_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./criar-user.page.scss */ "DZGe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _criar_criar_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../criar/criar.page */ "gEee");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../user.service */ "xdv0");









let CriarUserPage = class CriarUserPage {
    constructor(alert, afAuth, route, user, loadingC) {
        this.alert = alert;
        this.afAuth = afAuth;
        this.route = route;
        this.user = user;
        this.loadingC = loadingC;
        this.criar = _criar_criar_page__WEBPACK_IMPORTED_MODULE_4__["CriarPage"];
    }
    ngOnInit() {
    }
    home() {
        this.route.navigate(['/home']);
    }
    showalert(header, message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                header,
                message,
                buttons: [{
                        text: 'Re-enviar',
                        handler: () => {
                            this.enviaremaildeverific();
                        }
                    }, {
                        text: 'Ja clickei no link',
                        handler: () => {
                            this.javerifiquei();
                        }
                    },
                    {
                        text: 'Login em outra conta',
                        handler: () => {
                            this.user.logout();
                            this.route.navigate(['./login']);
                        }
                    }]
            });
            yield alert.present();
        });
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingC.create({
                cssClass: 'my-custom-class',
                message: 'Espere um momento...',
                duration: 2000
            });
            yield this.loading.present();
        });
    }
    javerifiquei() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.presentLoading();
            const foi = (yield this.afAuth.currentUser);
            foi.reload();
            setTimeout(() => {
                console.log("RELOAD");
                var dd = foi.emailVerified;
                console.log(dd, "email verified na criar user");
                if (dd == true) {
                    this.route.navigate(['./home']);
                }
            }, 3500);
        });
    }
    enviaremaildeverific() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            (yield this.afAuth.currentUser).sendEmailVerification();
            this.javerifiquei();
        });
    }
};
CriarUserPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] }
];
CriarUserPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        template: `<ion-button  color="primary"  [navPush]="criar" style="padding-left:100px">Register</ion-button>`,
        selector: 'app-criar-user',
        template: _raw_loader_criar_user_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_criar_user_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]])
], CriarUserPage);



/***/ }),

/***/ "uuZe":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/perfil/perfil.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\n  <ion-toolbar>\n    <ion-title *ngIf=\"perfilnome && noAuth == false\" class=\"title\" size=\"large\">{{ perfilnome }}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\" (click)=\"voltar()\" text=\"\" ></ion-back-button>\n    </ion-buttons>\n    <ion-buttons *ngIf=\"noAuth == false\" slot=\"end\" (click)=\"presentActionSheet()\">\n      <ion-icon name=\"menu-outline\" size=\"large\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content *ngIf=\"noAuth == false\">\n  <img *ngIf=\"perfilimg\" (click)=\"showmodal()\" class=\"imagem\" [src]=\"perfilimg\" />\n  <ion-searchbar class=\"searchbar\" placeholder=\"Escolher cidade\" (ionInput)=\"getItems($event)\" (click)=\"abriu()\"  [(ngModel)]=\"cidade\"\n    clearInput></ion-searchbar>\n  <ion-list *ngIf=\"cidade.length > 0 || abrir\" class=\"filtro\" lines=\"none\" no-lines>\n    <ion-item (click)=\"meuslugares(item.lugar)\" *ngFor=\"let item of todositems\" class=\"filtro\">\n      {{ item.lugar }}\n    </ion-item>\n  </ion-list>\n  <ion-slides>\n\n    <ion-slide>\n      <div>\n        <a class=\"a\">Lista de Up</a>\n        <ion-list>\n          <ion-item lines=\"none\" *ngFor=\"let evento of ups\" (click)=\"modalevento(evento)\">\n            <ion-thumbnail>\n              <img class=\"imag\" [src]=\"evento.url\">\n            </ion-thumbnail>\n            <h2 class=\"com\">{{ evento.nome }} </h2>\n            <ion-badge slot=\"end\">{{ evento.UPnum }}</ion-badge>\n          </ion-item>\n        </ion-list>\n        <ion-list>\n          <ion-item lines=\"none\" *ngFor=\"let evento of ups2\" (click)=\"modalevento(evento)\">\n            <ion-thumbnail>\n              <img class=\"imag\" [src]=\"evento.url\">\n            </ion-thumbnail>\n            <h2 class=\"com\">{{ evento.nome }} </h2>\n            <ion-badge slot=\"end\">{{ evento.UPnum }}</ion-badge>\n          </ion-item>\n        </ion-list>\n        <ion-infinite-scroll threshold=\"40%\" (ionInfinite)=\"loadups($event)\">\n          <ion-infinite-scroll-content\n            loadingSpinner=\"bubbles\"\n            loadingText=\"Carregando...\">\n          </ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n      </div>\n    </ion-slide>\n\n    <ion-slide  *ngIf=\"criados.length > 0\">\n      <div>\n        <a class=\"a\">Eventos Publicados</a>\n        <ion-list>\n          <ion-item *ngFor=\"let evento of criados\" lines=\"none\">\n            <ion-thumbnail  (click)=\"modalevento(evento)\">\n              <img class=\"imag\" [src]=\"evento.url\">\n            </ion-thumbnail>\n            <h2 class=\"com\"  (click)=\"modalevento(evento)\" >{{ evento.nome }} </h2>\n            <ion-button class=\"excl\" color=\"primary\" (click)=\"deletaract(evento)\" routerDirection=\"backyard\"> Excluir\n            </ion-button>\n          </ion-item>\n        </ion-list>\n        <ion-list>\n          <ion-item *ngFor=\"let evento of criados2\" lines=\"none\">\n            <ion-thumbnail  (click)=\"modalevento(evento)\">\n              <img class=\"imag\" [src]=\"evento.url\">\n            </ion-thumbnail>\n            <h2 class=\"com\"  (click)=\"modalevento(evento)\" >{{ evento.nome }} </h2>\n            <ion-button class=\"excl\" color=\"primary\" (click)=\"deletaract(evento)\" routerDirection=\"backyard\"> Excluir\n            </ion-button>\n          </ion-item>\n        </ion-list>\n        <ion-infinite-scroll threshold=\"20%\" (ionInfinite)=\"loadcriados($event)\">\n          <ion-infinite-scroll-content\n            loadingSpinner=\"bubbles\"\n            loadingText=\"Carregando...\">\n          </ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n      </div>\n    </ion-slide>\n  </ion-slides>\n\n</ion-content>\n\n\n<ion-content *ngIf=\"noAuth == true\" padding class=\"ff\">\n  <div class=\"spaço\">\n    <h1 class=\"title\">Bem Vindo</h1>\n    <div>\n    <ion-col>\n    <ion-button  color=\"primary\"  routerLink=\"/criar\" style=\"padding-left:75px\">Criar</ion-button>\n    <ion-button color=\"primary\" routerLink=\"/login\" style=\"padding-right:75px\">Login</ion-button>\n    </ion-col>\n  </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _selective_loading_strategy_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selective-loading-strategy.service */ "W6WT");
/* harmony import */ var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth-guard */ "HTFn");





//const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['criar-user']);
const redirectLoggedInToItems = () => Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_4__["redirectLoggedInTo"])(['home']);
const routes = [
    { path: '', redirectTo: 'criar-user', pathMatch: 'full' },
    { path: 'home',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./home/home.module */ "ct+p")).then(m => m.HomePageModule) //,canActivate: [AngularFireAuthGuard], data: {  preload: true } // authGuardPipe: redirectUnauthorizedToLogin
    },
    {
        path: 'perfil',
        loadChildren: () => __webpack_require__.e(/*! import() | perfil-perfil-module */ "perfil-perfil-module").then(__webpack_require__.bind(null, /*! ./perfil/perfil.module */ "ZEuG")).then(m => m.PerfilPageModule) //, canActivate: [AngularFireAuthGuard], data: {  preload : true}, //authGuardPipe: redirectUnauthorizedToLogin  ,
    },
    {
        path: 'pesquisar',
        loadChildren: () => __webpack_require__.e(/*! import() | pesquisar-pesquisar-module */ "pesquisar-pesquisar-module").then(__webpack_require__.bind(null, /*! ./pesquisar/pesquisar.module */ "x+p+")).then(m => m.PesquisarPageModule),
        data: { preload: true }
    },
    { path: 'add',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./novo-evento/novo-evento.module */ "I6jx")).then(m => m.NovoEventoPageModule)
    },
    {
        path: 'criar-user',
        loadChildren: () => __webpack_require__.e(/*! import() | criar-user-criar-user-module */ "criar-user-criar-user-module").then(__webpack_require__.bind(null, /*! ./criar-user/criar-user.module */ "Gbqg")).then(m => m.CriarUserPageModule), canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuthGuard"]], data: { authGuardPipe: redirectLoggedInToItems }
    },
    {
        path: 'criar',
        loadChildren: () => __webpack_require__.e(/*! import() | criar-criar-module */ "criar-criar-module").then(__webpack_require__.bind(null, /*! ./criar/criar.module */ "O1IZ")).then(m => m.CriarPageModule)
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() | login-login-module */ "login-login-module").then(__webpack_require__.bind(null, /*! ./login/login.module */ "X3zk")).then(m => m.LoginPageModule),
    },
    {
        path: 'eventomodal',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./eventomodal/eventomodal.module */ "JBpm")).then(m => m.EventomodalPageModule)
    },
    {
        path: 'proximo-evento',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./eventos-do-usuario/proximo-evento.module */ "sFwW")).then(m => m.ProximoEventoPageModule)
    },
    {
        path: 'editar-modal',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./editar-modal/editar-modal.module */ "h1CP")).then(m => m.EditarModalPageModule)
    },
    {
        path: 'usuario-pesquisa/:uid',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./usuario-pesquisa/usuario-pesquisa.module */ "n+sE")).then(m => m.UsuarioPesquisaPageModule)
    },
    {
        path: 'evento-pesquisa/:chave',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./evento-pesquisa/evento-pesquisa.module */ "VG/Z")).then(m => m.EventoPesquisaPageModule)
    },
    {
        path: 'share/:chave',
        loadChildren: () => __webpack_require__.e(/*! import() | share-share-module */ "share-share-module").then(__webpack_require__.bind(null, /*! ./share/share.module */ "ADsi")).then(m => m.SharePageModule)
    },
    {
        path: 'tutorial',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./tutorial/tutorial.module */ "6MGo")).then(m => m.TutorialPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        providers: [_selective_loading_strategy_service__WEBPACK_IMPORTED_MODULE_3__["SimpleLoadingStrategy"]],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "vkXh":
/*!***************************************************!*\
  !*** ./src/app/editar-modal/editar-modal.page.ts ***!
  \***************************************************/
/*! exports provided: EditarModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarModalPage", function() { return EditarModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_editar_modal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./editar-modal.page.html */ "HCKi");
/* harmony import */ var _editar_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editar-modal.page.scss */ "YwU1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../user.service */ "xdv0");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");
/* harmony import */ var _novo_evento_novo_evento_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../novo-evento/novo-evento.page */ "y/1N");















let EditarModalPage = class EditarModalPage {
    constructor(storage, modal, auth, camera, user, firestore, alert, navparams, loadingC, firebase, route, novoe) {
        this.storage = storage;
        this.modal = modal;
        this.auth = auth;
        this.camera = camera;
        this.user = user;
        this.firestore = firestore;
        this.alert = alert;
        this.navparams = navparams;
        this.loadingC = loadingC;
        this.firebase = firebase;
        this.route = route;
        this.novoe = novoe;
        this.roda = false;
        this.selectedImage = null;
        this.newUsername = '';
        this.cidade = new Array();
        this.c = new Array();
    }
    ngOnInit() {
        this.x = this.navparams.get('customid');
        this.img = "../assets/icon/profile.png";
        this.getDataFromFire();
    }
    takePicture() {
        this.camera.getPicture({
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL
        }).then(res => {
            return this.img = "data:image/jpeg;base64," + res;
        }).catch(e => {
            console.log(e);
        });
        return this.img;
    }
    showPreview(event) {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => this.img = e.target.result;
            reader.readAsDataURL(event.target.files[0]);
            this.selectedImage = event.target.files[0];
            console.log(this.selectedImage);
        }
        else {
            this.img = "../assets/icon/profile.png";
            this.selectedImage = null;
        }
    }
    writeUserData() {
        this.fileButton.nativeElement.click();
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingC.create({
                cssClass: 'my-custom-class',
                message: 'Espere um momento...',
                duration: 2000
            });
            yield this.loading.present();
        });
    }
    editar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.presentLoading();
            const todosnomes = this.items;
            const osnomes = this.newUsername.toLowerCase();
            if (!this.selectedImage && !this.newUsername) {
                this.close();
            }
            if (!this.selectedImage) {
                if (todosnomes.some(nome => (nome.username.username == osnomes))) {
                    return this.showalert("Erro", "nome ja existente");
                }
                if (this.newUsername != '') {
                    console.log('não tem imagem');
                    this.user.updateNome(this.newUsername.toLowerCase());
                }
            }
            if (this.selectedImage) {
                console.log("update");
                if (!this.newUsername) {
                    console.log('não tem nome');
                    yield this.url;
                    this.updateimage();
                }
                else {
                    this.user.updateNome(this.newUsername.toLowerCase());
                    this.updateimage();
                }
            }
            this.close();
            this.loadingC.dismiss();
        });
    }
    criandomodal() { }
    updateimage() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.auth.currentUser;
            var iduser = res.uid;
            var name = this.selectedImage.name;
            const fileRef = this.storage.ref(name);
            this.storage.upload(name, this.selectedImage).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(() => {
                fileRef.getDownloadURL().subscribe((url) => {
                    this.url = url;
                    res.updateProfile({
                        photoURL: this.url,
                    });
                    this.firestore.collection(`users`).doc(`${iduser}`).update({ imgUser: this.url });
                    this.firebase.database.ref(`users/${iduser}/img`).set(this.url);
                    console.log("image update");
                });
            })).subscribe();
        });
    }
    close() {
        this.modal.dismiss();
    }
    getDataFromFire() {
        this.firebase.list('users').valueChanges().subscribe(data => {
            this.trataDados(data);
        });
    }
    trataDados(dados) {
        this.items = Object.keys(dados).map(i => dados[i]);
    }
    showalert(header, message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                header,
                message,
                buttons: ["Ok"]
            });
            yield alert.present();
        });
    }
    geteventos() {
        console.log("clicado");
        this.eventocidade = this.firestore.collection("eventos", ref => ref.where("lugar", "==", "Rio de Janeiro"));
        return this.eventocidade.get().subscribe(coisas => {
            coisas.forEach(b => {
                const data = b.data();
                const id = b.id;
                this.a = Object.assign({ id }, data);
                this.c.push(this.a);
                console.log(this.c);
            });
        });
    }
};
EditarModalPage.ctorParameters = () => [
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"],] }] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"],] }] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_12__["Camera"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestore"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabase"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: _novo_evento_novo_evento_page__WEBPACK_IMPORTED_MODULE_13__["NovoEventoPage"] }
];
EditarModalPage.propDecorators = {
    fileButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['fileButton', { static: false },] }]
};
EditarModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-editar-modal',
        template: _raw_loader_editar_modal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_editar_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_12__["Camera"],
        _user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestore"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabase"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
        _novo_evento_novo_evento_page__WEBPACK_IMPORTED_MODULE_13__["NovoEventoPage"]])
], EditarModalPage);



/***/ }),

/***/ "wuIU":
/*!*************************************************!*\
  !*** ./src/app/eventomodal/eventomodal.page.ts ***!
  \*************************************************/
/*! exports provided: EventomodalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventomodalPage", function() { return EventomodalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_eventomodal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./eventomodal.page.html */ "ioSs");
/* harmony import */ var _eventomodal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eventomodal.page.scss */ "V43p");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ "gAW/");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! firebase/app */ "Wcq6");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");














let EventomodalPage = class EventomodalPage {
    constructor(alert, router, navparams, modal, Firebase, auth, firestore, iab) {
        this.alert = alert;
        this.router = router;
        this.navparams = navparams;
        this.modal = modal;
        this.Firebase = Firebase;
        this.auth = auth;
        this.firestore = firestore;
        this.iab = iab;
        this.options = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
        };
        this.verdade = false;
        this.num = 30;
        this.noAuth = true;
        this.jadeuUP = false;
        this.numcoments = 0;
        this.dado = [];
        this.comentario = "";
        this.description = true;
        this.numTimesLeft = 2;
        this.ComentSet = {
            img: '',
            username: '',
            comentarioU: '',
            UID: ''
        };
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.auth.currentUser;
            if (res != null) {
                this.iduser = res.uid;
                this.noAuth = false;
            }
            this.lugardocomentario = this.Firebase.database.ref(`coments/${this.x.id}`);
            this.getComent();
        });
    }
    criandomodal(evento) {
        this.x = evento;
        this.UPnum = this.x.UPnum;
        console.log(evento.id);
        this.jaUpou();
        if (this.x.dia.length > 18) {
            moment__WEBPACK_IMPORTED_MODULE_9__["locale"]('pt-BR');
            this.momentto = moment__WEBPACK_IMPORTED_MODULE_9__(this.x.dia).format('ddd DD MMM');
            console.log(this.momentto);
            this.x.dia = this.momentto;
        }
        this.eventoid = evento.id;
    }
    setcoment() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.auth.currentUser;
            if (this.comentario != null && !this.comentario.trim()) {
                this.showalert("Erro", "Digite um comentario");
            }
            else {
                this.ComentSet = {
                    img: res.photoURL,
                    username: res.displayName,
                    comentarioU: this.comentario,
                    UID: this.iduser
                };
                this.lugardocomentario.push(this.ComentSet);
                this.comentario = "";
            }
        });
    }
    getComent() {
        this.lugaresdocomentario = this.Firebase.list(`coments/${this.x.id}`, ref => ref.limitToFirst(this.num));
        this.lugaresdocomentario.valueChanges().subscribe(data => {
            this.trataDados(data);
        });
    }
    UP() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.iduser == null) {
                this.jadeuUP = true;
                return this.showAlertLogin();
            }
            this.jadeuUP = true;
            const res = yield this.auth.currentUser;
            if (this.x.up.includes(this.iduser)) {
                return this.showalert("Ops!", "Você ja deu UP nesse evento");
            }
            this.x.UPnum += 1;
            this.UPnum += 1;
            this.updateReference = this.firestore.doc(`eventos/${this.x.id}`);
            this.updateReference.update({
                up: firebase_app__WEBPACK_IMPORTED_MODULE_10___default.a.firestore.FieldValue.arrayUnion(res.uid),
                UPnum: firebase_app__WEBPACK_IMPORTED_MODULE_10___default.a.firestore.FieldValue.increment(1)
            });
        });
    }
    jaUpou() {
        if (this.x.up.includes(this.iduser)) {
            this.jadeuUP = true;
        }
    }
    comentauth() {
        if (this.iduser == null) {
            this.showAlertLogin();
        }
    }
    redirectmap() {
        this.iab.create(`https://www.google.com/maps/search/?api=1&query=${this.x.local.description}`, '_system');
    }
    redirectlink() {
        this.iab.create(`${this.x.ingresso}`, '_system', this.options);
    }
    redirectUser() {
        this.close();
        this.router.navigate(['/usuario-pesquisa/' + this.x.userID[0]]);
    }
    showalert(header, message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                header,
                message,
                buttons: ["Ok"]
            });
            yield alert.present();
        });
    }
    trataDados(dados) {
        this.coments = Object.keys(dados).map(i => dados[i]).reverse();
        this.numcoments = this.coments.length;
        this.todoscoments = this.coments;
        console.log(this.todoscoments, 'foi');
    }
    showAlertLogin() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                header: 'Ops!',
                message: 'Crie ou entre em uma conta para usar ups e comentários.',
                buttons: [
                    {
                        text: 'Criar / Entrar',
                        handler: () => {
                            this.router.navigate(['/criar-user']);
                            this.close();
                        }
                    }, {
                        text: 'Ok',
                        handler: () => {
                            console.log('Confirm Okay');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    loadcoments(event) {
        this.num = this.num + 60;
        this.numTimesLeft -= 1;
        this.getComent();
        this.content.scrollToBottom();
        event.target.complete();
    }
    page(kdcoment) {
        this.userIDCOMENT = kdcoment.UID;
        this.close();
        this.router.navigate(['/usuario-pesquisa/' + this.userIDCOMENT]);
    }
    close() {
        this.modal.dismiss();
    }
    Compartilhar() {
        this.router.navigate(['/share/' + this.x.chave2]);
        this.close();
    }
};
EventomodalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestore"] },
    { type: _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["InAppBrowser"] }
];
EventomodalPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], { static: true },] }]
};
EventomodalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-eventomodal',
        template: _raw_loader_eventomodal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_eventomodal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestore"],
        _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["InAppBrowser"]])
], EventomodalPage);



/***/ }),

/***/ "xdv0":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/app */ "Wcq6");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_7__);








let UserService = class UserService {
    constructor(auth, firestore, router, firebase) {
        this.auth = auth;
        this.firestore = firestore;
        this.router = router;
        this.firebase = firebase;
        this.y = new Array();
        this.w = new Array();
        this.y2 = new Array();
        this.w2 = new Array();
        this.hjdia = new Date().toISOString();
    } //private editar : EditarModalPage) { }
    setUser(user) {
        this.user = user;
    }
    getUID() {
        return this.user.uid;
    }
    updateProfile(url, nome) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var username = nome;
            const res = yield this.auth.currentUser;
            var iduser = res.uid;
            res.updateProfile({
                photoURL: url,
                displayName: nome
            });
            this.firestore.collection(`users`).doc(`${res.uid}`).update({ imgUser: url, username: nome });
            this.firebase.database.ref(`users/${res.uid}/img`).set(url);
            this.firebase.database.ref(`users/${res.uid}/username`).set({ username, iduser });
        });
    }
    updateNome(nome) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var username = nome;
            const res = yield this.auth.currentUser;
            var iduser = res.uid;
            res.updateProfile({
                displayName: nome
            });
            this.firestore.collection(`users`).doc(`${res.uid}`).update({ username: nome });
            this.firebase.database.ref(`users/${res.uid}/username`).set({ username, iduser });
        });
    }
    updateImage(url) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.auth.currentUser;
            var iduser = res.uid;
            res.updateProfile({
                photoURL: url,
            });
            this.firestore.collection(`users`).doc(`${iduser}`).update({ imgUser: url });
            this.firebase.database.ref(`users/${iduser}/img`).set(url);
        });
    }
    login(email, password) {
        return this.auth.signInWithEmailAndPassword(email, password);
    }
    logout() {
        return this.auth.signOut();
    }
    denuncia(denunciado) {
        this.firestore.collection('users').doc(`${denunciado}`).update({ Denuncias: firebase_app__WEBPACK_IMPORTED_MODULE_7___default.a.firestore.FieldValue.increment(1) });
    }
    todasdenuncias(denunciadissimo) {
        this.firestore.collection(`Denuncias`).doc(`${denunciadissimo.id}`).set(denunciadissimo);
    }
    ordenar(escolha, up) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(up);
            if (up == false) {
                console.log("TA MUDANDO");
                this.firestore.collection(`users`).doc(`${escolha}`).update({ UP: true });
            }
            if (up == true) {
                console.log("TA MUDANDO");
                this.firestore.collection(`users`).doc(`${escolha}`).update({ UP: false });
            }
        });
    }
    getauth() {
        return this.auth;
    }
    listadecriados(cria) {
        console.log(cria);
        this.eventocriado = this.firestore.collection('eventos', ref => ref.where('userID', 'array-contains', `${cria}`).orderBy("UPnum", "desc").limit(10));
        this.eventocriado.get().subscribe(criados => {
            criados.forEach(evc => {
                const data = evc.data();
                const id = evc.id;
                if (data.fim < this.hjdia) {
                    //  console.log(data.fim, " menor que ", this.hjdia) // checar se data do  evento esta no futuro
                    this.passadostate = this.firestore.doc(`eventos/${id}`);
                    this.passadostate.update({
                        passado: true
                    });
                }
                moment__WEBPACK_IMPORTED_MODULE_6__["locale"]('pt-BR');
                this.m = moment__WEBPACK_IMPORTED_MODULE_6__(data.dia).format('ddd DD MMM - HH:mm');
                data.dia = this.m;
                this.provCria1 = Object.assign({ id }, data);
                this.w.push(this.provCria1);
                this.nextQueryCriados = evc;
            });
        });
    }
    listadecriados2(cria2) {
        const lastC = this.nextQueryCriados;
        this.eventocriado2 = this.firestore.collection('eventos', ref => ref.where('userID', 'array-contains', `${cria2}`).orderBy("UPnum", "desc").startAfter(lastC).limit(3));
        return this.eventocriado2.get().subscribe(criados => {
            criados.forEach(c => {
                const data = c.data();
                const id = c.id;
                if (data.fim < this.hjdia) {
                    //console.log(data.fim, " menor que ", this.hjdia) // checar se data do  evento esta no futuro
                    this.passadostate = this.firestore.doc(`eventos/${id}`);
                    this.passadostate.update({
                        passado: true
                    });
                }
                moment__WEBPACK_IMPORTED_MODULE_6__["locale"]('pt-BR');
                this.m = moment__WEBPACK_IMPORTED_MODULE_6__(data.dia).format('ddd DD MMM - HH:mm');
                data.dia = this.m;
                this.provCria2 = Object.assign({ id }, data);
                this.w2.push(this.provCria2);
                this.nextQueryCriados = c;
            });
        });
    }
    listadeup(up_us) {
        this.eventoup = this.firestore.collection('eventos', ref => ref.where('up', 'array-contains', `${up_us}`).orderBy("UPnum", "desc").limit(25));
        return this.eventoup.get().subscribe(upados => {
            upados.forEach(up => {
                const data = up.data();
                const id = up.id;
                if (data.fim < this.hjdia) {
                    // checar se data do  evento esta no futuro
                    this.passadostate = this.firestore.doc(`eventos/${id}`);
                    this.passadostate.update({
                        passado: true
                    });
                }
                moment__WEBPACK_IMPORTED_MODULE_6__["locale"]('pt-BR');
                this.m = moment__WEBPACK_IMPORTED_MODULE_6__(data.dia).format('ddd DD MMM - HH:mm');
                data.dia = this.m;
                this.provUp1 = Object.assign({ id }, data);
                this.y.push(this.provUp1);
                this.nextQueryUp = up;
            });
        });
    }
    listadeup2(user) {
        const last = this.nextQueryUp;
        console.log(last);
        this.eventoup2 = this.firestore.collection('eventos', ref => ref.where('up', 'array-contains', `${user}`).orderBy("UPnum", "desc").startAfter(last).limit(25));
        return this.eventoup2.get().subscribe(upei => {
            upei.forEach(upi => {
                const data = upi.data();
                const id = upi.id;
                if (data.fim < this.hjdia) {
                    console.log(data.fim, " menor que ", this.hjdia); // checar se data do  evento esta no futuro
                    this.passadostate = this.firestore.doc(`eventos/${id}`);
                    this.passadostate.update({
                        passado: true
                    });
                }
                moment__WEBPACK_IMPORTED_MODULE_6__["locale"]('pt-BR');
                this.m = moment__WEBPACK_IMPORTED_MODULE_6__(data.dia).format('ddd DD MMM - HH:mm');
                data.dia = this.m;
                this.provUp2 = Object.assign({ id }, data);
                this.y2.push(this.provUp2);
                this.nextQueryUp = upi;
            });
        });
    }
};
UserService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],] }] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"] }
];
UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]])
], UserService);



/***/ }),

/***/ "y/1N":
/*!*************************************************!*\
  !*** ./src/app/novo-evento/novo-evento.page.ts ***!
  \*************************************************/
/*! exports provided: NovoEventoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovoEventoPage", function() { return NovoEventoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_novo_evento_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./novo-evento.page.html */ "d6N1");
/* harmony import */ var _novo_evento_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./novo-evento.page.scss */ "MUNy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _evento_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../evento.service */ "XITf");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/google-maps */ "tBOM");
/* harmony import */ var _awesome_cordova_plugins_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @awesome-cordova-plugins/native-geocoder/ngx */ "itIa");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");
/* harmony import */ var _editar_modal_editar_modal_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../editar-modal/editar-modal.page */ "vkXh");



















let NovoEventoPage = class NovoEventoPage {
    constructor(storage, camera, eventoService, firestore, modalCtrl, firebase, ngzone, geo, alert, auth, loadingC) {
        this.storage = storage;
        this.camera = camera;
        this.eventoService = eventoService;
        this.firestore = firestore;
        this.modalCtrl = modalCtrl;
        this.firebase = firebase;
        this.ngzone = ngzone;
        this.geo = geo;
        this.alert = alert;
        this.auth = auth;
        this.loadingC = loadingC;
        this.dataSet2 = {
            nome: '',
            url: '',
            ingresso: "",
            dia: '',
            fim: '',
            local: '',
            lugar: '',
            up: [],
            userID: [],
            passado: false,
            UPnum: 0
        };
        this.selectedImage = null;
        this.presenca = true;
        this.dateValue = '';
        this.dia1 = 'Início';
        this.dia2 = 'Fim';
        this.ingressoType = '';
        this.existe = false;
        this.options = { month: 'long', day: 'numeric',
            year: 'numeric' };
        this.hide = true;
        this.tipo = "Presencial";
        this.search = '';
        this.googleAutocomplete = new google.maps.places.AutocompleteService();
        this.searchResults = new Array();
    }
    close() {
        //this.datetime.cancel(true)
    }
    select() {
        //this.datetime.confirm(true)
        console.log(this.dateValue);
    }
    next() {
        this.slides.slideNext();
    }
    prev() {
        this.slides.slidePrev();
    }
    ;
    ngOnInit() {
        this.eventoService.getImageDetailList();
        this.img = "../assets/icon/unnamed.png";
        this.getCidadeDetails();
        this.name();
    }
    getCidadeDetails() {
        this.firebase.list('cidades').valueChanges().subscribe(data => {
            this.tratacidades(data);
        });
    }
    tratacidades(dados) {
        this.items = Object.keys(dados).map(i => dados[i]);
        console.log(this.items, "todas as city");
    }
    novaData() {
        this.next();
        moment__WEBPACK_IMPORTED_MODULE_12__["locale"]('pt-BR');
        this.dia2 = moment__WEBPACK_IMPORTED_MODULE_12__(this.dia).format('ddd DD MMM');
    }
    geocodetest(resukt, localcompleto) {
        console.log(resukt, "opa");
        this.search = "";
        this.local = localcompleto;
        let options = {
            useLocale: true,
            maxResults: 1
        };
        this.geo.forwardGeocode(resukt, options).then(res => {
            (res);
            console.log(res);
            this.lugar = res[0].locality;
            console.log(this.lugar);
            if (this.lugar == "Brasília") {
                console.log("ok");
            }
            else if (this.lugar == "Rio de Janeiro") {
                console.log("ok");
            }
            else if (this.lugar == "São Paulo") {
                console.log("ok");
            }
            else {
                this.search, this.local = "";
                return this.showalert("Ops!", "O Oreon só está disponivel em Brasília, Rio de Janeiro e São paulo");
            }
            console.log(this.lugar);
            return this.lugar;
        }).catch(err => {
            console.log(err);
            var re1 = /Rio de Janeiro/gi;
            var re2 = /Brasília/gi;
            var re3 = /São Paulo/gi;
            if (this.local.description.search(re1) == -1) {
                this.lugar = "Rio de Janeiro";
                console.log("ok");
            }
            else if (this.local.description.search(re2) == -1) {
                this.lugar = "Brasília";
                console.log("ok");
            }
            else if (this.local.description.search(re3) == -1) {
                this.lugar = "São Paulo";
                console.log("ok");
            }
            else {
                return this.showalert("Ops!", "O Oreon só está disponivel em Brasília, Rio de Janeiro e São paulo");
            }
        });
    }
    Presencial() {
        this.next();
    }
    pres() {
        this.next();
    }
    Online() {
        console.log("online");
        this.presenca = false;
        this.local = null;
        this.lugar = null;
        this.next();
    }
    dateChanged(value) {
        this.dia = value;
        moment__WEBPACK_IMPORTED_MODULE_12__["locale"]('pt-BR');
        this.dia1 = moment__WEBPACK_IMPORTED_MODULE_12__(this.dia).format('ddd DD MMM HH:MM');
        console.log(value);
    }
    dateChanged2(value) {
        this.fim = value;
        moment__WEBPACK_IMPORTED_MODULE_12__["locale"]('pt-BR');
        this.dia2 = moment__WEBPACK_IMPORTED_MODULE_12__(this.fim).format('ddd DD MMM HH:MM');
        console.log(value);
    }
    showmodal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _editar_modal_editar_modal_page__WEBPACK_IMPORTED_MODULE_15__["EditarModalPage"],
                componentProps: {}
            });
            modal.present();
            ;
        });
    }
    name() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = (yield this.auth.currentUser);
            this.usuario = res;
        });
    }
    save() {
        if (this.presenca == true) {
            this.presentLoading();
            if (this.nome == null) {
                this.loading.dismiss();
                return this.showalert("Erro ", "Nome do evento é Obrigatório");
            }
            if (this.selectedImage == null) {
                this.loading.dismiss();
                return this.showalert("Erro ", "Imagem do evento é Obrigatório");
            }
            if (this.dia == null) {
                this.loading.dismiss();
                return this.showalert("Erro ", "Data de ínicio do evento é Obrigatório");
            }
            if (this.fim == null) {
                this.loading.dismiss();
                return this.showalert("Erro ", "Data de fim do evento é Obrigatório");
            }
            if (this.local == null) {
                this.loading.dismiss();
                return this.showalert("Erro ", "Local do evento é Obrigatório");
            }
            if (this.ingresso == null) {
                this.loading.dismiss();
                console.log(this.ingresso);
                return this.showalert("Erro ", "Link do evento é Obrigatório, caso o evento não possua link de ingresso use o link de perfil do instagram do evento ou do produtor.");
            }
            this.provisorio();
            this.showalert("Evento ", "Publicado com sucesso");
            this.loading.dismiss();
        }
        if (this.presenca == false) {
            this.presentLoading();
            if (this.nome == null) {
                this.loading.dismiss();
                return this.showalert("Erro ", "Nome do evento é Obrigatório");
            }
            if (this.selectedImage == null) {
                this.loading.dismiss();
                return this.showalert("Erro ", "Imagem do evento é Obrigatório");
            }
            if (this.dia == null) {
                this.loading.dismiss();
                return this.showalert("Erro ", "Data de ínicio do evento é Obrigatório");
            }
            if (this.fim == null) {
                this.loading.dismiss();
                return this.showalert("Erro ", "Data de fim do evento é Obrigatório");
            }
            if (this.link == null) {
                this.loading.dismiss();
                return this.showalert("Erro ", "Link do evento é Obrigatório");
            }
            this.provsorioOnline();
            this.showalert("Evento ", "Publicado com sucesso");
            this.loading.dismiss();
        }
    }
    showPreview(event) {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => this.img = e.target.result;
            reader.readAsDataURL(event.target.files[0]);
            this.selectedImage = event.target.files[0];
            console.log(this.selectedImage.size);
            if (this.selectedImage.size > 500000) {
                this.img = "../assets/icon/profile.png";
                this.selectedImage = null;
                return this.showalert("Erro", "tamanho da imagem muito grande, reduza para no máximo 500 KB ");
            }
            this.next();
        }
        else {
            this.img = "../assets/icon/profile.png";
            this.selectedImage = null;
        }
    }
    writeUserData() {
        this.fileButton.nativeElement.click();
    }
    save2() {
        this.presentLoading();
        if (this.nome == null) {
            return this.showalert("Erro ", "Nome do evento é Obrigatório");
        }
        if (this.selectedImage == null) {
            return this.showalert("Erro ", "Imagem do evento é Obrigatório");
        }
        if (this.dia == null) {
            return this.showalert("Erro ", "Data de ínicio do evento é Obrigatório");
        }
        if (this.fim == null) {
            return this.showalert("Erro ", "Data de fim do evento é Obrigatório");
        }
        var name = this.selectedImage.name;
        const fileRef = this.storage.ref(name);
        this.storage.upload(name, this.selectedImage).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
            fileRef.getDownloadURL().subscribe((url) => {
                this.url = url;
                this.eventoService.insertOnline(this.nome, this.url, this.link, this.dia, this.fim);
                this.showalert("Evento", "Publicado com sucesso ");
            });
        })).subscribe();
        this.loading.dismiss();
    }
    searchChanged() {
        if (!this.search.trim().length)
            return;
        this.googleAutocomplete.getPlacePredictions({ input: this.search, }, predictions => {
            this.ngzone.run(() => {
                this.searchResults = predictions;
            });
        });
    }
    showalert(header, message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                header,
                message,
                buttons: ["Ok"]
            });
            yield alert.present();
        });
    }
    nextlocal() {
        this.next();
        console.log(this.lugar);
    }
    showalert2(header, message, x, y) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                header,
                message,
                buttons: [{
                        text: 'OK',
                        handler: () => {
                            this.provs();
                        }
                    }]
            });
            yield alert.present();
        });
    }
    localizou(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.search = "";
            this.local = item;
            this.destnation = item;
            const info = yield _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_10__["Geocoder"].geocode({ address: this.destnation.description });
            this.lugar = info[0].subAdminArea;
            if (info[0].adminArea == "Distrito Federal") {
                this.lugar = "Brasília";
            }
            if (this.lugar == "Brasília") {
                console.log("ok");
            }
            else if (this.lugar == "Rio de Janeiro") {
                console.log("ok");
            }
            else if (this.lugar == "São Paulo") {
                console.log("ok");
            }
            else {
                this.lugar, this.local = "";
                return this.showalert("Ops!", "O Oreon só esta disponivel em Brasília, Rio de Janeiro e São paulo");
            }
            console.log(this.lugar);
            return this.local, this.lugar;
        });
    }
    load() {
        _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_10__["Environment"].setEnv({
            'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyCXYp8zsb8GG0_kfoc_tajVU_3UNyFiEZE',
            'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyCXYp8zsb8GG0_kfoc_tajVU_3UNyFiEZE'
        });
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingC.create({
                cssClass: 'my-custom-class',
                message: 'Espere um momento...',
                duration: 2000
            });
            yield this.loading.present();
        });
    }
    provs() {
        this.provs1();
        this.provs2();
        this.provs3();
        this.provs4();
        this.provs5();
        this.provs6();
    }
    provsOnline() {
        this.provs1();
        this.provs2();
        this.provs3();
        this.provs4();
        this.provs6();
    }
    provs1() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("provs");
            const res = yield this.auth.currentUser;
            const ref = this.firestore.collection('eventos').doc(this.ref);
            ref.update({ up: [res.uid] });
        });
    }
    provs2() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.auth.currentUser;
            const ref = this.firestore.collection('eventos').doc(this.ref);
            ref.update({ userID: [res.uid, res.displayName] });
        });
    }
    provs3() {
        const ref = this.firestore.collection('eventos').doc(this.ref);
        ref.update({ dia: this.dia }).catch(error => {
            console.log(error);
            return this.showalert("Error", "Algo deu errado");
        });
    }
    provs4() {
        console.log("provs4");
        const ref = this.firestore.collection('eventos').doc(this.ref);
        ref.update({ fim: this.fim }).catch(error => {
            console.log(error);
            return this.showalert("Error", "Algo deu errado");
        });
    }
    provs5() {
        const ref = this.firestore.collection('eventos').doc(this.ref);
        ref.update({ lugar: this.lugar });
    }
    provs6() {
        const ref = this.firestore.collection('eventos').doc(this.ref);
        var name = this.selectedImage.name;
        const fileRef = this.storage.ref(name);
        this.storage.upload(name, this.selectedImage).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
            fileRef.getDownloadURL().subscribe((url) => {
                ref.update({ url: url });
            });
        })).subscribe();
    }
    provisorio() {
        this.presentLoading();
        console.log("tamanho?");
        var name = this.selectedImage.name;
        var add = this.firestore.createId();
        this.ref = add;
        console.log(add);
        const ref = this.firestore.collection('eventos').doc(add);
        const nome = this.nome;
        const ingresso = this.ingresso; //link
        const local = this.local;
        const passado = false;
        const UPnum = 1;
        this.firestore.collection('eventos').doc(add).set({ nome, local, UPnum, ingresso, passado }).catch(error => {
            return this.showalert("Error", "Tente novamente mais tarde");
        });
        this.provs();
        console.log("ok publicado");
        this.loadingC.dismiss();
    }
    provsorioOnline() {
        this.presentLoading();
        console.log("tamanho?");
        var name = this.selectedImage.name;
        var add = this.firestore.createId();
        this.ref = add;
        console.log(add);
        const ref = this.firestore.collection('eventos').doc(add);
        const nome = this.nome;
        const ingresso = this.link; //link
        const passado = false;
        const UPnum = 1;
        console.log(nome);
        console.log(ingresso);
        console.log(UPnum);
        console.log(passado);
        this.firestore.collection('eventos').doc(add).set({ nome, UPnum, ingresso, passado }).catch(error => {
            console.log(error);
            return this.showalert("Error", "Tente novamente mais tarde");
        });
        this.provsOnline();
        console.log("ok publicado");
        this.showalert("ok", "publicado");
        this.loadingC.dismiss();
    }
    editNome() {
        this.prev();
        this.prev();
        this.prev();
        this.prev();
    }
    editDia() {
        this.prev();
        this.prev();
        this.prev();
    }
    editIngresso() {
        this.prev();
        this.prev();
    }
    editLink() {
        this.prev();
        this.prev();
    }
    editLocal() {
        this.prev();
    }
};
NovoEventoPage.ctorParameters = () => [
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"],] }] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_14__["Camera"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_evento_service__WEBPACK_IMPORTED_MODULE_7__["EventoService"],] }] },
    { type: _evento_service__WEBPACK_IMPORTED_MODULE_7__["EventoService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_9__["AngularFireDatabase"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _awesome_cordova_plugins_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_11__["NativeGeocoder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__["AngularFireAuth"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"] }
];
NovoEventoPage.propDecorators = {
    fileButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['fileButton', { static: false },] }],
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['slides', { static: false },] }],
    datetime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['iondatetime', { static: false },] }]
};
NovoEventoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-novo-evento',
        template: _raw_loader_novo_evento_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_novo_evento_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_14__["Camera"],
        _evento_service__WEBPACK_IMPORTED_MODULE_7__["EventoService"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"],
        _angular_fire_database__WEBPACK_IMPORTED_MODULE_9__["AngularFireDatabase"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"],
        _awesome_cordova_plugins_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_11__["NativeGeocoder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__["AngularFireAuth"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"]])
], NovoEventoPage);



/***/ }),

/***/ "yeiI":
/*!*********************************************************!*\
  !*** ./src/app/evento-pesquisa/evento-pesquisa.page.ts ***!
  \*********************************************************/
/*! exports provided: EventoPesquisaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventoPesquisaPage", function() { return EventoPesquisaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_evento_pesquisa_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./evento-pesquisa.page.html */ "Xzod");
/* harmony import */ var _evento_pesquisa_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./evento-pesquisa.page.scss */ "/cSS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/app */ "Wcq6");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ "gAW/");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! firebase/firestore */ "5x/H");













let EventoPesquisaPage = class EventoPesquisaPage {
    constructor(alert, route, firestore, Firebase, auth, router, iab) {
        this.alert = alert;
        this.route = route;
        this.firestore = firestore;
        this.Firebase = Firebase;
        this.auth = auth;
        this.router = router;
        this.iab = iab;
        this.noAuth = true;
        this.pode = false;
        this.numcoments = 0;
        this.jadeuUP = false;
        this.options = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
        };
        this.comentario = "";
        this.ComentSet = {
            img: '',
            username: '',
            comentarioU: '',
            UID: ''
        };
        this.eventoID = this.route.snapshot.paramMap.get('chave');
        this.getevento(this.eventoID);
    }
    ngOnInit() {
        this.auth.onAuthStateChanged((user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                var uid = user.uid;
                console.log("logado por aqui");
                this.iduser = uid;
                // ...
            }
            else {
                this.iduser == null;
                console.log("Deslogado");
                // User is signed out
                // ...
            }
        });
    }
    user() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.auth.currentUser;
            if (res != null) {
                this.imgus = res.photoURL;
                this.iduser = res.uid;
                this.nome = res.displayName;
            }
        });
    }
    jaUpou() {
        if (this.iduser == null) {
            this.showAlertLogin();
        }
        if (this.eventodb.up.includes(this.iduser)) {
            this.jadeuUP = true;
        }
    }
    redirectUser() {
        this.router.navigate(['/usuario-pesquisa/' + this.eventodb.userID[0]]);
    }
    getevento(tt) {
        //refazer
        this.evento = this.firestore.collection('eventos', ref => ref.where('chave2', '==', `${tt}`)); // Firestore evento
        return this.evento.get().subscribe(coisas => {
            coisas.forEach(b => {
                const data = b.data();
                const id = b.id;
                moment__WEBPACK_IMPORTED_MODULE_9__["locale"]('pt-BR');
                this.m = moment__WEBPACK_IMPORTED_MODULE_9__(data.dia).format('ddd DD MMM - HH:mm');
                data.dia = this.m;
                this.eventodb = Object.assign({ id }, data);
                this.getComent(this.eventodb.id);
                this.lugardocomentario = this.Firebase.list(`coments/${this.eventodb.id}`, ref => ref.limitToLast(75));
                console.log(this.eventodb);
                this.pode = true;
            });
        });
    }
    redirectlink() {
        const browser = this.iab.create(`${this.eventodb.ingresso}`, '_system', this.options);
        browser.on('loadstop').subscribe(event => {
            browser.insertCSS({ code: "body{color: red;" });
        });
        browser.close();
    }
    redirectmap() {
        const map = this.iab.create(`https://www.google.com/maps/search/?api=1&query=${this.eventodb.local.description}`, '_system', this.options);
        map.on('loadstop').subscribe(event => {
            map.insertCSS({ code: "body{color: red;" });
        });
        map.close();
    }
    setcoment() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.user();
            const res = yield this.auth.currentUser;
            this.ComentSet = {
                img: this.imgus,
                username: this.nome,
                comentarioU: this.comentario,
                UID: this.iduser
            };
            this.lugardocomentario.push(this.ComentSet);
            this.comentario = "";
        });
    }
    getComent(x) {
        this.lugaresdocomentario = this.Firebase.list(`coments/${x}`, ref => ref.limitToLast(75));
        console.log(x);
        this.lugaresdocomentario.valueChanges().subscribe(data => {
            this.trataDados(data);
        });
    }
    trataDados(dados) {
        this.coments = Object.keys(dados).map(i => dados[i]);
        this.numcoments = this.coments.length;
        this.todoscoments = this.coments;
    }
    page(kdcoment) {
        this.router.navigate(['/usuario-pesquisa/' + kdcoment.UID]);
    }
    showAlertLogin() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                header: 'Ops!',
                message: 'Crie ou entre em uma conta para usar ups e comentários.',
                buttons: [
                    {
                        text: 'Criar / Entrar',
                        handler: () => {
                            this.router.navigate(['/criar-user']);
                        }
                    }, {
                        text: 'Ok',
                        handler: () => {
                            console.log('Confirm Okay');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    UP() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.jadeuUP = true;
            const res = yield this.auth.currentUser;
            if (this.eventodb.up.includes(this.iduser)) {
                return this.showalert("Ops!", "Você ja deu UP nesse evento");
            }
            else {
                this.upReference = this.firestore.doc(`eventos/${this.eventodb.id}`);
                this.upReference.update({
                    up: firebase_app__WEBPACK_IMPORTED_MODULE_8___default.a.firestore.FieldValue.arrayUnion(res.uid),
                    UPnum: firebase_app__WEBPACK_IMPORTED_MODULE_8___default.a.firestore.FieldValue.increment(1)
                });
                this.eventodb.UPnum += 1;
            }
        });
    }
    showalert(header, message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                header,
                message,
                buttons: ["Ok"]
            });
            yield alert.present();
        });
    }
    Compartilhar() {
        this.router.navigate(['/share/' + this.eventodb.chave2]);
    }
};
EventoPesquisaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_11__["InAppBrowser"] }
];
EventoPesquisaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-evento-pesquisa',
        template: _raw_loader_evento_pesquisa_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_evento_pesquisa_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_10__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"],
        _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_11__["InAppBrowser"]])
], EventoPesquisaPage);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ff {\n  background-color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0FBQ0oiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZme1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufSJdfQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zpKS":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "WcN3");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "f6od");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _evento_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../evento.service */ "XITf");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _eventomodal_eventomodal_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../eventomodal/eventomodal.page */ "wuIU");
/* harmony import */ var _eventos_do_usuario_proximo_evento_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../eventos-do-usuario/proximo-evento.page */ "BfPd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _selective_loading_strategy_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../selective-loading-strategy.service */ "W6WT");
/* harmony import */ var _login_login_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../login/login.page */ "34Y5");
/* harmony import */ var _criar_user_criar_user_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../criar-user/criar-user.page */ "tzKc");
/* harmony import */ var _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/background-mode/ngx */ "1xeP");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../user.service */ "xdv0");
/* harmony import */ var _tutorial_tutorial_page__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../tutorial/tutorial.page */ "5o7k");















//import * as firebase from 'firebase/firestore/bundle';








let HomePage = class HomePage {
    // public keys : Array<object> = [];
    constructor(alertCtrl, login, UserSe, eventModal, modalCtrl, firebase, firestore, service, authh, criaruserpage, proxevent, tutorial, route, SimpleLoad, backgroundMode) {
        this.alertCtrl = alertCtrl;
        this.login = login;
        this.UserSe = UserSe;
        this.eventModal = eventModal;
        this.modalCtrl = modalCtrl;
        this.firebase = firebase;
        this.firestore = firestore;
        this.service = service;
        this.authh = authh;
        this.criaruserpage = criaruserpage;
        this.proxevent = proxevent;
        this.tutorial = tutorial;
        this.route = route;
        this.SimpleLoad = SimpleLoad;
        this.backgroundMode = backgroundMode;
        this._cidade = "";
        this.hjdia = new Date().toISOString();
        this.proximoseventos = [];
        this.day = true;
        this.numTimesLeft = 10;
        this.num = 10;
        this.cidade2 = new Array();
        this.cidade3 = new Array();
        this.online = new Array();
        this.onlines = new Array();
        this.nacional = new Array();
        this.nacionais = new Array();
        this.cidade = new Array();
        //postkey : AngularFireList<string>;
        this.Upboolean = true;
        this.escolhaNoAuth = " Cidade ";
        this.ordenarpor = false;
        this.noAuth = false;
        this.y = new Array();
        this.z = new Array();
        this.w = new Array();
        this.aloha = '';
        this.number = 0;
        console.log(this.hjdia);
        this.backgroundMode.disable();
        // this.eventosSubscription = this.service.getEventos().subscribe(data => {
        //this.eventos = data;
        // for (const index in this.eventos) {
        //moment.locale('pt-BR')
        //this.m = moment(this.eventos[index].dia).format('ddd DD MMM ')
        //this.eventos[index].dia = this.m
        // }
        //})
    }
    nextcity() {
        this.slides.slideNext(800);
    }
    ionViewDidEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.SimpleLoad.preloadRoute('/pesquisar');
            yield this.SimpleLoad.preloadRoute('/perfil');
            console.log("did enter __________________");
        });
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.cidade3 = new Array(); //2° da cidade
            this.online = new Array(); //1° do online
            this.onlines = new Array(); //2° do online
            this.nacional = new Array(); //2° -> do nacional
            this.nacionais = new Array(); //1° -> dos nacionais
            this.cidade = new Array(); //1° -> cidade
            this.showeventos(); // eventos  msm com user deslogado 
            this.showDacidade();
            // ARRUMAR BUSCA NO NACIONAL (ESTA MOSTRANDO OS EVENTOS ONLINE TB)
        });
    }
    ss() {
        this.nextcity();
    }
    showeventos() {
        this.authh.onAuthStateChanged((user) => {
            if (user) {
                this.firestore.collection(`users`, ref => ref.where('iduser', '==', `${user.uid}`)).get().subscribe(using => {
                    using.forEach(io => {
                        const order = io.data();
                        const o = order.UP;
                        this.ordenarpor = o;
                        console.log(this.ordenarpor);
                        if (this.nacionais.length == 0) {
                            this.eventosNacional = this.listanacional(); //  ->  Nacional segment
                            this.nacionais = this.w;
                            console.log(this.nacionais, "--nacionais");
                            if (this.online.length == 0) {
                                this.eventosOnline = this.listaonline();
                                this.online = this.z; //  ->  online segment  
                            }
                        }
                    });
                });
            }
            else {
                if (this.nacionais.length == 0) {
                    this.eventosNacional = this.listanacional(); //  ->  Nacional segment
                    this.nacionais = this.w;
                }
                if (this.online.length == 0) {
                    this.eventosOnline = this.listaonline();
                    this.online = this.z; //  ->  online segment  
                }
            }
        });
    }
    showDacidade() {
        this.authh.onAuthStateChanged((user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                var uid = user.uid;
                var res = user;
                console.log("logado por aqui");
                this.getcidadade(uid).subscribe(cit => {
                    this.lugar = cit;
                    if (this.lugar) {
                        console.log(this.lugar);
                        this.cidadesDoUsuario = this.lugar;
                        this.cidadedoUSER(this.cidadesDoUsuario);
                    }
                    // -> Cidade do usuario e Cidade segment
                });
                if (res.emailVerified == false) {
                    console.log(res.emailVerified, "emailverified");
                    // this.criaruserpage.showalert("Ops você já criou uma conta ", "Mas não clickou no link que enviamos, verifique e volte ")
                    this.login.enviaremaildeverific();
                }
                // ...
            }
            else {
                this.AuthstateDeslogado();
            }
        });
    }
    AuthstateLogado(user) {
        const res = user;
        this.iduser = res;
        console.log("authstatelogado", res.uid);
    }
    AuthstateDeslogado() {
        this.getDataFromFire();
        this.noAuth = true;
    }
    getDataFromFire() {
        this.firebase.list('cidades').valueChanges().subscribe(data => {
            this.trataDados(data);
        });
    }
    noAuth_cidade(item) {
        this.abriu();
        this.mudouacidade(item);
        this.escolhaNoAuth = item;
    }
    trataDados(dados) {
        this.items = Object.keys(dados).map(i => dados[i]);
        this.todositems = this.items;
    }
    abriu() {
        this.abrir = !this.abrir;
    }
    getItems(ev) {
        // Reset items back to all of the items
        this.todositems = this.items;
        this.allitems = this.todositems;
        let val = ev.target.value;
        console.log(this.todositems);
        if (val && val.trim() != '') {
            this.todositems = lodash__WEBPACK_IMPORTED_MODULE_18___default.a.values(this.allitems);
            this.todositems = this.todositems.filter((_cidade) => {
                return (_cidade.lugar.toLocaleLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.todositems = this.allitems;
        }
    }
    perfil() {
        this.scrollTop();
        if (this.cidadesDoUsuario) {
            this.eventosdacidade.unsubscribe();
        }
        this.eventosNacional.unsubscribe();
        this.eventosOnline.unsubscribe();
        if (this.eventosdacidade2) {
            this.eventosdacidade2.unsubscribe();
        }
        if (this.eventosOnline2) {
            this.eventosOnline2.unsubscribe();
        }
        if (this.eventosNacional2) {
            this.eventosNacional2.unsubscribe();
        }
        this.route.navigate(['/perfil']);
    }
    scrollTop() {
        this.content.scrollToTop(300);
    }
    dadosperfil() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.authh.currentUser;
            if (res != null) {
                this.getcidadade(res.uid);
                return false;
            }
            else {
                return true;
            }
        });
    }
    getData(data) {
        var events = data.val();
        //  console.log(events)
    }
    showmodal(zeta) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _eventomodal_eventomodal_page__WEBPACK_IMPORTED_MODULE_9__["EventomodalPage"],
                componentProps: {
                    x: zeta
                }
            });
            modal.present();
            ;
            this.eventModal.criandomodal(zeta);
        });
    }
    mudouacidade(item) {
        this.cidade = [];
        this.y = [];
        this.cidade3 = [];
        console.log(this.cidade, "mudou a cidade", item);
        this.cidadedoUSER(item);
        //console.log(this.cidade ,"mudou a cidade", this.cidade3)
    }
    // função eventos de up por dia hoje  só no Oreon V2
    //  async presentActionSheet() {
    //  const actionSheet = await this.actionSheetCtrl.create({ // botão "Oreon"
    //  header: 'Filtro',
    // cssClass: 'my-custom-class',
    // buttons: [
    //  {
    //text: 'Criar Evento', // -> cirar evento 
    //icon: 'add',
    // handler: () => {
    //   this.route.navigate(['/add'])
    // }
    //}, {
    //text: 'Cancel',
    //icon: 'close',
    //role: 'cancel',
    // handler: () => {
    // console.log('Cancel clicked');
    // }
    //}]
    //});
    //await actionSheet.present();
    //}
    getcidadade(user) {
        console.log("getcidade");
        this.userDOC = this.firestore.collection(`users`, ref => ref.where('iduser', '==', `${user}`));
        return this.userDOC.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])(actions => {
            return actions.map(use => {
                const data = use.payload.doc.data().cidade;
                const order = use.payload.doc.data().UP;
                this.ordenarpor = order;
                if (this.ordenarpor == null) {
                    this.ordenarpor = false;
                }
                //this.eventosNacional = this.listanacional()
                // this.nacionais = this.w
                //this.eventosOnline = this.listaonline()
                //this.online = this.z
                //console.log(this.ordenarpor ," ----------------------")
                //console.log(this.nacionais.length == 0)
                return data;
            });
        }));
    }
    cidadedoUSER(dados) {
        this.cidade3 = [];
        this.lugarsin = dados;
        if (this.cidade.length == 0 && this.y.length == 0) {
            this.eventosdacidade = this.listadaciadade(dados); //((data) => { // evento service -> get cidade do usuario 
            this.cidade = this.y;
        }
    }
    listadaciadade(x) {
        if (this.ordenarpor == true) {
            this.eventocidade = this.firestore.collection('eventos', ref => ref.where('lugar', '==', `${x}`).where('passado', '==', false).orderBy('dia', 'asc').limit(3));
        }
        if (this.ordenarpor == false) {
            this.eventocidade = this.firestore.collection('eventos', ref => ref.where('lugar', '==', `${x}`).where('passado', '==', false).orderBy('UPnum', 'desc').limit(3));
        }
        return this.eventocidade.get().subscribe(coisas => {
            coisas.forEach(b => {
                const data = b.data();
                const id = b.id;
                if (data.fim < this.hjdia) {
                    //console.log(data.fim, " menor que ", this.hjdia) // checar se data do  evento esta no futuro
                    this.passadostate = this.firestore.doc(`eventos/${id}`);
                    this.passadostate.update({
                        passado: true
                    });
                }
                moment__WEBPACK_IMPORTED_MODULE_13__["locale"]('pt-BR');
                this.m = moment__WEBPACK_IMPORTED_MODULE_13__(data.dia).format('ddd DD MMM - HH:mm');
                data.dia = this.m;
                this.provCid1 = Object.assign({ id }, data);
                this.y.push(this.provCid1);
                this.nextQueryAfter = b;
            });
        });
    }
    listaonline() {
        if (this.ordenarpor == true) {
            this.eventoOnline = this.firestore.collection('eventos', ref => ref.where('online', '==', `online`).where('passado', '==', false).orderBy('dia', 'asc').limit(2));
        }
        if (this.ordenarpor == false) {
            this.eventoOnline = this.firestore.collection('eventos', ref => ref.where('online', '==', `online`).where('passado', '==', false).orderBy('UPnum', 'desc').limit(2));
        }
        return this.eventoOnline.get().subscribe(coisas => {
            coisas.forEach(o => {
                const data = o.data();
                const id = o.id;
                if (data.fim < this.hjdia) {
                    //console.log(data.fim, " menor que ", this.hjdia) // checar se data do  evento esta no futuro
                    this.passadostate = this.firestore.doc(`eventos/${id}`);
                    this.passadostate.update({
                        passado: true
                    });
                }
                moment__WEBPACK_IMPORTED_MODULE_13__["locale"]('pt-BR');
                this.m = moment__WEBPACK_IMPORTED_MODULE_13__(data.dia).format('ddd DD MMM - HH:mm');
                data.dia = this.m;
                this.provOnl1 = Object.assign({ id }, data);
                this.z.push(this.provOnl1);
                this.nextQueryOnline = o;
            });
        });
    }
    tamanho() {
        if (this.nacionais.length == 4) {
            console.log("TAMANHO LENGHT ->", this.nacionais.length, this.nacionais);
        }
        if (this.nacionais.length == 2) {
            console.log("esse", this.iduser);
            this.getcidadade(this.iduser);
        }
    }
    listanacional() {
        console.log(this.ordenarpor, "na nacional");
        if (this.ordenarpor == true) {
            //console.log("true")
            this.eventoNacional = this.firestore.collection('eventos', ref => ref.where('passado', '==', false).orderBy('dia', 'asc').limit(3));
        }
        if (this.ordenarpor == false) {
            //console.log("false")
            this.eventoNacional = this.firestore.collection('eventos', ref => ref.where('passado', '==', false).orderBy('UPnum', 'desc').limit(3));
        }
        return this.eventoNacional.get().subscribe(coisas => {
            coisas.forEach(n => {
                const data = n.data();
                const id = n.id;
                if (data.fim < this.hjdia) {
                    console.log(data.fim, " menor que ", this.hjdia); // checar se data do  evento esta no futuro
                    this.passadostate = this.firestore.doc(`eventos/${id}`);
                    this.passadostate.update({
                        passado: true
                    });
                }
                moment__WEBPACK_IMPORTED_MODULE_13__["locale"]('pt-BR');
                this.m = moment__WEBPACK_IMPORTED_MODULE_13__(data.dia).format('ddd DD MMM - HH:mm');
                data.dia = this.m;
                this.provNac1 = Object.assign({ id }, data);
                this.w.push(this.provNac1);
                this.nextQuerynacional = n;
            });
        });
    }
    loadcidade(event) {
        setTimeout(() => {
            this.num = 2;
            if (this.cidade.length >= 1) {
                this.eventosdacidade2 = this.listadaciadade2(this.cidadesDoUsuario);
            }
            event.target.complete();
            //console.log(this.cidade3, "cidade3")
        }, 2000);
    }
    loadnacional(event) {
        setTimeout(() => {
            //console.log("chamei ele veio");
            this.num = 2;
            if (this.nacionais.length >= 1) {
                this.eventosNacional2 = this.listanacional2();
            }
            event.target.complete();
        }, 2000);
    }
    loadOnline(event) {
        // scroll down (Online)
        setTimeout(() => {
            //console.log();
            this.num = 2;
            if (this.online.length >= 1) {
                this.eventosOnline2 = this.listaonline2();
            }
            event.target.complete();
        }, 2000);
    }
    listadaciadade2(x) {
        if (this.ordenarpor == true) {
            this.eventocidade = this.firestore.collection('eventos', ref => ref.where('lugar', '==', `${x}`).where('passado', '==', false).orderBy('dia', 'asc').startAfter(this.nextQueryAfter).limit(3));
        }
        if (this.ordenarpor == false) {
            this.eventocidade = this.firestore.collection('eventos', ref => ref.where('lugar', '==', `${x}`).where('passado', '==', false).orderBy('UPnum', 'desc').startAfter(this.nextQueryAfter).limit(3));
        }
        return this.eventocidade.get().subscribe(city => {
            city.forEach(a => {
                const data = a.data();
                const id = a.id;
                if (data.fim < this.hjdia) {
                    //console.log(data.fim, " menor que ", this.hjdia) // checar se data do  evento esta no futuro
                    this.passadostate = this.firestore.doc(`eventos/${id}`);
                    this.passadostate.update({
                        passado: true
                    });
                }
                moment__WEBPACK_IMPORTED_MODULE_13__["locale"]('pt-BR');
                this.m = moment__WEBPACK_IMPORTED_MODULE_13__(data.dia).format('ddd DD MMM - HH:mm'); // passa data para o Português
                data.dia = this.m;
                this.nextQueryAfter = a; // ultimo evento para o infinite scroll
                this.conjunto = Object.assign({ id }, data);
                this.cidade3.push(this.conjunto);
                const numeros = this.cidade3;
                // concertar o bug da repetição 
                const uniqueAddresses = Array.from(new Set(numeros.map((a) => a.id)))
                    .map(id => {
                    return numeros.find((a) => a.id === id);
                });
                //não repete eventos (bug)
                this.cidade3 = uniqueAddresses;
                return Object.assign({ id }, data);
            });
        });
    }
    listanacional2() {
        //console.log("nacional chamado")
        if (this.ordenarpor == true) {
            this.eventoNacional = this.firestore.collection('eventos', ref => ref.where('passado', '==', false).orderBy('dia', 'asc').startAfter(this.nextQuerynacional).limit(3));
        }
        if (this.ordenarpor == false) {
            this.eventoNacional = this.firestore.collection('eventos', ref => ref.where('passado', '==', false).orderBy('UPnum', 'desc').startAfter(this.nextQuerynacional).limit(3));
        }
        return this.eventoNacional.get().subscribe(ncaionais2 => {
            ncaionais2.forEach(a => {
                const data = a.data();
                const id = a.id;
                if (data.fim < this.hjdia) { // checar se data do  evento esta no futuro
                    this.passadostate = this.firestore.doc(`eventos/${id}`);
                    this.passadostate.update({
                        passado: true
                    });
                }
                moment__WEBPACK_IMPORTED_MODULE_13__["locale"]('pt-BR');
                this.m = moment__WEBPACK_IMPORTED_MODULE_13__(data.dia).format('ddd DD MMM - HH:mm'); // passa data para o Português
                data.dia = this.m;
                this.nextQuerynacional = a; // ultimo evento para o infinite scroll
                this.conjuntoNac = Object.assign({ id }, data);
                this.nacional.push(this.conjuntoNac);
                const numeross = this.nacional;
                // concertar o bug da repetição 
                const uniqueAddressesNac = Array.from(new Set(numeross.map((a) => a.id)))
                    .map(id => {
                    return numeross.find((a) => a.id === id);
                });
                //não repete eventos (bug)
                this.nacional = uniqueAddressesNac;
                //console.log(this.nacional)
                return Object.assign({ id }, data);
            });
        });
    }
    ajuda() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _tutorial_tutorial_page__WEBPACK_IMPORTED_MODULE_20__["TutorialPage"],
                componentProps: {}
            });
            modal.present();
            ;
        });
    }
    listaonline2() {
        if (this.ordenarpor == true) {
            this.eventoOnline = this.firestore.collection('eventos', ref => ref.where('online', '==', 'online').where('passado', '==', false).orderBy('dia', 'asc').startAfter(this.nextQueryOnline).limit(3));
        }
        if (this.ordenarpor == false) {
            this.eventoOnline = this.firestore.collection('eventos', ref => ref.where('online', '==', 'online').where('passado', '==', false).orderBy('UPnum', 'desc').startAfter(this.nextQueryOnline).limit(3));
        }
        return this.eventoOnline.get().subscribe(onlines => {
            onlines.forEach(t => {
                const data = t.data();
                const id = t.id;
                if (data.fim < this.hjdia) { // checar se data do  evento esta no futuro
                    this.passadostate = this.firestore.doc(`eventos/${id}`);
                    this.passadostate.update({
                        passado: true
                    });
                }
                moment__WEBPACK_IMPORTED_MODULE_13__["locale"]('pt-BR');
                this.m = moment__WEBPACK_IMPORTED_MODULE_13__(data.dia).format('ddd DD MMM - HH:mm'); // passa data para o Português
                data.dia = this.m;
                this.nextQueryOnline = t; // ultimo evento para o infinite scroll
                this.conjuntoOnl = Object.assign({ id }, data);
                this.onlines.push(this.conjuntoOnl);
                const nume = this.onlines;
                // concertar o bug da repetição 
                const uniqueAddressesOnl = Array.from(new Set(nume.map((ad) => ad.id)))
                    .map(id => {
                    return nume.find((yd) => yd.id === id);
                });
                //não repete eventos (bug)
                this.onlines = uniqueAddressesOnl;
                return Object.assign({ id }, data);
            });
        });
    }
    doRefresh(event) {
        console.log('Begin async operation');
        setTimeout(() => {
            console.log('Async operation has ended');
            event.target.complete();
        }, 2000);
    }
    //ORDENAR SEM TAR LOGADO (DIA/UP)
    //async optionsNoAuth(){
    // const alert = await this.alertCtrl.create({
    //  cssClass: 'my-custom-class',
    // header: 'Ajuste de Listas',
    // message: 'Deseja ordenar os eventos por',
    // buttons: [
    //  {
    //   text: 'Dia',
    //  role: 'cancel',
    //   cssClass: 'secondary',
    //  handler: () => {
    //    console.log("dia")
    //   this.ordenarpor = true
    //     this.ngOnInit()           
    //  }
    //     },
    //   {
    //   text: 'Up',
    // role: 'cancel',
    //   cssClass: 'secondary',
    //     handler: () => {
    //         this.ordenarpor = true
    //   console.log("up")
    //  this.ngOnInit()
    //  }
    // }, {
    //   text: 'Cancelar',
    //    handler: () => {
    // console.log('Confirm Okay');
    // }
    // }
    // ]
    // });
    //   await alert.present();
    // }
    //hoje(x) { // refeito precisa ser 
    //this.eventodehoje = this.firestore.collection('eventos', ref => ref
    // .where('lugar', '==', `${x}`).where('passado', '==', false)
    // .where('dia', '>=', `${this.hjdia}`)
    //.orderBy('dia')
    //.orderBy('up')
    //.startAfter(this.nextQueryAfter.payload.doc)
    //.limit(1))
    // return this.eventodehoje.snapshotChanges(['added']).pipe(
    //  map(actions => {
    //  return actions.map(a => {
    //  const data = a.payload.doc.data();
    //const id = a.payload.doc.id;
    // if (data.dia < this.hjdia) {
    //  this.passadostate = this.firestore.doc(`eventos/${id}`)
    // this.passadostate.update({
    //  passado: true
    //})
    //}
    // moment.locale('pt-BR')
    //  this.m = moment(data.dia).format('ddd DD MMM ')
    //    data.dia = this.m
    //      this.nextQueryAfter = a
    //this.conjunto = { id, ...data }
    // this.cidade3.push(this.conjunto)
    //   return { id, ...data };
    //   })
    //    })
    // )
    //  }
    ngOnDestroy() {
        console.log('_________________destruiu home ______________');
        // concertando bug troca de ordem
        this.cidade3 = new Array(); //2° da cidade
        this.online = new Array(); //1° do online
        this.onlines = new Array(); //2° do online
        this.nacional = new Array(); //2° -> do nacional
        this.nacionais = new Array(); //1° -> dos nacionais
        this.cidade = new Array(); //1° -> cidade
        this.y = new Array();
        this.z = new Array();
        this.w = new Array();
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"] },
    { type: _login_login_page__WEBPACK_IMPORTED_MODULE_15__["LoginPage"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_19__["UserService"] },
    { type: _eventomodal_eventomodal_page__WEBPACK_IMPORTED_MODULE_9__["EventomodalPage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"] },
    { type: _evento_service__WEBPACK_IMPORTED_MODULE_4__["EventoService"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"] },
    { type: _criar_user_criar_user_page__WEBPACK_IMPORTED_MODULE_16__["CriarUserPage"] },
    { type: _eventos_do_usuario_proximo_evento_page__WEBPACK_IMPORTED_MODULE_10__["ProximoEventoPage"] },
    { type: _tutorial_tutorial_page__WEBPACK_IMPORTED_MODULE_20__["TutorialPage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] },
    { type: _selective_loading_strategy_service__WEBPACK_IMPORTED_MODULE_14__["SimpleLoadingStrategy"] },
    { type: _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_17__["BackgroundMode"] }
];
HomePage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChildren"], args: ['SwipedTabsSlider',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonContent"], { static: true },] }],
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChildren"], args: ['slides',] }]
};
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"],
        _login_login_page__WEBPACK_IMPORTED_MODULE_15__["LoginPage"],
        _user_service__WEBPACK_IMPORTED_MODULE_19__["UserService"],
        _eventomodal_eventomodal_page__WEBPACK_IMPORTED_MODULE_9__["EventomodalPage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"],
        _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"],
        _evento_service__WEBPACK_IMPORTED_MODULE_4__["EventoService"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"],
        _criar_user_criar_user_page__WEBPACK_IMPORTED_MODULE_16__["CriarUserPage"],
        _eventos_do_usuario_proximo_evento_page__WEBPACK_IMPORTED_MODULE_10__["ProximoEventoPage"],
        _tutorial_tutorial_page__WEBPACK_IMPORTED_MODULE_20__["TutorialPage"],
        _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"],
        _selective_loading_strategy_service__WEBPACK_IMPORTED_MODULE_14__["SimpleLoadingStrategy"],
        _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_17__["BackgroundMode"]])
], HomePage);



/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map