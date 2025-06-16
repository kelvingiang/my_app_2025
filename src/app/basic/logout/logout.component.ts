import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: "app-logout",
  templateUrl: "./logout.component.html",
  styleUrls: ["./logout.component.scss"],
})
export class LogoutComponent implements OnInit {
  constructor(private _http: HttpClient, private _router: Router) {}

  ngOnInit() {
    localStorage.removeItem("token"); // remove token được lưu trong localStorage
    const getToken = localStorage.getItem("token"); // lấy gia trị token trong localStorage
    // kiểm tra nếu token bằng null   =====
    if (getToken == null) {
      this._router.navigate(["/login"]); // chuyển về trang mặc định
    } else {
      console.log(getToken);
    }
  }
}
