// CÁC MODULE CĂN BẢN PHẢI IMPORT ===================
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

// CÁC PHẦN CHO CHUYỂN NGÔN NGỮ
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient, HttpClientModule } from "@angular/common/http";

// khi có sự dụng đến Router trong module con phải chèn vào RouterModule
//mới hoạt động dc
import { RouterModule, Routes } from "@angular/router";

// các component con =========================
import { ProductsComponent } from "./products.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductKindComponent } from "./product-kind/product-kind.component";

// CÁC MODULE ADD THÊM ===================
import { NgZorroAntdMobileModule } from "ng-zorro-antd-mobile";
import { ProductsRoutingModule } from "./products-routing.module";
// import { MenuModule } from "../menu/menu.module";

@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailComponent,
    ProductKindComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    // MenuModule,
    ProductsRoutingModule,
    NgZorroAntdMobileModule,
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
export class ProductsModule {}

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
