import { Body, Controller, Post, Request, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { AuthGuard } from '@nestjs/passport';

import { AuthService } from './auth.service';
import { CreateUserDTO } from '@/users/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req: Request & { user: CreateUserDTO }, @Res() res: Response) {
    const { token } = await this.authService.login(req.user);
    res.cookie('auth_token', token);
    res.send({ token });
  }
  @Post('signin')
  async signUp(@Body() user: CreateUserDTO) {
    return this.authService.create(user);
  }
}
