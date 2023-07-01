import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category';
import { Product, productDetail } from 'src/app/model/product';
import { Slider } from 'src/app/model/slider';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products: Product[] = productDetail;
  searchText!: string;

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

  slides: Slider[] = [
    { url: '../../../assets/images/banner/banner1.jpg', name: 'banner1' },
    { url: '../../../assets/images/banner/banner2.jpg', name: 'banner2' },
  ];

  categories: Category[] = [
    { id: 1, type: "Watch", imgUrl: "../../../assets/images/pngegg.png" },
    { id: 2, type: "Bags", imgUrl: "../../../assets/images/pngegg.png" },
    { id: 3, type: "Shoes", imgUrl: "../../../assets/images/pngegg.png" },
    { id: 4, type: "Laptops", imgUrl: "../../../assets/images/pngegg.png" },
    { id: 5, type: "Mobiles", imgUrl: "../../../assets/images/pngegg.png" }
  ];
  sortedItems: Product[] = [];
  sortItems(value: any) {
    //let sorting = [];
    console.log(value);
    this.sortedItems = this.products.filter(item => item.category === value);
  }
}
