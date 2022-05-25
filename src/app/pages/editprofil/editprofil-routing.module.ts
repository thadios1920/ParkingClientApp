import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditprofilPage } from './editprofil.page';

const routes: Routes = [
  {
    path: '',
    component: EditprofilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditprofilPageRoutingModule {}
