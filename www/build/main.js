webpackJsonp([0],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdentificationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IdentificationService = /** @class */ (function () {
    function IdentificationService(http) {
        this.http = http;
    }
    IdentificationService.prototype.postUser = function (user) {
        return this.http.post('https://projectla2.ovh/API/users/new', user);
    };
    IdentificationService.prototype.getIdentificationUser = function (userConnexion) {
        return this.http.get('https://projectla2.ovh/API/users/connexion?email=' + userConnexion.email + '&password=' + userConnexion.password);
    };
    IdentificationService.prototype.getId = function (email) {
        return this.http.get('https://projectla2.ovh/API/users/byEmail?email=' + email);
    };
    IdentificationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], IdentificationService);
    return IdentificationService;
}());

//# sourceMappingURL=identification.service.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComptePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_core_login_service__ = __webpack_require__(428);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ComptePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ComptePage = /** @class */ (function () {
    function ComptePage(navCtrl, navParams, loginService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loginService = loginService;
    }
    ComptePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ComptePage');
    };
    ComptePage.prototype.goToHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    ComptePage.prototype.deconnexion = function () {
        this.loginService.changeAuthentification();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    ComptePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-compte',template:/*ion-inline-start:"D:\MobileProjectLA2\MobileProject\src\pages\compte\compte.html"*/'<!--\n\n  Generated template for the ComptePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n	  \n\n    <ion-title>Compte</ion-title>\n\n  </ion-navbar>\n\n<img src="../../assets/imgs/banniere2.jpg" width="100%" height="auto"/>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="bg-style no-scroll">\n\n{{id}}\n\n	\n\n	<ion-grid>\n\n  \n\n	<ion-row>\n\n    <ion-col>\n\n		<button class="button" ion-button block large round navPush="GetMeetingPage"> Prendre un rendez-vous</button>\n\n	</ion-col>\n\n  </ion-row>\n\n		\n\n		<ion-row>\n\n    <ion-col>\n\n		<button class="button" ion-button block large round> Voir vos rendez-vous</button>\n\n	</ion-col>\n\n  </ion-row>\n\n		<ion-row>\n\n    <ion-col>\n\n		<button class="button" ion-button block large round> Voir vos commandes</button>\n\n	</ion-col>\n\n  </ion-row>\n\n		<ion-row>\n\n    <ion-col>\n\n		<button class="button" ion-button block large round> Voir vos devis</button>\n\n	</ion-col>\n\n  </ion-row>\n\n		<br>\n\n	<ion-row>\n\n    <ion-col>\n\n		<button class="button last" (click)="deconnexion()" ion-button block round> Déconnexion</button>\n\n	</ion-col>\n\n  </ion-row>	\n\n	\n\n		\n\n	</ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\MobileProjectLA2\MobileProject\src\pages\compte\compte.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__app_core_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_core_login_service__["a" /* LoginService */]) === "function" && _c || Object])
    ], ComptePage);
    return ComptePage;
    var _a, _b, _c;
}());

