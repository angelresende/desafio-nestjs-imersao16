import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Order } from './order.dto';

@Controller('api')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get(`orders`)
  all() {
    return this.ordersService.all();
  }

  @Post(`orders`)
  create(@Body() body: Order) {
    return this.ordersService.create(body);
  }
}
