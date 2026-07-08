export class Product {
  #stock: number;
  hold: number;
  #id: number;
  #description: string;

  constructor(id: number, description: string, stock: number, hold: number) {
    this.#id = id;
    this.#description = description;
    this.#stock = stock;
    this.hold = hold;
  }

  
}