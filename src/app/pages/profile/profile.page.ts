import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  carName : string
  carSerial : number
  userName: string;
  constructor(
              private formbuilder:FormBuilder ,
              private service:ApiService,
              private nav: NavController,
              private userService: UserService,
              private tokenStorage: TokenStorageService
              ) {}


   
   onQuitter(){
    this.tokenStorage.signOut();
    this.nav.navigateForward(['login']);
   }

   onEditer(){
    this.nav.navigateForward(['editprofil']);
   }

   onHistory(){
    this.nav.navigateForward(['payment-history']);

   }
 

  ngOnInit() {
    for (let index = 0; index < this.tokenStorage.getUser().cars.length; index++) {
      if (this.tokenStorage.getUser().cars[index].main) {
        this.carName = this.tokenStorage.getUser().cars[index].model;
        this.carSerial = this.tokenStorage.getUser().cars[index].serialNumber;

        console.log(this.tokenStorage.getUser().cars.brand);
      }
    }

    


    this.userName = this.tokenStorage.getUser().username
    

    
    
  }

}
