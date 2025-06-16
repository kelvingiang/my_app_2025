import * as xml2js from 'xml2js';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { parseString } from "xml2js"; // 用于解析 XML 的库


@Injectable({
  providedIn: "root",
})
export class XmlService {
  constructor(private _http: HttpClient) {}

  getXmlData(url: string): Observable<any[]> {
    return this._http.get(url, { responseType: "text" }).pipe(
      map((xmlData) => {
        let jsonData: any[] = []; // 初始化为一个空数组
        parseString(xmlData, (err, result) => {
          if (err) {
            console.error("XML parsing error:", err);
          } else {
            // Assuming that the XML structure follows your provided example
            jsonData = result.menu["mainMenu"];
          }
        });
        return jsonData;
      })
    );
  }
}
