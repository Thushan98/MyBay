import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category';
import { Product } from 'src/app/model/product';
import { Slider } from 'src/app/model/slider';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
      
  }

  getRows(products: any[], itemsPerRow: number): any[][] {
    const rows = [];
    const rowCount = Math.ceil(products.length / itemsPerRow);
    for (let i = 0; i < rowCount; i++) {
      const start = i * itemsPerRow;
      const end = start + itemsPerRow;
      rows.push(products.slice(start, end));
    }
    return rows;
  }  
  searchText!:string;
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
    },
    {
      id:2,
      title: 'Men Belt GG',
      price: 850,
      quantity: 50,
      category: 2,
      description:"",
      image: "",
      discount: .20,
      rating: 4
  },
  {
      id:3,
      title: 'Ladies Shoe Heels',
      price: 2550,
      quantity: 20,
      category: 3,
      description:"",
      image: "",
      discount: .20,
      rating: 4
  },
  {
      id:4,
      title: 'Bagpack Kids',
      price: 2150,
      quantity: 5,
      category: 4,
      description:"",
      image: "",
      discount: .20,
      rating: 4
  },
  {
      id:5,
      title: 'Boy Sneakers Black',
      price: 2550,
      quantity: 15,
      category: 2,
      description:"",
      image: "",
      discount: .20,
      rating: 4
  },
  {
      id:6,
      title: 'Ladies Sneaker',
      price: 6150,
      quantity: 5,
      category: 2,
      description:"",
      image: "",
      discount: .30,
      rating: 4
  },
  {
      id:7,
      title: 'Rolex Watch C50',
      price: 8150,
      quantity: 15,
      category: 1,
      description:"",
      image: "",
      discount: .20,
      rating: 4
  },
  {
      id:8,
      title: 'Ladies Hand Bag-Red',
      price: 3150,
      quantity: 10,
      category: 3,
      description:"",
      image: "",
      discount: .20,
      rating: 4
  },
  {
      id:9,
      title: 'Ladies Hand Bag Blue',
      price: 4150,
      quantity: 5,
      category: 3,
      description:"",
      image: "",
      discount: .20,
      rating: 4
  }
  ];
}
