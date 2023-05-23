import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  items = this.cartService.getItems();
  constructor (private cartService: CartService, private formBuilder: FormBuilder){ }

  

  checkoutForm = this.formBuilder.group({
    name: '',
    price: '',
    quantiy: '',
    total: '',
  });

  onSubmit(): void {
    this.items =this.cartService.clearCart();
    console.log('order submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
  counter = 1;
  
  decreseQuantity(id:any, quantity:any){
    this.counter--;
    //console.log(item);
    // quantity-1;
    // localStorage.setItem('localCart',JSON.stringify(quantity))
  }
  
  increseQuantity(){
    this.counter++;
    //console.log(this.counter)
  }

  removeFromCart(){

  }
  total: number=0;
  getTotal(items:any){
    
    for(const item of this.items)
      this.total = item.price * this.counter; 
    
    console.log(this.total)
  }
}
