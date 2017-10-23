webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n\n<!-- <nav class=\"navbar navbar-toggleable-md navbar-light bg-faded\">\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <a class=\"navbar-brand\" href=\"#\">{{title}}</a>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink='' routerLinkActive='active'>Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink='/players/' routerLinkActive='active'>Players</a>\n      </li>\n      <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink='/fixtures/' routerLinkActive='active'>Players</a>\n        </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search team or player...\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </div>\n</nav> -->\n\n\n\n\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <a class=\"navbar-brand\" routerLink='' routerLinkActive='active' href=\"\">FPL Transfer Suggester</a>\n    <div class=\"btn-group\" dropdown>\n        <button style=\"cursor:pointer;\" dropdownToggle type=\"button\" class=\"btn dropdown-toggle\">\n          Quick Links <span class=\"caret\"></span>\n        </button>\n        <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n          <li role=\"menuitem\"><a class=\"nav-link\" routerLink='' routerLinkActive='active'>Home</a></li> \n          <li class=\"divider dropdown-divider\"></li>           \n          <li role=\"menuitem\"><a class=\"nav-link\" routerLink='/players/' routerLinkActive='active'>Players</a></li>\n          <li class=\"divider dropdown-divider\"></li>\n          <li role=\"menuitem\"><a class=\"nav-link\" routerLink='/fixtures/' routerLinkActive='active'>Fixtures</a></li>\n        </ul>\n      </div>\n    <!-- <div dropdown>\n\n    \n    <button dropdownToggle class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n    <div  class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n      <ul class=\"navbar-nav\">\n          \n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Features</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Pricing</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link dropdown-toggle\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            Dropdown link\n          </a>\n          <div *dropdownMenu class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\n            <a class=\"dropdown-item\" href=\"#\">Action</a>\n            <a class=\"dropdown-item\" href=\"#\">Another action</a>\n            <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div> -->\n  </nav>\n\n\n\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n  \n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_player_service__ = __webpack_require__("../../../../../src/app/service/player.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(playerService) {
        this.playerService = playerService;
        this.title = 'FPL Transfer Suggester';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_player_service__["a" /* PlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_player_service__["a" /* PlayerService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_player_service__ = __webpack_require__("../../../../../src/app/service/player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__player_detail_player_detail_component__ = __webpack_require__("../../../../../src/app/player-detail/player-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pipe_filter_pipe__ = __webpack_require__("../../../../../src/app/pipe/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__fixture_fixture_component__ = __webpack_require__("../../../../../src/app/fixture/fixture.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__player_replacement_player_replacement_component__ = __webpack_require__("../../../../../src/app/player-replacement/player-replacement.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap_tooltip__ = __webpack_require__("../../../../ngx-bootstrap/tooltip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pipe_safe_html_pipe__ = __webpack_require__("../../../../../src/app/pipe/safe-html.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ngx_bootstrap_pagination__ = __webpack_require__("../../../../ngx-bootstrap/pagination/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ngx_bootstrap_typeahead__ = __webpack_require__("../../../../ngx-bootstrap/typeahead/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__player_list_player_list_component__ = __webpack_require__("../../../../../src/app/player-list/player-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// My imports














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__player_detail_player_detail_component__["a" /* PlayerDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_10__pipe_filter_pipe__["a" /* FilterPipe */],
            __WEBPACK_IMPORTED_MODULE_11__fixture_fixture_component__["a" /* FixtureComponent */],
            __WEBPACK_IMPORTED_MODULE_13__player_replacement_player_replacement_component__["a" /* PlayerReplacementComponent */],
            __WEBPACK_IMPORTED_MODULE_15__pipe_safe_html_pipe__["a" /* SafeHtmlPipe */],
            __WEBPACK_IMPORTED_MODULE_18__player_list_player_list_component__["a" /* PlayerListComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_7__app_routing__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_12_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap_tooltip__["a" /* TooltipModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_16_ngx_bootstrap_pagination__["a" /* PaginationModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_17_ngx_bootstrap_typeahead__["a" /* TypeaheadModule */].forRoot()
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__service_player_service__["a" /* PlayerService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__player_detail_player_detail_component__ = __webpack_require__("../../../../../src/app/player-detail/player-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fixture_fixture_component__ = __webpack_require__("../../../../../src/app/fixture/fixture.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__player_replacement_player_replacement_component__ = __webpack_require__("../../../../../src/app/player-replacement/player-replacement.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__player_list_player_list_component__ = __webpack_require__("../../../../../src/app/player-list/player-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'players',
        component: __WEBPACK_IMPORTED_MODULE_6__player_list_player_list_component__["a" /* PlayerListComponent */]
    },
    {
        path: 'fixtures',
        component: __WEBPACK_IMPORTED_MODULE_4__fixture_fixture_component__["a" /* FixtureComponent */]
    },
    {
        path: 'player/:id',
        component: __WEBPACK_IMPORTED_MODULE_5__player_replacement_player_replacement_component__["a" /* PlayerReplacementComponent */]
    },
    {
        path: 'playerdetail/:id',
        component: __WEBPACK_IMPORTED_MODULE_2__player_detail_player_detail_component__["a" /* PlayerDetailComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(appRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/fixture/fixture.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/fixture/fixture.component.html":
/***/ (function(module, exports) {

module.exports = "\n<table class='table table-striped'>\n  <thead>\n    <tr>\n      <th>Home</th>\n      <th></th>\n      <th></th>\n      <th></th>      \n      <th>Away</th>      \n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor='let item of fixtures'>\n      <td>{{getTeamName(item.team_h)}}</td>\n      <td> {{item.team_h_score}}</td>\n      <td>--</td>\n      <td>{{item.team_a_score}}</td>\n      <td>{{getTeamName(item.team_a)}}</td>\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/fixture/fixture.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FixtureComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_player_service__ = __webpack_require__("../../../../../src/app/service/player.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FixtureComponent = (function () {
    function FixtureComponent(playerService) {
        this.playerService = playerService;
    }
    FixtureComponent.prototype.ngOnInit = function () {
        this.fixtures = this.playerService.getFixtures();
    };
    FixtureComponent.prototype.getTeamName = function (id) {
        return this.playerService.getTeamName(id);
    };
    return FixtureComponent;
}());
FixtureComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-fixture',
        template: __webpack_require__("../../../../../src/app/fixture/fixture.component.html"),
        styles: [__webpack_require__("../../../../../src/app/fixture/fixture.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_player_service__["a" /* PlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_player_service__["a" /* PlayerService */]) === "function" && _a || Object])
], FixtureComponent);

var _a;
//# sourceMappingURL=fixture.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"jumbotron\">\n        <h2>Welcome to FPL Transfer Suggester 2.0</h2>\n        <p class=\"lead\">The all new fpl transfer suggester with far more features. Click here to see what's changed!</p>\n    </div>\n\n  <h2>Your Team</h2>\n\n  <div class=\"row\">\n    <div class=\"col-sm-8\">\n        <input type='text' (keyup.enter)='myEvent(gamesInput)' style='width:300px;' [(ngModel)]='gamesInput' placeholder='Change fix difficulty range...'>  \n        <button class='btn btn-primary' type='submit' (click)='myEvent(gamesInput)'>Submit</button>\n    </div>\n  </div>\n\n  <table class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th></th>\n        <th>Name</th>\n        <th>Form</th>\n        <th>Fixture Diff</th>\n      </tr>\n    </thead>\n\n    <tbody>\n      <p *ngIf='!usersTeam'>Loading......</p>\n      \n      <tr *ngFor='let item of usersTeam' tooltip='{{item.news}}' [ngClass]=\"item.news ? 'injured': 'noInjury'\" routerLink='/player/{{item.id}}' routerLinkActive='active'>\n        <td><img class='img-small' src='http://platform-static-files.s3.amazonaws.com/premierleague/photos/players/110x140/p{{item.code}}.png'></td>          \n        <td>{{item.web_name}}</td>\n        <td>{{item.form}}</td> \n        <td>\n          {{item.fdr}}\n            <div class='row'>\n              <div class='col-sm-1' *ngFor='let i of item.opponentsAndDiff'>\n                <span class='{{i.class}}' tooltip='{{i.name}}'>{{i.diff}}</span>\n              </div>\n            </div>\n          </td>\n      </tr>\n\n    </tbody>\n  </table>\n\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_player_service__ = __webpack_require__("../../../../../src/app/service/player.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// my imports

var HomeComponent = (function () {
    function HomeComponent(playerService) {
        this.playerService = playerService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        /* initialise the data
           Once initialised then we can get the usersTeam
         */
        this.initialiseData();
    };
    HomeComponent.prototype.initialiseData = function () {
        var _this = this;
        if (this.playerService.getDataInitialised()) {
            this.getUserTeam();
        }
        else {
            this.req = this.playerService.initiliseData().subscribe(function (initialised) {
                if (initialised === 200) {
                    console.log('The game is updating check back later! ');
                }
                else {
                    _this.req = _this.playerService.initialiseFixtures().subscribe(function (gotFixtures) {
                        if (gotFixtures) {
                            _this.getUserTeam();
                        }
                    });
                }
            });
        }
    };
    /*
     * 200 is a weird bug that you must open fantasy website before getting data so recall
     * 403 is no logged in
     */
    HomeComponent.prototype.getUserTeam = function () {
        var _this = this;
        this.req = this.playerService.getUsersTeam().subscribe(function (response) {
            if (response === 200) {
                _this.getUserTeam();
            }
            else if (response === 403) {
                // set an error tag
            }
            else {
                _this.usersTeam = response;
            }
        });
    };
    HomeComponent.prototype.myEvent = function (id) {
        this.playerService.calculateFixtureDifficulty(id);
        this.getUserTeam();
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.req.unsubscribe();
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_player_service__["a" /* PlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_player_service__["a" /* PlayerService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/pipe/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (value, filterName) {
        var _this = this;
        if (filterName) {
            // tslint:disable-next-line:label-position
            // tslint:disable-next-line:prefer-const
            var teamCode = this.getTeamCode(filterName);
            if (teamCode !== -1) {
                var toReturn = [];
                for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
                    var pick = value_1[_i];
                    if (pick.team_code === teamCode) {
                        toReturn.push(pick);
                    }
                }
                return toReturn;
            }
        }
        // tslint:disable-next-line:max-line-length
        return filterName ? value.filter(function (item) { return _this.removeAccents(item.web_name).toLowerCase().indexOf(filterName.toLowerCase()) !== -1; }) : value;
    };
    // This function is for removing specials!
    FilterPipe.prototype.removeAccents = function (value) {
        return value
            .replace(/á/g, 'a')
            .replace(/é/g, 'e')
            .replace(/í/g, 'i')
            .replace(/ó/g, 'o')
            .replace(/ü/g, 'u')
            .replace(/ú/g, 'u');
    };
    // This function is to gte team code via team
    // In future should get these from objects passed
    FilterPipe.prototype.getTeamCode = function (input) {
        switch (input.toLowerCase()) {
            case 'arsenal':
                return 3;
            case 'bournemouth':
                return 91;
            case 'southampton':
                return 20;
            case 'chelsea':
                return 8;
            case 'leicester':
                return 13;
            case 'man united':
                return 1;
            case 'man city':
                return 43;
            case 'crystal palace':
                return 31;
            case 'burnley':
                return 90;
            case 'liverpool':
                return 14;
            case 'brighton':
                return 36;
            case 'newcastle':
                return 4;
            case 'west brom':
                return 35;
            case 'west ham':
                return 21;
            case 'everton':
                return 11;
            case 'stoke city':
                return 110;
            case 'swansea':
                return 80;
            case 'huddersfield':
                return 38;
            case 'watford':
                return 57;
            case 'tottenham':
                return 6;
            default:
                return -1;
        }
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'filter'
    })
], FilterPipe);

//# sourceMappingURL=filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/pipe/safe-html.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafeHtmlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafeHtmlPipe = (function () {
    function SafeHtmlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeHtmlPipe.prototype.transform = function (html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    };
    return SafeHtmlPipe;
}());
SafeHtmlPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'safeHtml'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _a || Object])
], SafeHtmlPipe);

var _a;
//# sourceMappingURL=safe-html.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/player-detail/player-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/player-detail/player-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    \n      <h2>List of players</h2>\n\n      <input [typeahead]=\"teamNames\" placeholder=\"Search by name, team ...\" type=\"text\" [(ngModel)]=\"filterName\">\n\n      \n    \n    \n      <table class=\"table table-striped\">\n        <thead>\n          <tr>\n            <th>Image</th>\n            <th>Name</th>\n            <th>Minutes</th>\n            <th>Form</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor='let item of players | filter : filterName' [ngClass]=\"item.news ? 'injured': 'noInjury'\">\n            <td><img style=\"width:50px;height:50px;\" src='http://platform-static-files.s3.amazonaws.com/premierleague/photos/players/110x140/p{{item.code}}.png'></td>\n            <td>{{item.web_name}}</td>\n            <td>{{item.minutes}}</td>\n            <td>{{item.form}}</td>        \n          </tr>\n    \n        </tbody>\n      </table>\n    \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/player-detail/player-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_player_service__ = __webpack_require__("../../../../../src/app/service/player.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// my imports

var PlayerDetailComponent = (function () {
    function PlayerDetailComponent(playerService) {
        this.playerService = playerService;
    }
    PlayerDetailComponent.prototype.ngOnInit = function () {
        // Get the players
        // if there's no players then call get players
        this.players = this.playerService.getPlayers();
        this.teamNames = this.playerService.getTeamNames();
    };
    PlayerDetailComponent.prototype.ngOnDestroy = function () {
    };
    return PlayerDetailComponent;
}());
PlayerDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-player-detail',
        template: __webpack_require__("../../../../../src/app/player-detail/player-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/player-detail/player-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_player_service__["a" /* PlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_player_service__["a" /* PlayerService */]) === "function" && _a || Object])
], PlayerDetailComponent);

var _a;
//# sourceMappingURL=player-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/player-list/player-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/player-list/player-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  \n      \n        <h2>List of players</h2>        \n\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Player / Team search</label>\n            <input type=\"text\" [typeahead]=\"teamNames\" [(ngModel)]=\"filterName\" class=\"form-control\"  aria-describedby=\"emailHelp\" placeholder=\"Enter players name or team name\">                                    \n          </div>\n\n      \n      \n        <table *ngIf='players.length > 0' class=\"table table-striped\">\n          <thead>\n            <tr>\n              <th>Image</th>\n              <th>Name</th>\n              <th>Minutes</th>\n              <th>Form</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor='let item of players | filter : filterName' [ngClass]=\"item.news ? 'injured': 'noInjury'\">\n              <td><img style=\"width:50px;height:50px;\" src='http://platform-static-files.s3.amazonaws.com/premierleague/photos/players/110x140/p{{item.code}}.png'></td>\n              <td>{{item.web_name}}</td>\n              <td>{{item.minutes}}</td>\n              <td>{{item.form}}</td>        \n            </tr>\n      \n          </tbody>\n        </table>\n      \n  </div>\n  "

/***/ }),

