import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCommService {

  constructor(private http: HttpClient) { }

  getUserData(): Observable<Array<any>> {
    return this.http.get<Array<any>>("http://localhost:3001/users");
  }

  getUserAutoCompleteList(query: string): Observable<Array<string>> {
    return this.http.get<Array<string>>("http://localhost:3001/users", {
      params: new HttpParams().set('search', query)
    });
  }


  getStudentData(): Observable<Array<any>> {
    return this.http.get<Array<any>>("http://localhost:3001/students");
  }

  filterStudentByBranch(query: string): Observable<Array<any>> {
    return this.http.get<Array<any>>("http://localhost:3001/students", {
      params: new HttpParams().set('search', query)
    });
  }

  getHomeData(): Observable<Object> {
    return this.http.get("http://localhost:3001/home");
  }
  getAboutData(): Observable<Object> {
    return this.http.get("http://localhost:3001/about");
  }
  getContactData(): Observable<Object> {
    return this.http.get("http://localhost:3001/contactUs");
  }
}
