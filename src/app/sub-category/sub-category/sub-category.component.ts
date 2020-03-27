import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubCategory } from '../../sub-category';
import { SubcategoryService } from '../../shared-service/subcategory.service';
import { CategoryService } from '../../shared-service/category.service';
import { Category } from '../../category';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent implements OnInit {

  private subcategory = new SubCategory();
  private category = new Category();

  constructor(private _subcatService:SubcategoryService,private _router:Router,private _catservice:CategoryService) { }

  ngOnInit() {
  }

  saveSubCategory(){
    this.category.cid = 2;
    this._catservice.getCategory(this.category.cid).subscribe((category)=>{
      console.log(category);
      this.category.name = category.name;
      this.category.image = category.image;
      this.category.description = category.description;
      this.subcategory.category = category;
      this._subcatService.saveSubCategory(this.subcategory).subscribe((subcategory)=>{
        console.log(subcategory);
       this._router.navigate(['/']);
      },(error)=>{
        console.log(error);
      });
    },(error)=>{
      console.log(error);
    });
  }
}
