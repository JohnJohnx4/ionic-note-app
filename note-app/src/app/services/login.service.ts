import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private ROOT_URL = 'http://localhost:5000';
  // private ROOT_URL = 'https://johnc-noter.herokuapp.com/';

  constructor(private http: HttpClient) {}

  loginUser(email, password) {
    console.log(email, password)
    return this.http.post(`${this.ROOT_URL}/api/login`, {
      email,
      password
    });
  }
  registerUser(email, password) {
    return this.http.post(`${this.ROOT_URL}/api/users/register`, {
      email,
      password
    });
  }
}
