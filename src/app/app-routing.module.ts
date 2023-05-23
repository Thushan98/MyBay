import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'products/:id', loadChildren: () => import('./module/product-detail/product-detail.module').then(m => m.ProductDetailModule) }, 
  { path: 'home', loadChildren: () => import('./module/home/home.module').then(m => m.HomeModule) },
  { path: 'cart', loadChildren: () => import('./module/cart/cart.module').then(m => m.CartModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
