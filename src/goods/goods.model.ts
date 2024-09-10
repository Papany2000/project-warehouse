import { ApiProperty } from '@nestjs/swagger';
import { Model, Table, Column, DataType } from 'sequelize-typescript';

interface GoodsCreationAttrs {
  name: string;
  quantity: string;
  storageLocation: string;
}

@Table({ tableName: 'goods' })
export class Goods extends Model<Goods, GoodsCreationAttrs> {
  @ApiProperty({ example: 1, description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @ApiProperty({ example: 'кольцо', description: 'изделие' })
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;
  @ApiProperty({ example: '4шт', description: 'количество' })
  @Column({ type: DataType.STRING, allowNull: false })
  quantity: string;
  @ApiProperty({ example: 'полка', description: 'место зранения изделие' })
  @Column({ type: DataType.STRING, allowNull: false })
  storageLocation: boolean;
}
