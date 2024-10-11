import { Sequelize } from 'sequelize-typescript';
import { Inject } from '@nestjs/common';

import { GOODS_REPOSITORY, SEQUELIZE } from '@/core/database/constant';
import { Goods } from './goods.model';
import { GoodsDTO } from './dto/create-goods.dto';

export class GoodsService {
  constructor(
    @Inject(SEQUELIZE) private readonly sequelize: Sequelize,
    @Inject(GOODS_REPOSITORY) private readonly goodsRepository: typeof Goods,
  ) {}

  async CreateGoods(dto: GoodsDTO) {
    const goods = await this.goodsRepository.create(dto);
    return goods;
  }

  async getAllGoods(userId) {
    const goods = await this.goodsRepository.findAll({
      where: { userId }
    });
    return goods;
  }

  async deleteGoodsId(id: number) {
    const goods = await this.goodsRepository.destroy({
      where: {
        id,
      },
    });
    return goods;
  }

  async updateGood(good: object, id: number) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, [updated]] = await this.goodsRepository.update(good, {
      where: { id },
      returning: true,
    });

    return updated;
  }
}
