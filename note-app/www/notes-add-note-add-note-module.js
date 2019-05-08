(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notes-add-note-add-note-module"],{

/***/ "./src/app/notes/add-note/add-note.module.ts":
/*!***************************************************!*\
  !*** ./src/app/notes/add-note/add-note.module.ts ***!
  \***************************************************/
/*! exports provided: AddNotePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNotePageModule", function() { return AddNotePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_note_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-note.page */ "./src/app/notes/add-note/add-note.page.ts");







var routes = [
    {
        path: '',
        component: _add_note_page__WEBPACK_IMPORTED_MODULE_6__["AddNotePage"]
    }
];
var AddNotePageModule = /** @class */ (function () {
    function AddNotePageModule() {
    }
    AddNotePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_add_note_page__WEBPACK_IMPORTED_MODULE_6__["AddNotePage"]]
        })
    ], AddNotePageModule);
    return AddNotePageModule;
}());



/***/ }),

/***/ "./src/app/notes/add-note/add-note.page.html":
/*!***************************************************!*\
  !*** ./src/app/notes/add-note/add-note.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"/notes\"></ion-back-button>\n      </ion-buttons>\n    <ion-title>Add Note</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card padding>\n    <ion-item>\n      <ion-label position=\"floating\">Title</ion-label>\n      <ion-input [(ngModel)]=\"title\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Content</ion-label>\n      <ion-textarea [(ngModel)]=\"content\"></ion-textarea>\n    </ion-item>\n      <ion-button margin-top (click)=\"submitNewNote()\">Submit</ion-button>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/notes/add-note/add-note.page.scss":
/*!***************************************************!*\
  !*** ./src/app/notes/add-note/add-note.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGVzL2FkZC1ub3RlL2FkZC1ub3RlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/notes/add-note/add-note.page.ts":
/*!*************************************************!*\
  !*** ./src/app/notes/add-note/add-note.page.ts ***!
  \*************************************************/
/*! exports provided: AddNotePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNotePage", function() { return AddNotePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_notes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/notes.service */ "./src/app/services/notes.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AddNotePage = /** @class */ (function () {
    function AddNotePage(router, notesService, alertCtrl, events) {
        this.router = router;
        this.notesService = notesService;
        this.alertCtrl = alertCtrl;
        this.events = events;
    }
    AddNotePage.prototype.ngOnInit = function () { };
    AddNotePage.prototype.submitNewNote = function () {
        var _this = this;
        if (!this.title || !this.content) {
            return this.sendAlert();
        }
        this.notesService.addNote({ title: this.title, content: this.content }).subscribe(function (note) {
            _this.events.publish('getNotes');
            _this.router.navigateByUrl('/notes');
        });
    };
    AddNotePage.prototype.sendAlert = function () {
        this.alertCtrl
            .create({
            header: 'Empty fields',
            message: 'Please fill in all of the fields.',
            buttons: [
                {
                    text: 'Ok',
                    role: 'cancel'
                }
            ]
        })
            .then(function (alertEl) {
            alertEl.present();
        });
    };
    AddNotePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-note',
            template: __webpack_require__(/*! ./add-note.page.html */ "./src/app/notes/add-note/add-note.page.html"),
            styles: [__webpack_require__(/*! ./add-note.page.scss */ "./src/app/notes/add-note/add-note.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_services_notes_service__WEBPACK_IMPORTED_MODULE_3__["NotesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"]])
    ], AddNotePage);
    return AddNotePage;
}());



/***/ })

}]);
//# sourceMappingURL=notes-add-note-add-note-module.js.map