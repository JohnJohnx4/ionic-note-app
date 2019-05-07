import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
// import { catchError, map, tap } from 'rxjs/operators';
// import { Note } from '../models/note.model';

const testUser = {
  _id: '5c8bd9db2f000f4b882d323f',
  email: 'test@test.com',
  password: '$2b$11$L32a0reYh4jOSdOrGGS9ouuS9RV70XHcnGLh63wcjCX8JYb/JA/OS',
  date: '2019-03-15T16:59:07.740Z',
};
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private ROOT_URL = 'http://localhost:5000';
  // private ROOT_URL = 'https://johnc-noter.herokuapp.com/';

  constructor(private http: HttpClient) { }
  getNotes() {
    return this.http.get(`${this.ROOT_URL}/api/notes`);
  }
  addNote(note) {
    return this.http.post(`${this.ROOT_URL}/api/notes`, { ...note, user: testUser._id }, httpOptions);
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
