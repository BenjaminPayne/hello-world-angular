import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopfrontComponent } from './shopfront.component';
import { ProductComponent } from '../product/product.component';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { ProductsComponent } from '../products/products.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { ShoppingCartItemComponent } from '../shopping-cart-item/shopping-cart-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';
import { CartItem } from '../shopping-cart/cartItem';
import { Product } from '../product/product';

class MockShoppingCartService {
  getCurrentItems(): Array<CartItem> {
    let product = new Product("test", "testDesc", "url");
    let cartItem = new CartItem(product, 0);
    return [cartItem];
  }
}

describe('ShopfrontComponent', () => {
  let component: ShopfrontComponent;
  let fixture: ComponentFixture<ShopfrontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ShopfrontComponent,
        ProductComponent,
        ProductsComponent,
        ShoppingCartComponent,
        ShoppingCartItemComponent
      ],
      imports: [MaterialModule, FormsModule, BrowserAnimationsModule, RouterTestingModule],
      providers: [{
        provide: ShoppingCartService, useClass: MockShoppingCartService
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopfrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
