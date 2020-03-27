import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { ProviderService } from '../shared-service/provider.service';
import { Provider } from '../provider';
import { LoginService } from '../shared-service/login.service';

@Component({
  selector: 'app-provider-login',
  templateUrl: './provider-login.component.html',
  styleUrls: ['./provider-login.component.css']
})
export class ProviderLoginComponent implements OnInit {

  private provider = new Provider();
  constructor(private _providerService:ProviderService,private _router:Router,private _login:LoginService) { }
  ploginmsg : string;
  ngOnInit() {
  }
  loginProvider(event){
    this.provider.status="false";
    this._providerService.validateProvider(this.provider).subscribe((provider)=>{
      console.log(provider.pid);
      if(provider.pid != null){
        this._login.setUserLoggedIn(provider.email);
        this._router.navigate(["/getprovider/"+provider.pid]);
      }
      else{
        this._router.navigate(["/error/"+this.ploginmsg]);
      }
    },(error)=>{
      console.log(error);
      this.ploginmsg="providerlogin";
      this._router.navigate(["/error/"+this.ploginmsg]);
    })
  }
  regProvider(){
    this._router.navigate(["/regprovider"]);
  }
}