//# sourceMappingURL=compte.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewIdentificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_core_identification_service__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__identification_identification__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the NewIdentificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewIdentificationPage = /** @class */ (function () {
    function NewIdentificationPage(navCtrl, navParams, identificationService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.identificationService = identificationService;
        this.showForm = true;
        this.civilites = [
            'Mme.',
            'Mlle.',
            'M.',
        ];
        this.validation = "";
        this.user = new __WEBPACK_IMPORTED_MODULE_2__user__["a" /* User */]();
    }
    NewIdentificationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewIdentificationPage');
    };
    NewIdentificationPage.prototype.onSubmit = function (value) {
        var _this = this;
        this.user.id = null;
        this.user.civilite = value.civilite;
        this.user.nom = value.nom;
        this.user.prenom = value.prenom;
        this.user.email = value.email;
        this.user.password = value.password;
        this.user.confirmPassword = value.confirmPassword;
        this.identificationService.postUser(this.user).subscribe(function (res) {
            _this.validation = "Création de votre compte avec succés";
        }, function (err) {
            _this.validation = "Adresse mail déja utilisée ou erreur survenu";
        });
        this.showForm = false;
    };
    NewIdentificationPage.prototype.goToOtherPage = function () {
        //push another page onto the history stack
        //causing the nav controller to animate the new page in
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__identification_identification__["a" /* IdentificationPage */]);
    };
    NewIdentificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-identification',template:/*ion-inline-start:"D:\MobileProjectLA2\MobileProject\src\pages\new-identification\new-identification.html"*/'<!--\n\n  Generated template for the NewIdentificationPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>PCHealthcare</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="bg-style">\n\n	\n\n	\n\n	<form *ngIf="showForm" class="example-form" (ngSubmit)="onSubmit(loginForm.value)" #loginForm="ngForm">\n\n		<h2>Créer un compte</h2>\n\n				<ion-list>\n\n						<ion-item>\n\n							<ion-label >Civilité </ion-label>	\n\n							<ion-select required id="civilite" name="civilite" [(ngModel)]="user.civilite" #civilite="ngModel">\n\n								\n\n								<ion-option *ngFor="let civilite of civilites" [value]="civilite">\n\n										{{civilite}}\n\n								</ion-option>\n\n							</ion-select>\n\n							\n\n\n\n					</ion-item>\n\n					<ion-item no-border no-lines no-margin *ngIf="civilite.hasError(\'required\')" >\n\n    					<small>Veuillez choisir une civilité.</small>\n\n    					\n\n  						</ion-item>\n\n				   <ion-item>\n\n		<ion-label >Nom</ion-label>				\n\n		<ion-input  required id="nom" name="nom" [(ngModel)]="user.nom" #nom="ngModel"></ion-input>\n\n							\n\n						\n\n		</ion-item>\n\n					<ion-item no-border no-lines no-margin  *ngIf="nom.hasError(\'required\')" >\n\n    					<small>Veuillez entrer votre nom.</small>\n\n    					\n\n  						</ion-item>\n\n		<ion-item>\n\n		<ion-label  >Prénom</ion-label>				\n\n		<ion-input required id="prenom" name="prenom"[(ngModel)]="user.prenom" #prenom="ngModel" ></ion-input>\n\n							\n\n						\n\n		</ion-item>\n\n					\n\n					<ion-item no-border no-lines no-margin  *ngIf="prenom.hasError(\'required\')" >\n\n    					<small>Veuillez entrer votre prénom.</small>\n\n    					\n\n  						</ion-item>\n\n		<ion-item>\n\n		<ion-label >Email</ion-label>				\n\n		<ion-input  type="email" id="email" name="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" [(ngModel)]="user.email" #email="ngModel" ></ion-input>\n\n			\n\n			\n\n\n\n							\n\n\n\n			</ion-item>			\n\n					<ion-item no-border no-lines no-margin *ngIf="email.hasError(\'pattern\') && !email.hasError(\'required\')">\n\n \n\n    					<small>Veuillez renseigner une adresse valide.</small>\n\n    					\n\n  						</ion-item>\n\n					<ion-item no-border no-lines no-margin *ngIf="email.hasError(\'required\')">\n\n \n\n    					<small>L\'email doit être renseigné.</small>\n\n    					\n\n  						</ion-item>\n\n						\n\n					<ion-item>\n\n						<ion-label >Mot de passe</ion-label>\n\n							<ion-input  type="password" id="password"  required\n\n								    name="password" [(ngModel)]="user.password"\n\n									   #password="ngModel"> </ion-input>\n\n							<!--<mat-error *ngIf="password.hasError(\'pattern\')">Le mot de passe doit contenir au moins 8 caractéres comprenant au moins une lettre majuscule , une\n\n							  lettre minuscule et un chiffre.\n\n							</mat-error>\n\n							<mat-error *ngIf="password.hasError(\'required\')">Veuillez entrer un mot de passe.</mat-error>-->\n\n\n\n					 </ion-item>\n\n					\n\n					<!--<ion-item no-border no-lines no-margin *ngIf="password.hasError(\'pattern\')">\n\npattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"\n\n \n\n    					<small>Le mot de passe doit contenir au moins 8 caractéres comprenant au moins une lettre majuscule , une\n\n							  lettre minuscule et un chiffre.</small>\n\n    					\n\n  						</ion-item>-->\n\n					<ion-item no-border no-lines no-margin *ngIf="password.hasError(\'required\')">\n\n \n\n    					<small>Veuillez entrer un mot de passe.</small>\n\n    					\n\n  						</ion-item>\n\n\n\n					<ion-item>\n\n						<ion-label >Confirmation de votre mot de passe</ion-label>\n\n						<ion-input  type="password" id="confirmPassword" \n\n							   required [appEqualTo]="password"\n\n								   name="confirmPassword" [(ngModel)]="user.confirmPassword" #confirmPassword="ngModel"> </ion-input>\n\n\n\n						\n\n						</ion-item>\n\n					<ion-item no-border no-lines no-margin *ngIf="confirmPassword.hasError(\'required\')">\n\n \n\n    					<small>Veuillez confirmer votre mot de passe.</small>\n\n    					\n\n  						</ion-item>\n\n					<ion-item no-border no-lines no-margin *ngIf="confirmPassword.hasError(\'equalTo\')">\n\n \n\n    					<small>Les mots de passe ne correspondent pas.</small>\n\n    					\n\n  						</ion-item>\n\n					\n\n					<ion-item>\n\n					</ion-item>\n\n		</ion-list>\n\n					  \n\n					  <button ion-button  type="submit" class="btn btn-success" [disabled]="!loginForm.form.valid" >Créer un compte</button>\n\n					</form>\n\n					<h2> {{validation}}</h2>\n\n		<button *ngIf="!showForm" class="button" ion-button block large round (click)="goToOtherPage()"> Se connecter</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\MobileProjectLA2\MobileProject\src\pages\new-identification\new-identification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__app_core_identification_service__["a" /* IdentificationService */]])
    ], NewIdentificationPage);
    return NewIdentificationPage;
}());

//# sourceMappingURL=new-identification.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__identification_service__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__compte_service__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_service__ = __webpack_require__(428);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__identification_service__["a" /* IdentificationService */],
                __WEBPACK_IMPORTED_MODULE_2__compte_service__["a" /* CompteService */],
                __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */]
            ]
        })
    ], CoreModule);
    return CoreModule;
}());

//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ 141:
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
webpackEmptyAsyncContext.id = 141;

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/compte/compte.module": [
		208
	],
	"../pages/get-meeting/get-meeting.module": [
		186
	],
	"../pages/identification/identification.module": [
		207
	],
	"../pages/new-identification/new-identification.module": [
		209
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 185;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetMeetingPageModule", function() { return GetMeetingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__get_meeting__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_calendar__ = __webpack_require__(386);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var GetMeetingPageModule = /** @class */ (function () {
    function GetMeetingPageModule() {
    }
    GetMeetingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__get_meeting__["a" /* GetMeetingPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__get_meeting__["a" /* GetMeetingPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic2_calendar__["a" /* NgCalendarModule */]
            ],
        })
    ], GetMeetingPageModule);
    return GetMeetingPageModule;
}());

