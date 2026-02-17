import { NgModule, OnInit, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { initFlowbite } from 'flowbite';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    
    AppRoutingModule,RouterModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay()),
  ],
  bootstrap: [App]
})
export class AppModule { 

}
