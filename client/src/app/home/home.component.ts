import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any;
  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.api.home().subscribe(data => {
      if(!data.err) {
        this.data = data;
      } else {
        this.router.navigate(["/login"]);
      }
    });
  }

}
