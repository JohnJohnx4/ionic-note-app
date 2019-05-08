(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notes-notes-module"],{

/***/ "./src/app/notes/note/note.component.html":
/*!************************************************!*\
  !*** ./src/app/notes/note/note.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <ion-card *ngFor=\"let note of notes; let i = index\" [routerLink]=\"['/notes/', note._id]\" routerLinkActive=\"router-link-active\" >\n    <ion-card-header>\n      <ion-card-title>{{ note.title }}</ion-card-title>\n      <ion-card-subtitle>{{ note.date | date: 'short' }}</ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>{{ note.content }}</ion-card-content>\n  </ion-card>\n</div>"

/***/ }),

/***/ "./src/app/notes/note/note.component.scss":
/*!************************************************!*\
  !*** ./src/app/notes/note/note.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGVzL25vdGUvbm90ZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/notes/note/note.component.ts":
/*!**********************************************!*\
  !*** ./src/app/notes/note/note.component.ts ***!
  \**********************************************/
/*! exports provided: NoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteComponent", function() { return NoteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_notes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/notes.service */ "./src/app/services/notes.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var NoteComponent = /** @class */ (function () {
    function NoteComponent(notesService, events) {
        this.notesService = notesService;
        this.events = events;
    }
    NoteComponent.prototype.getNotes = function () {
        var _this = this;
        this.notesService.getNotes().subscribe(function (notes) {
            _this.notes = notes.success;
        }, function (err) { return console.log(err); });
    };
    NoteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getNotes();
        this.events.subscribe('getNotes', function () {
            _this.getNotes();
        });
    };
    NoteComponent.prototype.toggleEdit = function (id) {
        console.log(id);
    };
    NoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-note',
            template: __webpack_require__(/*! ./note.component.html */ "./src/app/notes/note/note.component.html"),
            styles: [__webpack_require__(/*! ./note.component.scss */ "./src/app/notes/note/note.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_notes_service__WEBPACK_IMPORTED_MODULE_2__["NotesService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"]])
    ], NoteComponent);
    return NoteComponent;
}());



/***/ }),

/***/ "./src/app/notes/notes.module.ts":
/*!***************************************!*\
  !*** ./src/app/notes/notes.module.ts ***!
  \***************************************/
/*! exports provided: NotesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesPageModule", function() { return NotesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _notes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notes.page */ "./src/app/notes/notes.page.ts");
/* harmony import */ var _note_note_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./note/note.component */ "./src/app/notes/note/note.component.ts");








var routes = [
    {
        path: '',
        component: _notes_page__WEBPACK_IMPORTED_MODULE_6__["NotesPage"]
    }
];
var NotesPageModule = /** @class */ (function () {
    function NotesPageModule() {
    }
    NotesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_notes_page__WEBPACK_IMPORTED_MODULE_6__["NotesPage"], _note_note_component__WEBPACK_IMPORTED_MODULE_7__["NoteComponent"]]
        })
    ], NotesPageModule);
    return NotesPageModule;
}());



/***/ }),

/***/ "./src/app/notes/notes.page.html":
/*!***************************************!*\
  !*** ./src/app/notes/notes.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-button slot=\"start\" (click)=\"handleLogout()\">\n      <ion-icon\n        name=\"arrow-back\"\n        slot=\"icon-only\"\n      ></ion-icon>\n    </ion-button>\n    <ion-title>Notes Page</ion-title>\n    <ion-button color=\"tertiary\" slot=\"secondary\" href=\"/notes/add\">\n      <ion-icon name=\"add\"></ion-icon>Add Note</ion-button\n    >\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <app-note></app-note>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/notes/notes.page.scss":
/*!***************************************!*\
  !*** ./src/app/notes/notes.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGVzL25vdGVzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/notes/notes.page.ts":
/*!*************************************!*\
  !*** ./src/app/notes/notes.page.ts ***!
  \*************************************/
/*! exports provided: NotesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesPage", function() { return NotesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_notes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/notes.service */ "./src/app/services/notes.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var NotesPage = /** @class */ (function () {
    function NotesPage(notesService, alertCtrl, router) {
        this.notesService = notesService;
        this.alertCtrl = alertCtrl;
        this.router = router;
    }
    NotesPage.prototype.ngOnInit = function () { };
    NotesPage.prototype.submitNewNote = function () {
        this.notesService.addNote({ title: this.title, content: this.content });
    };
    NotesPage.prototype.handleLogout = function () {
        var _this = this;
        this.alertCtrl
            .create({
            header: 'Logging out',
            message: 'Are you sure you want to log out?',
            buttons: [
                {
                    text: 'Logout',
                    handler: function () { return _this.router.navigateByUrl('/'); }
                },
                {
                    text: 'No',
                    role: 'cancel'
                }
            ]
        })
            .then(function (alertEl) {
            alertEl.present();
        });
    };
    NotesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notes',
            template: __webpack_require__(/*! ./notes.page.html */ "./src/app/notes/notes.page.html"),
            styles: [__webpack_require__(/*! ./notes.page.scss */ "./src/app/notes/notes.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_notes_service__WEBPACK_IMPORTED_MODULE_2__["NotesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], NotesPage);
    return NotesPage;
}());



/***/ })

}]);
//# sourceMappingURL=notes-notes-module.js.map