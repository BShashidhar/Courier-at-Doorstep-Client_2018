import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../shared-service/service.service';
import { Services } from '../services';
import { Router } from '@angular/router';
import { SubCategory } from '../sub-category';
import { Category } from '../category';
import { SubcategoryService } from '../shared-service/subcategory.service';
import { CategoryService } from '../shared-service/category.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  private subcategory = new SubCategory();
  private category = new Category();
  private subcats:SubCategory[];
  private cats:Category[];
  private catid:Number;
  private subcatid:Number;
  private status: boolean = false;
  searchString: string;
  private service: Services[];
  
  constructor(private _service: ServiceService, private router: Router,
    private _subcatservice:SubcategoryService,
    private _catservice:CategoryService) {}

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
      this.service = services;
    }, (error) => {
      console.log(error);
    });
  }

  searchService() {
    this._service.searchService(this.searchString).subscribe((services) => {
      console.log(services);
      this.status = true;
      this.service = services;
    }, (error) => {
      console.log(error);
    });
  }
  viewService(service: Services) {
    this.router.navigateByUrl('getservice/' + service.id);
  }
}
