import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

import {Customer} from '../../customer';
import {CustomerService} from '../../shared-service/customer.service';
@Component({
  selector: 'app-get-customer',
  templateUrl: './get-customer.component.html',
  styleUrls: ['./get-customer.component.css']
})
export class GetCustomerComponent implements OnInit {
  private customer = new Customer();
  constructor(private _customerService:CustomerService,private _route:ActivatedRoute,private _router:Router) { }

  ngOnInit() {
    this.customer.custid= this._route.snapshot.params.id;
      this._customerService.getCustomer(this.customer.custid).subscribe((customer)=>{
        console.log(customer);
        this.customer.email = customer.email;
        this.customer.name = customer.name;
        this.customer.phoneno = customer.phoneno;
      },(error)=>{
        console.log(error);
      })
    }
}
