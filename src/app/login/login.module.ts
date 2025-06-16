import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms"; // SU DUNG FORMGROUP CAN ADD

import { LoginComponent } from "./login.component";
import { HomeComponent } from "../basic/home/home.component";

// import { LanguagesComponent } from "../languages/languages.component";

import { NgZorroAntdMobileModule } from "ng-zorro-antd-mobile";
import { ShareModule } from "../share/share.module";


// 1 TẠO CHUYỂN TRANG TRONG MODULE CON GỜM 3 BƯỚC
import { RouterModule, Routes } from "@angular/router";

// CÁC MODULE DUNG TRONG VIỆC CHUYỂN NGÔN NGỮ THỨ NHẤT =============
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient, HttpClientModule } from "@angular/common/http";

// 2 TẠO CHUYỂN TRANG TRONG MODULE CON KHẢI BÁO TRANG ĐƯỢC CHUYÊN ĐẾN
const routes: Routes = [
  { path: "home", component: HomeComponent }, // 首頁路由
  // 其他路由配置
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdMobileModule,
    ShareModule,
    // LanguagesModule,
    TranslateModule,

    // đa ngôn ngữ phần thứ hai =======
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient],
      },
    }),

    // 3 TẠO CHUYÊN TRANG Ở MODULE CON PHẢI DÙNG forchild(routes) THAY VÌ DÙNG forRoot Ở app module
    // PHẦN routes PHẢI ĐƯƠC KHẢI TRÊN TRƯỚC KHI GỌI
    RouterModule.forChild(routes),
  ],
})
export class LoginModule {}

// PHẦN THỨ 3 CỦA CHUYỂN NGÔN NGỮ ======================================
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
