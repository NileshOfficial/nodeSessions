import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userData = [];

  constructor(private http: ApiService) { }

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData() {
    this.http.getUsers()
    .subscribe(data => {this.userData = data});
  }

  deleteUser(username: string) {
    this.http.deleteUser(username).subscribe(data=>{}, err => {console.log("err", err)});
    this.getUserData();
  }

}
