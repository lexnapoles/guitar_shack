export class Product {
  #stock: number;
  #hold: number;
  #id: number;
  #description: string;

  constructor(id: number, description: string, stock: number, hold: number) {
    this.#id = id;
    this.#description = description;
    this.#stock = stock;
    this.#hold = hold;
  }

  get hold() {
    return this.#hold;
  }

  get stock() {
    return this.#stock;
  }

  get description() {
    return this.#description;
  }
  
  increaseHold(quantity: number) {
    this.#hold += quantity;
  }

  
}