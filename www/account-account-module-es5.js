(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-account-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAccountAccountPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-button size=\"large\" defaultHref=\"\" fill=\"clear\"><ion-icon color=\"light\" name=\"chevron-back-circle-outline\"></ion-icon></ion-button>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content color=\"primary\" fullscreen=\"true\" >\n  <ion-toolbar color=\"primary\" class=\"paddingtop\">\n    <ion-button  slot=\"start\" size=\"large\" (click)=\"BacktoHome()\"  fill=\"clear\"><ion-icon color=\"light\" name=\"chevron-back-circle-outline\"></ion-icon></ion-button>\n    <ion-button  slot=\"end\" size=\"large\" (click)=\"logout()\"  fill=\"clear\"><ion-icon color=\"light\" name=\"exit-outline\"></ion-icon></ion-button>\n  </ion-toolbar>\n  <ion-card class=\"card\" color=\"primary\" fullscreen=\"true\">\n    <ion-card-content>\n      <div class=\"namebox\">\n        <ion-text>\n          <h1>{{userDetails.name}}</h1>\n        </ion-text>\n      </div>\n      <ion-grid class=\"listdetails\">\n        <ion-row>\n          <ion-col size=\"6\" class=\"ion-text-left\">\n            <ion-text>\n            <h5>Investment type:</h5>\n            </ion-text>\n          </ion-col>\n          <ion-col size=\"6\" class=\"ion-text-left\">\n            <ion-text><h5><strong>{{userDetails.accounttype}}</strong></h5></ion-text>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\" class=\"ion-text-left\">\n            <ion-text>\n            <h5>Total Investment:</h5>\n            </ion-text>\n          </ion-col>\n          <ion-col size=\"6\" class=\"ion-text-left\">\n            <ion-text><h5><strong>{{userDetails.totalcontribution}}</strong></h5></ion-text>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\" class=\"ion-text-left\">\n            <ion-text>\n              <h5>Investor Manager:</h5>\n            </ion-text>\n          </ion-col>\n          <ion-col size=\"6\" class=\"ion-text-left\">\n            <ion-text><h5><strong>{{userDetails.managername}}</strong></h5></ion-text>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      \n    </ion-card-content>\n  </ion-card>\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n  <ion-toolbar color=\"tertiary\">\n    <ion-button slot=\"start\" size=\"large\" expand=\"full\" fill=\"clear\" color=\"light\"><ion-icon color=\"light\" name=\"settings-outline\"></ion-icon> <p class=\"settings\">Settings</p></ion-button>\n  </ion-toolbar>\n</ion-footer>";
      /***/
    },

    /***/
    "./src/app/account/account-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/account/account-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: AccountPageRoutingModule */

    /***/
    function srcAppAccountAccountRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountPageRoutingModule", function () {
        return AccountPageRoutingModule;
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


      var _account_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./account.page */
      "./src/app/account/account.page.ts");

      var routes = [{
        path: '',
        component: _account_page__WEBPACK_IMPORTED_MODULE_3__["AccountPage"]
      }];

      var AccountPageRoutingModule = function AccountPageRoutingModule() {
        _classCallCheck(this, AccountPageRoutingModule);
      };

      AccountPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AccountPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/account/account.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/account/account.module.ts ***!
      \*******************************************/

    /*! exports provided: AccountPageModule */

    /***/
    function srcAppAccountAccountModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountPageModule", function () {
        return AccountPageModule;
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


      var _account_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./account-routing.module */
      "./src/app/account/account-routing.module.ts");
      /* harmony import */


      var _account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./account.page */
      "./src/app/account/account.page.ts");

      var AccountPageModule = function AccountPageModule() {
        _classCallCheck(this, AccountPageModule);
      };

      AccountPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _account_routing_module__WEBPACK_IMPORTED_MODULE_5__["AccountPageRoutingModule"]],
        declarations: [_account_page__WEBPACK_IMPORTED_MODULE_6__["AccountPage"]]
      })], AccountPageModule);
      /***/
    },

    /***/
    "./src/app/account/account.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/account/account.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppAccountAccountPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".paddingtop {\n  padding-top: 30px;\n}\n\n.settings {\n  font-size: 17px;\n  padding-left: 15px;\n}\n\n.card {\n  box-shadow: none !important;\n}\n\n.namebox {\n  background-color: #646299;\n  border-left: 6px solid #ffffff;\n  padding: 5px 5px 5px 15px;\n  margin-bottom: 30px;\n}\n\nion-grid {\n  --ion-grid-padding:0px;\n}\n\nion-col {\n  --ion-grid-column-padding:0;\n}\n\n.listdetails h5 {\n  font-size: 16px;\n  padding-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9hY2NvdW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFBQTtFQUNJLDJCQUFBO0FBR0o7O0FBREE7RUFDSSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQUlKOztBQUZBO0VBQ0ksc0JBQUE7QUFLSjs7QUFIQTtFQUNJLDJCQUFBO0FBTUo7O0FBSEk7RUFDSSxlQUFBO0VBQ0Esb0JBQUE7QUFNUiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvYWNjb3VudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFkZGluZ3RvcCB7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG59XG4uc2V0dGluZ3Mge1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG4uY2FyZCB7XG4gICAgYm94LXNoYWRvdzpub25lICFpbXBvcnRhbnRcbn1cbi5uYW1lYm94IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ2Mjk5O1xuICAgIGJvcmRlci1sZWZ0OiA2cHggc29saWQgI2ZmZmZmZjtcbiAgICBwYWRkaW5nOiA1cHggNXB4IDVweCAxNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5pb24tZ3JpZCB7XG4gICAgLS1pb24tZ3JpZC1wYWRkaW5nOjBweDtcbn1cbmlvbi1jb2x7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzowO1xufVxuLmxpc3RkZXRhaWxzIHtcbiAgICBoNSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/account/account.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/account/account.page.ts ***!
      \*****************************************/

    /*! exports provided: AccountPage */

    /***/
    function srcAppAccountAccountPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountPage", function () {
        return AccountPage;
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

      var AccountPage = /*#__PURE__*/function () {
        function AccountPage(userService, storeService, router, alertController, loadingController) {
          var _this = this;

          _classCallCheck(this, AccountPage);

          this.userService = userService;
          this.storeService = storeService;
          this.router = router;
          this.alertController = alertController;
          this.loadingController = loadingController;
          this.isLoading = false;
          this.userDetails = {};
          this.lodingPresent();
          this.storeService.getVerify().then(function () {
            if (_this.storeService.verify > 0) {
              _this.storeService.getUserid().then(function () {
                if (_this.storeService.uId > 0) {
                  _this.userService.getAlluserDetails(_this.storeService.uId).subscribe(function (res) {
                    _this.loadingDismiss();

                    _this.userDetails = res.result;
                  });
                } else {
                  _this.loadingDismiss();

                  _this.router.navigate(['']);
                }
              });
            } else {
              _this.loadingDismiss();

              _this.router.navigate(['']);
            }
          });
        }

        _createClass(AccountPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "BacktoHome",
          value: function BacktoHome() {
            this.router.navigate(['profile/tabs/tab1']);
          }
        }, {
          key: "logout",
          value: function logout() {
            var _this2 = this;

            this.storeService.logOut().then(function () {
              if (_this2.storeService.logout == 1) {
                _this2.router.navigate(['']);
              }
            });
          }
        }, {
          key: "lodingPresent",
          value: function lodingPresent() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this3 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.isLoading = true;
                      _context.next = 3;
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
                      return _context.abrupt("return", _context.sent);

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "loadingDismiss",
          value: function loadingDismiss() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.isLoading = false;
                      _context2.next = 3;
                      return this.loadingController.dismiss().then(function () {
                        return console.log('dismissed');
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
        }]);

        return AccountPage;
      }();

      AccountPage.ctorParameters = function () {
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

      AccountPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-account',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./account.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./account.page.scss */
        "./src/app/account/account.page.scss"))["default"]]
      })], AccountPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=account-account-module-es5.js.map