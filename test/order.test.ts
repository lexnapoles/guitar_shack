import "mocha"
import { strict as assert } from "assert";
import {describe, it} from "node:test";
import { Order } from "../src/order";
import { Product } from "../src/product";

describe("Add item to order", () => {
    it("should add an item when sufficient stock is available", () => {
        const quantity = 1;

        const order = new Order()
        const product = new Product(327, "Ibanez Tube Screamer", 7, 0)
        
        order.addItem(product, quantity);

        const itemQuantity = order.getItemQuantity(product);
        
        assert.deepStrictEqual(product.hold, 1)
        assert.deepStrictEqual(itemQuantity, 1)
    });

    it("should reject adding an item when insufficient stock and no stock is on hold", () => {
        const order = new Order();
        const product = new Product(327, "Ibanez Tube Screamer", 1, 0)

        assert.throws(() => order.addItem(product, 2), {
            name: "InsufficientStock",
            message: "Insufficient stock of Ibanez Tube Screamer. Only 1 currently available."
        })
    })
});
