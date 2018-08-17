import { Component, OnInit } from '@angular/core';
import { CartItem } from './cartItem';
import { ShoppingCartService } from './shopping-cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cart: CartItem[];
  showError: boolean = false;
  cartService: ShoppingCartService;
  router: Router;

  constructor(cartService: ShoppingCartService, router: Router) {
    this.cartService = cartService;
    this.router = router;
  }

  ngOnInit(): void {
    this.getCartItems();
  }

  public getCartItems(): void {
    this.cartService.getCurrentItemsAsync()
                    .subscribe(cart => this.cart = cart);
  }

  public verifyCart() {
    if (this.cart.length !== 0) {
      this.router.navigate(['/summary']);
    }
    this.showError = true;
  }

}
