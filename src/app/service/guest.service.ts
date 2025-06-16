import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Router } from "@angular/router";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class GuestService {
  public url = environment.API_GUEST;
  private apiKey = environment.API_CODE; // 定義 API_key

  constructor(private _http: HttpClient, private _route: Router) {}

  // cach get data thu nhat
  // getGuestList(limit: number, offset: number): Observable<any[]> {
  //   return this._http.get<any[]>(
  //     this.url + "guest.php/?limit=" + limit + "&offset=" + offset
  //   );
  // }

  // cach get data thu 2
  getGuestList(limit: number, offset: number): Observable<any[]> {
    // khi get dữ liệu thêm phần API_KEY để thêm bảo mật
    // tạo mã API_KEY chuyển đến server đồng thời trên server cũng tạo 1 mã giống như vậy để so sánh
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "API-KEY": this.apiKey,
    });

    return (
      this._http
        .get(this.url + "guest.php/?limit=" + limit + "&offset=" + offset, {
          headers,
        })
        // .get(this.url + "guest.php/?limit=" + limit + "&offset=" + offset, {headers})
        .pipe(
          map(this.extractData),
          catchError((error) => {
            console.error("Error fetching data:", error);
            throw error;
          })
        )
    );

 
  }

  private extractData(response: any): any[] {
    return response.data || response || [];
  }

  // cach lay thu 1 don gian hon
  getGuestDetail(id: string): Observable<any> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "API-KEY": this.apiKey,
    });
    return this._http.get<any>(this.url + "guest-detail.php/?id=" + id, {
      headers,
    });
  }

  //cap nhat du lieu =====
  // áp dụng cách chuyên dữ liệu bằng json
  updateGuest(id: string, data: any): Observable<any> {
    const url = `${this.url + "guest-update.php"}?id=${id}`; // 假設需要用戶ID
    const headers = { "Content-Type": "application/json" }; // 確保使用 JSON 格式
    return this._http.put(url, data, { headers }); // 使用 PUT 方法傳送數據
  }

  // khi có phân upfile phải sử dụng cách chuyển dữ liệu bằng FormData
  // khi chuyên bằng FormData không cần dùng, const headers = { 'Content-Type': 'application/json' };
  // để ép kiểu chuyền là json
  addGuest(data: FormData): Observable<any> {
    const url = `${this.url}guest-add.php`; // 確保 URL 拼接正確
    return this._http.post(url, data); // 不需要額外設置 headers，瀏覽器會自動處理
  }

  deleteGuest(id: any): Observable<any> {
    console.log(this._http.delete(this.url + "guest-delete.php/?id=" + id));
    return this._http.delete(this.url + "guest-delete.php/?id=" + id); // 使用 PUT 方法傳送數據
  }
}
