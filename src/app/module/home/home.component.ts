import { Component, Input } from '@angular/core';
import { Category } from 'src/app/model/category';
import { Product } from 'src/app/model/product';
import { Slider } from 'src/app/model/slider';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  slides: Slider[] = [
    { url: '../../../assets/images/banner/banner1.jpg', name: 'banner1' },
    { url: '../../../assets/images/banner/banner2.jpg', name: 'banner2' },
  ];

  categories: Category[] = [
    {id: 1, type: "watch", imgUrl:"../../../assets/images/pngegg.png"},
    {id: 1, type: "watch", imgUrl:"../../../assets/images/pngegg.png"},
    {id: 1, type: "watch", imgUrl:"../../../assets/images/pngegg.png"},
    {id: 1, type: "watch", imgUrl:"../../../assets/images/pngegg.png"},
    {id: 1, type: "watch", imgUrl:"../../../assets/images/pngegg.png"}
  ];

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
