import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../services/notes.service';
import { Note } from '../../models/note.model';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit {
  notes: Note[];
  constructor(private notesService: NotesService) {}

  getNotes() {
    this.notesService.getNotes().subscribe(
      (notes: any) => {
        console.log(notes);
        this.notes = notes.success;
      },
      err => console.log(err)
    );
  }

  ngOnInit() {
    this.getNotes();
  }

  toggleEdit(id) {
    console.log(id);
  }
}
