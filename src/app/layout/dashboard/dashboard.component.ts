import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../services/auth/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public authService:AuthenticationService,public router:Router) {  }

  ngOnInit() {
    console.log("Dashboard");
  }

  logout(){
     this.authService.logout();
     console.log("logout",this.authService.isLoggedIn());
     this.router.navigateByUrl('login');
  }

}
