import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-guest-detail",
  templateUrl: "./guest-detail.component.html",
  styleUrls: ["../guest.component.scss"],
})
export class GuestDetailComponent implements OnInit  {
  @Input()  guest: any = [];
  
  constructor() {
        
  }

  ngOnInit(): void {}

  
  
}
