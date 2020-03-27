import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  private email:string;
  private password:string;
  constructor(private _router:Router,@Inject(DOCUMENT) private document: any) { }

  ngOnInit() {
    
  }
  loginAdmin(){
    if(this.email === "sanil" && this.password === "1234"){
      this._router.navigateByUrl("/myadminiskrst");
    }
    else{
      this._router.navigateByUrl("/");
    }
  }
}