//# sourceMappingURL=get-meeting.module.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetMeetingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_core_compte_service__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rd__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rdPost__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__operation__ = __webpack_require__(385);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the GetMeetingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GetMeetingPage = /** @class */ (function () {
    function GetMeetingPage(navCtrl, navParams, compteService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.compteService = compteService;
        this.services = [
            'Montage',
            'Réparation',
            'Nettoyage',
        ];
        this.nettoyages = [
            'Forfait nettoyage',
            'Forfait logiciel',
            'Forfait logiciel et nettoyage',
        ];
        this.validation = "";
        this.calendar = {
            mode: 'month',
            currentDate: new Date(),
            dateFormatter: {
                formatMonthViewDay: function (date) {
                    return date.getDate().toString();
                },
                formatMonthViewDayHeader: function (date) {
                    return 'MonMH';
                },
                formatMonthViewTitle: function (date) {
                    return 'testMT';
                },
                formatWeekViewDayHeader: function (date) {
                    return 'MonWH';
                },
                formatWeekViewTitle: function (date) {
                    return 'testWT';
                },
                formatWeekViewHourColumn: function (date) {
                    return 'testWH';
                },
                formatDayViewHourColumn: function (date) {
                    return 'testDH';
                },
                formatDayViewTitle: function (date) {
                    return 'testDT';
                }
            }
        };
        this.rd = new __WEBPACK_IMPORTED_MODULE_4__rd__["a" /* RendezVous */]();
        this.rdPost = new __WEBPACK_IMPORTED_MODULE_5__rdPost__["a" /* RendezVousPost */]();
        this.operation = new __WEBPACK_IMPORTED_MODULE_6__operation__["a" /* Operation */]();
        this.markDisabled = function (date) {
            var current = new Date();
            current.setHours(0, 0, 0);
            return date < current;
        };
        var key2 = 'id';
        this.id = sessionStorage.getItem(key2);
        this.getEvents().subscribe(function (events) { return _this.getEventsForCalendar(_this.events); });
        this.minDate = new Date().toISOString();
        //2018-04-16T07:46:22.434Z
        var cut = this.minDate.split(":");
        var cut2 = cut[0].split("T");
        var hours = parseInt(cut2[1]);
        hours = hours + 3;
        var hourss = hours.toString();
        if (hourss.length == 2) {
            this.minDate = cut2[0] + "T" + hours + ":" + cut[1] + ":" + cut[2];
        }
        else {
            this.minDate = cut2[0] + "T" + "0" + hours + ":" + cut[1] + ":" + cut[2];
        }
        console.log(this.minDate);
    }
    GetMeetingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GetMeetingPage');
    };
    GetMeetingPage.prototype.loadEvents = function () {
        var _this = this;
        this.getEvents().subscribe(function (events) { return _this.getEventsForCalendar(_this.events); });
    };
    GetMeetingPage.prototype.getEvents = function () {
        var _this = this;
        return this.compteService.getMetting().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (events) { return _this.events = events; }));
    };
    GetMeetingPage.prototype.getEventsForCalendar = function (events) {
        var events = [];
        var startTime;
        var endTime;
        console.log();
        console.log(this.events);
        this.events.forEach(function (event) {
            var cut = event.start.split("T");
            var date = cut[0];
            var time = cut[1];
            var cut2 = date.split("-");
            var year = cut2[0];
            var month = cut2[1];
            console.log(month);
            var day = cut2[2];
            console.log(day);
            var cut3 = time.split(":");
            var hour = cut3[0];
            var minute = cut3[1];
            var second = cut3[2];
            startTime = new Date(year, month - 1, day, hour, minute, second);
            console.log(startTime);
            cut = event.end.split("T");
            date = cut[0];
            time = cut[1];
            cut2 = date.split("-");
            year = cut2[0];
            month = cut2[1];
            day = cut2[2];
            cut3 = time.split(":");
            hour = cut3[0];
            minute = cut3[1];
            second = cut3[2];
            endTime = new Date(year, month - 1, day, hour, minute, second);
            events.push({
                title: event.title,
                startTime: startTime,
                endTime: endTime,
                allDay: event.allDay
            });
        });
        //2018-04-11T13:30:00
        //new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + startDay));
        this.eventSource = events;
        console.log(this.eventSource);
    };
    GetMeetingPage.prototype.onEventSelected = function (event) {
        console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
    };
    GetMeetingPage.prototype.changeMode = function (mode) {
        this.calendar.mode = mode;
    };
    GetMeetingPage.prototype.today = function () {
        this.calendar.currentDate = new Date();
    };
    GetMeetingPage.prototype.onTimeSelected = function (ev) {
        console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
            (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
        this.month = ev.selectedTime.getMonth();
        console.log(this.month);
        switch (this.month) {
            case 0:
                this.month = "Janvier";
                break;
            case 1:
                this.month = "Février";
                break;
            case 2:
                this.month = "Mars";
                break;
            case 3:
                this.month = "Avril";
                break;
            case 4:
                this.month = "Mai";
                break;
            case 5:
                this.month = "Juin";
                break;
            case 6:
                this.month = "Juillet";
                break;
            case 7:
                this.month = "Août";
                break;
            case 8:
                this.month = "Septembre";
                break;
            case 9:
                this.month = "Octobre";
                break;
            case 10:
                this.month = "Novembre";
                break;
            case 11:
                this.month = "Décembre";
                break;
        }
    };
    GetMeetingPage.prototype.onCurrentDateChanged = function (event) {
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        event.setHours(0, 0, 0, 0);
        this.isToday = today.getTime() === event.getTime();
    };
    GetMeetingPage.prototype.createRandomEvents = function () {
        var events = [];
        for (var i = 0; i < 50; i += 1) {
            var date = new Date();
            var eventType = Math.floor(Math.random() * 2);
            var startDay = Math.floor(Math.random() * 90) - 45;
            var endDay = Math.floor(Math.random() * 2) + startDay;
            var startTime;
            var endTime;
            if (eventType === 0) {
                startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + startDay));
                if (endDay === startDay) {
                    endDay += 1;
                }
                endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + endDay));
                events.push({
                    title: 'All Day - ' + i,
                    startTime: startTime,
                    endTime: endTime,
                    allDay: true
                });
            }
            else {
                var startMinute = Math.floor(Math.random() * 24 * 60);
                var endMinute = Math.floor(Math.random() * 180) + startMinute;
                startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + startDay, 0, date.getMinutes() + startMinute);
                endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + endDay, 0, date.getMinutes() + endMinute);
                events.push({
                    title: 'Event - ' + i,
                    startTime: startTime,
                    endTime: endTime,
                    allDay: false
                });
            }
        }
        return events;
    };
    GetMeetingPage.prototype.onRangeChanged = function (ev) {
        console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
    };
    GetMeetingPage.prototype.onSubmit = function (value) {
        var _this = this;
        this.rd.idUser = this.id;
        this.rd.service = value.service;
        this.rd.nettoyage = value.nettoyage;
        this.rd.date = value.date;
        this.rd.time = value.time;
        this.rd.domicile = value.domicile;
        this.rd.adresse = value.adresse;
        this.rd.ville = value.ville;
        this.rd.codePostal = value.codePostal;
        this.rd.description = value.description;
        //2018-04-16T09:00:00
        var dateStart = this.rd.time.toString().split("Z");
        var dateEndd = dateStart[0];
        var dateEnd = dateEndd.toString().split(":");
        var formatDateEnd = "";
        if (dateEnd[1].toString() == "00") {
            formatDateEnd = dateEnd[0] + ":30:00";
        }
        else {
            var hours = dateEnd[0].split("T");
            var hoursEndd = hours[1];
            var hoursEnd = parseInt(hoursEndd);
            hoursEnd = hoursEnd + 1;
            formatDateEnd = hours[0] + "T" + hoursEnd + ":00:00";
        }
        this.rdPost.start = dateStart[0];
        this.rdPost.end = formatDateEnd;
        this.rdPost.typeEvent = this.rd.service;
        if (this.rd.nettoyage != null) {
            this.rdPost.typeEvent += " " + this.rd.nettoyage;
        }
        if (this.rd.domicile != false) {
            this.rdPost.aDomicile = this.rd.domicile;
            this.rdPost.adresse = this.rd.adresse + " " + this.rd.codePostal + " " + this.rd.ville;
        }
        else {
            this.rdPost.aDomicile = this.rd.domicile;
            this.rdPost.adresse = null;
        }
        this.rdPost.idUser = this.rd.idUser;
        console.log(this.rdPost);
        this.operation.description = this.rd.description;
        this.compteService.postMetting(this.rdPost).subscribe(function (res) {
            _this.validation = "Votre rendez-vous est pris en compte.";
            _this.operation.idEvent = res.id;
            _this.postOperation(_this.operation);
        }, function (err) {
            _this.validation = "Une erreur est survenu ou vous essayez de prendre une plage indisponible.";
        });
    };
    GetMeetingPage.prototype.postOperation = function (operation) {
        if (this.rdPost.typeEvent == "Montage") {
            this.compteService.postMontage(operation).subscribe();
        }
        else {
            if (this.rdPost.typeEvent == "Réparation") {
                this.compteService.postReparation(operation).subscribe();
            }
            else {
                this.compteService.postNettoyage(operation).subscribe();
            }
        }
    };
    GetMeetingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-get-meeting',template:/*ion-inline-start:"D:\MobileProjectLA2\MobileProject\src\pages\get-meeting\get-meeting.html"*/'<!--\n\n  Generated template for the GetMeetingPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Prendre un rendez-vous</ion-title>\n\n	  \n\n        \n\n  </ion-navbar>\n\n	\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="bg-style">\n\n	\n\n	<!-- probleme avec les has error  -->\n\n\n\n		<h2>{{month}}</h2>\n\n	<ion-buttons>\n\n            <button ion-button [disabled]="isToday" (click)="today()">Aujourd\'hui</button>\n\n            <button ion-button (click)="loadEvents()">Actualiser</button>\n\n	\n\n        </ion-buttons>\n\n	\n\n	\n\n	<div class="bg-calendar">\n\n	<calendar [eventSource]="eventSource"\n\n        [calendarMode]="calendar.mode"\n\n        [currentDate]="calendar.currentDate"\n\n        (onCurrentDateChanged)="onCurrentDateChanged($event)"\n\n        (onRangeChanged)="reloadSource(startTime, endTime)"\n\n        (onEventSelected)="onEventSelected($event)"\n\n        (onTimeSelected)="onTimeSelected($event)"\n\n        step="30">\n\n      </calendar>\n\n	\n\n	</div>\n\n	\n\n	<h2>Ajouter un rendez-vous</h2>\n\n	<br>\n\n				<form  (ngSubmit)="onSubmit(loginForm.value)" #loginForm="ngForm">\n\n					<ion-list>\n\n						<ion-item>\n\n						<ion-label>Type de prestation</ion-label>\n\n							<ion-select required id="service" name="service" [(ngModel)]="rd.service" #service="ngModel">\n\n    							<ion-option *ngFor="let service of services" [value]="service">\n\n									{{service}}\n\n								</ion-option>\n\n    							\n\n  							</ion-select>\n\n							\n\n						</ion-item>\n\n						\n\n						<ion-item no-border no-lines no-margin *ngIf="service.hasError(\'required\')" >\n\n    					<small style="color:red;">Le type de service doit être renseigné.</small>\n\n    					\n\n  						</ion-item>\n\n						\n\n						<ion-item *ngIf="rd.service==\'Nettoyage\'" >\n\n							<ion-label>Type de nettoyage</ion-label>\n\n						<ion-select required id="nettoyage" name="nettoyage" [(ngModel)]="rd.nettoyage" #nettoyage="ngModel">\n\n    						<ion-option *ngFor="let nettoyage of nettoyages" [value]="nettoyage">\n\n								{{nettoyage}}\n\n    						</ion-option>\n\n  							</ion-select>\n\n						\n\n							\n\n						\n\n					\n\n						</ion-item>\n\n						<!--<ion-item *ngIf="rd.service==\'Nettoyage\'">\n\n						<small *ngIf="nettoyage.hasError(\'required\')" style="color:red;" >Le forfait doit être renseigné.</small>\n\n						</ion-item>-->\n\n						\n\n						\n\n						<ion-item>\n\n  							<ion-label>Date et heure</ion-label>\n\n  								<ion-datetime id="time" #time="ngModel" required name="time" [(ngModel)]="rd.time"  minuteValues="0,30" displayFormat="DD MMM YYYY-HH:mm" pickerFormat="DD MMM YYYY HH mm" hourValues="9,10,11,12,13,14,15,16,17,18" [min]="minDate"></ion-datetime>\n\n						</ion-item>\n\n						<ion-item no-border no-lines no-margin *ngIf="time.hasError(\'required\')" >\n\n    					<small style="color:red;">La date et l\'heure doivent être renseigné.</small>\n\n    					\n\n  						</ion-item>\n\n						<ion-item>\n\n    						<ion-label>A domicile</ion-label>\n\n    							<ion-checkbox id="domicile" class="example-margin" name="domicile" [(ngModel)]="rd.domicile" #domicile="ngModel"></ion-checkbox>\n\n  						</ion-item>\n\n						<ion-item *ngIf="rd.domicile">\n\n							<ion-label floating>Entrer votre adresse</ion-label>\n\n\n\n    					<ion-textarea id="adresse" required name="adresse" [(ngModel)]="rd.adresse" #adresse="ngModel"></ion-textarea>\n\n  						</ion-item>\n\n						<!--<ion-item no-border no-lines no-margin *ngIf="adresse.hasError(\'required\') && rd.domicile" >\n\n    					<small style="color:red;">>L\'adresse du domicile doit être renseigné.</small>\n\n    					\n\n  						</ion-item>-->\n\n						\n\n						<ion-item *ngIf="rd.domicile">\n\n						<ion-label>Ville</ion-label>\n\n						<ion-input id="ville"required name="ville" [(ngModel)]="rd.ville" #ville="ngModel"></ion-input>\n\n							\n\n						</ion-item>\n\n						<!--<ion-item no-border no-lines no-margin *ngIf="ville.hasError(\'required\') && rd.domicile" >\n\n    					<small style="color:red;">La ville du domicile doit être renseigné.</small>\n\n    					\n\n  						</ion-item>-->\n\n						\n\n						<ion-item *ngIf="rd.domicile">\n\n						<ion-label>Code postal</ion-label>\n\n						<ion-input  id="codePostal" required name="codePostal" [(ngModel)]="rd.codePostal" #codePostal="ngModel" maxlength="5" minlength="5"></ion-input>\n\n							\n\n						</ion-item>\n\n						<!--<ion-item no-border no-lines no-margin *ngIf="codePostal.hasError(\'required\') && rd.domicile" >\n\n    					<small style="color:red;">Le code postal du domicile doit être renseigné.</small>\n\n    					\n\n  						</ion-item>-->\n\n						<ion-item *ngIf="rd.service!=\'Nettoyage\'">\n\n							<ion-label>Description </ion-label>\n\n    					<ion-textarea id="description"  name="description" [(ngModel)]="rd.description" #description="ngModel" ></ion-textarea>\n\n  						</ion-item>\n\n\n\n						\n\n						\n\n						\n\n				\n\n                        \n\n						\n\n					    \n\n					</ion-list>\n\n\n\n					<button  ion-button type="submit" class="btn btn-success" [disabled]="!loginForm.form.valid">Valider</button>\n\n					<h2> {{validation}}</h2>\n\n				</form>\n\n	\n\n</ion-content>\n\n'/*ion-inline-end:"D:\MobileProjectLA2\MobileProject\src\pages\get-meeting\get-meeting.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__app_core_compte_service__["a" /* CompteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_core_compte_service__["a" /* CompteService */]) === "function" && _c || Object])
    ], GetMeetingPage);
    return GetMeetingPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=get-meeting.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CompteService = /** @class */ (function () {
    function CompteService(http) {
        this.http = http;
    }
    CompteService.prototype.getInformations = function (id) {
        return this.http.get('https://projectla2.ovh/API/users/byId?id=' + id);
    };
    /*putUser(user:User):Observable<any>{
        return this.http.put('https://projectla2.ovh/API/users/update', user);
    }*/
    CompteService.prototype.getCommandes = function (id) {
        return this.http.get('https://projectla2.ovh/API/commandes/ByUserId?id=' + id);
    };
    CompteService.prototype.getMetting = function () {
        return this.http.get('https://projectla2.ovh/API/calendarEvents');
    };
    CompteService.prototype.postMetting = function (rdPost) {
        return this.http.post('https://projectla2.ovh/API/event', rdPost);
    };
    CompteService.prototype.getMeetingId = function (id) {
        return this.http.get('https://projectla2.ovh/API/events/byUserId?id=' + id);
    };
    CompteService.prototype.postReparation = function (operation) {
        return this.http.post('https://projectla2.ovh/API/reparation', operation);
    };
    CompteService.prototype.postMontage = function (operation) {
        return this.http.post('https://projectla2.ovh/API/montage', operation);
    };
    CompteService.prototype.postNettoyage = function (operation) {
        return this.http.post('https://projectla2.ovh/API/nettoyage', operation);
    };
    CompteService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], CompteService);
    return CompteService;
}());

