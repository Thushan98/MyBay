import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Product[]=[];

  constructor() { }

  addProduct(products: Product) {
    this.cart.push(products);
  }

  getItems() {
    return this.cart;
  }

  clearCart() {
    this.cart=[];
    return this.cart;
  }
}
