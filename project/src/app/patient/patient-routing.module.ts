import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Create } from './create/create';
import { Delete } from './delete/delete';
import { Update } from './update/update';
import { Listpatient } from './listpatient/listpatient';

const routes: Routes = [
  {path:"create", component:Create},
  {path:"update/:id",component:Update},
  {path:"delete",component:Delete},
  {path:"",component:Listpatient}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
