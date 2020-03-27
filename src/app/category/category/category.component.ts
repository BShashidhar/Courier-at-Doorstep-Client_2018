import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CategoryService } from '../../shared-service/category.service';
import { Category } from '../../category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  private category = new Category();

  constructor(private _catService:CategoryService,private _router:Router) { }

  ngOnInit() {
  }

  saveCategory(){
    this._catService.saveCategory(this.category).subscribe((category)=>{
      console.log(category);
      this._router.navigate(['/getcategory/'+category.cid]);
    },(error)=>{
      console.log(error);
    })
  }
}