//# sourceMappingURL=compte.service.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentificationPageModule", function() { return IdentificationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__identification__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_core_core_module__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var IdentificationPageModule = /** @class */ (function () {
    function IdentificationPageModule() {
    }
    IdentificationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__identification__["a" /* IdentificationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__identification__["a" /* IdentificationPage */]),
                __WEBPACK_IMPORTED_MODULE_3__app_core_core_module__["a" /* CoreModule */]
            ],
        })
    ], IdentificationPageModule);
    return IdentificationPageModule;
}());

//# sourceMappingURL=identification.module.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComptePageModule", function() { return ComptePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__compte__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ComptePageModule = /** @class */ (function () {
    function ComptePageModule() {
    }
    ComptePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__compte__["a" /* ComptePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__compte__["a" /* ComptePage */]),
            ],
        })
    ], ComptePageModule);
    return ComptePageModule;
}());

//# sourceMappingURL=compte.module.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewIdentificationPageModule", function() { return NewIdentificationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_identification__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_core_core_module__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_shared_shared_module__ = __webpack_require__(399);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var NewIdentificationPageModule = /** @class */ (function () {
    function NewIdentificationPageModule() {
    }
    NewIdentificationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__new_identification__["a" /* NewIdentificationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__new_identification__["a" /* NewIdentificationPage */]), __WEBPACK_IMPORTED_MODULE_3__app_core_core_module__["a" /* CoreModule */], __WEBPACK_IMPORTED_MODULE_4__app_shared_shared_module__["a" /* SharedModule */]
            ],
        })
    ], NewIdentificationPageModule);
    return NewIdentificationPageModule;
}());

