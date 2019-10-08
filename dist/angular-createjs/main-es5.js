(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/canvas/canvas01/canvas01.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/canvas/canvas01/canvas01.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <canvas #myCanvas width=\"400\" height=\"400\"></canvas>\n  <div>\n    幅 <input type=\"range\" min=\"1\" max=\"400\" [(ngModel)]=\"rectW\" /><br />\n    高さ <input type=\"range\" min=\"1\" max=\"400\" [(ngModel)]=\"rectH\" /><br />\n    塗りの色 <input type=\"color\" [(ngModel)]=\"rectColor\" placeholder=\"color\" value=\"{{rectColor}}\" />\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/canvas/canvas02/canvas02.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/canvas/canvas02/canvas02.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<canvas #myCanvas id=\"myCanvas\" width=\"400\" height=\"400\"></canvas>\n<div>\n  Size<input type=\"range\" min=\"10\" max=\"100\" [(ngModel)]=\"size\"><br>\n  Height<input type=\"range\" min=\"1\" max=\"400\" [(ngModel)]=\"height\"><br>\n  Color<input type=\"color\" [(ngModel)]=\"color\" placeholder=\"color\" value=\"{{color}}\"><br>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/canvas/canvas03/canvas03.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/canvas/canvas03/canvas03.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<canvas #canvas id=\"canvas\" width=\"400\" height=\"400\"></canvas>\n<input type=\"color\" placeholder=\"color\" value=\"{{color}}\" [(ngModel)]=\"color\"><br>\n<input type=\"range\" min=\"0\" max=\"255\" [(ngModel)]=\"red\"><br>\n<input type=\"range\" min=\"0\" max=\"255\" [(ngModel)]=\"green\"><br>\n<input type=\"range\" min=\"0\" max=\"255\" [(ngModel)]=\"blue\"><br>\n<input type=\"range\" min=\"0\" max=\"400\" [(ngModel)]=\"aaa\"><br>\n<input type=\"range\" min=\"0\" max=\"400\" [(ngModel)]=\"bbb\"><br>\n<input type=\"range\" min=\"1\" max=\"2\" step=\"0.01\" [(ngModel)]=\"ccc\"><br>\n<input type=\"range\" min=\"0.1\" max=\"1\" step=\"0.1\" [(ngModel)]=\"ddd\"><br>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/canvas/canvas04/canvas04.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/canvas/canvas04/canvas04.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <canvas #canvas id=\"canvas\" width=\"600\" height=\"600\"></canvas>\n  <div class=\"button-container\">\n    <button class=\"scale\" [class.big]=\"nowScale === 'Big'\" (click)=\"toggleScale()\">{{nowScale}}</button>\n    <button class=\"max-life\" [class.long]=\"nowMaxLife === 'Long'\" (click)=\"toggleMaxLife()\">{{nowMaxLife}}</button>\n    <button class=\"gravity\" [class.heavy]=\"nowGravity === 'Heavy'\" (click)=\"toggleGravity()\">{{nowGravity}}</button>\n    <button class=\"change-background\" (click)=\"changeBackground()\">Change Background</button>\n  </div>\n  <button class=\"go-back\" routerLink=\"\">Back</button>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/list/list.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/list/list.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button routerLink=\"/canvas01\">canvas01</button>\n<button routerLink=\"/canvas02\">canvas02</button>\n<button routerLink=\"/canvas03\">canvas03</button>\n<button routerLink=\"/canvas04\">canvas04</button>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _canvas_canvas01_canvas01_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./canvas/canvas01/canvas01.component */ "./src/app/canvas/canvas01/canvas01.component.ts");
/* harmony import */ var _canvas_canvas02_canvas02_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./canvas/canvas02/canvas02.component */ "./src/app/canvas/canvas02/canvas02.component.ts");
/* harmony import */ var _canvas_canvas03_canvas03_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./canvas/canvas03/canvas03.component */ "./src/app/canvas/canvas03/canvas03.component.ts");
/* harmony import */ var _canvas_canvas04_canvas04_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./canvas/canvas04/canvas04.component */ "./src/app/canvas/canvas04/canvas04.component.ts");








