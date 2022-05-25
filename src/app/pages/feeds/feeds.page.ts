import { Component, OnInit } from '@angular/core';
import { Driver } from 'src/app/Entities/driver';
import { ParkingLot } from 'src/app/Entities/parking-lot';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.page.html',
  styleUrls: ['./feeds.page.scss'],
})
export class FeedsPage implements OnInit {
// ca c un test mais il faut avoir la liste des transacrion ou les utilisations faites
//donc il faut creer entity de type transaction et les affichers ici
  drivers:Driver []=[];
  parkings : ParkingLot[]=[];
  term;

  constructor(private service:ApiService) { }

  submitPayment(){
    console.log("payment");
    
  }
  
  
  ngOnInit() {
    this.service.getAllDrivers()
    .subscribe( data => {console.log(data);
     this.drivers = data})

     this.service.getAllParking()
    .subscribe( data => {console.log(data);
     this.parkings = data})
    
  
  }
}
