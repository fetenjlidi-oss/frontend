import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './header/header';
import { Sidenav } from './sidenav/sidenav';
import { Footer } from './footer/footer';
import { RouterModule } from '@angular/router';



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
