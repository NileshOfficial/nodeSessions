import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.api.login(form.value).subscribe(data => {
      if (!data.err) {
        this.api.setToken(data.token);
        this.router.navigate(["/home", encodeURIComponent(data.token)]);
      }
    });
  }

}
