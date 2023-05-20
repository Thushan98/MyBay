import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

import { CardsComponent } from './cards/cards.component';
import { SliderComponent } from './slider/slider.component';
import { CategoryComponent } from './category/category.component';


@NgModule({
    declarations: [
        CardsComponent,
        SliderComponent,
        CategoryComponent
    ],
    exports: [
        CardsComponent,
        SliderComponent,
        CategoryComponent
    ],
    imports: [RouterModule, CommonModule, MatIconModule]
})

export class AppCommonModule {}