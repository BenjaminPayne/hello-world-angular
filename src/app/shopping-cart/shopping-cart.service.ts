import { Product } from "../product/product";
import { Injectable } from "@angular/core";
import { CartItem } from "./cartItem";
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';

@Injectable()
export class ShoppingCartService {

    private currentItems: Array<CartItem>;

    constructor() {
        this.currentItems = new Array();
    }

    public addToCart(product: Product, quantity: number) {
        let foundProduct = this.findProduct(product);
        if (foundProduct == null) {
            this.currentItems.push(new CartItem(product, quantity));
        } else {
            foundProduct.addQuantity(quantity);
        }
    }

    private findProduct(product: Product) {
        return this.currentItems.find(e => e.getProduct() == product);
    }

    public getCurrentItems(): Array<CartItem> {
        return this.currentItems;
    }
}