import { Component, OnInit } from "@angular/core";

import { ProductService } from "./../service/product.service";
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent implements OnInit {
  _listProducts: any = [];
  height: number = document.documentElement.clientHeight;
  state = {
    open: false,
  };

  constructor(
    private _productService: ProductService,
    private _router: Router
  ) {}

  ngOnInit() {
    this._listProducts = this._productService.productList;
  }

  showMore(id: number) {
    //   cách truyển tham số và chuyển trang bằng navigate
    this._router.navigate(["product-detail", id]);
  }

  onOpenChange(event: any) {
    this.state.open = !this.state.open;
  }
}
