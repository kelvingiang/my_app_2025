import { Component, OnInit } from "@angular/core";
import { UsersService } from "../service/users.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import * as jwt_decode from "jwt-decode";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"],
})
export class UsersComponent implements OnInit {
  data: any = [];
  tokenLocal: any = null;

  constructor(
    private _usersService: UsersService,
    private _http: HttpClient,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.tokenLocal = localStorage.getItem("token"); // lấy giá trị token được lưu trong localStorage
    const url = this._usersService.url; // lấy value URL của userService
   
    // kiểm tra tokenLocal nếu bằng rỗng sẽ chuyển về trang mặc định
    // ngược lại sẽ lên server kiểm tra token
    // kiểm tra token sẽ get data ở server
    if (this.tokenLocal == null) {
      this._router.navigate(["/login"]);
    } else {
      // chuyển dữ liệu kiểm tra token bằng cách chuyền header
      const headers = new HttpHeaders({
        Authorization: `Bearer ${this.tokenLocal}`,
      });

      // this._http.post<any>(url + "checkloginheader.php", {headers}).subscribe(
      //   (response) => {
      //     // 处理登录成功的响应
      //     const token = response.token; // lấy token trả về
      //     localStorage.setItem("token", token);
      //     // 存储令牌
      //     // lấy data từ server về ====
      //     this._usersService.getUserData().subscribe(
      //       (data) => {
      //         this.data = data;
      //       },
      //       (error) => {
      //         console.log("Log the error here: ", error);
      //       }
      //     );
      //   },
      //   (error) => {
      //     // 处理登录失败的响应
      //     console.error("登录失败++", error);
      //   }
      // );

      // chuyển dữ liệu kiểm tra token bằng cách chuyền data
      const data = { token: this.tokenLocal };
      this._http.post<any>(url + "checklogin.php", data).subscribe(
        (response) => {
          // 处理登录成功的响应
          const token = response.token; // lấy token trả về
          try {
            const decodedToken: any = jwt_decode.default(token);
            console.log(decodedToken);

            if (decodedToken.expire) {
              // const expirationTime = new Date(decodedToken.expire * 1000); // 转换为毫秒
              const expirationTime = decodedToken.expire; // 转换为毫秒
              const currentTime = Math.floor(Date.now() / 1000);

              console.log(currentTime + " Gio hien tai *****");
              console.log(expirationTime + " Gio cua token");

              // KIỂM TRA THỜI GIAN ĐĂNG NHẬP CÒN HIỆU QUẢ KHÔNG ===============================
              if (currentTime < expirationTime) {
                // LẤY TOKEN ĐƯỢC LƯU TRONG  LOCAL CHUYỂN QUA CHO update-expire.php

                const headers = new HttpHeaders({
                  Authorization: `Bearer ${this.tokenLocal}`,
                });
                // LẤY TOKEN MỚI ĐANG CẬP NHẬP THỜI GIAN CÓ HIỆU QUẢ DÀI HƠN
                const apiUrl = url + "token-update-expire.php"; // 替换为您的后端 API 地址
                this._http.get(apiUrl, { headers }).subscribe(
                  (newToken: any) => {
                    // 将 newToken 存储或使用
                    const newDecodedToken: any = jwt_decode.default(
                      newToken.new_token
                    );
                    localStorage.setItem("token", newToken.new_token);
                    console.log(newDecodedToken.expire + " Gio Update Token");
                    console.log(newDecodedToken);
                  },
                  (error) => {
                    console.error("Error updating token:", error);
                  }
                );
              } else {
                // HẾT THỜI GIAN SẼ CHUYÊN SANG TRANG logout ĐỂ THOÁT RA
                this._router.navigate(["/logout"]);
              }
            } else {
              console.log(decodedToken);
              console.log("Token does not have an expiration time.");
            }
          } catch (error) {
            console.error("Invalid token or other error:", error);
          }

          localStorage.setItem("token", token);
          // 存储令牌
          // lấy data từ server về ====
          this._usersService.getUserData().subscribe(
            (data) => {
              this.data = data;
            },
            (error) => {
              console.log("Log the error here: ", error);
            }
          );
        },
        (error) => {
          // 处理登录失败的响应
          console.error("登录失败++", error);
        }
      );
    }
  }

  onclickLogout(){
    this._router.navigate(["/login"]);
  }
}
