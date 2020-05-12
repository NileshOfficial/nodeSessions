import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private token = '';
  constructor(private http: HttpClient) { }

  signup(userdata): Observable<any> {
    return this.http.post("http://localhost:3000/signup", userdata);
  }

  login(userdata): Observable<any> {
    return this.http.post("http://localhost:3000/login", userdata);
  }

  home(token: string): Observable<any> {
    return this.http.get("http://localhost:3000/home", {
      headers: new HttpHeaders().set("authorization", `Bearer ${token}`)
    });
  }

  setToken(token) {
    this.token = token;
  }
}
