import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Category } from '../../category';
import { ServiceService } from '../../shared-service/service.service';
import { SubcategoryService } from '../../shared-service/subcategory.service';
import { CategoryService } from '../../shared-service/category.service';
import { SubCategory } from '../../sub-category';
import { Services } from '../../services';
import { ProviderService } from '../../shared-service/provider.service';
import { Provider } from '../../provider';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  private subcategory = new SubCategory();
  private category = new Category();
  private subcats:SubCategory[];
  private cats:Category[];
  private catid:Number;
  private subcatid:Number;
  private status: boolean = false;
  private pstatus: boolean = false;
  searchString: string;
  private service: Services[];
  private provider: Provider[];
  private myservice = new Services();
  private flag:string;
  

  constructor(private _service: ServiceService, private router: Router,
    private _subcatservice:SubcategoryService,
    private _catservice:CategoryService,
    private _providerService:ProviderService) { }

  ngOnInit() {
    this._catservice.getCategories().subscribe((categories)=>{
      console.log(categories);
      this.cats = categories;
    },(error)=>{
      console.log(error);
    });
  }

  onSelectCat(value){
    this.catid = value;
    this._subcatservice.getSubCategories(value).subscribe((subcategories)=>{
      this.subcats = subcategories;
      console.log(subcategories);
    },(error)=>{
      console.log(error);
    });
  }

  onSelectSubCat(value){
    this.subcatid = value;
  }

  searchServiceByScid(){
    this._service.searchServiceByScid(this.subcatid).subscribe((services) => {
      console.log(services);
      this.status = true;
      this.pstatus = false;
      this.service = services;
    }, (error) => {
      console.log(error);
    });
  }

  details(service:Services){
    console.log(service.id);
    this._service.getService(service.id).subscribe((recservice)=>{
      console.log(recservice.id);
      this.flag="details";
      this.myservice.name = recservice.name;
      this.myservice.city = recservice.city;
      this.myservice.address = recservice.address;
      this.myservice.image1 = recservice.image1;
      this.myservice.image2 = recservice.image2;
      this.myservice.image3 = recservice.image3;
      this.myservice.status = recservice.status;
      this.myservice.rating = recservice.rating;
      this.myservice.description = recservice.description;
      this.myservice.timing = recservice.timing;
      this.myservice.peaktime = recservice.peaktime;
      this.myservice.priceA = recservice.priceA;
      this.myservice.priceC = recservice.priceC;
    },(error)=>{
      console.log(error);
    });
  }

  delete(myservice){
    this._service.deleteService(myservice.id).subscribe((service) => {
      console.log(service);
      this.service.splice(this.service.indexOf(myservice),1);
    }, (error) => {
      console.log(error);
    });
  }

  getProviders(){
    this._providerService.getProviders().subscribe((providers) => {
      console.log(providers);
      this.pstatus = true;
      this.status = false;
      this.provider = providers;
    }, (error) => {
      console.log(error);
    });
  }
}
