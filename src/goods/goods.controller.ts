import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Controller, Body, Post, Get, Param, Patch, Delete, Request, UseGuards } from '@nestjs/common';

import { Goods } from './goods.model';
import { RequestWithUser } from '@/utils/goods.middleware';
import { GoodsDTO } from './dto/create-goods.dto';
import { GoodsService } from './goods.service';


@ApiTags('Изделия')
@Controller()
export class GoodsController {
  constructor(private goodsService: GoodsService) {}

  @ApiOperation({ summary: 'Создание изделия' })
  @ApiResponse({ status: 200, type: Goods })
  @Post('/goods')
  create(@Request() req: RequestWithUser, @Body() goodsDTO: GoodsDTO) {
    return this.goodsService.CreateGoods({ ...goodsDTO, userId: req.user.id });
  }

  @ApiOperation({ summary: 'Получение всех изделий' })
  @ApiResponse({ status: 200, type: Goods })
  @Get('/goods')
  getGoods(@Request() req: RequestWithUser) {
    return this.goodsService.getAllGoods(req.user.id);
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
