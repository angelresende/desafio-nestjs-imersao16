import { Body, Controller, Post, Get } from '@nestjs/common';
import { AssetsService } from './assets.service';

@Controller('api')
export class AssetsController {
  constructor(private readonly assetsService: AssetsService) {}

  @Get(`assets`)
  all() {
    return this.assetsService.all();
  }

  @Post(`assets`)
  create(@Body() body: { id: string; symbol: string }) {
    return this.assetsService.create(body);
  }
}