//# sourceMappingURL=new-identification.module.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__identification_identification__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__compte_compte__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_core_login_service__ = __webpack_require__(428);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, loginService) {
        this.navCtrl = navCtrl;
        this.loginService = loginService;
    }
    HomePage.prototype.goToOtherPage = function () {
        //push another page onto the history stack
        //causing the nav controller to animate the new page in
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__identification_identification__["a" /* IdentificationPage */]);
    };
    HomePage.prototype.goToOtherPageCompte = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__compte_compte__["a" /* ComptePage */]);
    };
    HomePage.prototype.hiddenConnexion = function () {
        return this.loginService.hiddenConnexion();
    };
    HomePage.prototype.hiddenCompte = function () {
        return this.loginService.hiddenCompte();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\MobileProjectLA2\MobileProject\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      PCHealthcare\n\n    </ion-title>\n\n  </ion-navbar>\n\n	<img src="../../assets/imgs/banniere2.jpg" width="100%" height="auto"/>\n\n</ion-header>\n\n\n\n<ion-content padding class="bg-style no-scroll">\n\n	\n\n	\n\n	<ion-grid>\n\n  \n\n	<ion-row>\n\n    <ion-col>\n\n		<h3 text-center> Bienvenue sur PCHealthcare</h3>\n\n	<p text-center> Découvrez toute nos prestations et prenz un rendez-vous en vous connectant.</p>\n\n	</ion-col>\n\n  </ion-row>\n\n	<ion-row>\n\n   <br>\n\n   <br>\n\n  </ion-row>\n\n		\n\n		<button class="button"ion-button block large round>Découvrir nos services</button>\n\n		<ion-row>\n\n    <ion-col>\n\n		\n\n		<button class="button" ion-button block large round (click)="goToOtherPage()" [hidden]="this.hiddenConnexion()"> Se connecter</button>\n\n		<button class="button" ion-button block large round (click)="goToOtherPageCompte()" [hidden]="this.hiddenCompte()"> Voir mon compte </button>\n\n	</ion-col>\n\n  </ion-row>\n\n		\n\n	</ion-grid>\n\n	\n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"D:\MobileProjectLA2\MobileProject\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__app_core_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__app_core_login_service__["a" /* LoginService */]) === "function" && _b || Object])
    ], HomePage);
    return HomePage;
    var _a, _b;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(262);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_identification_identification__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_compte_compte__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_new_identification_new_identification__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_get_meeting_get_meeting__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__core_core_module__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_identification_identification_module__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_compte_compte_module__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_new_identification_new_identification_module__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_get_meeting_get_meeting_module__ = __webpack_require__(186);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













