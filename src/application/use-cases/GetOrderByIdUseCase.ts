import { Order } from '../../domain/entities/Order';
import { OrderRepositoryInterface } from '../../domain/repositories/OrderRepositoryInterface';

export class GetOrderByIdUseCase {
  constructor(private orderRepository: OrderRepositoryInterface) {}

  async execute(id: string): Promise<Order | null> {
    return await this.orderRepository.findById(id);
  }
}
