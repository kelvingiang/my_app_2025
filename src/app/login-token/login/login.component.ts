import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";
import { StateService } from "../../service/state.service";
import { UsersService } from "../../service/users.service";
import { PasswordValidator } from "../../validators/password-validator";
import { TokenService } from "../../service/token.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  user: string = "";
  password: string = "";
  inputError: boolean = false;
  loginFailure: boolean = false;
  URL: any = "";

  //SỬ DỤNG FORMBUILDER SẼ DỌN CODE HƠN TÙY FORMCONTROL VÀ FORMBUILDER CÓ CÔNG DỤNG NHƯ NHAU
  // form: FormGroup;

  constructor(
    private _translateService: TranslateService,
    private _http: HttpClient,
    private _usersService: UsersService,
    private _router: Router,
    private _stateService: StateService,
    private _formBuilder: FormBuilder,
    private _tokenService: TokenService
  ) {
    this._translateService.get;
  }

  ngOnInit() {
    // PHẢI DỤNG CÂU NÀY KHI CHUYỂN ĐỔI NGÔN NGỮ VÀ CẤP NGÔN NGỮ TRONG FILE TS
    this._translateService.onLangChange.subscribe(() => {
      // 在语言切换后，重新获取翻译内容
      this.user = this._translateService.instant("basic.user-name");
      this.password = this._translateService.instant("basic.password");
    });
    this.URL = this._usersService.url + "page/login/";
  }

  //PHẦN NAY KHI SỰ DỤNG FORM CONTROL
  form = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl(
      "",
      Validators.compose([
        Validators.required,
        PasswordValidator.cannotContainSpace,
      ])
    ),
  });

  submit() {
    if (this.form.valid) {
      const data = {
        username: this.form.value.username,
        password: this.form.value.password,
      };

      this._http.post<any>(this.URL + "token-login.php", data).subscribe(
        async (response) => {
          // 处理登录成功的响应
          // const token = response.token;
          // 发起受令牌保护的请求
          if (response.error) {
            this.loginFailure = true;
            console.log("登入失敗，錯誤訊息:", response.error);
          } else if (response.token) {
            console.log("登入成功", response.error);
            // 存储令牌
            await this._tokenService.saveToken(response.token);
            this._router.navigate(["/users"]);
          }
          console.log("login success nhu user va password");
        },
        (error) => {
          this.loginFailure = true; // THÔNG BÁO LỖI KHI NHẬP SAI THÔNG TIN LOGIN
          // 处理登录失败的响应
          console.log("伺服器連線錯誤", error);
        }
      );
    } else {
      // 表单输入无效，显示错误或采取其他操作
      this.inputError = true; // THÔNG BÁO LỖI KHI INPUT RỖNG
      console.log("表单输入无效，请填写正确的值");
    }
  }
}
