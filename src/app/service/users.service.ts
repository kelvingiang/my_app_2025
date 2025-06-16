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
    // link to search at github
    // https://api.github.com/search/users?q=greg
    return this._http.get<any>(this.url);
  }

  getUserLoadMore(page: number, pageSize: number): Observable<any> {
    // this._http.get<any>(this.url + "?offset=" + offset + "&page=" + $page)

    const apiUrl = this.url + "member.php?page=" + page + "&pageSize=" + pageSize;
    console.log(apiUrl);
    return this._http.get<any>(apiUrl);
  }
}
