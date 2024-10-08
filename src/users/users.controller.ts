import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { CreateUserDTO } from '@/users/user.dto';
import { User } from '@/users/users.model';
import { UsersService } from '@/users/users.service';

@ApiTags('Пользователь')
@Controller()
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({ summary: 'Создание пользователя' })
  @ApiResponse({ status: 200, type: User })
  @Post('/users')
  create(@Body() userDTO: CreateUserDTO) {
    return this.usersService.CreateUser(userDTO);
  }
}
