(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notes-notes-detail-notes-detail-module"],{

/***/ "./src/app/notes/notes-detail/notes-detail.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/notes/notes-detail/notes-detail.module.ts ***!
  \***********************************************************/
/*! exports provided: NotesDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesDetailPageModule", function() { return NotesDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _notes_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notes-detail.page */ "./src/app/notes/notes-detail/notes-detail.page.ts");







var routes = [
    {
        path: '',
        component: _notes_detail_page__WEBPACK_IMPORTED_MODULE_6__["NotesDetailPage"]
    }
];
var NotesDetailPageModule = /** @class */ (function () {
    function NotesDetailPageModule() {
    }
    NotesDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_notes_detail_page__WEBPACK_IMPORTED_MODULE_6__["NotesDetailPage"]]
        })
    ], NotesDetailPageModule);
    return NotesDetailPageModule;
}());



/***/ }),

/***/ "./src/app/notes/notes-detail/notes-detail.page.html":
/*!***********************************************************!*\
  !*** ./src/app/notes/notes-detail/notes-detail.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\" href=\"/notes/add\">\n      <ion-back-button defaultHref=\"/notes\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Single Note</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"toggleEdit()\">\n        <ion-icon name=\"create\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"deleteNote()\">\n        <ion-icon name=\"trash\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content margin-top>\n  <ion-card  *ngIf=\"!editNoteToggle; else editForm\">\n    <ion-card-header>\n      <ion-card-title>{{ loadedNote.title }}</ion-card-title>\n      <ion-card-subtitle>{{\n        loadedNote.date | date: 'short'\n      }}</ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>{{ loadedNote.content }}</ion-card-content>\n  </ion-card>\n\n  <ng-template #editForm>\n    <ion-card padding>\n      <ion-item>\n        <ion-label position=\"floating\">Title</ion-label>\n        <ion-input [(ngModel)]=\"loadedNote.title\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Content</ion-label>\n        <ion-textarea [(ngModel)]=\"loadedNote.content\"></ion-textarea>\n      </ion-item>\n      <ion-button margin-top (click)=\"editNote()\">Submit</ion-button>\n    </ion-card>\n  </ng-template>\n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/notes/notes-detail/notes-detail.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/notes/notes-detail/notes-detail.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGVzL25vdGVzLWRldGFpbC9ub3Rlcy1kZXRhaWwucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/notes/notes-detail/notes-detail.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/notes/notes-detail/notes-detail.page.ts ***!
  \*********************************************************/
/*! exports provided: NotesDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesDetailPage", function() { return NotesDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_notes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/notes.service */ "./src/app/services/notes.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var NotesDetailPage = /** @class */ (function () {
    function NotesDetailPage(activatedRoute, router, notesService, alertCtrl, events) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.notesService = notesService;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.editNoteToggle = false;
    }
    NotesDetailPage.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (paramMap) {
            if (!paramMap.has('noteId')) {
                return;
            }
            var noteId = paramMap.get('noteId');
            _this.notesService.getSingleNote(noteId).subscribe(function (note) {
                _this.loadedNote = note.success;
            }, function (err) { return console.log(err); });
        });
    };
    NotesDetailPage.prototype.toggleEdit = function () {
        this.editNoteToggle = !this.editNoteToggle;
    };
    NotesDetailPage.prototype.editNote = function () {
        var _this = this;
        this.alertCtrl
            .create({
            header: 'Edit note',
            message: 'Submit your edits?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Submit',
                    handler: function () {
                        _this.notesService
                            .editNote({
                            title: _this.loadedNote.title,
                            content: _this.loadedNote.content
                        }, _this.loadedNote._id)
                            .subscribe(function (note) {
                            if (note.updated) {
                                _this.events.publish('getNotes');
                                _this.router.navigateByUrl('/notes');
                            }
                        });
                    }
                }
            ]
        })
            .then(function (alertEl) {
            alertEl.present();
        });
    };
    NotesDetailPage.prototype.deleteNote = function () {
        var _this = this;
        this.alertCtrl
            .create({
            header: 'Are you sure?',
            message: 'Do you really want to delete this note?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Delete',
                    handler: function () {
                        _this.notesService
                            .deleteNote(_this.loadedNote._id)
                            .subscribe(function (note) {
                            if (note.deleted) {
                                _this.events.publish('getNotes');
                                _this.router.navigateByUrl('/notes');
                            }
                        });
                    }
                }
            ]
        })
            .then(function (alertEl) {
            alertEl.present();
        });
    };
    NotesDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notes-detail',
            template: __webpack_require__(/*! ./notes-detail.page.html */ "./src/app/notes/notes-detail/notes-detail.page.html"),
            styles: [__webpack_require__(/*! ./notes-detail.page.scss */ "./src/app/notes/notes-detail/notes-detail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_notes_service__WEBPACK_IMPORTED_MODULE_3__["NotesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"]])
    ], NotesDetailPage);
    return NotesDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=notes-notes-detail-notes-detail-module.js.map