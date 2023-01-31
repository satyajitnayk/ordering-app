import { Body, Controller, Post } from '@nestjs/common';
import { createOrderRequest } from './dto/create-order.request';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async createOrder(@Body() request: createOrderRequest) {
    return this.ordersService.createOrder(request);
  }
}
