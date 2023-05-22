import { Component, Input } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {

  @Input() products: Product[]=[];
  @Input() searchQuery!: string;

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
}
