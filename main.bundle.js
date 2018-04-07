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
/***/ (function(module, exports) {

module.exports = "#content {\r\n    margin: auto;\r\n    padding: 25px;\r\n}\r\n.canvas-card {\r\n    display: inline-block;\r\n\r\n}\r\ncanvas {\r\n    border: solid;\r\n}\r\n#input-card {\r\n    float: left;\r\n}\r\n#output-card {\r\n    float: right;\r\n}\r\n#Menu {\r\n    position: absolute;\r\n    z-index: 2;\r\n    background-color: #FFFFFF;\r\n    left: 34%;\r\n    top: 80%;\r\n}\r\nmat-progress-bar {\r\n    position: absolute;\r\n    z-index: 2;\r\n    top: 60%;\r\n    left: 33.1%;\r\n    max-width: 438px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n      <span>Digit Recognition</span>\n    </mat-toolbar-row>\n  </mat-toolbar>\n  <div id=\"content\">\n    <!--Input Card-->\n    <mat-card id=\"input-card\" class=\"canvas-card\">\n      <mat-card-header>\n        <div mat-card-avatar class=\"example-header-image\"></div>\n        <mat-card-title>Input</mat-card-title>\n      </mat-card-header>\n      <mat-card-content>\n        <div>\n            <canvas #input_canvas  width=\"350\" height=\"490\" oncontextmenu=\"return false;\"></canvas>\n        </div>\n      </mat-card-content>\n      <mat-card-actions>\n        <button mat-button (click)=\"clearCanvas()\">Clear</button>\n      </mat-card-actions>\n    </mat-card>\n    <!--Output Card-->\n    <mat-card id=\"output-card\" class=\"canvas-card\">\n        <mat-card-header>\n          <div mat-card-avatar class=\"example-header-image\"></div>\n          <mat-card-title>Output</mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n          <div>\n             <canvas #output_canvas width=\"350\" height=\"490\"></canvas>\n          </div>\n        </mat-card-content>\n        <mat-card-actions>\n          \n        </mat-card-actions>\n      </mat-card>\n      <!--Menu-->\n      <div id=\"Menu\">\n        <mat-toolbar #menu_toolbar color=\"primary\">\n          <mat-toolbar-row> \n            <span>Menu</span>\n          </mat-toolbar-row>\n        </mat-toolbar>\n        <button mat-button (click)=\"run()\">Run</button> \n        <button mat-button (click)=\"trainAll()\">Train</button> \n        <button mat-button (click)=\"createSamples()\">Generate Samples</button>\n        <button mat-button (click)=\"currentNoise()\">Add Noise</button>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popup_popup_component__ = __webpack_require__("./src/app/popup/popup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__trainingdialog_trainingdialog_component__ = __webpack_require__("./src/app/trainingdialog/trainingdialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__generatepopup_generatepopup_component__ = __webpack_require__("./src/app/generatepopup/generatepopup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__perceptron__ = __webpack_require__("./src/app/perceptron.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var AppComponent = /** @class */ (function () {
    function AppComponent(popup, generate_popup, dialog) {
        this.popup = popup;
        this.generate_popup = generate_popup;
        this.dialog = dialog;
        this.title = 'app';
        this.mouse_down = false;
        this.last_mX = 0;
        this.last_mY = 0;
        this.color = 'primary';
        this.mode = 'determinate';
        this.value = 50;
        this.bufferValue = 75;
        this.grid_buffer = new Array(35).fill(0);
        /* Non UI Variables */
        this.templates = [
            [0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0],
            [0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1],
            [0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
            [0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
            [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0],
            [0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0],
            [1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0],
            [0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0],
        ];
        this.error = [
            1, 1, 1, 1, 1,
            1, 0, 0, 0, 0,
            1, 0, 0, 0, 0,
            1, 1, 1, 1, 1,
            1, 0, 0, 0, 0,
            1, 0, 0, 0, 0,
            1, 1, 1, 1, 1,
        ];
        this.perceptrons = [];
        this.samples = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        for (var i = 0; i < 10; i++) {
            this.perceptrons.push(new __WEBPACK_IMPORTED_MODULE_5__perceptron__["a" /* Perceptron */](i));
        }
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        var in_canvas = this.input_canvas.nativeElement;
        var card = in_canvas.parentNode.parentNode;
        var context = in_canvas.getContext('2d');
        in_canvas.addEventListener('mousedown', function (e) {
            that.DrawRect(context, e.clientX - in_canvas.offsetLeft - card.offsetLeft, e.clientY - in_canvas.offsetTop - card.offsetTop);
            context.fillStyle = (e.button === 0) ? 'rgba(0, 0, 0, 1)' : 'rgba(255, 255, 255, 1)';
            that.mouse_down = true;
        });
        in_canvas.addEventListener('mousemove', function (e) {
            if (that.mouse_down) {
                that.DrawRect(context, e.clientX - in_canvas.offsetLeft - card.offsetLeft, e.clientY - in_canvas.offsetTop - card.offsetTop);
            }
        });
        in_canvas.addEventListener('mouseup', function () {
            that.mouse_down = false;
        });
    };
    AppComponent.prototype.sleep = function (milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > milliseconds) {
                break;
            }
        }
    };
    AppComponent.prototype.createSamples = function () {
        this.samples = [];
        for (var i = 0; i < 10; i++) {
            this.samples.push({ data: this.templates[i].concat(), target_number: i });
            for (var j = 0; j < 29; j++) {
                var noised = this.templates[i].concat();
                noised = this.addNoise(noised);
                this.samples.push({ data: noised.concat(), target_number: i });
            }
        }
        this.openGenDone();
        console.log(this.samples);
    };
    AppComponent.prototype.shuffle = function (a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
    };
    AppComponent.prototype.trainAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var dialog, i;
            return __generator(this, function (_a) {
                dialog = this.inTraining();
                this.shuffle(this.samples);
                for (i = 0; i < this.perceptrons.length; i++) {
                    this.perceptrons[i].train(this.samples, 10000);
                }
                this.openTrainDone();
                this.clearCanvas();
                dialog.close();
                return [2 /*return*/];
            });
        });
    };
    AppComponent.prototype.run = function () {
        for (var i = 0; i < this.perceptrons.length; i++) {
            var out = this.perceptrons[i].activate(this.perceptrons[i].sum(this.grid_buffer));
            if (out === 1) {
                this.DrawRectFromData(this.templates[i], this.output_canvas.nativeElement.getContext('2d'));
                return;
            }
            else { }
        }
        this.DrawRectFromData(this.error, this.output_canvas.nativeElement.getContext('2d'));
    };
    AppComponent.prototype.DrawRect = function (ctx, x, y) {
        var gridX = Math.floor(x / 70), gridY = Math.floor(y / 70);
        ctx.fillRect(gridX * 70, gridY * 70, 70, 70);
        this.grid_buffer[gridX + gridY * 5] = 1 - (this.parseRGB(ctx.fillStyle) / 255);
    };
    AppComponent.prototype.DrawRectFromData = function (data, ctx) {
        for (var i = 0; i < 7; i++) {
            for (var j = 0; j < 5; j++) {
                var val = 255 - Math.floor(data[j + i * 5] * 255);
                ctx.fillStyle = 'rgba(' + val + ', ' + val + ', ' + val + ', 1)';
                ctx.fillRect(j * 70, i * 70, 70, 70);
            }
        }
    };
    AppComponent.prototype.currentNoise = function () { this.grid_buffer = this.addNoise(this.grid_buffer); this.DrawRectFromData(this.grid_buffer, this.input_canvas.nativeElement.getContext('2d')); };
    AppComponent.prototype.addNoise = function (m_digit) {
        for (var k = 0; k < m_digit.length; k++) {
            if (Math.random() < 0.10) {
                if (m_digit[k] == 0) {
                    m_digit[k] += Math.random();
                }
                else {
                    m_digit[k] -= (Math.random() * m_digit[k]);
                }
            }
        }
        return m_digit;
    };
    AppComponent.prototype.parseRGB = function (color) {
        var s = color[1];
        s += color[2];
        var x = parseInt(s, 16);
        return x;
    };
    AppComponent.prototype.clearCanvas = function () {
        var ctx = this.input_canvas.nativeElement.getContext('2d');
        ctx.clearRect(0, 0, this.input_canvas.nativeElement.width, this.input_canvas.nativeElement.height);
        this.grid_buffer = new Array(35).fill(0);
    };
    AppComponent.prototype.inTraining = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__trainingdialog_trainingdialog_component__["a" /* TrainingdialogComponent */], {
            width: '500px',
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
        return dialogRef;
    };
    AppComponent.prototype.openTrainDone = function () {
        this.popup.openFromComponent(__WEBPACK_IMPORTED_MODULE_2__popup_popup_component__["a" /* PopupComponent */], {
            duration: 500,
        });
    };
    AppComponent.prototype.openGenDone = function () {
        this.popup.openFromComponent(__WEBPACK_IMPORTED_MODULE_4__generatepopup_generatepopup_component__["a" /* GeneratepopupComponent */], {
            duration: 500,
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* ViewChild */])('input_canvas'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], AppComponent.prototype, "input_canvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* ViewChild */])('output_canvas'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], AppComponent.prototype, "output_canvas", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatDialog */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_toolbar__ = __webpack_require__("./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_card__ = __webpack_require__("./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_button__ = __webpack_require__("./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_progress_bar__ = __webpack_require__("./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_slide_toggle__ = __webpack_require__("./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_dialog__ = __webpack_require__("./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_snack_bar__ = __webpack_require__("./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_progress_spinner__ = __webpack_require__("./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__popup_popup_component__ = __webpack_require__("./src/app/popup/popup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__trainingdialog_trainingdialog_component__ = __webpack_require__("./src/app/trainingdialog/trainingdialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__generatepopup_generatepopup_component__ = __webpack_require__("./src/app/generatepopup/generatepopup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//Material Components











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__popup_popup_component__["a" /* PopupComponent */],
                __WEBPACK_IMPORTED_MODULE_13__trainingdialog_trainingdialog_component__["a" /* TrainingdialogComponent */],
                __WEBPACK_IMPORTED_MODULE_14__generatepopup_generatepopup_component__["a" /* GeneratepopupComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_toolbar__["a" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_progress_bar__["a" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_slide_toggle__["a" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_dialog__["b" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material_snack_bar__["b" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material_progress_spinner__["a" /* MatProgressSpinnerModule */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_12__popup_popup_component__["a" /* PopupComponent */],
                __WEBPACK_IMPORTED_MODULE_13__trainingdialog_trainingdialog_component__["a" /* TrainingdialogComponent */],
                __WEBPACK_IMPORTED_MODULE_14__generatepopup_generatepopup_component__["a" /* GeneratepopupComponent */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/generatepopup/generatepopup.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/generatepopup/generatepopup.component.html":
/***/ (function(module, exports) {

module.exports = "<span style=\"font-family: 'Roboto', sans-serif;\"> Done Generating Samples!</span>\n"

/***/ }),

/***/ "./src/app/generatepopup/generatepopup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneratepopupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GeneratepopupComponent = /** @class */ (function () {
    function GeneratepopupComponent() {
    }
    GeneratepopupComponent.prototype.ngOnInit = function () {
    };
    GeneratepopupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-generatepopup',
            template: __webpack_require__("./src/app/generatepopup/generatepopup.component.html"),
            styles: [__webpack_require__("./src/app/generatepopup/generatepopup.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GeneratepopupComponent);
    return GeneratepopupComponent;
}());



/***/ }),

/***/ "./src/app/perceptron.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Perceptron; });
var Perceptron = /** @class */ (function () {
    function Perceptron(id_param) {
        this.weights = [];
        for (var i = 0; i < 35; i++) {
            this.weights.push(0);
        }
        this.theta = 0;
        this.id = id_param;
        return this;
    }
    Perceptron.prototype.sum = function (inputs) {
        var s = 0;
        for (var i = 0; i < this.weights.length; i++) {
            s += (this.weights[i] * inputs[i]);
        }
        return s;
    };
    Perceptron.prototype.activate = function (s) {
        return (s > this.theta) ? 1 : 0;
    };
    Perceptron.prototype.train = function (samples, max_itterations) {
        var total_error = 0, itterations = 0;
        do {
            total_error = 0;
            ++itterations;
            for (var i = 0; i < samples.length; i++) {
                var output = this.activate(this.sum(samples[i].data));
                var target = (this.id === samples[i].target_number) ? 1 : 0;
                var error = target - output;
                total_error += Math.abs(error);
                for (var j = 0; j < this.weights.length; j++) {
                    var delta_w = 0.25 * (target - output) * samples[i].data[j];
                    this.weights[j] += delta_w;
                }
                this.theta += 0.25 * (target - output) * -1;
            }
        } while (total_error != 0 && itterations < max_itterations);
    };
    return Perceptron;
}());



/***/ }),

/***/ "./src/app/popup/popup.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/popup/popup.component.html":
/***/ (function(module, exports) {

module.exports = "<span style=\"font-family: 'Roboto', sans-serif;\">\nDone Training!\n</span>"

/***/ }),

/***/ "./src/app/popup/popup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PopupComponent = /** @class */ (function () {
    function PopupComponent() {
    }
    PopupComponent.prototype.ngOnInit = function () {
    };
    PopupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-popup',
            template: __webpack_require__("./src/app/popup/popup.component.html"),
            styles: [__webpack_require__("./src/app/popup/popup.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PopupComponent);
    return PopupComponent;
}());



/***/ }),

/***/ "./src/app/trainingdialog/trainingdialog.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/trainingdialog/trainingdialog.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-progress-spinner\n       [color]=\"color\"\n       [mode]=\"mode\"\n       [value]=\"value\">"

/***/ }),

/***/ "./src/app/trainingdialog/trainingdialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainingdialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TrainingdialogComponent = /** @class */ (function () {
    function TrainingdialogComponent() {
        this.color = 'primary';
        this.mode = 'indeterminate';
        this.value = 25;
    }
    TrainingdialogComponent.prototype.ngOnInit = function () {
    };
    TrainingdialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-trainingdialog',
            template: __webpack_require__("./src/app/trainingdialog/trainingdialog.component.html"),
            styles: [__webpack_require__("./src/app/trainingdialog/trainingdialog.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TrainingdialogComponent);
    return TrainingdialogComponent;
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
    production: false
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
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