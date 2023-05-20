import { Component, Input } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {

  @Input() products: Product[]=[];

}
