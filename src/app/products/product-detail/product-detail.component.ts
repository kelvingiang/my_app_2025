import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['../products.component.scss']
})
export class ProductDetailComponent  implements OnInit {

  product: any = [];
  imgUrl: string = "../../../assets/images/product/";

  constructor(
    private _productService: ProductService, 
    private _activatedRoute: ActivatedRoute,
    private _location: Location,
  ) { }

  ngOnInit() {
       // chú ý snapshot get params sự dụng tốt khi không tại sự dụng 
    // vd: nhập số id mới không phải lick vô link thì sẽ không tự lấy data mới 
    let id = this._activatedRoute.snapshot.params['id'];
    this.product = this._productService.getProductByID(id); 
  }

  // TRẢ VỀ TRANG TRƯỚC ĐÓ =============================
  back(): void {
    this._location.back();
  }

}
