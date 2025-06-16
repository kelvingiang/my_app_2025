// CÁC MODULE CĂN BẢN PHẢI IMPORT ===================
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { BasicRoutingModule } from "./basic-routing.module";

// CÁC MODULE ADD THÊM ===================
import { NgZorroAntdMobileModule } from "ng-zorro-antd-mobile";
import { ShareModule } from "../share/share.module";

// CÁC MODULE CON TRONG PHẦN BASIC ===================
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { LogoutComponent } from "./logout/logout.component";
// test cac function  ==========
import { VongdoiComponent } from "./vongdoi/vongdoi.component";
import { ChildComponent } from "./vongdoi/child/child.component";

import { OnChangesComponent } from "./onchanges/onchanges.component";
import { ChildOnChangesComponent } from "./onchanges/child-onchanges/child.component";

import { AfterContentComponent } from "./aftercontent/aftercontent.component";
import { ChildAfterContentComponent } from "./aftercontent/child-aftercontent/child.component";
import { ScrollComponent } from "./scroll/scroll.component";
import { LocalMapComponent } from "./map-local/local-map.component";
import { AgmComponent } from "./map-agm/agm.component";





import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { MenuNgangComponent } from './menu-ngang/menu-ngang.component';

// import { AgmCoreModule } from '@agm/core';
@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NotFoundComponent,
    LogoutComponent,
    VongdoiComponent,
    ChildComponent,
    OnChangesComponent,
    ChildOnChangesComponent,
    AfterContentComponent,
    ChildAfterContentComponent,
    ScrollComponent,
    LocalMapComponent,
    AgmComponent,
    MenuNgangComponent,
  ],
  imports: [
    BasicRoutingModule,
    CommonModule,
    ShareModule,
    NgZorroAntdMobileModule,
    FormsModule,

    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyBAV4v2qSBuCA1Rn7NPd09exwP4smcjW_g',
    //   libraries: ['places']
    // })

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
export class BasicModule {}

// đa ngôn ngữ phần thứ ba
// còn phần thứ tư sẽ thiệt lập bên file chuyên đổi ngôn ngữ  (language.component.ts)
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
