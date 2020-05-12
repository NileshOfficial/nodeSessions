import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any = {};
  constructor(private api: ApiService, private router: Router, private currentRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const token = decodeURIComponent(this.currentRoute.snapshot.params['token']);
    if (!token)
      this.router.navigate(["/login"]);
    else {
      this.api.home(token).subscribe(data => {
        if (!data.err) {
          this.data = data;
        } else {
          this.router.navigate(["/login"]);
        }
      });
    }
  }

}
