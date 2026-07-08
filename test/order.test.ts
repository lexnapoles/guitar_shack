import "mocha"
import { strict as assert } from "assert";
import {describe, it} from "node:test";
import { Order } from "../src/order";

describe("Add item to order", () => {
    it("should add an item when sufficient stock is available", () => {
        const productId = 327;
        const order = new Order()
        const item = order.getItem(productId);

        
        assert.deepStrictEqual(item.quantity, 1 )
    });
});
