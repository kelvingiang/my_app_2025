import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// import { MenuModule } from '../menu/menu.module';

import { UsersComponent } from "./users.component";
import { NgZorroAntdMobileModule } from "ng-zorro-antd-mobile";

// đa ngôn ngữ gồm phần như sau ============================================
// đa ngôn ngữ phần thứ nhất phải cài thêm 2 hai phần dưới trong npm install
// npm install @ngx-translate/cor
// npm install @ngx-translate/http-loader
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient, HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    NgZorroAntdMobileModule,
    // MenuModule

    // đa ngôn ngữ phần thứ hai =======
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
})
export class UsersModule {}

// đa ngôn ngữ phần thứ ba
// còn phần thứ tư sẽ thiệt lập bên file chuyên đổi ngôn ngữ  (language.component.ts)
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
