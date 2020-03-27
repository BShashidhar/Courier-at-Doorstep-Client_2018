import { Component, OnInit } from '@angular/core';
import { SubcategoryService } from '../../shared-service/subcategory.service';
import { ActivatedRoute } from '@angular/router/';
import { SubCategory } from '../../sub-category';

@Component({
  selector: 'app-getsubcategory',
  templateUrl: './getsubcategory.component.html',
  styleUrls: ['./getsubcategory.component.css']
})
export class GetsubcategoryComponent implements OnInit {

  private subcategory = new SubCategory();
  constructor(private _subcatservice:SubcategoryService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.getSubCategory();
  }

  getSubCategory(){
    this.subcategory.scid = this.route.snapshot.params.id;
    this._subcatservice.getSubCategory(this.subcategory.scid).subscribe((subcategory)=>{
      console.log("Hello");
      console.log(subcategory);
      this.subcategory.name = subcategory.name;
      this.subcategory.image = subcategory.image;
      this.subcategory.description = subcategory.description;
    },(error)=>{
      console.log(error);
    });
  }
}
