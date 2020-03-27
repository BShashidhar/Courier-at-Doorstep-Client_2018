import { Component, OnInit } from '@angular/core';
import { BookService } from '../../book-service';
import { Router,ActivatedRoute } from '@angular/router';
import { ServiceService } from '../../shared-service/service.service';
import { Services } from '../../services';
import { BookingServiceService } from '../../shared-service/booking-service.service';
import { Time } from '@angular/common';

@Component({
  selector: 'app-book-service',
  templateUrl: './book-service.component.html',
  styleUrls: ['./book-service.component.css']
})
export class BookServiceComponent implements OnInit {

  private book = new BookService();
  private service = new Services();
  private noa:string;
  private noc:Time;
  private nod:Date;
  private amount:Number;
  constructor(private _router:Router,private _route:ActivatedRoute,
    private _service:ServiceService,private _book:BookingServiceService) { }

  ngOnInit() {
    this.service.id = this._route.snapshot.params.id;
    this._service.getService(this.service.id).subscribe((service)=>{
      console.log(service);
      this.service.name = service.name;
      this.service.city = service.city;
      this.service.address = service.address;
      this.service.timing = service.timing;
      this.service.priceA = service.priceA;
      this.service.priceC = service.priceC;
      this.service.sprovider = service.sprovider;
    },(error)=>{
      console.log(error);
    });
  }

  bookIt(){
    this.amount = this.service.priceA
    this.book.spemail = this.service.sprovider.email;
    this.book.msg = "Greetings, Service "+this.service.name+" is booked with Email ID "+ this.book.cemail
    +" for the pick up Adderess "+this.noa+" and our pick up boy will pick up the parcel on date "+this.nod+" & time "+this.noc+" Service Provider Mail ID "+this.book.spemail+ " and Total amount to be paid is = "+ this.amount+" Thank you";
    this._book.bookTickets(this.book).subscribe((msgreceived)=>{
    },(error)=>{
      console.log(error);
    });
    this._router.navigate(["/"]);
  }
}
