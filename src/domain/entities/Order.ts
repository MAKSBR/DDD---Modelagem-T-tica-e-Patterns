export class Order {
  constructor(
    public readonly id: string,
    public product: string,
    public quantity: number,
    public price: number
  ) {}

  get total(): number {
    return this.quantity * this.price;
  }
}