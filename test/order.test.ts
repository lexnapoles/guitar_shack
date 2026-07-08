import "mocha"
import { strict as assert } from "assert";
import {describe, it} from "node:test";
import { Order } from "../src/order";

describe("Add item to order", () => {
    it("should add an item when sufficient stock is available", () => {
        const productId = 327;
        const quantity = 1;

        const order = new Order()

        order.addItem(productId, quantity);

        const item = order.getItem(productId);

        assert.deepStrictEqual(item?.quantity, 1)
    });
});
