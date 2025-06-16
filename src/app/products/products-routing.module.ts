import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductKindComponent } from "./product-kind/product-kind.component";

const routes: Routes = [
  { path: "product-detail/:id", component: ProductDetailComponent },
  { path: "product-kind/:kind", component: ProductKindComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
