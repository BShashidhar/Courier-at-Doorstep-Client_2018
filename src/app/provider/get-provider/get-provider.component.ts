import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProviderService } from '../../shared-service/provider.service';
import { Provider } from '../../provider';
import { Services } from '../../services';
import { ServiceService } from '../../shared-service/service.service';
import { LoginService } from '../../shared-service/login.service';

@Component({
  selector: 'app-get-provider',
  templateUrl: './get-provider.component.html',
  styleUrls: ['./get-provider.component.css']
})
export class GetProviderComponent implements OnInit {

  private provider = new Provider();
  private service = new Services();
  private servicelist : Services[];
  private flag = "";
  private url = "";
  private lgnflag = Boolean;
  constructor(private _providerService:ProviderService
    ,private route:ActivatedRoute
    ,private _service:ServiceService
    ,private _router:Router
    ,private _login:LoginService) { }
  ngOnInit() {
    this.provider.pid = this.route.snapshot.params.id;
    this._providerService.getProvider(this.provider.pid).subscribe((provider)=>{
      this.provider.email = provider.email;
      this.provider.name = provider.name;
      this.provider.phoneno = provider.phoneno;
      this.provider.status = provider.status;
      this.lgnflag = this._login.getUserLoggedIn();
      this.getServices();
    },(error)=>{
      console.log(error);
    });
  }

  getServices(){
    this._service.getServicesByPid(this.provider.pid).subscribe((services)=>{
      console.log(services);
      this.servicelist = services;
    },(error)=>{
      console.log(error);
    });
  }

  details(service){
    console.log("hello :"+service.id+":");
    this._service.getService(service.id).subscribe((service)=>{
      console.log(service.id);
      this.flag="details";
      this.service.name = service.name;
      this.service.city = service.city;
      this.service.address = service.address;
      this.service.image1 = service.image1;
      this.service.image2 = service.image2;
      this.service.image3 = service.image3;
      this.service.status = service.status;
      this.service.rating = service.rating;
      this.service.description = service.description;
      this.service.timing = service.timing;
      this.service.peaktime = service.peaktime;
      this.service.priceA = service.priceA;
      this.service.priceC = service.priceC;
    },(error)=>{
      console.log(error);
    });
  }

  delete(service){
    this._service.deleteService(service.id).subscribe((ser)=>{
      console.log(service.id);
      this.servicelist.splice(this.servicelist.indexOf(service),1);
    },(error)=>{
      console.log(error);
    });
  }

  saveService(){
    this._router.navigate(['newsaveservice/'+this.provider.pid]);
  }

  update(service){
    this._service.setter(service);
    this._router.navigate(['saveservice/'+this.provider.pid]);
  }

  logout(){
    this._login.setUserLoggedOut();
    this._router.navigate(['/']); 
  }
}