import { Component, Input } from '@angular/core';
import { Category } from 'src/app/model/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {

  @Input() category: Category[]=[];

}
