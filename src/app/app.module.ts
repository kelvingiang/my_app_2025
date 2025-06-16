// import { LanguagesComponent } from "./languages/languages.component";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

// đa ngôn ngữ gồm phần như sau ============================================
// đa ngôn ngữ phần thứ nhất phải cài thêm 2 hai phần dưới trong npm install
// npm install @ngx-translate/cor
// npm install @ngx-translate/http-loader
// import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
// import { TranslateHttpLoader } from "@ngx-translate/http-loader";
// import { HttpClient, HttpClientModule } from "@angular/common/http";
//============================================================================

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";

import { NgZorroAntdMobileModule } from "ng-zorro-antd-mobile";

//CÁC MODULE PHẦN CON =======================
import { MembersModule } from "./members/members.module";
import { ProductsModule } from "./products/products.module";
import { UsersModule } from "./users/users.module";
import { BasicModule } from "../app/basic/basic.module";
import { ShareModule } from "./share/share.module";
import { LoginModule } from "./login/login.module";
import { MenuModule } from "./menu/menu.module";
import { LanguagesModule } from "./languages/languages.module";
import { WordpressModule } from "./wordpress/wordpress.module";

import { GuestModule } from "./guest/guest.module";

import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient, HttpClientModule } from "@angular/common/http";



// import { AgmCoreModule } from "@agm/core";

// CÁC COMPONENT CON ==================================
//import { MenuComponent } from "./menu/menu.component";
// import { LanguagesComponent } from "./languages/languages.component";
import { LoadMoreComponent } from "./load-more/load-more.component";
import { ReadXmlComponent } from './read-xml/read-xml.component';
// import { ScheduleComponent } from './wordpress/schedule/schedule.component';

import { AgmCoreModule } from '@agm/core';
import { GuestComponent } from './guest/guest.component';

@NgModule({
  declarations: [AppComponent, LoadMoreComponent, ReadXmlComponent,],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdMobileModule,
    LanguagesModule,
    

    GuestModule,
    ShareModule,
    BasicModule,
    MembersModule,
    ProductsModule,
    UsersModule,
    LoginModule,
    MenuModule,
    WordpressModule,

    // ROUTER CHÍNH NÊN ĐỂ DƯỚI CŨNG ĐỂ CÁC ROUTING CON PHỨC TẠP HƠN Ở TRÊN
    AppRoutingModule,



    // đa ngôn ngữ phần thứ hai =======
    // TranslateModule.forRoot({
    //   loader: {
    //     provide: TranslateLoader,
    //     useFactory: httpTranslateLoader,
    //     deps: [HttpClient],
    //   },
    // }),
    // AgmCoreModule.forRoot({
    //   apiKey: "xxx",
    //   libraries: ["places", "geometry"],
    // })
         // đa ngôn ngữ phần thứ hai =======
         TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: httpTranslateLoader,
            deps: [HttpClient],
          },
        }),

        // AgmCoreModule.forRoot({
        //   apiKey: 'AIzaSyBAV4v2qSBuCA1Rn7NPd09exwP4smcjW_g'
        // }),
    
  ],
  
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}

// đa ngôn ngữ phần thứ ba
// còn phần thứ tư sẽ thiệt lập bên file chuyên đổi ngôn ngữ  (language.component.ts)
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
// đa ngôn ngữ phần thứ ba
// còn phần thứ tư sẽ thiệt lập bên file chuyên đổi ngôn ngữ  (language.component.ts)
// export function httpTranslateLoader(http: HttpClient) {
//   return new TranslateHttpLoader(http);
// }
