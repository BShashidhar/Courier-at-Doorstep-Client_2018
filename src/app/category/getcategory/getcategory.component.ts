import { Component, OnInit } from '@angular/core';

import { CategoryService } from '../../shared-service/category.service';
import { Category } from '../../category';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-getcategory',
  templateUrl: './getcategory.component.html',
  styleUrls: ['./getcategory.component.css']
})
export class GetcategoryComponent implements OnInit {

  private category = new Category();

  constructor(private _catservice:CategoryService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.category.cid = this.route.snapshot.params.id;
    this._catservice.getCategory(this.category.cid).subscribe((category)=>{
      console.log(category);
      this.category.name = category.name;
      this.category.image = category.image;
      this.category.description = category.description;
    },(error)=>{
      console.log(error);
    });
  }
}