var routes = [
    { path: '', component: _list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"] },
    { path: 'canvas01', component: _canvas_canvas01_canvas01_component__WEBPACK_IMPORTED_MODULE_4__["Canvas01Component"] },
    { path: 'canvas02', component: _canvas_canvas02_canvas02_component__WEBPACK_IMPORTED_MODULE_5__["Canvas02Component"] },
    { path: 'canvas03', component: _canvas_canvas03_canvas03_component__WEBPACK_IMPORTED_MODULE_6__["Canvas03Component"] },
    { path: 'canvas04', component: _canvas_canvas04_canvas04_component__WEBPACK_IMPORTED_MODULE_7__["Canvas04Component"] },
    { path: '*', redirectTo: '', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _canvas_canvas01_canvas01_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./canvas/canvas01/canvas01.component */ "./src/app/canvas/canvas01/canvas01.component.ts");
/* harmony import */ var _canvas_canvas02_canvas02_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./canvas/canvas02/canvas02.component */ "./src/app/canvas/canvas02/canvas02.component.ts");
/* harmony import */ var _canvas_canvas03_canvas03_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./canvas/canvas03/canvas03.component */ "./src/app/canvas/canvas03/canvas03.component.ts");
/* harmony import */ var _canvas_canvas04_canvas04_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./canvas/canvas04/canvas04.component */ "./src/app/canvas/canvas04/canvas04.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _list_list_component__WEBPACK_IMPORTED_MODULE_6__["ListComponent"],
                _canvas_canvas01_canvas01_component__WEBPACK_IMPORTED_MODULE_7__["Canvas01Component"],
                _canvas_canvas02_canvas02_component__WEBPACK_IMPORTED_MODULE_8__["Canvas02Component"],
                _canvas_canvas03_canvas03_component__WEBPACK_IMPORTED_MODULE_9__["Canvas03Component"],
                _canvas_canvas04_canvas04_component__WEBPACK_IMPORTED_MODULE_10__["Canvas04Component"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/canvas/canvas01/canvas01.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/canvas/canvas01/canvas01.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "canvas {\n  background: lightgray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaWkvZ2l0L2FuZ3VsYXItY3JlYXRlanMvc3JjL2FwcC9jYW52YXMvY2FudmFzMDEvY2FudmFzMDEuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NhbnZhcy9jYW52YXMwMS9jYW52YXMwMS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jYW52YXMvY2FudmFzMDEvY2FudmFzMDEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJjYW52YXMge1xuICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG59IiwiY2FudmFzIHtcbiAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/canvas/canvas01/canvas01.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/canvas/canvas01/canvas01.component.ts ***!
  \*******************************************************/
/*! exports provided: Canvas01Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Canvas01Component", function() { return Canvas01Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Canvas01Component = /** @class */ (function () {
    function Canvas01Component() {
        this.rectW = 100;
        this.rectH = 100;
        this.rectColor = '#FF0000';
    }
    Canvas01Component.prototype.ngAfterViewInit = function () {
        // 参照をとれる
        var canvas = this.myCanvas.nativeElement;
        this.context = canvas.getContext('2d');
        this.draw();
    };
    /** 値の変更時を監視するライフサイクルイベント */
    Canvas01Component.prototype.ngDoCheck = function () {
        this.draw();
    };
    /** Canvas要素を更新します。 */
    Canvas01Component.prototype.draw = function () {
        var ctx = this.context;
        if (ctx) {
            ctx.clearRect(0, 0, 400, 400);
            ctx.fillStyle = this.rectColor;
            ctx.fillRect(0, 0, this.rectW, this.rectH);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myCanvas', { static: false })
    ], Canvas01Component.prototype, "myCanvas", void 0);
    Canvas01Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-canvas01',
            template: __webpack_require__(/*! raw-loader!./canvas01.component.html */ "./node_modules/raw-loader/index.js!./src/app/canvas/canvas01/canvas01.component.html"),
            styles: [__webpack_require__(/*! ./canvas01.component.scss */ "./src/app/canvas/canvas01/canvas01.component.scss")]
        })
    ], Canvas01Component);
    return Canvas01Component;
}());



/***/ }),

