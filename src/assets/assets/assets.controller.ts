import { Body, Controller, Get, Post } from '@nestjs/common';
import { AssetsService } from './assets.service';
import { AssetInputDTO, AssetOutputDTO } from './assets.dto';

@Controller('api/assets')
export class AssetsController {
  constructor(private readonly assetsService: AssetsService) {}

  @Get()
  async listAll(): Promise<AssetOutputDTO[]> {
    const assets = await this.assetsService.listAll();
    return assets.map((asset) => ({ id: asset.id, symbol: asset.symbol }));
  }

  @Post()
  async create(@Body() body: AssetInputDTO): Promise<AssetOutputDTO> {
    const asset = await this.assetsService.create(body);
    return {
      id: asset.id,
      symbol: asset.symbol,
    };
  }
}
