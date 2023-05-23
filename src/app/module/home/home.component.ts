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

  products: Product[] = productDetail;
}
