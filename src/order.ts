import { Product } from "./product";

export class Order {
  #items: Map<Product, number>;

  constructor() {
    this.#items = new Map();
  }

  addItem(product: Product, quantity: number) {
    if (!product.hasEnoughStock(quantity)) {
      throw new InsufficientStock(product)
    }
    
    product.increaseHold(quantity);

    this.#items.set(product, quantity);
  }

  getItemQuantity(product: Product) {
    return this.#items.get(product);
  }
}

class InsufficientStock extends Error {
  constructor(product: Product, options?: ErrorOptions) {
    const message = `Insufficient stock of ${product.description}. Only ${product.availableStock()} currently available.`
    
    super(message, options);
    
    this.name = "InsufficientStock";
  }
}