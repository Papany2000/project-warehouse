import { Inject, Injectable } from '@nestjs/common';
import { User } from './users.model';
import { CreateUserDTO } from './user.dto';
import { SEQUELIZE, USERS_REPOSITORY } from '@/core/database/constant';
import { Sequelize } from 'sequelize';

@Injectable()
export class UsersService {
  constructor(
    @Inject(SEQUELIZE) private readonly sequelize: Sequelize,
    @Inject(USERS_REPOSITORY) private readonly userRepository: typeof User,
  ) { }
  async CreateUser(dto: CreateUserDTO) {
    const user = await this.userRepository.create(dto);
    return user;
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
