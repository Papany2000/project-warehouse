import { GOODS_REPOSITORY } from 'src/core/database/constant';
import { Goods } from './goods.model';

export const goodsProviders = [
  {
    provide: GOODS_REPOSITORY,
    useValue: Goods,
  },
];
