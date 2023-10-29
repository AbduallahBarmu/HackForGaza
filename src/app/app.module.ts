import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroComponent } from './home/hero/hero.component';
import { EventInfoComponent } from './shared/components/event-info/event-info.component';
import { TimelineComponent } from './home/timeline/timeline.component';
import { SharedModule } from './shared/module/shared.module';
import { MaterialModule } from './shared/module/material.module'; 
import { HttpClientModule } from '@angular/common/http'; 
import { HomeService } from './home/home.service';
import { EventProfileComponent } from './event-profile/event-profile.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroComponent,
    TimelineComponent,
    EventInfoComponent,
    EventProfileComponent,
    
  ],
  imports: [
    AppRoutingModule,
    RouterModule,
    MaterialModule,
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule, 
    HttpClientModule
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
