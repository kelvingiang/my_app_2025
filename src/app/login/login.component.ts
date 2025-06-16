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
import { StateService } from "../service/state.service";
import { UsersService } from "../service/users.service";
import { PasswordValidator } from "../validators/password-validator";

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

  //SỬ DỤNG FORMBUILDER SẼ DỌN CODE HƠN TÙY FORMCONTROL VÀ FORMBUILDER CÓ CÔNG DỤNG NHƯ NHAU
  // form: FormGroup;

  constructor(
    private _translateService: TranslateService,
    private _http: HttpClient,
    private _usersService: UsersService,
    private _router: Router,
    private _stateService: StateService,
    private _formBuilder: FormBuilder
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
     console.log(this.form.value);

    if (this.form.valid) {
      const data = {
        username: this.form.value.username,
        password: this.form.value.password,
      };

      this._http
        .post<any>(this._usersService.url + "token-login.php", data)
        .subscribe(
          (response) => {
            // 处理登录成功的响应
            const token = response.token;
            // 存储令牌
            localStorage.setItem("token", token);
            // const getToken = localStorage.getItem("token");
            // console.log("doc lai token dc luu o local :" + getToken);
            // 发起受令牌保护的请求

            if (token != "Error login") {
              this._router.navigate(["/users"]);
            } 
            console.log("login success nhu user va password");
          },
          (error) => {
            this.loginFailure = true; // THÔNG BÁO LỖI KHI NHẬP SAI THÔNG TIN LOGIN
            // 处理登录失败的响应
            console.log("登入失败", error);
          }
        );
    } else {
      // 表单输入无效，显示错误或采取其他操作
      this.inputError = true; // THÔNG BÁO LỖI KHI INPUT RỖNG 
      console.log("表单输入无效，请填写正确的值");
    }
  }
}
