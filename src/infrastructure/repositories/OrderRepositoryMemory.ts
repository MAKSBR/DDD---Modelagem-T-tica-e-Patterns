import { Order } from '../../domain/entities/Order';
import { OrderRepositoryInterface } from '../../domain/repositories/OrderRepositoryInterface';

export class OrderRepositoryMemory implements OrderRepositoryInterface {
  private orders: Order[] = [];

  async create(order: Order): Promise<void> {
    const existingOrder = await this.findById(order.id);
    if (existingOrder) {
      throw new Error('Pedido já existe');
    }
    this.orders.push(order);
  }

  async findById(id: string): Promise<Order | null> {
    const order = this.orders.find(order => order.id === id);
    return order || null;
  }

  async findAll(): Promise<Order[]> {
    return [...this.orders];
  }

  async update(order: Order): Promise<void> {
    const index = this.orders.findIndex(o => o.id === order.id);
    if (index === -1) {
      throw new Error('Pedido não encontrado');
    }
    this.orders[index] = order;
  }

  async delete(id: string): Promise<void> {
    const index = this.orders.findIndex(order => order.id === id);
    if (index === -1) {
      throw new Error('Pedido não encontrado');
    }
    this.orders.splice(index, 1);
  }

  async clear(): Promise<void> {
    this.orders = [];
  }
} 