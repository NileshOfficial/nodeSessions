import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Array<any>> {
    return this.http.get<Array<any>>('http://localhost:3001/getUsers');
  }

  addUser(userDetails): Observable<any> {
    return this.http.post("http://localhost:3001/addUser", userDetails);
  }

  deleteUser(username: string): Observable<any> {
    const body = {username: username};
    const options = {
      headers: {},
      body: body
    };
    return this.http.delete("http://localhost:3001/deleteUser", options);
  }
}
