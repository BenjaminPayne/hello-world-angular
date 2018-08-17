import { Component, Input } from '@angular/core';
import { CartItem } from '../shopping-cart/cartItem';

@Component({
  selector: 'app-summary-item',
  templateUrl: './summary-item.component.html',
  styleUrls: ['./summary-item.component.css']
})
export class SummaryItemComponent {

  @Input() item: CartItem;

}