/***/ "../../../../../src/app/player-list/player-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_player_service__ = __webpack_require__("../../../../../src/app/service/player.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlayerListComponent = (function () {
    function PlayerListComponent(playerService) {
        this.playerService = playerService;
        this.players = [];
    }
    PlayerListComponent.prototype.ngOnInit = function () {
        this.players = this.playerService.getPlayers();
        this.teamNames = this.playerService.getTeamNames();
    };
    return PlayerListComponent;
}());
PlayerListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-player-list',
        template: __webpack_require__("../../../../../src/app/player-list/player-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/player-list/player-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_player_service__["a" /* PlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_player_service__["a" /* PlayerService */]) === "function" && _a || Object])
], PlayerListComponent);

var _a;
//# sourceMappingURL=player-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/player-replacement/player-replacement.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/player-replacement/player-replacement.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n    <h3>\n        Replacements for\n        <small class=\"text-muted\">{{player.first_name}} {{player.second_name}}</small>        \n    </h3>\n    <hr/>\n    <div class='row' style=\"height:200px;overflow:auto;\">\n        <div class=\"col-sm-3\">\n             <img src='http://platform-static-files.s3.amazonaws.com/premierleague/photos/players/110x140/p{{player.code}}.png' class=\"rounded float-left img-thumbnail\" alt=\"Player image\">\n        </div>\n        <div class=\"col-sm-9\">\n            <table class=\"table\">\n                <tbody>\n                    <!-- All players -->\n                    <tr>\n                        <th>Form</th>\n                        <td>{{player.form}}</td>\n                    </tr>\n                    <tr>\n                        <th>Cost</th>\n                        <td>£{{player.now_cost/10}}</td>\n                    </tr>\n                    <tr>\n                        <th>FDR</th>\n                        <td>{{player.fdr}}</td>\n                    </tr>\n                    <!-- All except keepers -->\n                    <tr *ngIf='player.element_type != 1'>\n                        <th>Goals</th>\n                        <td>{{player.goals_scored}}</td>\n                    </tr>\n                    <tr *ngIf='player.element_type != 1'>\n                        <th>Assists</th>\n                        <td>{{player.assists}}</td>\n                    </tr>\n                    <!-- Tables for keepers & defenders only -->\n                    <tr *ngIf='player.element_type === 1'>\n                        <th>Saves</th>\n                        <td>{{player.saves}}</td>\n                    </tr>\n                    <tr *ngIf='player.element_type != 4'>\n                        <th>Clean Sheets</th>\n                        <td>{{player.clean_sheets}}</td>\n                    </tr>\n\n\n                \n\n                </tbody>\n            </table>\n        </div>\n    </div>\n    <hr />\n    \n    \n    <p *ngIf='replacementPlayers.length === 0'>There are no better replacements for this player!!</p>\n    \n    <table *ngIf='replacementPlayers.length > 0' class=\"table table-striped\">\n            <thead>\n              <tr>\n                <th></th>\n                <th>Name</th>\n                <th>Form</th>\n                <th>Fixture Diff</th>\n                <th *ngIf='playerPosition === 1'>Saves</th>\n                <th *ngIf='playerPosition != 1'>Goals</th>\n                <th *ngIf='playerPosition != 1'>Assists</th>\n                <th *ngIf='playerPosition != 4'>Clean Sheets</th>\n              </tr>\n            </thead>\n        \n            <tbody>\n              <p *ngIf='!replacementPlayers'>Loading......</p> \n              <tr *ngFor='let replacement of replacementPlayers' tooltip='{{replacement.news}}' [ngClass]=\"replacement.news ? 'injured': 'noInjury'\" routerLink='/player/{{replacement.id}}' routerLinkActive='active'>\n                <td><img class='img-small' src='http://platform-static-files.s3.amazonaws.com/premierleague/photos/players/110x140/p{{replacement.code}}.png'></td>          \n                <td>{{replacement.web_name}}</td>\n                <td>{{replacement.form}}</td> \n                <td>\n                  {{replacement.fdr}}\n                    <div class='row'>\n                      <div class='col-sm-1' *ngFor='let i of replacement.opponentsAndDiff'>\n                        <span class='{{i.class}}' tooltip='{{i.name}}'>{{i.diff}}</span>\n                      </div>\n                    </div>\n                </td>\n\n                <!-- Optional tables -->\n                <td *ngIf='replacement.element_type === 1'>{{replacement.saves}}</td>\n                <td *ngIf='replacement.element_type != 1'>{{replacement.goals_scored}}</td>\n                <td *ngIf='replacement.element_type != 1'>{{replacement.assists}}</td>\n                <td *ngIf='replacement.element_type != 4'>{{replacement.clean_sheets}}</td>   \n              </tr>\n        \n            </tbody>\n    </table>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/player-replacement/player-replacement.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerReplacementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_player_service__ = __webpack_require__("../../../../../src/app/service/player.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlayerReplacementComponent = (function () {
    function PlayerReplacementComponent(route, playerService) {
        this.route = route;
        this.playerService = playerService;
    }
    PlayerReplacementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            _this.id = Number.parseInt(params['id']);
            _this.player = _this.playerService.getPlayer(_this.id);
            _this.replacementPlayers = _this.playerService.getReplacementPlayers(_this.player);
            _this.playerPosition = _this.player.element_type;
        });
    };
    PlayerReplacementComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return PlayerReplacementComponent;
}());
PlayerReplacementComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-player-replacement',
        template: __webpack_require__("../../../../../src/app/player-replacement/player-replacement.component.html"),
        styles: [__webpack_require__("../../../../../src/app/player-replacement/player-replacement.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_player_service__["a" /* PlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_player_service__["a" /* PlayerService */]) === "function" && _b || Object])
], PlayerReplacementComponent);

