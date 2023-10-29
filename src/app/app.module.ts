import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroComponent } from './home/hero/hero.component';

import { TimelineComponent } from './home/timeline/timeline.component';
import { SharedModule } from './shared/module/shared.module';
import { MaterialModule } from './shared/module/material.module'; 
import { HttpClientModule } from '@angular/common/http'; 
import { HomeService } from './home/home.service';
import { RouterModule } from '@angular/router';

import { EventModule } from './event/module/event.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroComponent,
    TimelineComponent,
    
  ],
  imports: [
    AppRoutingModule,
    RouterModule,
    MaterialModule,
    SharedModule,
    EventModule,
    BrowserModule,
    BrowserAnimationsModule, 
    HttpClientModule
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