/***/ "./src/app/canvas/canvas02/canvas02.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/canvas/canvas02/canvas02.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "canvas {\n  background: lightgray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaWkvZ2l0L2FuZ3VsYXItY3JlYXRlanMvc3JjL2FwcC9jYW52YXMvY2FudmFzMDIvY2FudmFzMDIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NhbnZhcy9jYW52YXMwMi9jYW52YXMwMi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jYW52YXMvY2FudmFzMDIvY2FudmFzMDIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJjYW52YXMge1xuICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG59IiwiY2FudmFzIHtcbiAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/canvas/canvas02/canvas02.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/canvas/canvas02/canvas02.component.ts ***!
  \*******************************************************/
/*! exports provided: Canvas02Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Canvas02Component", function() { return Canvas02Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var createjs_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! createjs-module */ "./node_modules/createjs-module/createjs.js");
/* harmony import */ var createjs_module__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(createjs_module__WEBPACK_IMPORTED_MODULE_2__);



var Canvas02Component = /** @class */ (function () {
    function Canvas02Component() {
        this.size = 10;
        this.height = 200;
        this.color = '#FF00FF';
    }
    Canvas02Component.prototype.ngOnInit = function () {
        this.stage = new createjs_module__WEBPACK_IMPORTED_MODULE_2__["Stage"]('myCanvas');
        this.shape = new createjs_module__WEBPACK_IMPORTED_MODULE_2__["Shape"]();
        createjs_module__WEBPACK_IMPORTED_MODULE_2__["Ticker"].framerate = 60;
        createjs_module__WEBPACK_IMPORTED_MODULE_2__["Ticker"].addEventListener('tick', this.stage);
    };
    Canvas02Component.prototype.ngDoCheck = function () {
        this.shape.graphics.beginFill(this.color).drawCircle(0, 0, this.size);
        this.shape.y = this.height;
        this.stage.addChild(this.shape);
        this.stage.update();
        createjs_module__WEBPACK_IMPORTED_MODULE_2__["Tween"].get(this.shape, { loop: true })
            .to({ x: 400 }, 1000, createjs_module__WEBPACK_IMPORTED_MODULE_2__["Ease"].getPowInOut(4))
            .to({ x: 100 }, 800, createjs_module__WEBPACK_IMPORTED_MODULE_2__["Ease"].getPowInOut(2));
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myCanvas', { static: false })
    ], Canvas02Component.prototype, "myCanvas", void 0);
    Canvas02Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-canvas02',
            template: __webpack_require__(/*! raw-loader!./canvas02.component.html */ "./node_modules/raw-loader/index.js!./src/app/canvas/canvas02/canvas02.component.html"),
            styles: [__webpack_require__(/*! ./canvas02.component.scss */ "./src/app/canvas/canvas02/canvas02.component.scss")]
        })
    ], Canvas02Component);
    return Canvas02Component;
}());



/***/ }),

/***/ "./src/app/canvas/canvas03/canvas03.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/canvas/canvas03/canvas03.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "canvas {\n  background: lightgray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaWkvZ2l0L2FuZ3VsYXItY3JlYXRlanMvc3JjL2FwcC9jYW52YXMvY2FudmFzMDMvY2FudmFzMDMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NhbnZhcy9jYW52YXMwMy9jYW52YXMwMy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jYW52YXMvY2FudmFzMDMvY2FudmFzMDMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJjYW52YXMge1xuICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG59IiwiY2FudmFzIHtcbiAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/canvas/canvas03/canvas03.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/canvas/canvas03/canvas03.component.ts ***!
  \*******************************************************/
/*! exports provided: Canvas03Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Canvas03Component", function() { return Canvas03Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var createjs_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! createjs-module */ "./node_modules/createjs-module/createjs.js");
/* harmony import */ var createjs_module__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(createjs_module__WEBPACK_IMPORTED_MODULE_2__);



