import { ApiService } from './../../services/api.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-editprofil',
  templateUrl: './editprofil.page.html',
  styleUrls: ['./editprofil.page.scss'],
})
export class EditprofilPage implements OnInit {

  constructor(
    private formbuilder:FormBuilder,
    private tokenStorage: TokenStorageService,
    private crud : ApiService

  ) { }
  UpdateForm : FormGroup;

  validationMessages = {
    name: [{type:"required", message:"Entrer votre nom complet"}],
    lastname: [{type:"required", message:"Entrer votre nom complet"}],
    username: [{type:"required", message:"Entrer votre nom complet"}],
    Telephone: [{type:"required", message:"Entrer votre numero de telephone."}],
      Email: [
        {type: 'required',message:"Entrer votre adresse email"},
        {type:"pattern", meesage:"Email non valid !!"}
      ],
      oldPassword: [
        {type: "required", message: "Ce champ est obligatoire"},
        {type:"minlength", message: "Le mot de passe doit depasser 6 caractéres"}],
      newPassword: [
        {type: "required", message: "Ce champ est obligatoire"},
        {type:"minlength", message: "Le mot de passe doit depasser 6 caractéres"}
      ]
   }

  ngOnInit() {
    this.UpdateForm = this.formbuilder.group({
      name: new FormControl('', Validators.compose([
         Validators.required
      ])),
      lastname: new FormControl('', Validators.compose([
        Validators.required
     ])),
     username: new FormControl('', Validators.compose([
      Validators.required
   ])),  
      Telephone: new FormControl('', Validators.compose([
        Validators.required
      ])),
      Email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      newPassword: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])),
      oldPassword: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])),
    })

    

    
    
  }
  confirmer(){
//     if (this.UpdateForm.value['oldPassword'] == this.tokenStorage.getUser().password) {
//       this.crud.updateDriver(this.tokenStorage.getUser().id, this.UpdateForm.value)
// .subscribe(data => console.log(data));
      
//     }
  }

}


