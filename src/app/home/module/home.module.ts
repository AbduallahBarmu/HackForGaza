import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimelineComponent } from '../components/timeline/timeline.component';
import { HeroComponent } from '../components/hero/hero.component';
import { HomeComponent } from '../home.component';
import { HomeService } from '../services/home.service';



@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    TimelineComponent,
  ],
  providers: [HomeService],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
