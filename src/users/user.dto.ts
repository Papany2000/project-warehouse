import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDTO {
  @ApiProperty({ example: 'baty', description: 'логин' })
  readonly login: string;
  @ApiProperty({ example: 'vbnmn', description: 'пароль' })
  readonly password: string;
}
