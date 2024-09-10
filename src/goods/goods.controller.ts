import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GoodsDTO } from './dto/create-goods.dto';
import { GoodsService } from './goods.service';
import {
  Controller,
  Body,
  Post,
  Get,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { Goods } from './goods.model';

@ApiTags('Изделия')
@Controller()
export class GoodsController {
  constructor(private goodsService: GoodsService) {}

  @ApiOperation({ summary: 'Создание изделия' })
  @ApiResponse({ status: 200, type: Goods })
  @Post('/goods')
  create(@Body() goodsDTO: GoodsDTO) {
    return this.goodsService.CreateGoods(goodsDTO);
  }

  @ApiOperation({ summary: 'Получение всех изделий' })
  @ApiResponse({ status: 200, type: Goods })
  @Get('/goods')
  getGoods() {
    return this.goodsService.getAllGoods();
  }

  @ApiOperation({ summary: 'Обновление данных' })
  @ApiResponse({ status: 200, type: Goods })
  @Patch('/goods/:id')
  updateTask(@Body() good: GoodsDTO, @Param('id') id: number): Promise<Goods> {
    return this.goodsService.updateGood(good, id);
  }

  @ApiOperation({ summary: 'Удаление изделия по идентификатору' })
  @ApiResponse({ status: 200, type: Goods })
  @Delete('goods/:id')
  deleteGoodsId(@Param('id') id: number) {
    return this.goodsService.deleteGoodsId(id);
  }
}
