import { Component, OnInit } from '@angular/core';
import { NotesService } from '../services/notes.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss']
})
export class NotesPage implements OnInit {
  constructor(
    private notesService: NotesService,
    private alertCtrl: AlertController,
    private router: Router
  ) {}
  content: string;
  title: string;

  ngOnInit() {}

  submitNewNote() {
    this.notesService.addNote({ title: this.title, content: this.content });
  }

  handleLogout() {
    this.alertCtrl
      .create({
        header: 'Logging out',
        message: 'Are you sure you want to log out?',
        buttons: [
          {
            text: 'Logout',
            handler: () => this.router.navigateByUrl('/')
          },
          {
            text: 'No',
            role: 'cancel'
          }
        ]
      })
      .then(alertEl => {
        alertEl.present();
      });
  }
}
