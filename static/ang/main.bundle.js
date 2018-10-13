webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authentication_authentication_component__ = __webpack_require__("./src/app/authentication/authentication.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__authentication_service__ = __webpack_require__("./src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_service__ = __webpack_require__("./src/app/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__authentication_authentication_component__["a" /* AuthenticationComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_4__authentication_authentication_component__["a" /* AuthenticationComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_8__dashboard_service__["a" /* DashboardService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
            }),
            withCredentials: true
        };
    }
    AuthenticationService.prototype.registerUser = function (json) {
        console.log(json);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/api/v1/users/', json, this.httpOptions);
    };
    AuthenticationService.prototype.loginUser = function (json) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/api/login', json, this.httpOptions);
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/authentication/authentication.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-body {\n  background: -webkit-gradient(linear, left top, right top, from(#006dff), to(#810dd8));\n  background: linear-gradient(to right, #006dff, #810dd8);\n  height: 100vh;\n  position: fixed;\n  width: 100vw;\n  overflow-y: scroll;\n}\n\ninput, select, textarea{\n  color: white;\n}\n\n.intro {\n  margin-top: 50px;\n  width: 100%;\n  border-top: 1px solid black;\n  padding-right: 20px;\n}\n\n.content {\n  padding-left: 1em;\n  display: inline-block;\n}\n\n.form-group {\n  margin: 1em 0;\n}\n\n.form-group label {\n  display: inline-block;\n}\n\n.form-group input {\n  width: 100%;\n}\n\n.main-card {\n  padding-top: 30px;\n}\n\n.password-strength {\n  opacity: .8;\n  width:150px;\n  height:0;\n  -webkit-transition: height .7s;\n  transition: height .7s;\n  background: black;\n  -webkit-transform: rotatex(180deg) translate3d(0, -600px,0);\n          transform: rotatex(180deg) translate3d(0, -600px,0);/* the Y-Value shall be higher than the height on hover*/\n  -webkit-transform-origin: top;\n          transform-origin: top;\n  bottom: 0;\n}\n\n.password-strength:hover {\n  height: 600px;\n}\n\n.sign-up-card {\n  height: 600px;\n}\n\n.here {\n  /*background-image: url(\"https://image.ibb.co/g3F8fp/White_logo.png\");*/\n  /*background-size: 100%;*/\n  /*background-repeat: no-repeat;*/\n  width: 350px;\n  -webkit-transition: width .7s;\n  transition: width .7s;\n}\n\n.ab-logo {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n/*.here:hover {*/\n\n/*width: 900px;*/\n\n/**/\n\n/*}*/\n\n.progress {\n  position: absolute;\n  background-color: orange;\n  margin: 0;\n}\n\n.password-status {\n  z-index: 999;\n  position : absolute;\n  height : 60%;\n  bottom: 5%;\n  padding-left: 130px;\n}\n\n.info-submit {\n  vertical-align: bottom;\n  padding-bottom: 10px;\n}\n\n/* Hide HTML5 Up and Down arrows. */\n\ninput[type=\"number\"]::-webkit-outer-spin-button, input[type=\"number\"]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type=\"number\"] {\n  -moz-appearance: textfield;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/authentication/authentication.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-body\">\n<div class=\"container main-card\">\n  <div class=\"col l6 m12 s12\">\n    <div class=\"row\">\n      <div class=\"col s12 blog-content black-text\" style=\"display: block;\">\n        <div class=\"white-text flow-text center-align\">\n          <div *ngIf=\"signup\">\n            Sign Up\n          </div>\n          <div *ngIf=\"!signup\">\n            Login\n          </div>\n        </div>\n        <div class=\"card horizontal z-depth-4 sign-up-card white-text\" id=\"clone\">\n\n          <!-- Left side of the card -->\n          <div class=\"here grey darken-4\" id=\"login\">\n            <div class=\"progress\" *ngIf=\"loginLoad\">\n              <div class=\"indeterminate\"></div>\n            </div>\n            <img *ngIf=\"!signup\" class=\"center-align ab-logo\" src=\"\"\n                 height=\"180vh\">\n            <img *ngIf=\"signup\" style=\"position: absolute\" class=\"center-align ab-logo\"\n                 src=\"\" height=\"180vh\">\n\n            <div *ngIf=\"!signup\">\n              <form [formGroup]=\"loginJson\">\n                <div class=\"input-field col l8 m12 s12 offset-l2\">\n                  <input id=\"phone_number\" type=\"text\" class=\"validate\" data-length=\"50\"\n                         autocomplete=\"off\" [formControlName]=\"'phone_number'\">\n                  <label for=\"phone_number\">Phone Number</label>\n                </div>\n                <div class=\"input-field col l8 m12 s12 offset-l2\">\n                  <input id=\"login-password\" type=\"password\" class=\"validate\" data-length=\"50\"\n                         autocomplete=\"off\" [formControlName]=\"'password'\">\n                  <label for=\"login-password\">Password</label>\n                </div>\n                <div class=\"input-field col l8 m12 s12 offset-l2\">\n                  <button class=\"btn blue submit\" (click)=\"checkLoginStatus()\">Submit</button>\n                </div>\n                <div class=\"col l8 m12 s12 offset-l2\">\n                  <br>\n                  <br>\n                  <a href=\"javascript: void(0);\" (click)=\"changePage()\">Sign up ?</a>\n                </div>\n              </form>\n            </div>\n\n            <div *ngIf=\"signup\">\n              <div class=\"password-status\" *ngIf=\"strength >= 1\">\n                <i class=\"material-icons large\">fingerprint</i>\n                <p class=\"password-status-text center\" style=\"font-size: 0.8rem\">{{ passwordStatus }}</p>\n              </div>\n              <div class=\"card-image black-text password-strength\"\n                   id=\"password-indicator\" style=\"width: 350px;max-width: 100%;\">\n              </div>\n            </div>\n          </div>\n          <!-- Right side of the card -->\n          <div *ngIf=\"!signup\" class=\"card-stacked\" style=\"background: #2c2c2c;\">\n\n          </div>\n          <div *ngIf=\"signup\" class=\"card-stacked\" style=\"background: #2c2c2c;\">\n            <div class=\"progress\" *ngIf=\"registerLoad\">\n              <div class=\"indeterminate\"></div>\n            </div>\n            <div class=\"row\" style=\"margin-left: 0; margin-right: 0;padding: 50px;\">\n              <div class=\"content\">\n                <form [formGroup]=\"inputJson\" id=\"signup-form\">\n                  <!--<p>JSON Output (Need to remove)</p>-->\n                  <!--<div>-->\n                  <!--<pre><code>{{ inputJson?.value | json }}</code></pre>-->\n                  <!--</div>-->\n                  <div class=\"input-field col l8 m12 s12\">\n                    <input id=\"phonenumber\" type=\"text\" class=\"validate\" data-length=\"10\"\n                           autocomplete=\"off\" [formControlName]=\"'phone_number'\">\n                    <label for=\"phonenumber\">Phone Number</label>\n                  </div>\n                  <div class=\"input-field col l8 m12 s12\">\n                    <input id=\"firstname\" type=\"text\" class=\"validate\" data-length=\"50\"\n                           autocomplete=\"off\" [formControlName]=\"'first_name'\">\n                    <label for=\"firstname\">First Name</label>\n                  </div>\n                  <div class=\"input-field col l8 m12 s12\">\n                    <input id=\"lastname\" type=\"text\" class=\"validate\" data-length=\"50\"\n                           autocomplete=\"off\" [formControlName]=\"'last_name'\">\n                    <label for=\"lastname\">Last Name</label>\n                  </div>\n                  <div class=\"col l8 m12 s12\">\n                    <input class=\"with-gap\" type=\"radio\" value=\"male\" id=\"male\" name=\"gender\" formControlName=\"gender\"/>\n                    <label for=\"male\">Male</label>\n                    <input class=\"with-gap\" type=\"radio\" value=\"female\" id=\"female\" name=\"gender\"\n                           formControlName=\"gender\"/>\n                    <label for=\"female\">Female</label>\n                  </div>\n                  <div class=\"input-field col l8 m12 s12\">\n                    <input id=\"password\" type=\"password\" class=\"validate\" data-length=\"20\"\n                           autocomplete=\"off\" (keyup)=\"checkStrength($event.target.value)\"\n                           [formControlName]=\"'password'\">\n                    <label for=\"password\">Password</label>\n                    <p class=\"password-status-text hide-on-large-only\" style=\"font-size: 0.8rem\"></p>\n                    <div class=\"progress hide-on-large-only\" style=\"width: 100px;\">\n                      <div class=\"determinate small-password\" id=\"small-password\" style=\"width: 0\"></div>\n                    </div>\n                    <br>\n                    <br>\n                  </div>\n                  <div class=\"col s12\">\n                    <button class=\"btn blue submit\" [disabled]=\"!phone_number || !first_name || !last_name || !gender || !password\" (click)=\"checkRegisterStatus()\">\n                      Submit\n                    </button>\n                  </div>\n                </form>\n                <div class=\"col s12 m12 l12\">\n                  <br>\n                  <a href=\"javascript: void(0);\" (click)=\"changePage()\">Login ?</a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/authentication/authentication.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service__ = __webpack_require__("./src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthenticationComponent = /** @class */ (function () {
    function AuthenticationComponent(formBuilder, http, authenticationService, router) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.http = http;
        this.authenticationService = authenticationService;
        this.router = router;
        this.strength = 0;
        this.signup = true;
        this.phone_number = false;
        this.first_name = false;
        this.last_name = false;
        this.gender = false;
        this.password = false;
        this.registerLoad = false;
        this.loginLoad = false;
        // Set up initial values
        this.inputJson = this.formBuilder.group({
            phone_number: [''],
            first_name: [''],
            last_name: [''],
            gender: [''],
            password: [''],
        });
        this.loginJson = this.formBuilder.group({
            phone_number: [''],
            password: [''],
        });
        // On value change validate
        this.inputJson.valueChanges.subscribe(function (val) {
            _this.validateForm();
        });
    }
    AuthenticationComponent.prototype.ngOnInit = function () {
        // Make sure it is mobile compatible
        if (window.screen.width < 1200) {
            console.log('yes');
            document.getElementById('login').style.width = 0 + 'px';
        }
    };
    // Verify all input fields
    AuthenticationComponent.prototype.verifyPhoneNumber = function (phone_number) {
        return phone_number.length >= 8 && phone_number.length < 11;
    };
    AuthenticationComponent.prototype.verifyPassword = function (password) {
        return password.length > 6 && password.length <= 20;
    };
    AuthenticationComponent.prototype.verifyFirstname = function (name) {
        return name.length > 3 && name.length <= 50;
    };
    AuthenticationComponent.prototype.verifyLastname = function (name) {
        return name.length > 3 && name.length <= 50;
    };
    AuthenticationComponent.prototype.verifyGender = function (gender) {
        return gender.length > 1;
    };
    AuthenticationComponent.prototype.verifyDob = function (dob) {
        return dob.length > 1;
    };
    // Check password strength based of regex
    AuthenticationComponent.prototype.checkStrength = function (password) {
        console.log(password);
        var passwordStatus = document.getElementsByClassName('password-status-text')[0];
        this.strength = 0;
        if (password.length > 7)
            this.strength += 1;
        if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/))
            this.strength += 1;
        if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/))
            this.strength += 1;
        if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/))
            this.strength += 1;
        if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/))
            this.strength += 1;
        if (this.strength < 2) {
            this.passwordStatus = 'It\'s kind of Weak';
        }
        else if (this.strength === 2) {
            this.passwordStatus = 'Much better';
        }
        else if (this.strength === 3) {
            this.passwordStatus = 'This will work';
        }
        else if (this.strength === 4) {
            this.passwordStatus = 'Secured';
        }
        else {
            this.passwordStatus = 'Unbeatable';
        }
        document.getElementById('password-indicator').style.height = this.strength * 120 + 'px';
        document.getElementById('small-password').style.width = 20 * this.strength + '%';
    };
    // Client side form validation
    AuthenticationComponent.prototype.validateForm = function () {
        console.log(this.inputJson.getRawValue());
        // User name is there or not
        this.phone_number = this.verifyPhoneNumber(this.inputJson.get('phone_number').value);
        this.first_name = this.verifyFirstname(this.inputJson.get('first_name').value);
        this.last_name = this.verifyLastname(this.inputJson.get('last_name').value);
        this.password = this.verifyPassword(this.inputJson.get('password').value);
        this.gender = this.verifyGender(this.inputJson.get('gender').value);
        console.log(this.phone_number, this.first_name, this.password, this.gender, this.last_name);
    };
    // Change page from signup to log in and likewise
    AuthenticationComponent.prototype.changePage = function () {
        console.log('asd =', window.screen.width);
        if (window.screen.width > 1200) {
            if (this.signup) {
                document.getElementById('login').style.width = 700 + 'px';
            }
            else {
                document.getElementById('login').style.width = 350 + 'px';
            }
        }
        else {
            console.log('this is it');
            if (this.signup) {
                document.getElementById('login').style.width = 700 + 'px';
            }
            else {
                document.getElementById('login').style.width = 0 + 'px';
            }
        }
        this.signup = !this.signup;
    };
    // Login user and redirect him to dashboard by saving token and id in localstorage
    AuthenticationComponent.prototype.checkLoginStatus = function () {
        var _this = this;
        this.loginLoad = true;
        this.authenticationService.loginUser(this.loginJson.getRawValue()).subscribe(function (response) {
            if (response.id) {
                localStorage.setItem('id', response.id);
                localStorage.setItem('token', response.token);
                _this.router.navigate(['dashboard']);
            }
            else {
                Materialize.toast('Wrong Password', 4000);
            }
        });
    };
    // Register given user and ask him to log in
    AuthenticationComponent.prototype.checkRegisterStatus = function () {
        var _this = this;
        this.registerLoad = true;
        var data = this.authenticationService.registerUser(this.inputJson.getRawValue()).subscribe(function (response) {
            console.log(response);
            if (response.id) {
                _this.registerLoad = false;
                Materialize.toast('Successfully Registed', 4000);
                Materialize.toast('Now please log in', 4000);
                _this.changePage();
            }
        });
    };
    AuthenticationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-authentication',
            template: __webpack_require__("./src/app/authentication/authentication.component.html"),
            styles: [__webpack_require__("./src/app/authentication/authentication.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], AuthenticationComponent);
    return AuthenticationComponent;
}());



