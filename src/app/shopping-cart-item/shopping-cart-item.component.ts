import { Component, Input } from '@angular/core';
import { CartItem } from '../shopping-cart/cartItem';


@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.css']
})
export class ShoppingCartItemComponent {
  private _item: CartItem = undefined;

  @Input()
  set item(item: CartItem) {
    this._item = item;
  }

  get item(): CartItem { return this._item; }

}
