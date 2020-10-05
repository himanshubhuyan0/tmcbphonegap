(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTab1Tab1PageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Tab 1\n    </ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content [fullscreen]=\"true\">\n  <div class=\"homebox ion-text-center\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-card class=\"card\" color=\"transperant\">\n            <ion-text color=\"light\"><h5><strong>{{userDetails.accounttype}}</strong></h5></ion-text>\n            <div class=\"totalpricebox\">\n              <ion-text color=\"light\">\n                <h2>{{userDetails.totalcontribution}}</h2>\n              </ion-text>\n            </div>\n            <ion-text color=\"light\"><h5><strong>TOTAL CONTRIBUTION</strong></h5></ion-text>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-card>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-text color=\"medium\"><h5>Dividend</h5></ion-text>\n            <div class=\"totalpricebox2\">\n              <ion-text color=\"medium\">\n                <h2><strong>{{userDetails.dividend}}</strong></h2>\n              </ion-text>\n            </div>\n            <ion-text color=\"medium\"><h5>TMCB Current Year Projection</h5></ion-text>\n            <ion-text color=\"medium\"><h1><strong>+ {{userDetails.percentage}}%</strong></h1></ion-text>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n  </div>\n  <ion-card class=\"ion-text-center\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-text color=\"medium\"><h5>Projection</h5></ion-text>\n          <ion-list lines=\"full\" class=\"no-last-border\">\n            <ion-item>\n              <ion-text color=\"medium\" slot=\"start\"><h5>Q1 </h5></ion-text>\n              <ion-text color=\"medium\" slot=\"end\"><h5> {{userDetails.q1.percen}}</h5></ion-text>\n            </ion-item>\n            <ion-item>\n              <ion-text color=\"medium\" slot=\"start\"><h5>Q2</h5></ion-text>\n              <ion-text color=\"medium\" slot=\"end\"><h5>  {{userDetails.q2.percen}}</h5></ion-text>\n            </ion-item>\n            <ion-item>\n              <ion-text color=\"medium\" slot=\"start\"><h5> Q3</h5></ion-text>\n              <ion-text color=\"medium\" slot=\"end\"><h5> {{userDetails.q2.percen}}</h5></ion-text>\n            </ion-item>\n            <ion-item>\n              <ion-text color=\"medium\" slot=\"start\"><h5>Q4 </h5></ion-text>\n              <ion-text color=\"medium\" slot=\"end\"><h5> {{userDetails.q4.percen}}</h5></ion-text>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/tab1/tab1-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/tab1/tab1-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: Tab1PageRoutingModule */

    /***/
    function srcAppTab1Tab1RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function () {
        return Tab1PageRoutingModule;
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


      var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tab1.page */
      "./src/app/tab1/tab1.page.ts");

      var routes = [{
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"]
      }];

      var Tab1PageRoutingModule = function Tab1PageRoutingModule() {
        _classCallCheck(this, Tab1PageRoutingModule);
      };

      Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Tab1PageRoutingModule);
      /***/
    },

    /***/
    "./src/app/tab1/tab1.module.ts":
    /*!*************************************!*\
      !*** ./src/app/tab1/tab1.module.ts ***!
      \*************************************/

    /*! exports provided: Tab1PageModule */

    /***/
    function srcAppTab1Tab1ModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function () {
        return Tab1PageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tab1.page */
      "./src/app/tab1/tab1.page.ts");
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      "./src/app/explore-container/explore-container.module.ts");
      /* harmony import */


      var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./tab1-routing.module */
      "./src/app/tab1/tab1-routing.module.ts");

      var Tab1PageModule = function Tab1PageModule() {
        _classCallCheck(this, Tab1PageModule);
      };

      Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"], _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"]],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]]
      })], Tab1PageModule);
      /***/
    },

    /***/
    "./src/app/tab1/tab1.page.scss":
    /*!*************************************!*\
      !*** ./src/app/tab1/tab1.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppTab1Tab1PageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".homebox {\n  background-image: url(/assets/img/homebg.png);\n  padding-top: 30px;\n  margin-bottom: 35px;\n  background-size: 100% 77%;\n  background-repeat: no-repeat;\n}\n.homebox strong {\n  text-transform: uppercase;\n}\n.homebox .totalpricebox {\n  border-bottom: 2px solid #fff;\n}\n.homebox .totalpricebox2 {\n  border-bottom: 2px solid #707070;\n}\n.homebox h2 {\n  margin-top: 0px;\n}\n.homebox h5 {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.card {\n  box-shadow: none !important;\n  padding-left: 20px;\n  padding-right: 20px;\n}\nion-list.no-last-border :last-child {\n  --border-style: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZDQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7QUFDSjtBQUFJO0VBQ0kseUJBQUE7QUFFUjtBQUFJO0VBQ0ksNkJBQUE7QUFFUjtBQUFJO0VBQ0ksZ0NBQUE7QUFFUjtBQUFJO0VBQ0ksZUFBQTtBQUVSO0FBQUk7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FBRVI7QUFDQTtFQUNJLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUVKO0FBQ0k7RUFDRSwrQkFBQTtBQUVOIiwiZmlsZSI6InNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lYm94IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWcvaG9tZWJnLnBuZyk7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzVweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgNzclO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgc3Ryb25nIHtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB9XG4gICAgLnRvdGFscHJpY2Vib3gge1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZmZjtcbiAgICB9XG4gICAgLnRvdGFscHJpY2Vib3gyIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM3MDcwNzA7XG4gICAgfVxuICAgIGgyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIH1cbiAgICBoNSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxufVxuLmNhcmQge1xuICAgIGJveC1zaGFkb3c6bm9uZSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuaW9uLWxpc3Qubm8tbGFzdC1ib3JkZXIge1xuICAgIDpsYXN0LWNoaWxkIHtcbiAgICAgIC0tYm9yZGVyLXN0eWxlOiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/tab1/tab1.page.ts":
    /*!***********************************!*\
      !*** ./src/app/tab1/tab1.page.ts ***!
      \***********************************/

    /*! exports provided: Tab1Page */

    /***/
    function srcAppTab1Tab1PageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab1Page", function () {
        return Tab1Page;
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

      var Tab1Page = /*#__PURE__*/function () {
        function Tab1Page(userService, storeService, router, alertController, loadingController) {
          var _this = this;

          _classCallCheck(this, Tab1Page);

          this.userService = userService;
          this.storeService = storeService;
          this.router = router;
          this.alertController = alertController;
          this.loadingController = loadingController;
          this.isLoading = false;
          this.userDetails = {
            q1: {},
            q2: {},
            q3: {},
            q4: {}
          };
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

        _createClass(Tab1Page, [{
          key: "lodingPresent",
          value: function lodingPresent() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

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

                          if (!_this2.isLoading) {
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

        return Tab1Page;
      }();

      Tab1Page.ctorParameters = function () {
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

      Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./tab1.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./tab1.page.scss */
        "./src/app/tab1/tab1.page.scss"))["default"]]
      })], Tab1Page);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab1-tab1-module-es5.js.map