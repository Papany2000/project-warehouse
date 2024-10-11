import { ApiProperty } from '@nestjs/swagger';
import { Model, Table, Column, DataType } from 'sequelize-typescript';

interface RecipesCreationAttrs {
    userId: number;
    title: string;
    recipeurl?: string;  // Добавлен знак вопроса для необязательного поля
    videourl?: string;  
    photourl?: string; 
    recipes: string;
}

@Table({ tableName: 'recipes' })
export class Recipes extends Model<Recipes, RecipesCreationAttrs> {
    @ApiProperty({ example: '1', description: 'Уникальный идентификатор рецепта' })
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    })
    id: number;
    @ApiProperty({ example: '1', description: 'идентификатор пользователя' })
    @Column({
        type: DataType.INTEGER,
    })
    userId: number;
    @ApiProperty({ example: 'Пирог', description: 'Название рецепта' })
    @Column({ type: DataType.STRING, allowNull: false })
    title: string;
    @ApiProperty({ example: 'url', description: 'ссылка на рецепт' })
    @Column({ type: DataType.STRING})
    recipeurl: string;
    @ApiProperty({ example: 'Url', description: 'ссылка на видео рецепта' })
    @Column({ type: DataType.STRING })
    videourl: string;
    @ApiProperty({ example: 'Url', description: 'ссылка на фото рецепта' })
    @Column({ type: DataType.STRING })
    photourl: string;
    @ApiProperty({ example: 'рецепт', description: 'текстовое описание рецепта' })
    @Column({ type: DataType.TEXT, allowNull: false })
    recipes: string;
}