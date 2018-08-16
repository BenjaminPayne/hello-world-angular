import { TestBed, async, inject } from "@angular/core/testing";
import { ShoppingCartService } from "./shopping-cart.service";
import { Product } from "../product/product";
import { CartItem } from "./cartItem";


describe('ShoppingCartService', () => {

    beforeEach(async(() => {
        const injector = TestBed.configureTestingModule({
            providers: [ShoppingCartService]
        });
    }));

    it('should create', inject([ShoppingCartService], (service: ShoppingCartService) => {
        expect(service).toBeTruthy();
    }));

    it('should get the current item in carts', inject([ShoppingCartService], (service: ShoppingCartService) => {
        let product = new Product("title", "desc", "url");
        let quantity = 0;
        let cartItem = new CartItem(product, quantity);

        service.addToCart(product, quantity);

        expect(service.getCurrentItems().length).toEqual(1);
        expect(service.getCurrentItems()).toContain(cartItem);
    }));

})