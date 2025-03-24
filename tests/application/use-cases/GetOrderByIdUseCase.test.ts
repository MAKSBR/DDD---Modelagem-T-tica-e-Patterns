import { GetOrderByIdUseCase } from '../../../src/application/use-cases/GetOrderByIdUseCase';
import { OrderRepositoryMemory } from '../../../src/infrastructure/repositories/OrderRepositoryMemory';
import { Order } from '../../../src/domain/entities/Order';

describe('GetOrderByIdUseCase', () => {
  let orderRepository: OrderRepositoryMemory;
  let getOrderByIdUseCase: GetOrderByIdUseCase;

  beforeEach(() => {
    orderRepository = new OrderRepositoryMemory();
    getOrderByIdUseCase = new GetOrderByIdUseCase(orderRepository);
  });

  test('Deve retornar um pedido existente', async () => {
    const order = new Order('1', 'Produto Teste', 2, 10.0);
    await orderRepository.create(order);

    const foundOrder = await getOrderByIdUseCase.execute('1');
    expect(foundOrder).not.toBeNull();
    expect(foundOrder?.id).toBe('1');
    expect(foundOrder?.product).toBe('Produto Teste');
    expect(foundOrder?.quantity).toBe(2);
    expect(foundOrder?.price).toBe(10.0);
    expect(foundOrder?.total).toBe(20.0);
  });

  test('Deve retornar null para um pedido não existente', async () => {
    const foundOrder = await getOrderByIdUseCase.execute('999');
    expect(foundOrder).toBeNull();
  });
}); 