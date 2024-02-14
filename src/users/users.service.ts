import { Injectable } from '@nestjs/common';
import { UserRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private userRepository: UserRepository) {}

  async createUserService(email: string, password: string) {
    return await this.userRepository.createUserRepository(email, password);
  }

  async findUserService(id) {
    return await this.userRepository.findUserRepository(id);
  }

  async checkUserExistsService(email) {
    return await this.userRepository.checkUserExistsRepository(email);
  }
}