var Canvas03Component = /** @class */ (function () {
    function Canvas03Component() {
        this.color = '#ff0000';
        this.red = 0;
        this.green = 0;
        this.blue = 0;
        this.aaa = 200;
        this.bbb = 200;
        this.ccc = 1;
        this.ddd = 1;
    }
    Canvas03Component.prototype.ngAfterViewInit = function () {
        this.stage = new createjs_module__WEBPACK_IMPORTED_MODULE_2__["Stage"]('canvas');
        this.shape = new createjs_module__WEBPACK_IMPORTED_MODULE_2__["Shape"]();
    };
    Canvas03Component.prototype.ngAfterViewChecked = function () {
        this.shape.graphics.beginFill(createjs_module__WEBPACK_IMPORTED_MODULE_2__["Graphics"].getRGB(this.red, this.green, this.blue));
        this.shape.graphics.drawCircle(0, 0, 100);
        this.shape.x = this.aaa;
        this.shape.y = this.bbb;
        this.shape.scaleX = this.ccc;
        this.shape.scaleY = this.ccc;
        this.shape.alpha = this.ddd;
        this.stage.addChild(this.shape);
        this.stage.update();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvas', { static: false })
    ], Canvas03Component.prototype, "canvas", void 0);
    Canvas03Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-canvas03',
            template: __webpack_require__(/*! raw-loader!./canvas03.component.html */ "./node_modules/raw-loader/index.js!./src/app/canvas/canvas03/canvas03.component.html"),
            styles: [__webpack_require__(/*! ./canvas03.component.scss */ "./src/app/canvas/canvas03/canvas03.component.scss")]
        })
    ], Canvas03Component);
    return Canvas03Component;
}());



/***/ }),

