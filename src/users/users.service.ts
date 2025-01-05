import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize';

import { User } from './users.model';
import { CreateUserDTO } from './user.dto';
import { SEQUELIZE, USERS_REPOSITORY } from '@/core/database/constant';

@Injectable()
export class UsersService {
  constructor(
    @Inject(SEQUELIZE) private readonly sequelize: Sequelize,
    @Inject(USERS_REPOSITORY) private readonly userRepository: typeof User,
  ) {}
 /* async CreateUser(dto: CreateUserDTO) {
    const user = await this.userRepository.create(dto, { raw: true });
    return user.toJSON();
  }*/

  async CreateUser(dto: CreateUserDTO) {
    // Сначала проверяем, существует ли пользователь с таким логином
    const existingUser = await this.findOneByLogin(dto.login);
    if (existingUser) {
      // Логин уже занят, выбрасываем исключение
      throw new ConflictException('Логин уже занят');
    }

    // Если логин свободен, создаем нового пользователя
    const user = await this.userRepository.create(dto, { raw: true });
    return user.toJSON();
  }

  async findOneByLogin(login: string): Promise<User | null> {
    return this.userRepository.findOne<User>({ where: { login }, raw: true });
  }

  // находим по логину usera и добавили поле рassword scope('withPassword')
  async findOneByLoginWithPassword(login: string): Promise<User | null> {
    return this.userRepository.scope('withPassword').findOne<User>({
      where: { login },
      raw: true,
    });
  }
}
