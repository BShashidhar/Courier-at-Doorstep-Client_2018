import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { BookService } from '../book-service';

@Injectable()
export class BookingServiceService {
  public baseUrl:string = "http://localhost:8080/vov/email";
  private headers = new Headers({'Content-type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  private book = new BookService();

  constructor(private _http:Http) { }

  bookTickets(book:BookService){
    return this._http.post(this.baseUrl,JSON.stringify(book),this.options)
      .map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }

  errorHandler(err:Response){
    return Observable.throw(err||"SERVER ERROR");
  }
}
