(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["verify-verify-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/verify/verify.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/verify/verify.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar color=\"transparent\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content fullscreen=\"true\">\n  <div class=\"ion-text-center headerlogin\">\n    <ion-toolbar color=\"transparent\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"\"></ion-back-button>\n      </ion-buttons>\n    </ion-toolbar>\n    <div class=\"overlay\"></div>\n    <ion-img src=\"/assets/img/tmcblogo.png\"></ion-img>\n  </div>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-text color=\"primary\" class=\"ion-text-center\">\n         <h1>Security Questions</h1>\n        </ion-text>\n        <form (ngSubmit)=\"verifysubmitForm()\" #verifyForm=\"ngForm\">\n          <ion-item>\n            \n            <ion-input type=\"text\" [(ngModel)]=\"verifyfrm.ans1\" name=\"ans1\" placeholder=\"{{Q1}}\" required=\"true\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type=\"text\" [(ngModel)]=\"verifyfrm.ans2\" name=\"ans1\" placeholder=\"{{Q2}}\" required=\"true\"></ion-input>\n          </ion-item>\n          <ion-button color=\"medium\" type=\"submit\" expand=\"full\" shape=\"round\" [disabled]=\"!verifyForm.form.valid\">Submit</ion-button>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/verify/verify-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/verify/verify-routing.module.ts ***!
  \*************************************************/
/*! exports provided: VerifyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyPageRoutingModule", function() { return VerifyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _verify_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./verify.page */ "./src/app/verify/verify.page.ts");




const routes = [
    {
        path: '',
        component: _verify_page__WEBPACK_IMPORTED_MODULE_3__["VerifyPage"]
    }
];
let VerifyPageRoutingModule = class VerifyPageRoutingModule {
};
VerifyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VerifyPageRoutingModule);



/***/ }),

/***/ "./src/app/verify/verify.module.ts":
/*!*****************************************!*\
  !*** ./src/app/verify/verify.module.ts ***!
  \*****************************************/
/*! exports provided: VerifyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyPageModule", function() { return VerifyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _verify_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./verify-routing.module */ "./src/app/verify/verify-routing.module.ts");
/* harmony import */ var _verify_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./verify.page */ "./src/app/verify/verify.page.ts");







let VerifyPageModule = class VerifyPageModule {
};
VerifyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _verify_routing_module__WEBPACK_IMPORTED_MODULE_5__["VerifyPageRoutingModule"]
        ],
        declarations: [_verify_page__WEBPACK_IMPORTED_MODULE_6__["VerifyPage"]]
    })
], VerifyPageModule);



/***/ }),

/***/ "./src/app/verify/verify.page.scss":
/*!*****************************************!*\
  !*** ./src/app/verify/verify.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".toolbar-background {\n  border: 0px;\n}\n\n.headerlogin {\n  background-image: url(/assets/img/loginheadr.jpeg);\n  padding: 125px 30px;\n  border-radius: 0px 0px 60px 60px;\n  background-position: bottom;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n}\n\n.headerlogin .overlay {\n  background-color: rgba(41, 67, 128, 0.5);\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  border-radius: 0px 0px 60px 60px;\n}\n\n.headerlogin ion-img {\n  z-index: 2;\n  position: relative;\n}\n\n.headerlogin ion-toolbar {\n  position: absolute;\n  top: 0px;\n  z-index: 3;\n  color: #ffffff;\n  left: 0;\n  right: 0;\n}\n\nh1 {\n  font-size: 30px;\n  font-weight: 900;\n}\n\nion-button {\n  margin: 20px 0px 0px;\n}\n\nion-text p {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVyaWZ5L3ZlcmlmeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrREFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQUVKOztBQURJO0VBQ0ksd0NBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsZ0NBQUE7QUFHUjs7QUFESTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtBQUdSOztBQURJO0VBQ0csa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQUdQOztBQUFBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBR0o7O0FBREE7RUFDSSxvQkFBQTtBQUlKOztBQURJO0VBQ0ksZUFBQTtBQUlSIiwiZmlsZSI6InNyYy9hcHAvdmVyaWZ5L3ZlcmlmeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbGJhci1iYWNrZ3JvdW5kIHtcbiAgICBib3JkZXI6IDBweDtcbn1cbi5oZWFkZXJsb2dpbiB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL2xvZ2luaGVhZHIuanBlZyk7XG4gICAgcGFkZGluZzogMTI1cHggMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDYwcHggNjBweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAub3ZlcmxheSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDEsIDY3LCAxMjgsIDAuNSk7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB6LWluZGV4OiAxOyAgICBcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA2MHB4IDYwcHg7XG4gICAgfVxuICAgIGlvbi1pbWcge1xuICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICAgIGlvbi10b29sYmFyIHtcbiAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgdG9wOiAwcHg7XG4gICAgICAgei1pbmRleDogMztcbiAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICBsZWZ0OiAwO1xuICAgICAgIHJpZ2h0OiAwO1xuICAgIH1cbn1cbmgxIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cbmlvbi1idXR0b24ge1xuICAgIG1hcmdpbjogMjBweCAwcHggMHB4O1xufVxuaW9uLXRleHQge1xuICAgIHAge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/verify/verify.page.ts":
/*!***************************************!*\
  !*** ./src/app/verify/verify.page.ts ***!
  \***************************************/
/*! exports provided: VerifyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyPage", function() { return VerifyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_user_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user-service.service */ "./src/app/services/user-service.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






let VerifyPage = class VerifyPage {
    constructor(userService, storeService, router, alertController, loadingController) {
        this.userService = userService;
        this.storeService = storeService;
        this.router = router;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.verifyfrm = { ans1: '', ans2: '' };
        this.isLoading = false;
        this.userService.getAllquestions().subscribe(res => {
            this.Q1 = res.result[0].question;
            this.Q2 = res.result[1].question;
            this.Qid1 = res.result[0].rowid;
            this.Qid2 = res.result[1].rowid;
        });
    }
    ngOnInit() {
    }
    verifysubmitForm() {
        this.lodingPresent();
        const ans1 = this.verifyfrm.ans1;
        const ans2 = this.verifyfrm.ans2;
        this.storeService.getUserid().then(() => {
            if (this.storeService.uId > 0) {
                this.userService.verifyAccount(this.storeService.uId, ans1, ans2, this.Qid1, this.Qid2).subscribe(res => {
                    this.loadingDismiss();
                    if (res.result.status == '1') {
                        if (this.storeService.storeVerify()) {
                            this.router.navigate(['profile/tabs/tab1']);
                        }
                    }
                    else {
                        this.showAlert('Error', '', res.result.msg);
                    }
                });
            }
            else {
                this.loadingDismiss();
                this.router.navigate(['']);
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
};
VerifyPage.ctorParameters = () => [
    { type: _services_user_service_service__WEBPACK_IMPORTED_MODULE_3__["UserServiceService"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
VerifyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-verify',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./verify.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/verify/verify.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./verify.page.scss */ "./src/app/verify/verify.page.scss")).default]
    })
], VerifyPage);



/***/ })

}]);
//# sourceMappingURL=verify-verify-module-es2015.js.map