import { Component } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';
import { CartItem } from '../shopping-cart/cartItem';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {

  cartService: ShoppingCartService;

  constructor(cartService: ShoppingCartService) {
    this.cartService = cartService;
  }

  public getCartItems(): Array<CartItem> {
    return this.cartService.getCurrentItems();
  }

}
