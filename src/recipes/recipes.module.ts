import { Module } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { RecipesController } from './recipes.controller';
import { recipesProviders } from './recipes.provider';
import { DatabaseModule } from '@/core/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [RecipesService, ...recipesProviders],
  controllers: [RecipesController],
  exports: [RecipesService],
})
export class RecipesModule {}
