import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from 'src/app/models/note.model';
import { NotesService } from 'src/app/services/notes.service';
import { AlertController, Events } from '@ionic/angular';

@Component({
  selector: 'app-notes-detail',
  templateUrl: './notes-detail.page.html',
  styleUrls: ['./notes-detail.page.scss']
})
export class NotesDetailPage implements OnInit {
  loadedNote;
  editNoteToggle = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private notesService: NotesService,
    private alertCtrl: AlertController,
    public events: Events
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('noteId')) {
        return;
      }
      const noteId = paramMap.get('noteId');
      this.notesService.getSingleNote(noteId).subscribe(
        (note: any) => {
          this.loadedNote = note.success;
        },
        err => console.log(err)
      );
    });
  }

  toggleEdit() {
    this.editNoteToggle = !this.editNoteToggle;
  }

  editNote() {
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
            handler: () => {
              this.notesService
                .editNote(
                  {
                    title: this.loadedNote.title,
                    content: this.loadedNote.content
                  },
                  this.loadedNote._id
                )
                .subscribe((note: any) => {
                  if (note.updated) {
                    this.events.publish('getNotes');
                    this.router.navigateByUrl('/notes');
                  }
                });
            }
          }
        ]
      })
      .then(alertEl => {
        alertEl.present();
      });
  }

  deleteNote() {
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
            handler: () => {
              this.notesService
                .deleteNote(this.loadedNote._id)
                .subscribe((note: any) => {
                  if (note.deleted) {
                    this.events.publish('getNotes');
                    this.router.navigateByUrl('/notes');
                  }
                });
            }
          }
        ]
      })
      .then(alertEl => {
        alertEl.present();
      });
  }
}
