import { Injectable } from '@nestjs/common';
import { UsersService } from './users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signUp(email: string, password: string) {
    const users = await this.usersService.findUserByEmailService(email);
    if (users.length) {
      throw new Error('User already exists');
    }
    return await this.usersService.createUserService(email, password);
  }

  signIn(email: string, password: string) {}
}
