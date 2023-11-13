import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EventService } from "../../service/event.service";

@Component({
  selector: "app-event-info",
  templateUrl: "./event-info.component.html",
  styleUrls: ["./event-info.component.css"]
})

export class EventInfoComponent {
  data: any = {};
  id: string | null;

  constructor(private route: ActivatedRoute, private service: EventService) {
    this.id = this.route.snapshot.paramMap.get("id");
  }

  async getEventById() {
    this.data = await this.service.getEventByIdServ(this.id);
  }
}
