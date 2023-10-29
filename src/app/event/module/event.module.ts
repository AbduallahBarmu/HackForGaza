import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EventInfoComponent } from "../components/event-info/event-info.component";
import { EventProfileComponent } from "../components/event-profile/event-profile.component";
import { EventComponent } from "../event.component";

@NgModule({
  declarations: [
    EventComponent, 
    EventInfoComponent, 
    EventProfileComponent
  ],
  imports: [CommonModule]
})
export class EventModule {}
