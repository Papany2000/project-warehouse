import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { CreateUserDTO } from '@/users/user.dto';
import { UsersService } from '@/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(login: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByLoginWithPassword(login);
    if (!user) {
      return null;
    }
    const match = await this.comparePassword(pass, user.password);
    if (!match) {
      return null;
    }

    return {
      password: user.password,
      login: user.login,
      id: user.id,
    };
  }

  public async login(user: Omit<CreateUserDTO, 'password'>) {
    const token = await this.generateToken(user);
    return { user, token };
  }

  public async create(user: CreateUserDTO) {
    const pass = await this.hashPassword(user.password);

    const newUser = await this.usersService.CreateUser({
      ...user,
      password: pass,
    });
    const token = await this.generateToken({ ...newUser });
    return { newUser, token };
  }
  private async generateToken(user: Omit<CreateUserDTO, 'password'>) {
    return this.jwtService.sign({ ...user });
  }

  private async hashPassword(password: string) {
    return bcrypt.hash(password, 10);
  }

  private async comparePassword(enteredPassword: string, dbPassword: string) {
    return bcrypt.compare(enteredPassword, dbPassword);
  }
}
