import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'product-list', loadChildren: () => import('./module/product-list/product-list.module').then(m => m.ProductListModule) }, { path: 'home', loadChildren: () => import('./module/home/home.module').then(m => m.HomeModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }