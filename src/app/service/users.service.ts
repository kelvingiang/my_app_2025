import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "../../environments/environment";

// export interface GithubUser {
//   items: [html_url: string, avatar_url: string, login: string, score: string];
// }

@Injectable({
  providedIn: "root",
})

export class UsersService {
  public url = environment.API_URL;

  constructor(private _http: HttpClient, private _route: Router) {}

  getUserData(): Observable<any> {
    const apiUrl = this.url + "page/login/user.php";
    return this._http.get<any>(apiUrl);
  }

  getUserLoadMore(page: number, pageSize: number): Observable<any> {
    const apiUrl = this.url + "page/member/member.php?page=" + page + "&pageSize=" + pageSize;
    // console.log(apiUrl);
    return this._http.get<any>(apiUrl);
  }
}
