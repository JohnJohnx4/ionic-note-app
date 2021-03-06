import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
    // Accept: 'application/json',
    // 'content-type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // private ROOT_URL = 'http://localhost:5000';
  private ROOT_URL = 'https://johnc-noter.herokuapp.com';

  constructor(private http: HttpClient) {}

  loginUser(email, password) {
    return this.http.post(
      `${this.ROOT_URL}/api/login`,
      {
        email,
        password
      },
      httpOptions
    );
  }
  registerUser(email, password) {
    return this.http.post(
      `${this.ROOT_URL}/api/users/register`,
      {
        email,
        password
      },
      httpOptions
    );
  }
}
