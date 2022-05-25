import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddCarPage } from './add-car.page';

const routes: Routes = [
  {
    path: '',
    component: AddCarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddCarPageRoutingModule {}
