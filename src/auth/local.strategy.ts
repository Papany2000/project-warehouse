import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDTO } from '@/users/user.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({ usernameField: 'login', passwordField: 'password' });
  }

  async validate(login: string, password: string): Promise<Partial<CreateUserDTO>> {
    try {
      const user = await this.authService.validateUser(login, password);

      if (!user) {
        throw new UnauthorizedException('Неверные учетные данные пользователя');
      }

      return user;
    } catch (e) {
      console.log('error', e)
      throw e
    }
  }
}