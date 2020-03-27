import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor(private _route:ActivatedRoute) { }
  msg:string;
  ngOnInit() {
    this.msg = this._route.snapshot.params.msg;
  }

}
