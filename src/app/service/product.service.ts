import { Injectable } from '@angular/core';
import { IProduct } from '../class/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  
  productList: IProduct[] = [];

  constructor() {
    this.addProduct({
      id: 1,
      name: 'san pham 1',
      img: 'one.jpg',
      summary: 'chu thich cho San pham 1',
      price: 1000,
      kind: 'vi',
    });
    this.addProduct({
      id: 2,
      name: 'san pham 2',
      img: 'two.jpg',
      summary: 'chu thich cho San pham 2',
      price: 2000,
      kind: 'vi',
    });
    this.addProduct({
      id: 3,
      name: 'san pham 3',
      img: 'three.jpg',
      summary: 'chu thich cho San pham 3',
      price: 3000,
      kind: 'vi',
    });
    this.addProduct({
      id: 4,
      name: 'san pham 4',
      img:'four.jpg',
      summary: 'chu thich cho San pham 4',
      price: 4000,
      kind: 'vi',
    });
    this.addProduct({
      id: 5,
      name: 'san pham 5',
      img:'five.jpg',
      summary: 'chu thich cho San pham 5',
      price: 5000,
      kind: 'vi',
    });
    this.addProduct({
      id: 6,
      name: 'san pham 6',
      img:'one.jpg',
      summary: 'chu thich cho San pham 6',
      price: 6000,
      kind: 'en',
    });
    this.addProduct({
      id: 7,
      name: 'san pham 7',
      img:'two.jpg',
      summary: 'chu thich cho San pham 7',
      price: 7000,
      kind: 'en',
    });
    this.addProduct({
      id: 8,
      name: 'san pham 8',
      img:'three.jpg',
      summary: 'chu thich cho San pham 8',
      price: 8000,
      kind: 'en',
    });
    this.addProduct({
      id: 9,
      name: 'san pham 9',
      img:'four.jpg',
      summary: 'chu thich cho San pham 9',
      price: 9000,
      kind: 'en',
    });
    this.addProduct({
      id: 10,
      name: 'san pham 10',
      img: 'five.jpg',
      summary: 'chu thich cho San pham 10',
      price: 10000,
      kind: 'en',
    });
    this.addProduct({
      id: 11,
      name: 'san pham 11',
      img: 'two.jpg',
      summary: 'chu thich cho San pham 11',
      price: 11000,
      kind: 'en',
    });
    this.addProduct({
      id: 12,
      name: 'san pham 12',
      img:'five.jpg',
      summary: 'chu thich cho San pham 12',
      price: 12000,
      kind: 'en',
    });
  }

  public addProduct(product: IProduct) {
    this.productList.push(product);
    return this.productList;
   }

  public getProductByID(id: number): IProduct {
    let result: any =[] ;
    for (let i = 0; i < this.productList.length; i++) {
      if (this.productList[i].id == id) {
        result = this.productList[i];
        break;
      }
    }
    return result;
  }

  public getProductByKind(kind: string): IProduct {
    let result: any =[] ;
    for (let i = 0; i < this.productList.length; i++) {
      if (this.productList[i].kind == kind) {
        result.push(this.productList[i]);
       
      }
    }
    return result;
  }
}
