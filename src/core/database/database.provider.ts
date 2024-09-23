import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE, DEVELOPMENT, TEST } from './constant';
import * as databaseConfig from '@/db/config.js';
import { Goods } from 'src/goods/goods.model';
import { User } from '@/users/users.model';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async (): Promise<Sequelize> => {
      let config;
      switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
          config = databaseConfig.development;
          break;
        case TEST:
          config = databaseConfig.test;
          break;
        default:
          config = databaseConfig.development;
      }
      const sequelize = new Sequelize(config);
      console.log(config)
      sequelize.addModels([Goods, User]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
