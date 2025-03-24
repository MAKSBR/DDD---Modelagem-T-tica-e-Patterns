import { Order } from '../../domain/entities/Order';
import { OrderRepositoryInterface } from '../../domain/repositories/OrderRepositoryInterface';
import { v4 as uuidv4 } from 'uuid';

export class CreateOrderUseCase {
  constructor(private orderRepository: OrderRepositoryInterface) {}

  async execute(product: string, quantity: number, price: number): Promise<Order> {
    const order = new Order(uuidv4(), product, quantity, price);
    await this.orderRepository.create(order);
    return order;
  }
}
