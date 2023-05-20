import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListRoutingModule } from './product-list-routing.module';
import { ProductListComponent } from './product-list.component';
import { AppCommonModule } from 'src/app/components/common.module';

@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ProductListRoutingModule,
    AppCommonModule
  ]
})
export class ProductListModule { }
