import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProviderService } from '../../shared-service/provider.service';
import { Provider } from '../../provider';

@Component({
  selector: 'app-update-provider',
  templateUrl: './update-provider.component.html',
  styleUrls: ['./update-provider.component.css']
})
export class UpdateProviderComponent implements OnInit {

  private provider:Provider;

  constructor(private _providerService:ProviderService,private _router:Router) { }

  ngOnInit() {
  }

  updateProvider(provider:Provider){
    this._providerService.setter(provider);
  }

}
