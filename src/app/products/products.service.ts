import { Product } from "../product/product";
import { Injectable } from "@angular/core";

@Injectable()
export class ProductsService {
    private products: Product[] = []

    constructor() {
        this.products.push(new Product("Winter", "A generic white winter coat", "assets/coat.jpg"));
        this.products.push(new Product("Denim", "A stylish demin jacket", "assets/coat2.jpg"));
        this.products.push(new Product("Fashionable", "A fashionable town coat", "assets/coat3.jpg"));
        this.products.push(new Product("Outdoor", "An outdoor sports jacket", "assets/coat4.jpg"));
    }

    getProducts(): Product[] {
        return this.products;
    }
}

