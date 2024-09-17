import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDTO } from './user.dto';
import { User } from './users.model';

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
