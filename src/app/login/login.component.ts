import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './../services/auth/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  returnUrl:string;
  constructor( private route: ActivatedRoute,
    private router: Router,private authService:AuthenticationService) { }

  ngOnInit() {
    console.log("login",this.authService.isLoggedIn());
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'app';
    if(this.authService.isLoggedIn()){
      this.router.navigateByUrl(this.returnUrl);

    }
    
  }
  
  login(){
      this.authService.login();
      if(this.authService.isLoggedIn()){
         this.router.navigateByUrl(this.returnUrl);
      }else{
          console.log("Authentication Failed!!");
      }
    
  }
}
