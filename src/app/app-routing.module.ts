import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './service/auth.guard';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule), data: { showHeader: false } },
  { path: 'products/:id', loadChildren: () => import('./module/product-detail/product-detail.module').then(m => m.ProductDetailModule) },
  { path: 'home', loadChildren: () => import('./module/home/home.module').then(m => m.HomeModule)},
  { path: 'cart', canActivate: [AuthGuard], loadChildren: () => import('./module/cart/cart.module').then(m => m.CartModule) },
  { path: 'profile', canActivate: [AuthGuard], loadChildren: () => import('./module/profile/profile.module').then(m => m.ProfileModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
