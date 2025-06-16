import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "src/app/service/product.service";
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: "app-product-kind",
  templateUrl: "./product-kind.component.html",
  styleUrls: ["../products.component.scss"],
})
export class ProductKindComponent implements OnInit {
  kind: string = "";
  productKindList: any = [];

  constructor(
    private _productService: ProductService,
    private _activateRoute: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    this.kind = this._activateRoute.snapshot.params["kind"];
    this.productKindList = this._productService.getProductByKind(this.kind);
  }

  showMore(id: number) {
    //   cách truyển tham số và chuyển trang bằng navigate
    this._router.navigate(["product-detail", id]);
  }
}
