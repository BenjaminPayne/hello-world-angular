import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialModule } from '../material/material.module'
import { ShoppingCartComponent } from './shopping-cart.component';
import { ShoppingCartItemComponent } from '../shopping-cart-item/shopping-cart-item.component';
import { CartItem } from './cartItem';
import { Product } from '../product/product';
import { ShoppingCartService } from './shopping-cart.service';

class MockShoppingCartService {
  getCurrentItems(): Array<CartItem> {
    let product = new Product("test", "testDesc", "url");
    let cartItem = new CartItem(product, 0);
    return [cartItem];
  }
}

describe('ShoppingCartComponent', () => {
  let component: ShoppingCartComponent;
  let fixture: ComponentFixture<ShoppingCartComponent>;
  let element: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingCartComponent, ShoppingCartItemComponent],
      imports: [MaterialModule],
      providers: [{
        provide: ShoppingCartService, useClass: MockShoppingCartService
      }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    element = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  afterEach(() => {
    document.body.removeChild(element);
  })
});
