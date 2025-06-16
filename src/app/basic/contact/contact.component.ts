import { Component, OnInit } from "@angular/core";
import { XmlService } from "../../service/xml.service";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
  xmlData: any[] = [];


  constructor(private _xmlService: XmlService) {}

  ngOnInit() {
    const xmlUrl = "../../assets/xml/menu.xml";
    this._xmlService.getXmlData(xmlUrl).subscribe((data) => {
      this.xmlData = data;
    });
  }

  onChangMenu(){

    }
}
