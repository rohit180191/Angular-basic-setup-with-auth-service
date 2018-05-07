import { Injectable } from '@angular/core';


@Injectable()
export class AuthenticationService {
  isLoginSubject:boolean = this.hasToken();
  constructor() { }
  
  private hasToken():boolean {
      return !!localStorage.getItem('token');
  }
  
  login( ) :void {
    localStorage.setItem('token','JWT');
    this.isLoginSubject = true;
  }
  
  logout( ) :void {
    localStorage.removeItem('token');
    this.isLoginSubject = false;
  }
  
  isLoggedIn( ) : boolean{
    return this.isLoginSubject;
  }

}
