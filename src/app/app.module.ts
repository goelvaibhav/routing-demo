import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponent } from './app-routing.module';

import { AppComponent } from './app.component';
// import { DepartmenItComponent } from './departmen-it/departmen-it.component';
// import { DepartmenManagerComponent } from './departmen-manager/departmen-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent
    // DepartmenItComponent,
    // DepartmenManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
