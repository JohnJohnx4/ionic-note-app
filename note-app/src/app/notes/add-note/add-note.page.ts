import { Component, OnInit } from '@angular/core';
import { AlertController, Events } from '@ionic/angular';
import { NotesService } from 'src/app/services/notes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.page.html',
  styleUrls: ['./add-note.page.scss']
})
export class AddNotePage implements OnInit {
  title: string;
  content: string;
  constructor(
    private router: Router,
    private notesService: NotesService,
    private alertCtrl: AlertController,
    public events: Events
  ) {}

  ngOnInit() {}

  submitNewNote() {
    if (!this.title || !this.content) {
      return this.sendAlert();
    }
    this.notesService.addNote({title: this.title, content: this.content}).subscribe(note => {
      this.events.publish('getNotes');
      this.router.navigateByUrl('/notes');
    });
  }

  sendAlert() {
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
      .then(alertEl => {
        alertEl.present();
      });
  }
}
