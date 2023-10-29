import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventProfileComponent } from './event/components/event-profile/event-profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'event', component: EventProfileComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { errorHandler: (error: any) => console.error(error) })  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
