import { Sequelize } from 'sequelize-typescript';
import { Inject, Injectable } from '@nestjs/common';

import { RECIPES_REPOSITORY, SEQUELIZE } from '@/core/database/constant';
import { Recipes } from './dto/recipes.model';
import { RecipesDTO } from './dto/recipes.dto';

@Injectable()
export class RecipesService {
    constructor(
        @Inject(SEQUELIZE) private readonly sequelize: Sequelize,
        @Inject(RECIPES_REPOSITORY) private readonly recipesRepository: typeof Recipes,
    ) { }

    async Create(dto: RecipesDTO) {
        const recipes = await this.recipesRepository.create(dto);
        return recipes;
    }

    async getAllRecipes() {
        const recipes = await this.recipesRepository.findAll();
        return recipes;
    }

    async getAllRecipesUserId(userId) {
        const recipes = await this.recipesRepository.findAll({
            where: { userId }
    });
        return recipes;
    }

    async deleteGoodsId(id: number) {
        const recipes = await this.recipesRepository.destroy({
            where: {
                id,
            },
        });
        return recipes;
    }

    async updateGood(recipe: object, id: number) {
        const [_, [updated]] = await this.recipesRepository.update(recipe, {
            where: { id },
            returning: true,
        });
        return updated;
    }


}
