import { Component, OnInit } from '@angular/core';
import { productDetail, Product } from 'src/app/model/product';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit(): void {
    const routeParam = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParam.get('id'));
    this.product = productDetail.find(products => products.id === productIdFromRoute);
  }

  addToCart(product: Product) {
    this.cartService.addProduct(product)
  }
}
