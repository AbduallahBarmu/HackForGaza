import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/module/shared.module';
import { HomeModule } from './home/module/home.module';
import { EventModule } from './event/module/event.module';

import { MaterialModule } from './shared/module/material.module'; 
import { HttpClientModule } from '@angular/common/http'; 
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    RouterModule,
    MaterialModule,
    SharedModule,
    EventModule,
    HomeModule,
    BrowserModule,
    BrowserAnimationsModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
