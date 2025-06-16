import { OnChangesComponent } from './../basic/onchanges/onchanges.component';
import { Component, OnInit } from '@angular/core';
import { XmlService } from '../service/xml.service';

@Component({
  selector: 'app-read-xml',
  templateUrl: './read-xml.component.html',
  styleUrls: ['./read-xml.component.scss']
})
export class ReadXmlComponent implements OnInit {

  xmlData: any[]=[];

  constructor(private _xmlService: XmlService){}

  ngOnInit(): void {
    const xmlUrl = '../../assets/xml/data.xml';
    this._xmlService.getXmlData(xmlUrl).subscribe(data => {
      this.xmlData = data;
    });
  }
}
