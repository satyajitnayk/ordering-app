import { Injectable } from '@nestjs/common';
import { createOrderRequest } from './dto/create-order.request';
import { OrdersRespository } from './orders.repository';

@Injectable()
export class OrdersService {
  constructor(private readonly orderRepository: OrdersRespository) {}
  async createOrder(request: createOrderRequest) {
    return this.orderRepository.create(request);
  }
}
