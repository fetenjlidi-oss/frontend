import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { RouterModule } from '@angular/router';
import { Sidenav } from './sidenav/sidenav';



@NgModule({
  declarations: [
    Header,
    Sidenav,
    Footer
  ],
  imports: [
    CommonModule ,RouterModule
  ],exports:[   
    Header,
    Sidenav,
    Footer]
})
export class CoreModule { }