//import { SharedModule } from './shared/shared.module';




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/get-meeting/get-meeting.module#GetMeetingPageModule', name: 'GetMeetingPage', segment: 'get-meeting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/identification/identification.module#IdentificationPageModule', name: 'IdentificationPage', segment: 'identification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/compte/compte.module#ComptePageModule', name: 'ComptePage', segment: 'compte', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/new-identification/new-identification.module#NewIdentificationPageModule', name: 'NewIdentificationPage', segment: 'new-identification', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_12__core_core_module__["a" /* CoreModule */],
                //SharedModule,
                __WEBPACK_IMPORTED_MODULE_13__pages_identification_identification_module__["IdentificationPageModule"],
                __WEBPACK_IMPORTED_MODULE_14__pages_compte_compte_module__["ComptePageModule"],
                __WEBPACK_IMPORTED_MODULE_15__pages_new_identification_new_identification_module__["NewIdentificationPageModule"],
                __WEBPACK_IMPORTED_MODULE_16__pages_get_meeting_get_meeting_module__["GetMeetingPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_identification_identification__["a" /* IdentificationPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_compte_compte__["a" /* ComptePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_new_identification_new_identification__["a" /* NewIdentificationPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_get_meeting_get_meeting__["a" /* GetMeetingPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RendezVous; });
var RendezVous = /** @class */ (function () {
    function RendezVous() {
        this.idUser = null;
        this.service = '';
        this.nettoyage = '';
        this.date = '';
        this.time = '';
        this.domicile = false;
        this.adresse = "";
        this.ville = "";
        this.codePostal = "";
        this.description = "";
    }
    return RendezVous;
}());

//# sourceMappingURL=rd.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RendezVousPost; });
var RendezVousPost = /** @class */ (function () {
    function RendezVousPost() {
        this.id = null;
        this.start = '';
        this.end = '';
        this.typeEvent = '';
        this.adresse = null;
        this.idUser = null;
        this.aDomicile = false;
        this.idEventCalendar = null;
    }
    return RendezVousPost;
}());

//# sourceMappingURL=rdPost.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Operation; });
var Operation = /** @class */ (function () {
    function Operation() {
        this.id = null;
        this.description = null;
        this.commentaires = null;
        this.estAcheve = false;
        this.noteUtilisateur = null;
        this.idEvent = null;
        this.element = null;
    }
    return Operation;
}());

//# sourceMappingURL=operation.js.map

/***/ }),

