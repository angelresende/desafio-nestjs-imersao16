import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrderInputDTO, OrderOutputDTO } from './orders.dto';

@Controller('api/orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  async listAll(): Promise<OrderOutputDTO[]> {
    const orders = await this.ordersService.listAll();
    return orders.map((order) => ({
      id: order.id,
      asset_id: order.asset_id,
      price: order.price,
      status: order.status,
    }));
  }

  @Post()
  async create(@Body() body: OrderInputDTO): Promise<OrderOutputDTO> {
    const order = await this.ordersService.create(body);
    return {
      id: order.id,
      asset_id: order.asset_id,
      price: order.price,
      status: order.status,
    };
  }
}
