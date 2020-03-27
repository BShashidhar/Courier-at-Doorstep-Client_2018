import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Category } from '../category';

@Injectable()
export class CategoryService {
  public baseUrl:string = "http://localhost:8080/vov/category";
  private headers = new Headers({'Content-type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  private category = new Category();

  constructor(private _http:Http) { }

  //Saving category 
  saveCategory(category:Category){
    return this._http.post(this.baseUrl+'/save',JSON.stringify(category),this.options)
      .map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }

  // Getting category
  getCategory(id:Number){
    //map method is used to convert coming response into json format ..... see import stmt
    //catch method is used to catch exception thrown by response ..... see import stmt
    return this._http.get(this.baseUrl+'/get/'+id,this.options)
      .map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }

  getCategories(){
    //map method is used to convert coming response into json format ..... see import stmt
    //catch method is used to catch exception thrown by response ..... see import stmt
    return this._http.get(this.baseUrl+'/list',this.options)
      .map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }

  //deleting category
  deleteCategory(id:Number){
    return this._http.delete(this.baseUrl+'/delete/'+id,this.options)
      .map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }

  //Updating category 
  errorHandler(err:Response){
    return Observable.throw(err||"SERVER ERROR");
  }

  setter(category:Category){
    this.category = category;
  }

  getter(){
    return this.category;
  }
}
