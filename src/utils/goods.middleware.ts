import { Injectable, NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response, NextFunction } from 'express';

import { CreateUserDTO } from '@/users/user.dto';

export interface RequestWithUser extends Request {
  user: CreateUserDTO & { id: number };
}

@Injectable()
export class GoodsMiddleware implements NestMiddleware {
  constructor(private jwtService: JwtService) {}
  use(req: RequestWithUser, res: Response, next: NextFunction) {
    const token = req.get('authorization');
    if (token) {
      const decoded = this.jwtService.verify(token);
      req.user = decoded;
      console.log(req.user)
    }
    next();
  }
}
