import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { NgZorroAntdMobileModule } from "ng-zorro-antd-mobile";

// đa ngôn ngữ gồm phần như sau ============================================
// đa ngôn ngữ phần thứ nhất phải cài thêm 2 hai phần dưới trong npm install
// npm install @ngx-translate/cor
// npm install @ngx-translate/http-loader
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient, HttpClientModule } from "@angular/common/http";
//=component===========================================================================

import { GuestComponent } from "./guest.component";
import { GuestDetailComponent } from './guest-detail/guest-detail.component';
import { GuestModifyComponent } from './guest-modify/guest-modify.component';

//==routing================================================================================
import { GuestRoutingModule } from "./guest-routing.module";
import { GuestNewComponent } from './guest-new/guest-new.component';
@NgModule({
  declarations: [GuestComponent, GuestDetailComponent, GuestModifyComponent, GuestNewComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntdMobileModule,
    GuestRoutingModule,

    // đa ngôn ngữ phần thứ hai =======
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [
    GuestComponent
  ]
})
export class GuestModule {}

// đa ngôn ngữ phần thứ ba
// còn phần thứ tư sẽ thiệt lập bên file chuyên đổi ngôn ngữ  (language.component.ts)
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
