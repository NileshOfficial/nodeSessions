import { Component, OnInit } from '@angular/core';
import { ApiCommService } from '../api-comm.service';

@Component({
  selector: 'app-q3',
  templateUrl: './q3.component.html',
  styleUrls: ['./q3.component.css']
})
export class Q3Component implements OnInit {

  data = [];
  constructor(private http: ApiCommService) { }

  ngOnInit(): void {
    this.getHomeData();
  }

  getHomeData() {
    this.http.getHomeData().subscribe(data => {this.mapObjectToArray.call(this, [data]);}, err => {console.log(err)})
  }

  getAboutData() {
    this.http.getAboutData().subscribe(data => {this.mapObjectToArray.call(this, [data]);}, err => {console.log(err)})
  }

  getContactData() {
    this.http.getContactData().subscribe(data => {this.mapObjectToArray.call(this, [data]);}, err => {console.log(err)})
  }

  mapObjectToArray(data): void {
    this.data = [];
    Object.keys(data[0]).forEach(key => {
      this.data.push([key.split('-').join(' '), data[0][key]]);
    });
    console.log(data);
  }

}
