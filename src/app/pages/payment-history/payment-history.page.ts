import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { PaymentLog } from 'src/app/Entities/payment-log';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.page.html',
  styleUrls: ['./payment-history.page.scss'],
})
export class PaymentHistoryPage implements OnInit {

  constructor(
    private crud : ApiService,
    private tokenStorage: TokenStorageService,
    private formbuilder:FormBuilder
  ) { }


  payments : PaymentLog[]=[]

  ngOnInit() {
    this.payments = this.tokenStorage.getUser().payments

  }
  virtualForm : FormGroup

  deleteById(){


    // this.virtualForm = this.formbuilder.group({
    //   name: new FormControl('', Validators.compose([
    //      Validators.required
    //   ])),
    
    //   lastname: new FormControl('', Validators.compose([
    //     Validators.required
    //  ])),
    
    //  username: new FormControl('', Validators.compose([
    //   Validators.required
    // ])),
    
    // cars: new FormControl(
    //   [{
    //     "main" : true,
    //     "serialNumber": "default",
    //     "brand": "default",
    //     "model": "default",
    //     "color": "default"
    //   }]
    // ),
    
    // transactions: new FormControl([]),
    // payments: new FormControl(
    //   [{
    //        "id": 1,
    //        "date": "14/02/2022",
    //        "paidAmount": 600,
    //        "object": "Amande", 
    //        "paymentMethod": "string"
    //   }]
    // ),
    //   phone: new FormControl('', Validators.compose([
    //     Validators.required
    //   ])),
    //   email: new FormControl('', Validators.compose([
    //     Validators.required,
    //     Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    //   ])),
    
    //   password: new FormControl('', Validators.compose([
    //     Validators.required,
    //     Validators.minLength(6)
    //   ]))
    
    // })
    this.virtualForm=this.tokenStorage.getUser()


    this.crud.updateDriver(this.tokenStorage.getUser().id, this.virtualForm.value)
.subscribe(data => console.log(data));
  }

}
