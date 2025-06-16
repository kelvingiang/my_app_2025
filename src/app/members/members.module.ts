// CÁC MODULE CĂN BẢN PHẢI IMPORT ===================
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

// import { MenuModule } from "../menu/menu.module";

//CÁC COMPONENT TRONG MEMBER ============================================
import { MembersComponent } from "./members.component";
import { MemberItemComponent } from "./member-item/member-item.component";
import { MemberDetailComponent } from "./member-detail/member-detail.component";

// CÁC MODULE DUNG TRONG VIỆC CHUYỂN NGÔN NGỮ THỨ NHẤT =============
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient, HttpClientModule } from "@angular/common/http";

// MODULE ANT DESIGN MOBILE ===================================
import { NgZorroAntdMobileModule } from "ng-zorro-antd-mobile";

@NgModule({
  declarations: [MembersComponent, MemberItemComponent, MemberDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntdMobileModule,
    // MenuModule,
    TranslateModule,
    // đa ngôn ngữ phần thứ hai =======
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  exports: [],
})
export class MembersModule {}

// PHẦN THỨ 3 CỦA CHUYỂN NGÔN NGỮ ======================================
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
