import { async, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductComponent } from './product/product.component';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { ShoppingCartItemComponent } from './shopping-cart-item/shopping-cart-item.component';
import { CartItem } from './shopping-cart/cartItem';
import { Product } from './product/product';
import { ShoppingCartService } from './shopping-cart/shopping-cart.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

class MockShoppingCartService {
  getCurrentItems(): Array<CartItem> {
    let product = new Product("test", "testDesc", "url");
    let cartItem = new CartItem(product, 0);
    return [cartItem];
  }
}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ProductComponent,
        ProductsComponent,
        ShoppingCartComponent,
        ShoppingCartItemComponent
      ],
      imports: [MaterialModule, FormsModule, BrowserAnimationsModule],
      providers: [{
        provide: ShoppingCartService, useClass: MockShoppingCartService
      }]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Shopping Online'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Shopping Online');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Shopping Online!');
  }));
});
