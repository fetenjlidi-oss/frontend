import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing-module';
import { Add } from './add/add';
import { Update } from './update/update';
import { Delete } from './delete/delete';
import { List } from './list/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Add,
    Update,
    Delete,
    List
  ],
  imports: [
    CommonModule,
    UserRoutingModule,ReactiveFormsModule,FormsModule
  ]
})
export class UserModule { }
