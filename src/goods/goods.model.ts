import { ApiProperty } from '@nestjs/swagger';
import { Model, Table, Column, DataType } from 'sequelize-typescript';

interface GoodsCreationAttrs {
  id: string;
  userId: number;
  name: string;
  quantity: string;
  storageLocation: string;
}

@Table({ tableName: 'goods' })
export class Goods extends Model<Goods, GoodsCreationAttrs> {
  @ApiProperty({ example: 'b231-c96', description: 'идентификатор' })
  @Column({
    type: DataType.STRING,
    primaryKey: true,
  })
  id: string;

  @ApiProperty({ example: '1', description: 'идентификатор пользователя' })
  @Column({
    type: DataType.INTEGER,
  })
  userId: number;
  @ApiProperty({ example: 'кольцо', description: 'изделие' })
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;
  @ApiProperty({ example: '4шт', description: 'количество' })
  @Column({ type: DataType.STRING, allowNull: false })
  quantity: string;
  @ApiProperty({ example: 'полка', description: 'место зранения изделие' })
  @Column({ type: DataType.STRING, allowNull: false })
  storageLocation: string;
}
