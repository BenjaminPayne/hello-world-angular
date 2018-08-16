import { Component } from '@angular/core';
import { CartItem } from './cartItem';
import { ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {

  cartService: ShoppingCartService;

  constructor(cartService: ShoppingCartService) {
    this.cartService = cartService;
  }

  public getCartItems(): Array<CartItem> {
    return this.cartService.getCurrentItems();
  }

}
