import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

import { CardsComponent } from './cards/cards.component';
import { SliderComponent } from './slider/slider.component';
import { FilterPipe } from '../pipes/filter.pipe';

@NgModule({
    declarations: [
        CardsComponent,
        SliderComponent,
        FilterPipe
    ],
    exports: [
        CardsComponent,
        SliderComponent
    ],
    imports: [RouterModule, CommonModule, MatIconModule]
})

export class AppCommonModule {}