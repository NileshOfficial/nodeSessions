import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.api.signup(form.value).subscribe(data => {
      if(!data.err) {
        this.api.setToken(data.token);
        this.router.navigate(["/home", encodeURIComponent(data.token)]);
      }
    });
  }

}
