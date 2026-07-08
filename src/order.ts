import { Product } from "./product";

export class Order {
  #items: Map<Product, number>;

  constructor() {
    this.#items = new Map();
  }

  addItem(product: Product, quantity: number) {
    product.hold += quantity;
    this.#items.set(product, quantity);
  }

  getItemQuantity(product: Product) {
    return this.#items.get(product);
  }
}
