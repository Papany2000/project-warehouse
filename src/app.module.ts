import { Module, RequestMethod, NestModule } from '@nestjs/common';
import { MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './core/database/database.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoodsModule } from './goods/goods.module';
import { GoodsMiddleware } from './utils/goods.middleware';
import { RecipesModule } from './recipes/recipes.module';

@Module({
  imports: [
    DatabaseModule,
    GoodsModule,
    UsersModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    JwtModule.register({
      secret: 'some-JWTKEY-token-key',
      signOptions: { expiresIn: '1h' },
    }),
    RecipesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(GoodsMiddleware)
      .forRoutes(
        { path: 'goods', method: RequestMethod.ALL },
        { path: 'recipes', method: RequestMethod.ALL }
      );
  }
}
