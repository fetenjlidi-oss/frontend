import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Add } from './add/add';
import { Delete } from './delete/delete';
import { Update } from './update/update';
import { List } from './list/list';

const routes: Routes = [
  {path:"add", component:Add},
  {path:"update/:id",component:Update},
  {path:"delete",component:Delete},
  {path:"list",component:List}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
