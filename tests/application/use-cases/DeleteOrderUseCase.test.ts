import { DeleteOrderUseCase } from '../../../src/application/use-cases/DeleteOrderUseCase';
import { OrderRepositoryMemory } from '../../../src/infrastructure/repositories/OrderRepositoryMemory';
import { Order } from '../../../src/domain/entities/Order';

describe('DeleteOrderUseCase', () => {
  let orderRepository: OrderRepositoryMemory;
  let deleteOrderUseCase: DeleteOrderUseCase;

  beforeEach(() => {
    orderRepository = new OrderRepositoryMemory();
    deleteOrderUseCase = new DeleteOrderUseCase(orderRepository);
  });

  test('Deve deletar um pedido existente', async () => {
    const order = new Order('1', 'Produto Teste', 2, 10.0);
    await orderRepository.create(order);

    await deleteOrderUseCase.execute('1');

    const deletedOrder = await orderRepository.findById('1');
    expect(deletedOrder).toBeNull();
  });

  test('Deve lançar erro ao tentar deletar um pedido não existente', async () => {
    await expect(deleteOrderUseCase.execute('999')).rejects.toThrow();
  });
}); 