/***/ 390:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserConnexion; });
var UserConnexion = /** @class */ (function () {
    function UserConnexion() {
        this.id = '';
        this.email = '';
        this.password = '';
        this.role = "user";
    }
    return UserConnexion;
}());

//# sourceMappingURL=userConnexion.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User() {
        this.id = '';
        this.civilite = '';
        this.nom = '';
        this.prenom = '';
        this.adresse = '';
        this.email = '';
        this.password = '';
        this.confirmPassword = '';
        this.oldPassword = '';
        this.role = "user";
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__equal_to_validator_directive__ = __webpack_require__(400);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__equal_to_validator_directive__["a" /* EqualToValidator */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__equal_to_validator_directive__["a" /* EqualToValidator */],
            ]
        })
    ], SharedModule);
    return SharedModule;
}());

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EqualToValidator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__equal_to_validator__ = __webpack_require__(401);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EqualToValidator = /** @class */ (function () {
    function EqualToValidator() {
    }
    EqualToValidator_1 = EqualToValidator;
    EqualToValidator.prototype.ngOnInit = function () {
        this.validator = Object(__WEBPACK_IMPORTED_MODULE_2__equal_to_validator__["a" /* equalTo */])(this.appEqualTo);
    };
    EqualToValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */])
    ], EqualToValidator.prototype, "appEqualTo", void 0);
    EqualToValidator = EqualToValidator_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[appEqualTo][formControlName],[appEqualTo][formControl],[appEqualTo][ngModel]',
            providers: [{
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALIDATORS */],
                    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* forwardRef */])(function () { return EqualToValidator_1; }),
                    multi: true
                }]
        })
    ], EqualToValidator);
    return EqualToValidator;
    var EqualToValidator_1;
}());

//# sourceMappingURL=equal-to-validator.directive.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return equalTo; });
var equalTo = function (equalControl) {
    var subscribe = false;
    return function (control) {
        if (!subscribe) {
            subscribe = true;
            equalControl.valueChanges.subscribe(function () {
                control.updateValueAndValidity();
            });
        }
        var v = control.value;
        return equalControl.value === v ? null : { equalTo: true };
    };
};
//# sourceMappingURL=equal-to-validator.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(253);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\MobileProjectLA2\MobileProject\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"D:\MobileProjectLA2\MobileProject\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginService = /** @class */ (function () {
    function LoginService() {
    }
    LoginService.prototype.changeAuthentification = function () {
        sessionStorage.clear();
    };
    LoginService.prototype.hiddenDeco = function () {
        var key2 = 'id';
        var id = sessionStorage.getItem(key2);
        if (id != null) {
            return false;
        }
        else {
            return true;
        }
    };
    LoginService.prototype.getLinkD = function () {
        var key2 = 'id';
        var id = sessionStorage.getItem(key2);
        if (id != null) {
            return "Voir mon compte";
        }
        else {
            return "Connexion / Création compte";
        }
    };
    LoginService.prototype.getRole = function () {
        var key3 = 'role';
        var role = sessionStorage.getItem(key3);
        if (role == "user") {
            return false;
        }
        else {
            return true;
        }
    };
    LoginService.prototype.postUser = function (id, role) {
        var key2 = 'id';
        sessionStorage.setItem(key2, id.toString());
        console.log(sessionStorage.getItem(key2));
        var key3 = 'role';
        sessionStorage.setItem(key3, role.toString());
        console.log(sessionStorage.getItem(key3));
    };
    LoginService.prototype.isValid = function () {
        var key2 = 'id';
        var id = sessionStorage.getItem(key2);
        if (id != null) {
            return true;
        }
        else {
            return false;
        }
    };
    LoginService.prototype.hiddenConnexion = function () {
        var key2 = 'id';
        var id = sessionStorage.getItem(key2);
        if (id != null) {
            return true;
        }
        else {
            return false;
        }
    };
    LoginService.prototype.hiddenCompte = function () {
        var key2 = 'id';
        var id = sessionStorage.getItem(key2);
        if (id != null) {
            return false;
        }
        else {
            return true;
        }
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LoginService);
    return LoginService;
}());

