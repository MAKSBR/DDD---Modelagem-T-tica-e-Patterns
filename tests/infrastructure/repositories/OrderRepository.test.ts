import { OrderRepositoryMemory } from '../../../src/infrastructure/repositories/OrderRepositoryMemory';
import { Order } from '../../../src/domain/entities/Order';

describe('OrderRepository', () => {
  let orderRepository: OrderRepositoryMemory;

  beforeEach(async () => {
    orderRepository = new OrderRepositoryMemory();
  });

  test('Deve criar e recuperar um pedido', async () => {
    const order = new Order('1', 'Produto Teste', 2, 10.0);
    await orderRepository.create(order);

    const foundOrder = await orderRepository.findById('1');
    expect(foundOrder).not.toBeNull();
    expect(foundOrder?.product).toBe('Produto Teste');
    expect(foundOrder?.quantity).toBe(2);
    expect(foundOrder?.price).toBe(10.0);
  });

  test('Deve retornar null para um pedido não existente', async () => {
    const order = await orderRepository.findById('999');
    expect(order).toBeNull();
  });

  test('Deve lançar erro ao criar pedido com ID duplicado', async () => {
    const order = new Order('1', 'Produto Teste', 2, 10.0);
    await orderRepository.create(order);

    await expect(orderRepository.create(order)).rejects.toThrow('Pedido já existe');
  });

  test('Deve listar todos os pedidos', async () => {
    const order1 = new Order('1', 'Produto 1', 2, 10.0);
    const order2 = new Order('2', 'Produto 2', 3, 20.0);
    
    await orderRepository.create(order1);
    await orderRepository.create(order2);

    const orders = await orderRepository.findAll();
    expect(orders).toHaveLength(2);
    expect(orders[0].id).toBe('1');
    expect(orders[1].id).toBe('2');
  });

  test('Deve atualizar um pedido', async () => {
    const order = new Order('1', 'Produto Teste', 2, 10.0);
    await orderRepository.create(order);

    order.product = 'Produto Atualizado';
    await orderRepository.update(order);

    const updatedOrder = await orderRepository.findById('1');
    expect(updatedOrder?.product).toBe('Produto Atualizado');
  });

  test('Deve lançar erro ao atualizar pedido inexistente', async () => {
    const order = new Order('999', 'Produto Teste', 2, 10.0);
    await expect(orderRepository.update(order)).rejects.toThrow('Pedido não encontrado');
  });

  test('Deve deletar um pedido', async () => {
    const order = new Order('1', 'Produto Teste', 2, 10.0);
    await orderRepository.create(order);

    await orderRepository.delete('1');

    const deletedOrder = await orderRepository.findById('1');
    expect(deletedOrder).toBeNull();
  });

  test('Deve lançar erro ao deletar pedido inexistente', async () => {
    await expect(orderRepository.delete('999')).rejects.toThrow('Pedido não encontrado');
  });
});
