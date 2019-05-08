import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  // private ROOT_URL = 'http://localhost:5000';
  private ROOT_URL = 'https://johnc-noter.herokuapp.com';

  constructor(private http: HttpClient) {}
  getNotes() {
    return this.http.get(`${this.ROOT_URL}/api/notes`);
  }
  getSingleNote(noteId) {
    return this.http.get(`${this.ROOT_URL}/api/notes/${noteId}`);
  }
  addNote(note) {
    const { title, content } = note;
    const user = localStorage.getItem('user');
    return this.http.post(
      `${this.ROOT_URL}/api/notes`,
      { title, content, user },
      httpOptions
    );
  }
  deleteNote(noteId) {
    return this.http.delete(`${this.ROOT_URL}/api/notes/${noteId}`);
  }
  editNote(note, noteId) {
    const { title, content } = note;
    return this.http.put(
      `${this.ROOT_URL}/api/notes/${noteId}`,
      { title, content },
      httpOptions
    );
  }

  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead

  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }
}
