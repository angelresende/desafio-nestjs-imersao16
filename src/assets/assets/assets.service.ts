import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { AssetInputDTO } from './assets.dto';

@Injectable()
export class AssetsService {
  constructor(private prismaService: PrismaService) {}

  listAll() {
    return this.prismaService.asset.findMany();
  }

  async create(input: AssetInputDTO) {
    let asset = await this.prismaService.asset.findUnique({
      where: { id: input.id },
    });
    if (asset) {
      throw new BadRequestException('Asset already exists');
    }

    asset = await this.prismaService.asset.findFirst({
      where: { symbol: input.symbol },
    });
    if (asset) {
      throw new BadRequestException('Asset symbol already exists');
    }

    return this.prismaService.asset.create({
      data: {
        id: input.id,
        symbol: input.symbol,
      },
    });
  }
}
