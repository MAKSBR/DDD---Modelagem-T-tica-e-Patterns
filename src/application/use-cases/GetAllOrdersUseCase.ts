import { Order } from '../../domain/entities/Order';
import { OrderRepositoryInterface } from '../../domain/repositories/OrderRepositoryInterface';

export class GetAllOrdersUseCase {
  constructor(private orderRepository: OrderRepositoryInterface) {}

  async execute(): Promise<Order[]> {
    return await this.orderRepository.findAll();
  }
}