/***/ "./src/app/canvas/canvas04/canvas04.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/canvas/canvas04/canvas04.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  width: 600px;\n}\n\ncanvas {\n  background: #ddd;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\n}\n\n.button-container {\n  width: 600px;\n  display: flex;\n  justify-content: space-between;\n  margin: 16px 0 20px;\n}\n\nbutton {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  outline: none;\n  font-size: 18px;\n  width: 140px;\n  height: 54px;\n  border-radius: 8px;\n  color: #FFF;\n  cursor: pointer;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\n  transition: 0.2s ease-out;\n}\n\nbutton:hover {\n  font-size: 20px;\n  transform: scale(1.02);\n  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2);\n}\n\nbutton:active {\n  transform: translateY(2px);\n}\n\nbutton.scale {\n  background-color: #E57373;\n}\n\nbutton.scale.big {\n  background-color: #871919;\n}\n\nbutton.max-life {\n  background-color: #64B5F6;\n}\n\nbutton.max-life.long {\n  background-color: #095999;\n}\n\nbutton.gravity {\n  background-color: #FFD54F;\n}\n\nbutton.gravity.heavy {\n  background-color: #967300;\n}\n\nbutton.change-background {\n  background-color: #4DB6AC;\n}\n\nbutton.change-background:active {\n  background-color: #163532;\n}\n\nbutton.go-back {\n  display: block;\n  background-color: #444;\n  margin: 0 auto;\n  width: 94px;\n  height: 40px;\n}\n\nbutton.go-back:hover {\n  font-size: 18px;\n  transform: scale(1.02);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaWkvZ2l0L2FuZ3VsYXItY3JlYXRlanMvc3JjL2FwcC9jYW52YXMvY2FudmFzMDQvY2FudmFzMDQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NhbnZhcy9jYW52YXMwNC9jYW52YXMwNC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLCtHQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLHdCQUFBO0tBQUEscUJBQUE7VUFBQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsK0dBQUE7RUFDQSx5QkFBQTtBQ0NGOztBRENFO0VBQ0UsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsK0dBQUE7QUNDSjs7QURFRTtFQUNFLDBCQUFBO0FDQUo7O0FER0U7RUFDRSx5QkFBQTtBQ0RKOztBREdJO0VBQ0UseUJBQUE7QUNETjs7QURLRTtFQUNFLHlCQUFBO0FDSEo7O0FES0k7RUFDRSx5QkFBQTtBQ0hOOztBRE9FO0VBQ0UseUJBQUE7QUNMSjs7QURPSTtFQUNFLHlCQUFBO0FDTE47O0FEU0U7RUFDRSx5QkFBQTtBQ1BKOztBRFNJO0VBQ0UseUJBQUE7QUNQTjs7QURXRTtFQUNFLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ1RKOztBRFdJO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FDVEoiLCJmaWxlIjoic3JjL2FwcC9jYW52YXMvY2FudmFzMDQvY2FudmFzMDQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XG4gIHdpZHRoOiA2MDBweDtcbn1cblxuY2FudmFzIHtcbiAgYmFja2dyb3VuZDogI2RkZDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsMCwwLDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsMCwwLDAuMTIpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLDAuMik7XG59XG5cbi5idXR0b24tY29udGFpbmVyIHtcbiAgd2lkdGggOjYwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbjoxNnB4IDAgMjBweDtcbn1cblxuYnV0dG9uIHtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB3aWR0aDogMTQwcHg7XG4gIGhlaWdodDogNTRweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBjb2xvcjogI0ZGRjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsMCwwLDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsMCwwLDAuMTIpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLDAuMik7XG4gIHRyYW5zaXRpb246IC4ycyBlYXNlLW91dDtcblxuICAmOmhvdmVyIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcbiAgICBib3gtc2hhZG93OiAwIDNweCAzcHggMCByZ2JhKDAsMCwwLDAuMTQpLCAwIDFweCA3cHggMCByZ2JhKDAsMCwwLDAuMTIpLCAwIDNweCAxcHggLTFweCByZ2JhKDAsMCwwLDAuMik7XG4gIH1cblxuICAmOmFjdGl2ZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XG4gIH1cblxuICAmLnNjYWxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTU3MzczO1xuXG4gICAgJi5iaWcge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCNFNTczNzMsIDM2JSk7XG4gICAgfVxuICB9XG5cbiAgJi5tYXgtbGlmZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY0QjVGNjtcblxuICAgICYubG9uZyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oIzY0QjVGNiwgMzYlKTtcbiAgICB9XG4gIH1cblxuICAmLmdyYXZpdHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkQ1NEY7XG5cbiAgICAmLmhlYXZ5IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigjRkZENTRGLCAzNiUpO1xuICAgIH1cbiAgfVxuXG4gICYuY2hhbmdlLWJhY2tncm91bmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0REI2QUM7XG5cbiAgICAmOmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oIzREQjZBQywgMzYlKTtcbiAgICB9XG4gIH1cblxuICAmLmdvLWJhY2sge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6IDk0cHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuXG4gICAgJjpob3ZlciB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XG4gICAgfVxuICB9XG59XG4iLCIud3JhcHBlciB7XG4gIHdpZHRoOiA2MDBweDtcbn1cblxuY2FudmFzIHtcbiAgYmFja2dyb3VuZDogI2RkZDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5idXR0b24tY29udGFpbmVyIHtcbiAgd2lkdGg6IDYwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbjogMTZweCAwIDIwcHg7XG59XG5cbmJ1dHRvbiB7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgd2lkdGg6IDE0MHB4O1xuICBoZWlnaHQ6IDU0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgY29sb3I6ICNGRkY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2Utb3V0O1xufVxuYnV0dG9uOmhvdmVyIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xuICBib3gtc2hhZG93OiAwIDNweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA3cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDNweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5idXR0b246YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XG59XG5idXR0b24uc2NhbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTU3MzczO1xufVxuYnV0dG9uLnNjYWxlLmJpZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4NzE5MTk7XG59XG5idXR0b24ubWF4LWxpZmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjRCNUY2O1xufVxuYnV0dG9uLm1heC1saWZlLmxvbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDk1OTk5O1xufVxuYnV0dG9uLmdyYXZpdHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZENTRGO1xufVxuYnV0dG9uLmdyYXZpdHkuaGVhdnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTY3MzAwO1xufVxuYnV0dG9uLmNoYW5nZS1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzREQjZBQztcbn1cbmJ1dHRvbi5jaGFuZ2UtYmFja2dyb3VuZDphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTYzNTMyO1xufVxuYnV0dG9uLmdvLWJhY2sge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiA5NHB4O1xuICBoZWlnaHQ6IDQwcHg7XG59XG5idXR0b24uZ28tYmFjazpob3ZlciB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/canvas/canvas04/canvas04.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/canvas/canvas04/canvas04.component.ts ***!
  \*******************************************************/
/*! exports provided: Canvas04Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Canvas04Component", function() { return Canvas04Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var createjs_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! createjs-module */ "./node_modules/createjs-module/createjs.js");
/* harmony import */ var createjs_module__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(createjs_module__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shapeGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shapeGenerator */ "./src/app/canvas/canvas04/shapeGenerator.ts");




