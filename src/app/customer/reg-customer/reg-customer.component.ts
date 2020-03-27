import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {Customer} from '../../customer';
import {CustomerService} from '../../shared-service/customer.service'
@Component({
  selector: 'app-reg-customer',
  templateUrl: './reg-customer.component.html',
  styleUrls: ['./reg-customer.component.css']
})
export class RegCustomerComponent implements OnInit {
  private customer=new Customer;
  constructor(private _customerService:CustomerService,private _router:Router) { }

  ngOnInit() {
  }
  saveCustomer()
  {
    this._customerService.saveCustomer(this.customer).subscribe((customer)=>{
    console.log(customer);
    this._router.navigate(['getcustomer/'+customer.custid]);
    },(error)=>{
    console.log(error);
  });
}

}
