import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../components/footer/footer.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
// import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    FooterComponent, 
    NavbarComponent
  ],
  imports: [
    RouterModule,
    CommonModule, 
    // MatIconModule
  ],
  exports:[
    FooterComponent, 
    NavbarComponent
  ]
})
export class SharedModule { }
