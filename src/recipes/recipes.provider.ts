import { RECIPES_REPOSITORY } from 'src/core/database/constant';
import { Recipes } from './dto/recipes.model';

export const recipesProviders = [
    {
        provide: RECIPES_REPOSITORY,
        useValue: Recipes,
    },
];