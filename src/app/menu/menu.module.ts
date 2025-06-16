import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent } from './menu.component';
import { ShareModule } from "../share/share.module"


// đa ngôn ngữ gồm phần như sau ============================================
// đa ngôn ngữ phần thứ nhất phải cài thêm 2 hai phần dưới trong npm install
// npm install @ngx-translate/cor
// npm install @ngx-translate/http-loader
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient, HttpClientModule } from "@angular/common/http";
//============================================================================


@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    ShareModule,
     // đa ngôn ngữ phần thứ hai =======
     TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  // MUỐN SỬ DỤNG CÁC COMPONENT TRONG CÁC MODULE NÀY Ở CÁC MODULE IMPORT NÓ PHẢI export COMPONENT ĐÓ  
  exports: [MenuComponent]
})
export class MenuModule { }
// đa ngôn ngữ phần thứ ba
// còn phần thứ tư sẽ thiệt lập bên file chuyên đổi ngôn ngữ  (language.component.ts)
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
