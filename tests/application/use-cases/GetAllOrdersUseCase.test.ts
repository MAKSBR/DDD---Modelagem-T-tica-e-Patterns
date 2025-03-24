import { GetAllOrdersUseCase } from '../../../src/application/use-cases/GetAllOrdersUseCase';
import { OrderRepositoryMemory } from '../../../src/infrastructure/repositories/OrderRepositoryMemory';
import { Order } from '../../../src/domain/entities/Order';

describe('GetAllOrdersUseCase', () => {
  let orderRepository: OrderRepositoryMemory;
  let getAllOrdersUseCase: GetAllOrdersUseCase;

  beforeEach(() => {
    orderRepository = new OrderRepositoryMemory();
    getAllOrdersUseCase = new GetAllOrdersUseCase(orderRepository);
  });

  test('Deve retornar todos os pedidos', async () => {
    const order1 = new Order('1', 'Produto 1', 2, 10.0);
    const order2 = new Order('2', 'Produto 2', 3, 20.0);
    
    await orderRepository.create(order1);
    await orderRepository.create(order2);

    const orders = await getAllOrdersUseCase.execute();
    expect(orders).toHaveLength(2);
    expect(orders[0].id).toBe('1');
    expect(orders[1].id).toBe('2');
    expect(orders[0].total).toBe(20.0);
    expect(orders[1].total).toBe(60.0);
  });

  test('Deve retornar array vazio quando não há pedidos', async () => {
    const orders = await getAllOrdersUseCase.execute();
    expect(orders).toHaveLength(0);
  });
}); 