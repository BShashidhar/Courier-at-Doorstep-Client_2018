import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Provider } from '../provider';


@Injectable()
export class ProviderService {

  public baseUrl:string = "http://localhost:8080/vov/serviceprovider";
  private headers = new Headers({'Content-type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  private provider:Provider;

  constructor(private _http:Http) { }

  //Saving provider 
  saveProvider(provider:Provider){
    return this._http.post(this.baseUrl+'/save',JSON.stringify(provider),this.options)
      .map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }

  // Getting provider
  getProvider(id:Number){
    //map method is used to convert coming response into json format ..... see import stmt
    //catch method is used to catch exception thrown by response ..... see import stmt
    return this._http.get(this.baseUrl+'/get/'+id,this.options)
      .map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }

//getting all providers
  getProviders(){
    //map method is used to convert coming response into json format ..... see import stmt
    //catch method is used to catch exception thrown by response ..... see import stmt
    return this._http.get(this.baseUrl+'/list',this.options)
      .map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }

  //deleting provider
  deleteProvider(id:Number){
    return this._http.delete(this.baseUrl+'/delete/'+id,this.options)
      .map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }

  //Updating provider 
  updateProvider(provider:Provider,id:Number,name:string,phoneNo:string){
    return this._http.put(this.baseUrl+'/update/'+id+'/'+name+'/'+phoneNo,JSON.stringify(provider),this.options)
      .map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }

  validateProvider(provider:Provider){
    return this._http.post(this.baseUrl+'/validate',JSON.stringify(provider),this.options)
      .map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }
  errorHandler(err:Response){
    return Observable.throw(err||"SERVER ERROR");
  }

  setter(provider:Provider){
    this.provider = provider;
  }

  getter(){
    return this.provider;
  }
}
