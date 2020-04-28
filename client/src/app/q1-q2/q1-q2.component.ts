import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { ApiCommService } from '../api-comm.service';

@Component({
  selector: 'app-q1-q2',
  templateUrl: './q1-q2.component.html',
  styleUrls: ['./q1-q2.component.css']
})
export class Q1Q2Component implements OnInit {
  @ViewChild('inp') input: ElementRef;

  userData: Array<any> = [];
  userList: Array<string> = [];
  studentData: Array<any> = [];

  constructor(private api: ApiCommService, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.api.getUserData()
      .subscribe(data => { this.userData = data }, err => { console.log(err) });

    this.api.getStudentData()
      .subscribe(data => { this.studentData = data }, err => { console.log(err) });
  }

  getAutoCompleteList(): void {
    this.api.getUserAutoCompleteList(this.input.nativeElement.value)
      .subscribe(data => { this.userList = data }, err => { console.log(err) });
  }

  filterStudentData(course: string): void {
    this.api.filterStudentByBranch(course)
      .subscribe(data => { this.studentData = data }, err => { console.log(err) });
  }

  setInput(searchStr: string): void {
    this.renderer.setProperty(this.input.nativeElement, "value", searchStr);
    this.api.getUserAutoCompleteList(searchStr)
      .subscribe(data => { this.userList = data }, err => { console.log(err) });
  }

  clearFilter() {
    const radios = document.getElementsByName("branch");
    for(let i = 0; i < radios.length; i++)
      this.renderer.setProperty(radios[i], "checked", false);
    this.api.getStudentData()
      .subscribe(data => { this.studentData = data }, err => { console.log(err) });    
  }
}
