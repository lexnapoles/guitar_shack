type productId = string;

export class Order {
  #items: Record<productId, number>[];

  constructor() {
    this.#items = [];
  }

  addItem(productId: number, quantity: number) {
    this.#items.push({ productId, quantity });
  }

  getItem(id: number) {
    return this.#items.find(({ productId }) => productId === id);
  }
}
