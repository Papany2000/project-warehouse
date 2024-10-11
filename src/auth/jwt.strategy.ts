import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException} from '@nestjs/common';
import { UsersService } from '@/users/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly usersService: UsersService) {
    super({
      //извлекаем токен
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      //делегируем ответственность за проверку срока действия JWT модулю Passport
      ignoreExpiration: false,
      // секретный ключ получаем из системных переменных
      secretOrKey: process.env.JWTKEY,
    });
  }

  async validate(payload: any) {
    // Здесь добавляем логику проверки пользователя
    const user = await this.usersService.findOneByLoginWithPassword(payload.id);
    if (!user) {
     throw new UnauthorizedException('Вы не можете выполнять эту операцию. Авторизуйтесь.');
   }
 return payload;
  }
}
