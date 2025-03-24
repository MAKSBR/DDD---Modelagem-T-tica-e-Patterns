import { CreateOrderUseCase } from '../../../src/application/use-cases/CreateOrderUseCase';
import { OrderRepositoryMemory } from '../../../src/infrastructure/repositories/OrderRepositoryMemory';

describe('CreateOrderUseCase', () => {
  let orderRepository: OrderRepositoryMemory;
  let createOrderUseCase: CreateOrderUseCase;

  beforeEach(() => {
    orderRepository = new OrderRepositoryMemory();
    createOrderUseCase = new CreateOrderUseCase(orderRepository);
  });

  test('Deve criar um pedido', async () => {
    const order = await createOrderUseCase.execute('Produto A', 5, 20.0);
    
    expect(order).not.toBeNull();
    expect(order.product).toBe('Produto A');
    expect(order.quantity).toBe(5);
    expect(order.price).toBe(20.0);
    expect(order.total).toBe(100.0);

    const savedOrder = await orderRepository.findById(order.id);
    expect(savedOrder).not.toBeNull();
    expect(savedOrder?.product).toBe('Produto A');
  });
});
