import { Module } from '@nestjs/common';
import { AssetsService } from './assets/assets.service';
import { AssetsController } from './assets/assets.controller';

@Module({
  providers: [AssetsService],
  controllers: [AssetsController],
})
export class AssetsModule {}
