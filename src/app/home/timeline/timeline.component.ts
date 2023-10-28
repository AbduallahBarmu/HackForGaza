import { Component, OnInit } from "@angular/core";
import { HomeService } from "../home.service";

@Component({
  selector: "app-timeline",
  templateUrl: "./timeline.component.html",
  styleUrls: ["./timeline.component.css"]
})
export class TimelineComponent implements OnInit {
  data: any[] = [];
  
  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.homeService.getData().subscribe(data => {
      this.data = data;
    });

  }

  isEven(index: number): boolean {
    return index % 2 === 0;
  }
}
