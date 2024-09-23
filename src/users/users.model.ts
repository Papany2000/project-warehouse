import { ApiProperty } from '@nestjs/swagger';
import { Column, Model, DataType, Table } from 'sequelize-typescript';

interface UserCreationAttrs {
  login: string;
  password: string;
}

@Table({
  tableName: 'users',
   timestamps: true,
  comment: 'Таблица пользователей',
  defaultScope: {
    attributes: { exclude: ['password'] },
  },
  scopes: {
    withPassword: {},
  }, })
export class User extends Model<User, UserCreationAttrs> {
  
  @ApiProperty({ example: 'baty', description: 'логин' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  login: string;

  @ApiProperty({ example: 'qwer', description: 'пароль' })
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;
}
