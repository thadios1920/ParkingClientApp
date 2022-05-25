import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Credentials } from 'src/app/Entities/credentials';
import { Driver } from 'src/app/Entities/driver';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { HashService } from 'src/app/services/hash.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(
              private builder: FormBuilder,
              private crud:ApiService,
              private nav: NavController,
              private hash:HashService,
              private router: Router,
              private authService: AuthService,
              private tokenStorage: TokenStorageService
              ) { }
  loginForm = new FormGroup({})
  loginerror = false;
  roles: string[] = [];


  ngOnInit() {
    this.loginForm = this.builder.group({
      user: ["", Validators.required],
      password: ["", Validators.required],
    })

    this.crud.getAllDrivers()
    .subscribe( data => this.LesDrivers = data);


    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      // this.roles = this.tokenStorage.getUser().roles;
    }
  }
  driver : Driver
  LesDrivers:Driver []=[];
  
  login(){
    
    for (let index = 0; index < this.LesDrivers.length; index++) {
      if ( this.loginForm.value['user']=== this.LesDrivers[index].username && 
           this.loginForm.value['password']=== this.LesDrivers[index].password  ) {
             console.log("ok");
             
             this.driver = this.LesDrivers[index]
        this.crud.login(this.driver).subscribe(
          data => {
            this.tokenStorage.saveToken(data.accessToken);
            this.tokenStorage.saveUser(data);
    
            this.isLoginFailed = false;
            this.isLoggedIn = true;
            this.roles = this.tokenStorage.getUser().roles;
            this.reloadPage();
            console.log("acces"+this.tokenStorage.getUser().cars[0].brand);
            
          },
          err => {
            this.errorMessage = err.error.message;
            this.isLoginFailed = true;
          }
        );
        this.nav.navigateForward(['tabs/tabs/home']);
      }
      

    }

 

    

    
  }
  goToSignUp(){    
    this.router.navigate(["signup"])
  }
  reloadPage(): void {
    window.location.reload();
  }

}
