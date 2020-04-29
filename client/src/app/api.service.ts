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

  addUser(userDetails): Observable<string> {
    return this.http.post<string>("http://localhost:3001/addUser", userDetails);
  }

  deleteUser(username: string): Observable<string> {
    const body = {username: username};
    const options = {
      headers: {},
      body: body
    };
    return this.http.delete<string>("http://localhost:3001/addUser", options);
  }
}
