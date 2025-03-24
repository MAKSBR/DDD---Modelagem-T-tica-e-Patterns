import { OrderRepositoryInterface } from '../../domain/repositories/OrderRepositoryInterface';

export class DeleteOrderUseCase {
  constructor(private orderRepository: OrderRepositoryInterface) {}

  async execute(id: string): Promise<void> {
    const existingOrder = await this.orderRepository.findById(id);
    if (!existingOrder) {
      throw new Error('Pedido não encontrado');
    }
    await this.orderRepository.delete(id);
  }
}
