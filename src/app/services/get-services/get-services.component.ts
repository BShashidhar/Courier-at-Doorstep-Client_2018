import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Services } from '../../services';
import { ServiceService } from '../../shared-service/service.service';

@Component({
  selector: 'app-get-services',
  templateUrl: './get-services.component.html',
  styleUrls: ['./get-services.component.css']
})
export class GetServicesComponent implements OnInit {

  private service = new Services();

  constructor(private _route:ActivatedRoute,
    private _service:ServiceService,
    private _router:Router) { }

  ngOnInit() {
    this.getService();
  }

  getService(){
    this.service.id = this._route.snapshot.params.id;
    this._service.getService(this.service.id).subscribe((service)=>{
      console.log(service);
      this.service.name = service.name;
      this.service.city = service.city;
      this.service.address = service.address;
      this.service.image1 = service.image1;
      this.service.image2 = service.image2;
      this.service.image3 = service.image3;
      this.service.status = service.status;
      this.service.rating = service.rating;
      this.service.description = service.description;
      this.service.timing = service.timing;
      this.service.peaktime = service.peaktime;
      this.service.priceA = service.priceA;
      this.service.priceC = service.priceC;
    },(error)=>{
      console.log(error);
    });
  }

  bookNow(){
    this._router.navigate(['bookservice/'+this.service.id]);
  }
}
