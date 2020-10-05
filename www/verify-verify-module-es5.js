(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["verify-verify-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/verify/verify.page.html":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/verify/verify.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppVerifyVerifyPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header>\n  <ion-toolbar color=\"transparent\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content fullscreen=\"true\">\n  <div class=\"ion-text-center headerlogin\">\n    <ion-toolbar color=\"transparent\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"\"></ion-back-button>\n      </ion-buttons>\n    </ion-toolbar>\n    <div class=\"overlay\"></div>\n    <ion-img src=\"/assets/img/tmcblogo.png\"></ion-img>\n  </div>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-text color=\"primary\" class=\"ion-text-center\">\n         <h1>Security Questions</h1>\n        </ion-text>\n        <form (ngSubmit)=\"verifysubmitForm()\" #verifyForm=\"ngForm\">\n          <ion-item>\n            \n            <ion-input type=\"text\" [(ngModel)]=\"verifyfrm.ans1\" name=\"ans1\" placeholder=\"{{Q1}}\" required=\"true\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type=\"text\" [(ngModel)]=\"verifyfrm.ans2\" name=\"ans1\" placeholder=\"{{Q2}}\" required=\"true\"></ion-input>\n          </ion-item>\n          <ion-button color=\"medium\" type=\"submit\" expand=\"full\" shape=\"round\" [disabled]=\"!verifyForm.form.valid\">Submit</ion-button>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/verify/verify-routing.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/verify/verify-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: VerifyPageRoutingModule */

    /***/
    function srcAppVerifyVerifyRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerifyPageRoutingModule", function () {
        return VerifyPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _verify_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./verify.page */
      "./src/app/verify/verify.page.ts");

      var routes = [{
        path: '',
        component: _verify_page__WEBPACK_IMPORTED_MODULE_3__["VerifyPage"]
      }];

      var VerifyPageRoutingModule = function VerifyPageRoutingModule() {
        _classCallCheck(this, VerifyPageRoutingModule);
      };

      VerifyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], VerifyPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/verify/verify.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/verify/verify.module.ts ***!
      \*****************************************/

    /*! exports provided: VerifyPageModule */

    /***/
    function srcAppVerifyVerifyModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerifyPageModule", function () {
        return VerifyPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _verify_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./verify-routing.module */
      "./src/app/verify/verify-routing.module.ts");
      /* harmony import */


      var _verify_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./verify.page */
      "./src/app/verify/verify.page.ts");

      var VerifyPageModule = function VerifyPageModule() {
        _classCallCheck(this, VerifyPageModule);
      };

      VerifyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _verify_routing_module__WEBPACK_IMPORTED_MODULE_5__["VerifyPageRoutingModule"]],
        declarations: [_verify_page__WEBPACK_IMPORTED_MODULE_6__["VerifyPage"]]
      })], VerifyPageModule);
      /***/
    },

    /***/
    "./src/app/verify/verify.page.scss":
    /*!*****************************************!*\
      !*** ./src/app/verify/verify.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function srcAppVerifyVerifyPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".toolbar-background {\n  border: 0px;\n}\n\n.headerlogin {\n  background-image: url(/assets/img/loginheadr.jpeg);\n  padding: 125px 30px;\n  border-radius: 0px 0px 60px 60px;\n  background-position: bottom;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n}\n\n.headerlogin .overlay {\n  background-color: rgba(41, 67, 128, 0.5);\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  border-radius: 0px 0px 60px 60px;\n}\n\n.headerlogin ion-img {\n  z-index: 2;\n  position: relative;\n}\n\n.headerlogin ion-toolbar {\n  position: absolute;\n  top: 0px;\n  z-index: 3;\n  color: #ffffff;\n  left: 0;\n  right: 0;\n}\n\nh1 {\n  font-size: 30px;\n  font-weight: 900;\n}\n\nion-button {\n  margin: 20px 0px 0px;\n}\n\nion-text p {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVyaWZ5L3ZlcmlmeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrREFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQUVKOztBQURJO0VBQ0ksd0NBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsZ0NBQUE7QUFHUjs7QUFESTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtBQUdSOztBQURJO0VBQ0csa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQUdQOztBQUFBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBR0o7O0FBREE7RUFDSSxvQkFBQTtBQUlKOztBQURJO0VBQ0ksZUFBQTtBQUlSIiwiZmlsZSI6InNyYy9hcHAvdmVyaWZ5L3ZlcmlmeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbGJhci1iYWNrZ3JvdW5kIHtcbiAgICBib3JkZXI6IDBweDtcbn1cbi5oZWFkZXJsb2dpbiB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL2xvZ2luaGVhZHIuanBlZyk7XG4gICAgcGFkZGluZzogMTI1cHggMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDYwcHggNjBweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAub3ZlcmxheSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDEsIDY3LCAxMjgsIDAuNSk7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB6LWluZGV4OiAxOyAgICBcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA2MHB4IDYwcHg7XG4gICAgfVxuICAgIGlvbi1pbWcge1xuICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICAgIGlvbi10b29sYmFyIHtcbiAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgdG9wOiAwcHg7XG4gICAgICAgei1pbmRleDogMztcbiAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICBsZWZ0OiAwO1xuICAgICAgIHJpZ2h0OiAwO1xuICAgIH1cbn1cbmgxIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cbmlvbi1idXR0b24ge1xuICAgIG1hcmdpbjogMjBweCAwcHggMHB4O1xufVxuaW9uLXRleHQge1xuICAgIHAge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/verify/verify.page.ts":
    /*!***************************************!*\
      !*** ./src/app/verify/verify.page.ts ***!
      \***************************************/

    /*! exports provided: VerifyPage */

    /***/
    function srcAppVerifyVerifyPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerifyPage", function () {
        return VerifyPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _services_user_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/user-service.service */
      "./src/app/services/user-service.service.ts");
      /* harmony import */


      var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/storage.service */
      "./src/app/services/storage.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var VerifyPage = /*#__PURE__*/function () {
        function VerifyPage(userService, storeService, router, alertController, loadingController) {
          var _this = this;

          _classCallCheck(this, VerifyPage);

          this.userService = userService;
          this.storeService = storeService;
          this.router = router;
          this.alertController = alertController;
          this.loadingController = loadingController;
          this.verifyfrm = {
            ans1: '',
            ans2: ''
          };
          this.isLoading = false;
          this.userService.getAllquestions().subscribe(function (res) {
            _this.Q1 = res.result[0].question;
            _this.Q2 = res.result[1].question;
            _this.Qid1 = res.result[0].rowid;
            _this.Qid2 = res.result[1].rowid;
          });
        }

        _createClass(VerifyPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "verifysubmitForm",
          value: function verifysubmitForm() {
            var _this2 = this;

            this.lodingPresent();
            var ans1 = this.verifyfrm.ans1;
            var ans2 = this.verifyfrm.ans2;
            this.storeService.getUserid().then(function () {
              if (_this2.storeService.uId > 0) {
                _this2.userService.verifyAccount(_this2.storeService.uId, ans1, ans2, _this2.Qid1, _this2.Qid2).subscribe(function (res) {
                  _this2.loadingDismiss();

                  if (res.result.status == '1') {
                    if (_this2.storeService.storeVerify()) {
                      _this2.router.navigate(['profile/tabs/tab1']);
                    }
                  } else {
                    _this2.showAlert('Error', '', res.result.msg);
                  }
                });
              } else {
                _this2.router.navigate(['']);
              }
            });
          }
        }, {
          key: "showAlert",
          value: function showAlert(title) {
            var subtitle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
            var msg = arguments.length > 2 ? arguments[2] : undefined;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        header: title,
                        subHeader: subtitle,
                        message: msg,
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "lodingPresent",
          value: function lodingPresent() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this3 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.isLoading = true;
                      _context2.next = 3;
                      return this.loadingController.create({
                        message: 'Please wait...'
                      }).then(function (a) {
                        a.present().then(function () {
                          console.log('presented');

                          if (!_this3.isLoading) {
                            a.dismiss().then(function () {
                              return console.log('abort presenting');
                            });
                          }
                        });
                      });

                    case 3:
                      return _context2.abrupt("return", _context2.sent);

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "loadingDismiss",
          value: function loadingDismiss() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.isLoading = false;
                      _context3.next = 3;
                      return this.loadingController.dismiss().then(function () {
                        return console.log('dismissed');
                      });

                    case 3:
                      return _context3.abrupt("return", _context3.sent);

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return VerifyPage;
      }();

      VerifyPage.ctorParameters = function () {
        return [{
          type: _services_user_service_service__WEBPACK_IMPORTED_MODULE_3__["UserServiceService"]
        }, {
          type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }];
      };

      VerifyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-verify',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./verify.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/verify/verify.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./verify.page.scss */
        "./src/app/verify/verify.page.scss"))["default"]]
      })], VerifyPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=verify-verify-module-es5.js.map