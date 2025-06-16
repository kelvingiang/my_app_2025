import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-onChanges",
  templateUrl: "./onchanges.component.html",
  styleUrls: ["./onchanges.component.scss"],
})
export class OnChangesComponent implements OnInit {
  lamp: boolean = false;
  constructor() {}
  ngOnInit(): void {}

}
