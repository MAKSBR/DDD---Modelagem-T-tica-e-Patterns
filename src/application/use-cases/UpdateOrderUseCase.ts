import { Order } from '../../domain/entities/Order';
import { OrderRepositoryInterface } from '../../domain/repositories/OrderRepositoryInterface';

export class UpdateOrderUseCase {
  constructor(private orderRepository: OrderRepositoryInterface) {}

  async execute(order: Order): Promise<void> {
    const existingOrder = await this.orderRepository.findById(order.id);
    if (!existingOrder) {
      throw new Error('Pedido não encontrado');
    }
    await this.orderRepository.update(order);
  }
}
