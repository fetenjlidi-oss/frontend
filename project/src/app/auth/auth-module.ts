import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing-module';
import { Login } from './login/login';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Login
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,ReactiveFormsModule,FormsModule
  ]
})
export class AuthModule { }
