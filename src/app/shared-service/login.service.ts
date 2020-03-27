import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  private isUserLoggedIn;
  private userName;
  constructor() { }

  setUserLoggedIn(userName:any){
    this.isUserLoggedIn = true;
    this.userName = userName;
  }

  setUserLoggedOut(){
    this.isUserLoggedIn = false;
    this.userName = "";
  }
  
  getUserLoggedIn(){
    return this.isUserLoggedIn;
  }

  getUserEmail(){
    return this.userName;
  }

}
