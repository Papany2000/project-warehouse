import { Module } from '@nestjs/common';
import { GoodsService } from './goods.service';
import { GoodsController } from './goods.controller';
import { DatabaseModule } from 'src/core/database/database.module';
import { goodsProviders } from './goods.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [GoodsController],
  providers: [GoodsService, ...goodsProviders],
  exports: [GoodsService],
})
export class GoodsModule {}
