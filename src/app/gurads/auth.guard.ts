import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from './../services/auth/authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {

  authService:AuthenticationService;

    constructor(private router: Router,auth:AuthenticationService) {
       this.authService = auth;
    }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        
        if(this.authService.isLoggedIn()){

          return true;

        }
        // not logged in so redirect to login page with the return url and return false
        this.router.navigate(['login'], { queryParams: { returnUrl: state.url }});
        return false;
  }
}
