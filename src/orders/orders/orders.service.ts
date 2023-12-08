import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { OrderInputDTO } from './orders.dto';

@Injectable()
export class OrdersService {
  constructor(private prismaService: PrismaService) {}

  listAll() {
    return this.prismaService.order.findMany();
  }

  async create(input: OrderInputDTO) {
    const asset = await this.prismaService.asset.findUnique({
      where: { id: input.asset_id },
    });
    if (!asset) {
      throw new BadRequestException('Asset not exists');
    }

    return this.prismaService.order.create({
      data: {
        asset_id: input.asset_id,
        price: input.price,
        status: 'pending',
      },
    });
  }
}
