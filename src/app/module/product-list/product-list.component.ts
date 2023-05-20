import { Component } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  product: Product[]=[
    {
      id: 1,
      title: "Rolex Watch",
      description: "test description",
      rating: 5,
      discount: 0.05,
      image: "../../../assets/images/pngegg.png",
      quantity: 6,
      price: 5000,
      category: 1
    }
  ];

}
