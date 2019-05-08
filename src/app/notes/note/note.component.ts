import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../services/notes.service';
import { Note } from '../../models/note.model';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  notes: Note[];
  constructor(private notesService: NotesService, public events: Events) {}

  getNotes() {
    this.notesService.getNotes().subscribe(
      (notes: any) => {
        this.notes = notes.success;
      },
      err => console.log(err)
    );
  }

  ngOnInit() {
    this.getNotes();
    this.events.subscribe('getNotes', () => {
      this.getNotes();
    });

  }

  toggleEdit(id) {
    console.log(id);
  }
}
