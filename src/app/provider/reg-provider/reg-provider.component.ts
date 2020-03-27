import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProviderService } from '../../shared-service/provider.service';
import { Provider } from '../../provider';
import { Services } from '../../services';
import { ServiceService } from '../../shared-service/service.service';
import { LoginService } from '../../shared-service/login.service';

@Component({
  selector: 'app-reg-provider',
  templateUrl: './reg-provider.component.html',
  styleUrls: ['./reg-provider.component.css']
})
export class RegProviderComponent implements OnInit {

  private provider = new Provider();

  constructor(private _providerService:ProviderService
    ,private _router:Router,private _login:LoginService) { }

  ngOnInit() {
  }

  saveProvider(){
    this.provider.status="false";
    this._providerService.saveProvider(this.provider).subscribe((provider)=>{
      this._login.setUserLoggedIn(provider.email);
      this._router.navigateByUrl("/getprovider/"+provider.pid);
    },(error)=>{
      console.log(error);
    })
  }
}
