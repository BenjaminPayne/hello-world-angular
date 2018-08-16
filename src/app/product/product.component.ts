import { Component, Input } from '@angular/core';
import { Product } from './product';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() product: Product;
  quantity: number = 1;

  private cartService: ShoppingCartService;

  constructor(cartService: ShoppingCartService) {
    this.cartService = cartService;
  }

  public addToCard(product: Product, quantity: number) {
    this.cartService.addToCart(product, quantity);
  }

}