var _a, _b;
//# sourceMappingURL=player-replacement.component.js.map

/***/ }),

/***/ "../../../../../src/app/service/player.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// tslint:disable:no-inferrable-types


// my imports




// TODO -
// TESTS - Make sure getplayers works when it is false
var PlayerService = (function () {
    function PlayerService(http) {
        this.http = http;
        // final variables
        this.dataURL = 'https://fantasy.premierleague.com/drf/bootstrap-static';
        this.userTeamURL = 'https://fantasy.premierleague.com/drf/transfers';
        this.fixtureURL = 'https://fantasy.premierleague.com/drf/fixtures/';
        this.teamNames = [];
        this.dataInitialised = false;
    }
    /* INITIALISEDATA(){}
       This is called by starting component,
       initialises all players and teams
       needed for when we get users pick data
     */
    PlayerService.prototype.initiliseData = function () {
        var _this = this;
        if (this.dataInitialised) {
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].of(this.dataInitialised);
        }
        else {
            return this.http.get(this.dataURL)
                .map(function (response) {
                _this.players = response['elements'];
                _this.teams = response['teams'];
                _this.dataInitialised = true;
                return _this.dataInitialised;
            })
                .catch(this.handleError);
        }
    };
    PlayerService.prototype.initialiseFixtures = function () {
        var _this = this;
        if (this.dataInitialised) {
            return this.http.get(this.fixtureURL)
                .map(function (response) {
                _this.fixtures = response;
                // once got fixtures we can add to teams and then calculate fix diff
                _this.addFixturesToTeams();
                _this.calculateFixtureDifficulty(2);
                return true;
            });
        }
    };
    // Also add names to team array for typeahead
    PlayerService.prototype.addFixturesToTeams = function () {
        var _this = this;
        this.teams.forEach(function (team) {
            // add team name for typeahead
            _this.teamNames.push(team.name);
            // make sure to initialse this
            var toAdd = [];
            _this.fixtures.forEach(function (fixture) {
                if (team.id === fixture.team_a || team.id === fixture.team_h) {
                    toAdd.push(fixture);
                }
            });
            team.fixtures = toAdd;
        });
    };
    /* Calculate fix diff based on upcoming games
       upcoming games is a number that is set to two
       Loop through each team get fixtures
    */
    PlayerService.prototype.calculateFixtureDifficulty = function (futureGames) {
        var _this = this;
        var temp = futureGames;
        this.teams.forEach(function (team) {
            var fixDiff = 1;
            var fixArr = team.fixtures;
            var oppAndDiff = [];
            for (var _i = 0, fixArr_1 = fixArr; _i < fixArr_1.length; _i++) {
                var fixture = fixArr_1[_i];
                if (!fixture.finished) {
                    // Deal with fixture - first get home or away then add difficulty to overall
                    if (fixture.team_h === team.id) {
                        fixDiff *= fixture.team_h_difficulty;
                        var classDiff = _this.getDifficultyClass(fixture.team_h_difficulty);
                        var opponent = _this.getOpponent(fixture.team_a);
                        var fixObj = {
                            'name': opponent,
                            'diff': fixture.team_h_difficulty,
                            'class': classDiff
                        };
                        oppAndDiff.push(fixObj);
                    }
                    else {
                        var classDiff = _this.getDifficultyClass(fixture.team_a_difficulty);
                        var opponent = _this.getOpponent(fixture.team_h);
                        fixDiff *= fixture.team_a_difficulty;
                        var fixObj = {
                            'name': opponent,
                            'diff': fixture.team_a_difficulty,
                            'class': classDiff
                        };
                        oppAndDiff.push(fixObj);
                    }
                    futureGames--;
                    if (futureGames === 0) {
                        break;
                    }
                }
            }
            team.fixDiff = fixDiff;
            team.opponentsAndDiff = oppAndDiff;
            // reset variables
            futureGames = temp;
        });
        this.updateAllPlayers();
    };
    PlayerService.prototype.updateAllPlayers = function () {
        var _this = this;
        this.players.forEach(function (player) {
            _this.teams.forEach(function (team) {
                if (team.code === player.team_code) {
                    player.fdr = team.fixDiff;
                    player.opponentsAndDiff = team.opponentsAndDiff;
                }
            });
        });
    };
    /* GETUSERSTEAM(){}
       This is called by the home component,
       gets the users picks and gives us 15 players ID,
       Then have to get the players info via that id
     */
    PlayerService.prototype.getUsersTeam = function () {
        var _this = this;
        // make sure data is initialised
        if (this.usersTeam) {
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].of(this.usersTeam);
        }
        else {
            if (this.dataInitialised) {
                return this.http.get(this.userTeamURL)
                    .map(function (response) {
                    _this.minMinutesPlayed = (response['entry'].current_event * 90) - 100;
                    _this.picks = response['picks'];
                    _this.usersTeam = _this.initialiseUsersTeamViaPicks();
                    return _this.usersTeam;
                })
                    .catch(this.handleError);
            }
            else {
                console.log('data hasnt been initialised');
            }
        }
    };
    PlayerService.prototype.getReplacementPlayers = function (playerToReplace) {
        var _this = this;
        var toReturn = [];
        this.players.forEach(function (player) {
            // check same position
            if (player.element_type === playerToReplace.element_type) {
                // check player has easier FDR
                if (player.fdr < playerToReplace.fdr) {
                    // check players plays regularly
                    if (player.minutes >= _this.minMinutesPlayed) {
                        toReturn.push(player);
                    }
                }
            }
        });
        return toReturn;
    };
    /* GETPLAYERS(){}
      This function returns every player
      Have to make sure data has been initialised otherwise we have to call the function again
     */
    PlayerService.prototype.getPlayers = function () {
        if (this.players) {
            return this.players;
        }
        else {
            console.log('There are no players TED');
            return [];
        }
    };
    PlayerService.prototype.getFixtures = function () {
        if (this.fixtures) {
            return this.fixtures;
        }
        else {
            console.log('No fixtures mate');
            return false;
        }
    };
    PlayerService.prototype.getPlayer = function (id) {
        for (var _i = 0, _a = this.players; _i < _a.length; _i++) {
            var player = _a[_i];
            if (player.id === id) {
                return player;
            }
        }
    };
    PlayerService.prototype.getDataInitialised = function () {
        return this.dataInitialised;
    };
    PlayerService.prototype.getPlayerFixDiffCss = function (playerTeamCode) {
        for (var _i = 0, _a = this.teams; _i < _a.length; _i++) {
            var team = _a[_i];
            if (team.code === playerTeamCode) {
                return team.fixDiffCss;
            }
        }
    };
    PlayerService.prototype.getTeamNames = function () {
        return this.teamNames;
    };
    PlayerService.prototype.getTeamName = function (id) {
        for (var _i = 0, _a = this.teams; _i < _a.length; _i++) {
            var team = _a[_i];
            if (id === team.id) {
                return team.name;
            }
        }
    };
    /* Functions
    */
    // Change to switch
    PlayerService.prototype.getDifficultyClass = function (diff) {
        if (diff === 1) {
            return 'difficulty-1';
        }
        else if (diff === 2) {
            return 'difficulty-2';
        }
        else if (diff === 3) {
            return 'difficulty-3';
        }
        else if (diff === 4) {
            return 'difficulty-4';
        }
        else {
            return 'difficulty-5';
        }
    };
    PlayerService.prototype.getOpponent = function (id) {
        for (var _i = 0, _a = this.teams; _i < _a.length; _i++) {
            var team = _a[_i];
            if (team.id === id) {
                return team.name;
            }
        }
    };
    PlayerService.prototype.initialiseUsersTeamViaPicks = function () {
        var toReturn = [];
        for (var _i = 0, _a = this.picks; _i < _a.length; _i++) {
            var pick = _a[_i];
            for (var _b = 0, _c = this.players; _b < _c.length; _b++) {
                var player = _c[_b];
                if (player.id === pick.element) {
                    toReturn.push(player);
                }
            }
        }
        return toReturn;
    };
    PlayerService.prototype.handleError = function (error, caught) {
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].of(error.status);
    };
    return PlayerService;
}());
PlayerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], PlayerService);

var _a;
//# sourceMappingURL=player.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map