var Canvas04Component = /** @class */ (function () {
    function Canvas04Component() {
        this.bg1 = '#ff9a9e';
        this.bg2 = '#a18cd1';
        this.scale = 1;
        this.nowScale = 'Small';
        this.maxLife = 100;
        this.nowMaxLife = 'Short';
        this.gravity = 0.1;
        this.nowGravity = 'Light';
    }
    Canvas04Component.prototype.ngAfterViewInit = function () {
        this.initStage();
        this.setBackground(this.bg1, this.bg2);
        this.initShape();
        this.initTicker();
    };
    Canvas04Component.prototype.initStage = function () {
        this.stage = new createjs_module__WEBPACK_IMPORTED_MODULE_2__["Stage"]('canvas');
    };
    Canvas04Component.prototype.setBackground = function (bg1, bg2) {
        this.background = new createjs_module__WEBPACK_IMPORTED_MODULE_2__["Shape"]();
        this.background.graphics.beginRadialGradientFill([bg1, bg2], [1, 0], 0, 0, 0, 300, 300, 600)
            .rect(0, 0, 600, 600);
        this.background.alpha = 0.4;
        this.background.cache(0, 0, 600, 600);
        this.stage.addChild(this.background);
    };
    Canvas04Component.prototype.initShape = function () {
        this.shapeGenerator = new _shapeGenerator__WEBPACK_IMPORTED_MODULE_3__["ShapeGenerator"]();
    };
    Canvas04Component.prototype.initTicker = function () {
        createjs_module__WEBPACK_IMPORTED_MODULE_2__["Ticker"].framerate = 60;
        createjs_module__WEBPACK_IMPORTED_MODULE_2__["Ticker"].addEventListener('tick', this.draw.bind(this));
    };
    Canvas04Component.prototype.draw = function () {
        this.shapeGenerator.generate(this.stage, this.scale, this.maxLife, this.gravity);
        this.stage.update();
    };
    Canvas04Component.prototype.toggleScale = function () {
        if (this.scale === 1) {
            this.scale = 4;
            this.nowScale = 'Big';
        }
        else {
            this.scale = 1;
            this.nowScale = 'Small';
        }
    };
    Canvas04Component.prototype.toggleMaxLife = function () {
        if (this.maxLife === 100) {
            this.maxLife = 400;
            this.nowMaxLife = 'Long';
        }
        else {
            this.maxLife = 100;
            this.nowMaxLife = 'Short';
        }
    };
    Canvas04Component.prototype.toggleGravity = function () {
        if (this.gravity === 0.1) {
            this.gravity = 1;
            this.nowGravity = 'Heavy';
        }
        else {
            this.gravity = 0.1;
            this.nowGravity = 'Light';
        }
    };
    Canvas04Component.prototype.changeBackground = function () {
        if (this.bg1 === '#ff9a9e') {
            this.bg1 = '#fda085';
        }
        else if (this.bg1 === '#fda085') {
            this.bg1 = '#96e6a1';
        }
        else if (this.bg1 === '#96e6a1') {
            this.bg1 = '#e2ebf0';
        }
        else if (this.bg1 === '#e2ebf0') {
            this.bg1 = '#ff9a9e';
        }
        if (this.bg2 === '#a18cd1') {
            this.bg2 = '#ffecd2';
        }
        else if (this.bg2 === '#ffecd2') {
            this.bg2 = '#84fab0';
        }
        else if (this.bg2 === '#84fab0') {
            this.bg2 = '#a18cd1';
        }
        this.setBackground(this.bg1, this.bg2);
    };
    Canvas04Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-canvas04',
            template: __webpack_require__(/*! raw-loader!./canvas04.component.html */ "./node_modules/raw-loader/index.js!./src/app/canvas/canvas04/canvas04.component.html"),
            styles: [__webpack_require__(/*! ./canvas04.component.scss */ "./src/app/canvas/canvas04/canvas04.component.scss")]
        })
    ], Canvas04Component);
    return Canvas04Component;
}());



/***/ }),

/***/ "./src/app/canvas/canvas04/shape.ts":
/*!******************************************!*\
  !*** ./src/app/canvas/canvas04/shape.ts ***!
  \******************************************/
