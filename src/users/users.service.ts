import { Injectable } from '@nestjs/common';
import { UserRepository } from './users.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private userRepository: UserRepository) {}

  async createUserService(email: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 12);
    return await this.userRepository.createUserRepository(
      email,
      hashedPassword,
    );
  }

  async findUserService(id) {
    if (!id) {
      return null;
    }
    return await this.userRepository.findUserRepository(id);
  }

  async checkUserExistsService(email) {
    return await this.userRepository.checkUserExistsRepository(email);
  }
}
