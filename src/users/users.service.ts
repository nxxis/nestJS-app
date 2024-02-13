import { Injectable } from '@nestjs/common';
import { UserRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private userRepository: UserRepository) {}

  async createUserService(email: string, password: string) {
    return this.userRepository.createUserRepository(email, password);
  }

  async findUserService(id) {
    return this.userRepository.findUserRepository(id);
  }

  async findUserByEmailService(email) {
    return this.userRepository.findUserByEmailRepository(email);
  }
}
