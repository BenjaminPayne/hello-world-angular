import { Product } from "../product/product";

export class CartItem {
    private product: Product;
    private quantity: number;

    constructor(product: Product, quantity: number) {
        this.product = product;
        this.quantity = quantity;
    }

    getProduct(): Product {
        return this.product;
    }

    getQuantity(): number {
        return this.quantity;
    }

    addQuantity(quantity: number) {
        this.quantity += quantity;
    }
}