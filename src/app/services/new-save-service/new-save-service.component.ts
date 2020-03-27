import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Services } from '../../services';
import { SubCategory } from '../../sub-category';
import { Category } from '../../category';
import { SubcategoryService } from '../../shared-service/subcategory.service';
import { CategoryService } from '../../shared-service/category.service';
import { ServiceService } from '../../shared-service/service.service';
import { Provider } from '../../provider';
import { ProviderService } from '../../shared-service/provider.service';

@Component({
  selector: 'app-new-save-service',
  templateUrl: './new-save-service.component.html',
  styleUrls: ['./new-save-service.component.css']
})
export class NewSaveServiceComponent implements OnInit {

  private service = new Services();
  private subcategory = new SubCategory();
  private category = new Category();
  private provider = new Provider();
  private subcats:SubCategory[];
  private cats:Category[];
  private catid:Number;
  private subcatid:Number;

  constructor(private _subcatservice:SubcategoryService,
    private _catservice:CategoryService,
    private _service:ServiceService,
    private _providerService:ProviderService,
    private _router:Router,
    private _route:ActivatedRoute) { }

  ngOnInit() {
    this._catservice.getCategories().subscribe((categories)=>{
      console.log(categories);
      this.cats = categories;
      this.provider.pid = this._route.snapshot.params.id;
    },(error)=>{
      console.log(error);
    });
  }

  onSelectCat(value){
    this.catid = value;
    this._subcatservice.getSubCategories(value).subscribe((subcategories)=>{
      this.subcats = subcategories;
    },(error)=>{
      console.log(error);
    });
  }

  onSelectSubCat(value){
    this.subcatid = value;
  }

  saveService(){
    this.subcategory.scid = this.subcatid;
    this._subcatservice.getSubCategory(this.subcategory.scid).subscribe((subcategory)=>{
      this.subcategory.name = subcategory.name;
      this.subcategory.image = subcategory.image;
      this.subcategory.description = subcategory.description;
     
      this._providerService.getProvider(this.provider.pid).subscribe((provider)=>{
        this.provider.email = provider.email;
        this.provider.name = provider.name;
        this.provider.phoneno = provider.phoneno;
        this.provider.status = provider.status;
        this.service.status = "false";
        this.service.rating = "3 star";
        this.service.sprovider = provider;
        this.service.subcategory = subcategory;
        if(this.service.id == undefined){
          this._service.saveService(this.service).subscribe((service)=>{
            this.service.id  = service.id;
            this._router.navigate(['/getprovider/'+this.provider.pid]);
          },(error)=>{
            console.log(error);
          });
        }
      },(error)=>{
        console.log(error);
      });

    },(error)=>{
      console.log(error);
    });
  }

  cancel(){
    this._router.navigate(['/getprovider/'+this.provider.pid]);
  }
}
