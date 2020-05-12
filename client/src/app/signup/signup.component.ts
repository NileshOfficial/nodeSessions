import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.api.signup(form.value).subscribe(data => {
      this.api.setToken(data.token);
    })
  }

}
