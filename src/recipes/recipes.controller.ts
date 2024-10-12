import { Body, Controller, Delete, Get, Param, Patch, Post, Request } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { RecipesDTO } from './dto/recipes.dto';
import { Recipes } from './dto/recipes.model';
import { RequestWithUser } from '@/utils/goods.middleware';

@Controller()
export class RecipesController {
    constructor(private recipesService: RecipesService) { }

    @ApiOperation({ summary: 'Создание рецептов' })
    @ApiResponse({ status: 200, type: Recipes })
    @Post('/recipes')
    create(@Request() req: RequestWithUser, @Body() recipesDTO: RecipesDTO) {
        return this.recipesService.Create({ ...recipesDTO, userId: req.user.id });
    }

    @ApiOperation({ summary: 'Получение всех рецептов' })
    @ApiResponse({ status: 200, type: Recipes })
    @Get('/recipes/all')
    getRecipes() {
        return this.recipesService.getPublicRecipes();
    }

    @ApiOperation({ summary: 'Получение рецептов пользователя ' })
    @ApiResponse({ status: 200, type: Recipes })
    @Get('/recipes')
    getRecipesUserId(@Request() req: RequestWithUser) {
        return this.recipesService.getAllRecipesUserId(req.user.id);
    }

    @ApiOperation({ summary: 'Обновление рецепта' })
    @ApiResponse({ status: 200, type: Recipes })
    @Patch('/recipes/:id')
    updateTask(@Body() recipe: RecipesDTO, @Param('id') id: number): Promise<Recipes> {
        return this.recipesService.updateGood(recipe, id);
    }

    @ApiOperation({ summary: 'Удаление рецепта по идентификатору' })
    @ApiResponse({ status: 200, type: Recipes })
    @Delete('goods/:id')
    deleteGoodsId(@Param('id') id: number) {
        return this.recipesService.deleteGoodsId(id);
    }
}
