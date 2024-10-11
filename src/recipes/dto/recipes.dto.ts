import { ApiProperty } from '@nestjs/swagger';

export class RecipesDTO {
    @ApiProperty({ example: 1, description: 'идентификатор пользователя' })
    readonly userId: number;
    @ApiProperty({ example: 'Пирог', description: 'Название рецепта' })
    readonly title: string;
    @ApiProperty({ example: 'рецепт', description: 'текстовое описание рецепта' })
    readonly recipes: string;
}