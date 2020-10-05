(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Tab 1\n    </ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content fullscreen=\"true\">\n    <div class=\"ion-text-center headerlogin\">\n      <div class=\"overlay\"></div>\n      <ion-img src=\"/assets/img/tmcblogo.png\"></ion-img>\n    </div>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-text color=\"primary\" class=\"ion-text-center\">\n           <h1>Log In</h1>\n          </ion-text>\n          <form (ngSubmit)=\"logForm()\" #loginForm=\"ngForm\">\n            <ion-item>\n              <ion-label position=\"floating\">Email</ion-label>\n              <ion-input type=\"email\" email [(ngModel)]=\"loginfrm.username\" name=\"username\"  required=\"true\"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"floating\">Password</ion-label>\n              <ion-input type=\"password\" [(ngModel)]=\"loginfrm.password\" name=\"password\" required=\"true\"></ion-input>\n            </ion-item>\n            <ion-button type=\"submit\" expand=\"full\" shape=\"round\" [disabled]=\"!loginForm.form.valid\">Log In</ion-button>\n          </form>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-text color=\"medium\" class=\"ion-text-center\" (click)=\"goToforgotPassword()\">\n            <p>Forgot password?</p>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".headerlogin {\n  background-image: url(/assets/img/loginheadr.jpeg);\n  padding: 125px 30px;\n  border-radius: 0px 0px 60px 60px;\n  background-position: bottom;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n}\n.headerlogin .overlay {\n  background-color: rgba(41, 67, 128, 0.5);\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  border-radius: 0px 0px 60px 60px;\n}\n.headerlogin ion-img {\n  z-index: 2;\n  position: relative;\n}\nh1 {\n  font-size: 30px;\n  font-weight: 900;\n}\nion-button {\n  margin: 20px 0px 0px;\n}\nion-text p {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0RBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUFJO0VBQ0ksd0NBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsZ0NBQUE7QUFFUjtBQUFJO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0FBRVI7QUFDQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUVKO0FBQUE7RUFDSSxvQkFBQTtBQUdKO0FBQUk7RUFDSSxlQUFBO0FBR1IiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVybG9naW4ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZy9sb2dpbmhlYWRyLmpwZWcpO1xuICAgIHBhZGRpbmc6IDEyNXB4IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA2MHB4IDYwcHg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLm92ZXJsYXkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQxLCA2NywgMTI4LCAwLjUpO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgei1pbmRleDogMTsgICAgXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNjBweCA2MHB4O1xuICAgIH1cbiAgICBpb24taW1nIHtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cbn1cbmgxIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cbmlvbi1idXR0b24ge1xuICAgIG1hcmdpbjogMjBweCAwcHggMHB4O1xufVxuaW9uLXRleHQge1xuICAgIHAge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_user_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user-service.service */ "./src/app/services/user-service.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






let LoginPage = class LoginPage {
    constructor(userService, storeService, router, alertController, loadingController) {
        this.userService = userService;
        this.storeService = storeService;
        this.router = router;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.loginfrm = { username: '', password: '' };
        this.isLoading = false;
    }
    ngOnInit() {
        this.AutopresentLoading();
    }
    logForm() {
        this.lodingPresent();
        this.userService.loginUser(this.loginfrm.username, this.loginfrm.password).subscribe(res => {
            this.loadingDismiss();
            if (res.result.status == '1') {
                if (this.storeService.storeUserid(res.result.userid)) {
                    this.router.navigate(['verify']);
                }
                else {
                    this.showAlert('Error', '', 'Oops! something went wrong, please try again.');
                }
            }
            else {
                this.showAlert('Error', '', res.result.msg);
            }
        });
    }
    showAlert(title, subtitle = '', msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: title,
                subHeader: subtitle,
                message: msg,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    lodingPresent() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isLoading = true;
            return yield this.loadingController.create({
                message: 'Please wait...',
            }).then(a => {
                a.present().then(() => {
                    console.log('presented');
                    if (!this.isLoading) {
                        a.dismiss().then(() => console.log('abort presenting'));
                    }
                });
            });
        });
    }
    loadingDismiss() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isLoading = false;
            return yield this.loadingController.dismiss().then(() => console.log('dismissed'));
        });
    }
    AutopresentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                duration: 500
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            console.log('Loading dismissed!');
        });
    }
    goToforgotPassword() {
        //this.router.navigate(['profile/tabs/tab1']);
    }
};
LoginPage.ctorParameters = () => [
    { type: _services_user_service_service__WEBPACK_IMPORTED_MODULE_3__["UserServiceService"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")).default]
    })
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map