/***/ }),

/***/ "./src/app/dashboard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardService = /** @class */ (function () {
    function DashboardService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
            }),
            withCredentials: true
        };
    }
    DashboardService.prototype.getPatientList = function (data) {
        if (data) {
            return this.http.get(data, this.httpOptions);
        }
        else {
            return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/api/v1/patient?limit=8', this.httpOptions);
        }
    };
    DashboardService.prototype.savePatientDetails = function (json) {
        console.log(json);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/api/v1/patient/', json, this.httpOptions);
    };
    DashboardService.prototype.updatePatientDetails = function (json) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/api/patient-details-update', json, this.httpOptions);
    };
    DashboardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DashboardService);
    return DashboardService;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-body {\n  background: -webkit-gradient(linear, left top, right top, from(#006dff), to(#810dd8));\n  background: linear-gradient(to right, #006dff, #810dd8);\n  height: 100vh;\n  position: fixed;\n  width: 100vw;\n  overflow-y: scroll;\n}\n\n.dashboard-left {\n  margin-bottom: 0;\n  overflow-y: scroll;\n}\n\n.patient-list {\n  /*background-image: url(\"https://image.ibb.co/g3F8fp/White_logo.png\");*/\n  /*background-size: 100%;*/\n  /*background-repeat: no-repeat;*/\n  width: 350px;\n  -webkit-transition: width .7s;\n  transition: width .7s;\n}\n\n.patient-list-container {\n  padding: 0;\n}\n\n.dashboard-options {\n  padding: 10px;\n  background-color: #ebebeb;\n}\n\n.patient-card {\n  margin-top: 5vh;\n  height: 90vh;\n}\n\n.patient-info-card {\n  padding: 15px;\n  border-bottom: 1px solid #e6e6e6;\n  width: 50%;\n}\n\n.search-patient {\n  margin-top: 0.5rem;\n}\n\n.search-patient-background {\n  background-color: #f9f9f9;\n}\n\n.patient-search-icon {\n  font-size: 1.7rem;\n  line-height: 1.9;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  vertical-align: middle;\n}\n\n.patient-text {\n  font-size: 0.7rem;\n  color: black;\n}\n\n.patient-date {\n  font-size: 0.7rem;\n  color: #afafaf;\n}\n\n.patient-name {\n  font-size: 1rem;\n  color: black;\n  font-style: bold;\n}\n\n.patient-info-card:hover {\n  background-color: #e8e8e8 !important;\n}\n\n.add-details {\n  position: absolute;\n  height: 90vh;\n  width: 0;\n  z-index: 1;\n  -webkit-transition: width .7s;\n  transition: width .7s;\n}\n\n.center-loader {\n  top: 100%;\n  left: 40%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-body\">\n  <div class=\"row\">\n    <div class=\"col s12 m12 l10 offset-l1\">\n      <div class=\"card horizontal z-depth-4 white-text patient-card\">\n\n        <!-- Left side of the card -->\n\n        <!-- Add details card which by default is hidden -->\n        <div class=\"patient-list dashboard-left add-details white black-text\" id=\"add-details\">\n          <div class=\"col s12 l12 m12\" style=\"padding-top: 40px;background: #2c2c2c;\">\n            <a href=\"javascript: void(0);\" (click)=\"addDetails()\">\n              <i class=\"small material-icons left\" style=\"color: white;padding: 10px;\">arrow_back</i>\n            </a>\n            <span class=\"flow-text white-text\" style=\"padding-top: 7px;position:absolute;\">Add Details</span>\n          </div>\n\n          <div class=\"col s12 m12 l12\">\n            <form [formGroup]=\"patientDetailsJson\">\n              <div class=\"input-field col s12\">\n                <input id=\"patient_name\" type=\"text\" class=\"validate\" data-length=\"50\"\n                       autocomplete=\"off\" [formControlName]=\"'patient_name'\">\n                <label for=\"patient_name\">Patient Name</label>\n              </div>\n              <div class=\"col s12\">\n                <input class=\"with-gap\" type=\"radio\" value=\"male\" id=\"male\" name=\"gender\" formControlName=\"gender\"/>\n                <label for=\"male\">Male</label>\n                <input class=\"with-gap\" type=\"radio\" value=\"female\" id=\"female\" name=\"gender\"\n                       formControlName=\"gender\"/>\n                <label for=\"female\">Female</label>\n              </div>\n              <div class=\"input-field col s12\">\n                <input id=\"email\" type=\"text\" class=\"validate\" data-length=\"50\"\n                       autocomplete=\"off\" [formControlName]=\"'email'\">\n                <label for=\"email\">Email</label>\n              </div>\n              <div class=\"input-field col s12\">\n                <input id=\"phone_number\" type=\"text\" class=\"validate\" data-length=\"50\"\n                       autocomplete=\"off\" [formControlName]=\"'phone_number'\">\n                <label for=\"phone_number\">Phone Number</label>\n              </div>\n\n              <button class=\"btn flat\" (click)=\"savePatientDetails()\">Save</button>\n            </form>\n          </div>\n        </div>\n\n        <!-- End of add details form -->\n\n        <!-- Left visible card -->\n        <div class=\"patient-list dashboard-left\" id=\"patient-list-ajax\" (scroll)=\"getScrollData()\">\n          <div class=\"row\" style=\"margin-bottom: 0\">\n            <div class=\"col s12 m12 l12 dashboard-options\">\n              <a href=\"javascript: void(0);\" (click)=\"addDetails()\">\n                <i class=\"small material-icons right\" style=\"color: black\">add</i>\n              </a>\n              <a href=\"javascript: void(0);\" (click)=\"refreshDetails()\">\n                <i class=\"small material-icons right\" style=\"color: black\">refresh</i>\n              </a>\n            </div>\n            <div class=\"col s12 m12 l12 search-patient-background black-text\">\n              <div class=\"input-field search-patient\">\n                <i class=\"patient-search-icon material-icons prefix\">search</i>\n                <input placeholder=\"Search\" id=\"first_name\" type=\"text\" class=\"validate\">\n              </div>\n            </div>\n\n            <!-- Patient cards -->\n\n            <!-- Show loader when loading -->\n            <div *ngIf=\"patientDetails.length == 0\">\n              <div class=\"preloader-wrapper small active center-loader\">\n                <div class=\"spinner-layer spinner-green-only\">\n                  <div class=\"circle-clipper left\">\n                    <div class=\"circle\"></div>\n                  </div>\n                  <div class=\"gap-patch\">\n                    <div class=\"circle\"></div>\n                  </div>\n                  <div class=\"circle-clipper right\">\n                    <div class=\"circle\"></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <!-- Patient details show -->\n            <div *ngFor=\"let patientDetail of patientDetails\">\n              <a href=\"javascript: void(0);\" (click)=\"showDetails(patientDetail.id)\">\n                <div class=\"col s12 m12 l12 white patient-info-card\">\n                  <div class=\"patient-name\">{{ patientDetail.patient_name }}</div>\n                  <span class=\"patient-text\">#{{ patientDetail.id }} | {{ patientDetail.phone_number }}</span>\n                  <span class=\"right patient-date\">{{ beautifyDate(patientDetail.date_created)}}</span>\n                </div>\n              </a>\n            </div>\n          </div>\n        </div>\n\n        <!-- Right side of the card -->\n        <div class=\"card-content white-text\">\n\n          <!-- Show main content if clicked -->\n          <div *ngIf=\"showMain\">\n            <a href=\"javascript: void(0);\" (click)=\"closeMain()\" style=\"\">\n              <i class=\"small material-icons right\" style=\"color: black\">close</i>\n            </a>\n            <form [formGroup]=\"patientEditDetailsJson\">\n              <span class=\"flow-text black-text\">ID: #{{ patientEditDetailsJson.controls['id'].value}}</span>\n              <div class=\"input-field col s12 black-text\">\n                <input id=\"patient_name_edit\" type=\"text\" class=\"validate\" data-length=\"50\"\n                       autocomplete=\"off\" [formControlName]=\"'patient_name'\">\n              </div>\n              <div class=\"col s12\">\n                <span class=\"black-text\">Gender: {{ patientEditDetailsJson.controls['gender'].value}}</span><br>\n                <input class=\"with-gap black-text\" type=\"radio\" value=\"male\" id=\"male_edit\" name=\"gender\"\n                       formControlName=\"gender\"/>\n                <label for=\"male_edit\">Male</label>\n                <input class=\"with-gap black-text\" type=\"radio\" value=\"female\" id=\"female_edit\" name=\"gender\"\n                       formControlName=\"gender\"/>\n                <label for=\"female_edit\">Female</label>\n              </div>\n              <div class=\"input-field col s12 black-text\">\n                <input id=\"email_edit\" type=\"text\" class=\"validate\" data-length=\"50\"\n                       autocomplete=\"off\" [formControlName]=\"'email'\">\n              </div>\n              <div class=\"input-field col s12 black-text\">\n                <input id=\"phone_number_edit\" type=\"text\" class=\"validate\" data-length=\"50\"\n                       autocomplete=\"off\" [formControlName]=\"'phone_number'\">\n              </div>\n              <div class=\"col s12\">\n                <button class=\"btn flat\" (click)=\"updatePatientDetails()\">Update</button>\n              </div>\n            </form>\n          </div>\n\n          <!-- End of main content -->\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_service__ = __webpack_require__("./src/app/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(formBuilder, http, dashboardService, router) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.dashboardService = dashboardService;
        this.router = router;
        this.next = false;
        this.scrollRequest = false;
        this.patientDetails = [];
        this.addInfo = false;
        this.showMain = false;
        this.complete = false;
        this.patientDetailsJson = this.formBuilder.group({
            phone_number: [''],
            patient_name: [''],
            email: [''],
            gender: [''],
        });
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Move scroll at the top where we are showing patient details
        document.getElementById('patient-list-ajax').scrollTo(0, 0);
        // Get initial patient list
        this.dashboardService.getPatientList(false).subscribe(function (response) {
            console.log(response);
            if (response.next) {
                _this.next = response.next;
                _this.patientDetails = response.results;
                console.log(_this.patientDetails);
            }
            else {
                _this.next = false;
            }
        });
    };
    // Track scroll data and then load more data if we are at the end
    DashboardComponent.prototype.getScrollData = function () {
        var _this = this;
        var a = document.getElementById('patient-list-ajax').scrollTop;
        var b = document.getElementById('patient-list-ajax').offsetHeight;
        var c = document.getElementById('patient-list-ajax').scrollHeight;
        console.log(a + b + 20, c);
        if ((a + b + 20 > c) && !this.scrollRequest && !this.complete) {
            console.log('requesting');
            this.scrollRequest = true;
            this.dashboardService.getPatientList(this.next).subscribe(function (response) {
                console.log(response);
                if (response.next) {
                    _this.next = response.next;
                    _this.patientDetails = _this.patientDetails.concat(response.results);
                    console.log(_this.patientDetails);
                }
                else {
                    _this.next = false;
                    _this.complete = true;
                }
                _this.scrollRequest = false;
            });
        }
    };
    // Add patient details
    DashboardComponent.prototype.addDetails = function () {
        this.addInfo = !this.addInfo;
        if (this.addInfo) {
            this.patientDetailsJson = this.formBuilder.group({
                phone_number: [''],
                patient_name: [''],
                email: [''],
                gender: [''],
            });
            document.getElementById('add-details').style.width = 350 + 'px';
        }
        else {
            document.getElementById('add-details').style.width = 0 + 'px';
        }
    };
    // Refresh patient list and show latest data
    DashboardComponent.prototype.refreshDetails = function () {
        var _this = this;
        this.complete = false;
        this.patientDetails = [];
        this.dashboardService.getPatientList(false).subscribe(function (response) {
            console.log(response);
            if (response.next) {
                _this.next = response.next;
                _this.patientDetails = response.results;
                console.log(_this.patientDetails);
            }
            else {
                _this.next = false;
            }
        });
    };
    // On click show main card (right one) and update form group
    DashboardComponent.prototype.showDetails = function (id) {
        this.showMain = true;
        for (var i = 0; i < this.patientDetails.length; i++) {
            if (this.patientDetails[i].id == id) {
                this.patientEditDetailsJson = this.formBuilder.group({
                    id: [this.patientDetails[i].id],
                    phone_number: [this.patientDetails[i].phone_number],
                    patient_name: [this.patientDetails[i].patient_name],
                    email: [this.patientDetails[i].email],
                    gender: [this.patientDetails[i].gender],
                });
                console.log(this.patientEditDetailsJson);
            }
        }
    };
    // Update patient data based on form control value
    DashboardComponent.prototype.updatePatientDetails = function () {
        var _this = this;
        this.dashboardService.updatePatientDetails(this.patientEditDetailsJson.getRawValue()).subscribe(function (response) {
            _this.patientEditDetailsJson = _this.formBuilder.group({
                id: [''],
                phone_number: [''],
                patient_name: [''],
                email: [''],
                gender: [''],
            });
            _this.showMain = false;
            Materialize.toast('Details Updated', 4000);
            _this.refreshDetails();
        });
    };
    // Close main card and clear data
    DashboardComponent.prototype.closeMain = function () {
        this.showMain = false;
        this.patientEditDetailsJson = this.formBuilder.group({
            id: [''],
            phone_number: [''],
            patient_name: [''],
            email: [''],
            gender: [''],
        });
    };
    // Save patient details
    DashboardComponent.prototype.savePatientDetails = function () {
        var _this = this;
        this.dashboardService.savePatientDetails(this.patientDetailsJson.getRawValue()).subscribe(function (response) {
            document.getElementById('add-details').style.width = 0 + 'px';
            _this.addInfo = !_this.addInfo;
            console.log(response);
            _this.patientDetailsJson = _this.formBuilder.group({
                phone_number: [''],
                patient_name: [''],
                email: [''],
                gender: [''],
            });
            Materialize.toast('Details Saved !', 4000);
        });
    };
    // Show specified date
    DashboardComponent.prototype.beautifyDate = function (date) {
        return date.split('T')[0];
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__dashboard_service__["a" /* DashboardService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiUrl: 'http://hospi.herokuapp.com'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map