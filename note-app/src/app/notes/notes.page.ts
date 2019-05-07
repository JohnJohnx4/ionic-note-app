import { Component, OnInit } from '@angular/core';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {

  constructor(private notesService: NotesService) { }
  content: string;
  title: string;

  ngOnInit() {
  }

  submitNewNote() {
    this.notesService.addNote({ title: this.title, content: this.content });
  }

}
