import { Component, OnInit, HostListener } from "@angular/core";
import { UsersService } from "../../service/users.service";
import { TokenService } from "../../service/token.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import * as jwt_decode from "jwt-decode";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"],
})
export class UsersComponent implements OnInit {
  list: any = [];
  tokenLocal: any = null;
  API_URL: any = "";

  private idleTimeout: any;
  private idleTimeLimit = 10 * 60 * 1000; // 10 分鐘 = 600,000 毫秒

  constructor(
    private _usersService: UsersService,
    private _tokenService: TokenService,
    private _http: HttpClient,
    private _router: Router
  ) {}

  async ngOnInit() {
    // this.tokenLocal = localStorage.getItem("token"); // lấy giá trị token được lưu trong localStorage
    this.tokenLocal = await this._tokenService.getToken(); // lấy giá trị token được lưu trong localStorage
    const tokenLocal = await this._tokenService.getToken(); // lấy giá trị token được lưu trong localStorage
    const url = this._usersService.url; // lấy value URL của userService
    this.API_URL = url;
    const url_aip = url + "/page/login/";
    // kiểm tra tokenLocal nếu bằng rỗng sẽ chuyển về trang mặc định
    // ngược lại sẽ lên server kiểm tra token
    // kiểm tra token sẽ get data ở server
    if (!tokenLocal) {
      this._router.navigate(["/login"]);
      return;
    }
    // chuyển dữ liệu kiểm tra token bằng cách chuyền header
    // const headers = new HttpHeaders({
    //   Authorization: `Bearer ${tokenLocal}`,
    // });

    // chuyển dữ liệu kiểm tra token bằng cách chuyền data
    const oldToken = { token: tokenLocal };

    this._http.post<any>(url_aip + "token-check.php", oldToken).subscribe(
      async (response) => {
        // 处理登录成功的响应
        const token = response.token; // lấy token trả về
        try {
          const decodedToken: any = jwt_decode.default(token);
          // console.log(decodedToken);

          if (decodedToken && decodedToken.expire) {
            // const expirationTime = new Date(decodedToken.expire * 1000); // 转换为毫秒
            const expirationTime = decodedToken.expire;
            const currentTime = Math.floor(Date.now() / 1000);

            console.log(currentTime + " Gio hien tai *****");
            console.log(expirationTime + " Gio cua token");

            // KIỂM TRA THỜI GIAN ĐĂNG NHẬP CÒN HIỆU QUẢ KHÔNG ===============================
            if (currentTime < expirationTime) {
              // LẤY TOKEN ĐƯỢC LƯU TRONG  LOCAL CHUYỂN QUA CHO update-expire.php

              const headers = new HttpHeaders({
                Authorization: `Bearer ${tokenLocal}`,
              });
              // LẤY TOKEN MỚI ĐANG CẬP NHẬP THỜI GIAN CÓ HIỆU QUẢ DÀI HƠN
              const apiUrl = url_aip + "token-update-expire.php"; // 替换为您的后端 API 地址

              this._http.get<any>(apiUrl, { headers }).subscribe(
                async (newToken) => {
                  // 将 newToken 存储或使用
                  const newDecodedToken: any = jwt_decode.default(
                    newToken.new_token
                  );
                  await this._tokenService.saveToken(newToken.new_token);
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
              return;
            }
          } else {
            // console.log(decodedToken);
            console.log("Token does not have an expiration time.");
          }
        } catch (error) {
          console.error("Invalid token or other error:", error);
        }

        // 儲存 token（使用 Capacitor Storage）
        await this._tokenService.saveToken(token);
        // 存储令牌
        // lấy data từ server về ====
        this._usersService.getUserData().subscribe(
          (response) => {
            // console.log(response);
            this.list = response.data ?? []; // 避免 null 出錯
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
    this.resetIdleTimer(); // 初始化計時器
  }

    // 監聽滑鼠移動、點擊、鍵盤按下等事件
  @HostListener('document:mousemove')
  @HostListener('document:keydown')
  @HostListener('document:click')
  handleUserActivity(): void {
    this.resetIdleTimer();
  }

  private resetIdleTimer(): void {
    if (this.idleTimeout) {
      clearTimeout(this.idleTimeout);
    }

    this.idleTimeout = setTimeout(() => {
      console.log('使用者閒置超過 10 分鐘，自動刷新頁面');
      location.reload();
    }, this.idleTimeLimit);
  }

  onclickLogout() {
    this._tokenService.removeToken();
    // localStorage.removeItem("token");
    this._router.navigate(["/login"]);
  }
}
