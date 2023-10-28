import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventsComponent } from './events/events.component';
import { HeroComponent } from './home/hero/hero.component';
import { EventInfoComponent } from './shared/components/event-info/event-info.component';
import { TimelineComponent } from './home/timeline/timeline.component';
import { SharedModule } from './shared/module/shared.module';
import { MaterialModule } from './shared/module/material.module'; 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventsComponent,
    HeroComponent,
    TimelineComponent,
    EventInfoComponent,
  ],
  imports: [
    MaterialModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
