import { Injectable } from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


import {Customer} from '../customer';
@Injectable()
export class CustomerService {
  private BaseUrl:string="http://localhost:8080/vov/customer";
  private headers=new Headers({'Content-Type':'application/json'});
  private options=new RequestOptions({headers:this.headers});
  constructor(private _http:Http) { }
  getCustomer(id:Number)
  {
   return this._http.get(this.BaseUrl+'/get/'+id,this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }
  saveCustomer(customer:Customer)
  {
   return this._http.post(this.BaseUrl+'/save',JSON.stringify(customer),this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }
  updateCategory(customer:Customer)
  {
   return this._http.put(this.BaseUrl+'/update',JSON.stringify(customer),this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }
  deleteCustomer(id:Number)
  {
   return this._http.delete(this.BaseUrl+'/delete/'+id,this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }
  errorHandler(error:Response)
  {
  return Observable.throw(error||"Server error");
  
  }
}
