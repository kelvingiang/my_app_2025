import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class WordpressService {
  public url = environment.API_LOCAL;

  constructor(private _http: HttpClient, private _route: Router) {}

  getSchedules(): Observable<any> {
    return this._http.get<any>(this.url + "api-schedule/");
  }

  getAdvertising(): Observable<any> {
    return this._http.get<any>(this.url + "api-advertising/");
  }

  getAdvertisingDetail(id:any): Observable<any> {
    return this._http.get<any>(this.url + "api-post/?id=" + id);
  }
}
