import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditprofilPageRoutingModule } from './editprofil-routing.module';

import { EditprofilPage } from './editprofil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EditprofilPageRoutingModule
  ],
  declarations: [EditprofilPage]
})
export class EditprofilPageModule {}
