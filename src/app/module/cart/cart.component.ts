import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  items = this.cartService.getItems();
  constructor(private cartService: CartService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    //this.items = 1
  }

  checkoutForm = this.formBuilder.group({
    name: '',
    price: '',
    quantiy: '',
    total: '',
  });

  onSubmit(): void {
    this.items = this.cartService.clearCart();
    console.log('order submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
  counter = 1;

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  increseQuantity(item: any) {
    item.quantity++;
  }

  removeFromCart() {
    this.cartService.clearCart()
  }
  getTotalPrice(item: any): number {
    return item.price * item.quantity;
  }

  getTotal(): number {
    let total = 0;
    for (const item of this.items) {
      total += this.getTotalPrice(item);
    }
    return total;
  }

  getCalculate(item: any): number {
    return item.discount * item.price;
  }

  getTotalDiscount():number {
    let discount = 0;
    for (const item of this.items){
      discount += this.getCalculate(item);
    }
    return discount;
  }

  purchase() {
    console.log(this.items);
    console.log(this.getTotal() + 20 - 0 - this.getTotalDiscount())
  }

}
