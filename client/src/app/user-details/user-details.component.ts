import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private http: ApiService, private router: Router) { }

  ngOnInit(): void {
  }
  
  onSubmit(form: NgForm) {
    this.http.addUser(form.value).subscribe(data=>{});
    this.router.navigate(['/', 'home']);
  }
}
