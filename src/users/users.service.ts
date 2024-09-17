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
  ) {}
  async CreateUser(dto: CreateUserDTO) {
    const user = await this.userRepository.create(dto);
    return user;
  }
}
