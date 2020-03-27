import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Services } from '../services';

@Injectable()
export class ServiceService {
  public baseUrl:string = "http://localhost:8080/vov/service";
  private headers = new Headers({'Content-type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  private service:Services;

  constructor(private _http:Http) { }

  //Saving provider 
  saveService(service:Services){
    return this._http.post(this.baseUrl+'/save',JSON.stringify(service),this.options)
      .map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }

  // Getting provider
  getService(id:Number){
    //map method is used to convert coming response into json format ..... see import stmt
    //catch method is used to catch exception thrown by response ..... see import stmt
    return this._http.get(this.baseUrl+'/get/'+id,this.options)
      .map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }

  getServicesByPid(id:Number){
    //map method is used to convert coming response into json format ..... see import stmt
    //catch method is used to catch exception thrown by response ..... see import stmt
    return this._http.get(this.baseUrl+'/getbypid/'+id,this.options)
      .map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }

  //deleting provider
  deleteService(id:Number){
    return this._http.delete(this.baseUrl+'/delete/'+id,this.options)
      .map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }

  searchService(searchStr:string){
    //map method is used to convert coming response into json format ..... see import stmt
    //catch method is used to catch exception thrown by response ..... see import stmt
    return this._http.get(this.baseUrl+'/search/'+searchStr,this.options)
      .map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }
  
  searchServiceByScid(scid:Number){
    //map method is used to convert coming response into json format ..... see import stmt
    //catch method is used to catch exception thrown by response ..... see import stmt
    return this._http.get(this.baseUrl+'/searchbyscid/'+scid,this.options)
      .map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }



  //Updating provider 
  updateService(service:Services){
    return this._http.put(this.baseUrl+'/update/',JSON.stringify(service),this.options)
      .map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }
  errorHandler(err:Response){
    return Observable.throw(err||"SERVER ERROR");
  }

  setter(service:Services){
    this.service = service;
  }

  getter(){
    return this.service;
  }
}
