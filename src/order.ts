import { Product } from "./product";

export class Order {
  #items: Map<Product, number>;

  constructor() {
    this.#items = new Map();
  }

  addItem(product: Product, quantity: number) {
    const availableStock = product.stock - product.hold;

    if (quantity > availableStock) {
      throw new InsufficientStock(`Insufficient stock of ${product.description}. Only ${availableStock} currently available.`)
    }
    
    product.increaseHold(quantity);

    this.#items.set(product, quantity);
  }

  getItemQuantity(product: Product) {
    return this.#items.get(product);
  }
}

class InsufficientStock extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
    
    this.name = "InsufficientStock";
  }
}