//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdentificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__userConnexion__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_core_identification_service__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_core_login_service__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__compte_compte__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__new_identification_new_identification__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the IdentificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IdentificationPage = /** @class */ (function () {
    function IdentificationPage(navCtrl, navParams, identificationService, loginService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.identificationService = identificationService;
        this.loginService = loginService;
        this.userConnexion = new __WEBPACK_IMPORTED_MODULE_2__userConnexion__["a" /* UserConnexion */]();
        this.connexion = "";
    }
    IdentificationPage.prototype.onSubmit2 = function (value) {
        var _this = this;
        this.accesCompte = null;
        console.log(value.email2);
        console.log(value.password2);
        this.getIdentificationUser(this.userConnexion).subscribe(function (accesCompte) {
            _this.getId(_this.userConnexion.email);
        }, function (err) {
            _this.connexion = "Mot de passe ou email incorrect ";
        });
    };
    IdentificationPage.prototype.getIdentificationUser = function (userConnexion) {
        var _this = this;
        return this.identificationService.getIdentificationUser(this.userConnexion).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (accesCompte) { return _this.accesCompte = accesCompte; }));
    };
    IdentificationPage.prototype.getId = function (email) {
        var _this = this;
        this.identificationService.getId(email).subscribe(function (user) { return _this.redirectToCompte(user); });
    };
    IdentificationPage.prototype.redirectToCompte = function (userConnexion) {
        this.userConnexion.id = userConnexion.id;
        this.userConnexion.role = userConnexion.role;
        this.loginService.postUser(this.userConnexion.id, this.userConnexion.role);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__compte_compte__["a" /* ComptePage */]);
        //this.loginService.postUser(this.userConnexion);
    };
    IdentificationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IdentificationPage');
    };
    IdentificationPage.prototype.goToOtherPage = function () {
        //push another page onto the history stack
        //causing the nav controller to animate the new page in
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__new_identification_new_identification__["a" /* NewIdentificationPage */]);
    };
    IdentificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-identification',template:/*ion-inline-start:"D:\MobileProjectLA2\MobileProject\src\pages\identification\identification.html"*/'<!--\n\n  Generated template for the IdentificationPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      PCHealthcare\n\n    </ion-title>\n\n  </ion-navbar>\n\n	<img src="../../assets/imgs/banniere2.jpg" width="100%" height="auto"/>\n\n</ion-header>\n\n\n\n<ion-content padding class="bg-style no-scroll">\n\n	\n\n	\n\n		<h2>Connexion</h2>\n\n	<br>\n\n				<form  (ngSubmit)="onSubmit2(loginForm2.value)" #loginForm2="ngForm">\n\n					<ion-list>\n\n						<ion-item>\n\n						<ion-label floating>Email</ion-label>\n\n						<ion-input type="email"  id="email2" name="email2" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" [(ngModel)]="userConnexion.email" #email2="ngModel"></ion-input>\n\n							\n\n						</ion-item>\n\n						<ion-item no-border no-lines no-margin *ngIf="email2.hasError(\'pattern\') && !email2.hasError(\'required\')" >\n\n    					<small color="red">Veuillez renseigner une adresse valide.</small>\n\n    					\n\n  						</ion-item>\n\n						\n\n				\n\n                        <ion-item>\n\n						<ion-label floating>Mot de passe</ion-label>\n\n						<ion-input type="password" id="password2" name="password2" required [(ngModel)]="userConnexion.password" #password2="ngModel" ></ion-input>\n\n						\n\n						</ion-item>\n\n						<ion-item>\n\n						</ion-item>\n\n					    \n\n					</ion-list>\n\n\n\n					<button  ion-button type="submit" class="btn btn-success" [disabled]="!loginForm2.form.valid">Connexion</button>\n\n					<p> {{connexion}}</p>\n\n				</form>\n\n				<p class="underline" (click)="goToOtherPage()"> Créer un compte </p>\n\n		\n\n			\n\n</ion-content>\n\n<!--<ion-label color="primary" floating>Floating Label</ion-label>\n\n    <ion-input></ion-input-->\n\n\n\n\n\n'/*ion-inline-end:"D:\MobileProjectLA2\MobileProject\src\pages\identification\identification.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__app_core_identification_service__["a" /* IdentificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__app_core_identification_service__["a" /* IdentificationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__app_core_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__app_core_login_service__["a" /* LoginService */]) === "function" && _d || Object])
    ], IdentificationPage);
    return IdentificationPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=identification.js.map

/***/ })

},[254]);
//# sourceMappingURL=main.js.map