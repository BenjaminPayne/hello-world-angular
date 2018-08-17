import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingCartItemComponent } from './shopping-cart-item/shopping-cart-item.component';
import { ShoppingCartService } from './shopping-cart/shopping-cart.service';
import { MaterialModule } from './material/material.module';
import { ShopfrontComponent } from './shopfront/shopfront.component';
import { SummaryComponent } from './summary/summary.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { SummaryItemComponent } from './summary-item/summary-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent,
    ShoppingCartComponent,
    ShoppingCartItemComponent,
    ShopfrontComponent,
    SummaryComponent,
    SummaryItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ShoppingCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }