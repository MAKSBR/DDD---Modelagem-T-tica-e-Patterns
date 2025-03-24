import { UpdateOrderUseCase } from '../../../src/application/use-cases/UpdateOrderUseCase';
import { OrderRepositoryMemory } from '../../../src/infrastructure/repositories/OrderRepositoryMemory';
import { Order } from '../../../src/domain/entities/Order';

describe('UpdateOrderUseCase', () => {
  let orderRepository: OrderRepositoryMemory;
  let updateOrderUseCase: UpdateOrderUseCase;

  beforeEach(() => {
    orderRepository = new OrderRepositoryMemory();
    updateOrderUseCase = new UpdateOrderUseCase(orderRepository);
  });

  test('Deve atualizar um pedido existente', async () => {
    const order = new Order('1', 'Produto Teste', 2, 10.0);
    await orderRepository.create(order);

    order.product = 'Produto Atualizado';
    order.quantity = 3;
    order.price = 15.0;

    await updateOrderUseCase.execute(order);

    const updatedOrder = await orderRepository.findById('1');
    expect(updatedOrder).not.toBeNull();
    expect(updatedOrder?.product).toBe('Produto Atualizado');
    expect(updatedOrder?.quantity).toBe(3);
    expect(updatedOrder?.price).toBe(15.0);
    expect(updatedOrder?.total).toBe(45.0);
  });

  test('Deve lançar erro ao tentar atualizar um pedido não existente', async () => {
    const order = new Order('999', 'Produto Teste', 2, 10.0);
    
    await expect(updateOrderUseCase.execute(order)).rejects.toThrow();
  });
}); 