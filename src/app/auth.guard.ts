import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginService } from './shared-service/login.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
 
  constructor(private _login:LoginService,private _router:Router){}
 
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return this._login.getUserLoggedIn();
  }
}
