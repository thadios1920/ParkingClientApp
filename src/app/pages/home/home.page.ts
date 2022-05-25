import { Driver } from 'src/app/Entities/driver';
import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  content?: string;
  driv:Driver =new Driver()  
  driver:Driver 

  constructor(private nav:NavController,
              private crud:ApiService,
              private userService: UserService,
              private tokenStorage: TokenStorageService
              ) { }

  ngOnInit() {

    this.userService.getUserContent().subscribe(
      data => {
        this.driv = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );

     this.username = this.tokenStorage.getUser().username
  
this.content = this.tokenStorage.getUser()
     
  }
  
  username:string 
  changer:boolean ;

  slidesOptions = {
    slidesPerView: 1.5
  }

}