/*! exports provided: Shape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shape", function() { return Shape; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var createjs_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! createjs-module */ "./node_modules/createjs-module/createjs.js");
/* harmony import */ var createjs_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(createjs_module__WEBPACK_IMPORTED_MODULE_1__);


var Shape = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Shape, _super);
    function Shape(vx, vy, life) {
        var _this = _super.call(this) || this;
        _this.vx = vx;
        _this.vy = vy;
        _this.life = life;
        return _this;
    }
    Shape.ctorParameters = function () { return [
        { type: Number },
        { type: Number },
        { type: Number }
    ]; };
    return Shape;
}(createjs_module__WEBPACK_IMPORTED_MODULE_1__["Shape"]));



/***/ }),

/***/ "./src/app/canvas/canvas04/shapeGenerator.ts":
/*!***************************************************!*\
  !*** ./src/app/canvas/canvas04/shapeGenerator.ts ***!
  \***************************************************/
/*! exports provided: ShapeGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapeGenerator", function() { return ShapeGenerator; });
/* harmony import */ var createjs_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! createjs-module */ "./node_modules/createjs-module/createjs.js");
/* harmony import */ var createjs_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(createjs_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shape */ "./src/app/canvas/canvas04/shape.ts");


var ShapeGenerator = /** @class */ (function () {
    function ShapeGenerator() {
        this.shapes = [];
    }
    // 図形生成
    ShapeGenerator.prototype.generate = function (stage, scale, maxLife, gravity) {
        this.vx = 30 * (Math.random() - 0.5);
        this.vy = 30 * (Math.random() - 0.5);
        this.life = maxLife * (Math.random() - 0.5);
        this.shape = new _shape__WEBPACK_IMPORTED_MODULE_1__["Shape"](this.vx, this.vy, this.life);
        this.shape.graphics
            .beginFill(createjs_module__WEBPACK_IMPORTED_MODULE_0__["Graphics"].getHSL(360 * Math.random(), 100 * Math.random(), 100 * Math.random()))
            .beginStroke(createjs_module__WEBPACK_IMPORTED_MODULE_0__["Graphics"].getHSL(360 * Math.random(), 100 * Math.random(), 100 * Math.random()))
            .setStrokeStyle(10 * Math.random())
            .drawPolyStar(0, 0, 50 * Math.random(), 20 * Math.random(), Math.random(), 360 * Math.random());
        this.shape.alpha = Math.random();
        this.shape.x = stage.mouseX;
        this.shape.y = stage.mouseY;
        this.shape.scaleX = this.shape.scaleY = scale;
        this.shapes.push(this.shape);
        stage.addChild(this.shape);
        // 更新処理
        for (var i = 0; i < this.shapes.length; i++) {
            // 配列から取り出す
            var fetchedShape = this.shapes[i];
            // 重力
            fetchedShape.vy += gravity;
            // 摩擦
            fetchedShape.vx *= 0.96;
            fetchedShape.vy *= 0.96;
            // 速度を位置に適用
            fetchedShape.x += fetchedShape.vx;
            fetchedShape.y += fetchedShape.vy;
            // 地面
            if (fetchedShape.y > stage.canvas.height) {
                // 行き過ぎ補正
                fetchedShape.y = stage.canvas.height;
                // Y軸の速度を反転
                fetchedShape.vy *= -1;
            }
            // 図形の大きさを残り寿命依存にする
            var fetchedShapeScale = fetchedShape.life / maxLife * scale;
            fetchedShape.scaleX = fetchedShape.scaleY = fetchedShapeScale;
            // 残り寿命を減らす
            fetchedShape.life -= 1;
            // 残り寿命が0以下になったらステージ及び配列から削除
            if (fetchedShape.life <= 0) {
                stage.removeChild(fetchedShape);
                this.shapes.splice(i, 1);
            }
        }
    };
    return ShapeGenerator;
}());



/***/ }),

/***/ "./src/app/list/list.component.scss":
/*!******************************************!*\
  !*** ./src/app/list/list.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/list/list.component.ts":
/*!****************************************!*\
  !*** ./src/app/list/list.component.ts ***!
  \****************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ListComponent = /** @class */ (function () {
    function ListComponent() {
    }
    ListComponent.prototype.ngOnInit = function () {
    };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/list/list.component.scss")]
        })
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nii/git/angular-createjs/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map