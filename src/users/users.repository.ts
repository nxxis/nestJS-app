import { Injectable, NotAcceptableException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './users.schema';
import mongoose from 'mongoose';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel(User.name) private userModel: mongoose.Model<User>,
  ) {}

  async createUserRepository(email: string, password: string) {
    try {
      const newUser = new this.userModel({ email, password });
      if (!newUser) {
        throw new NotAcceptableException('User not created');
      }
      return newUser.save();
    } catch (error) {
      throw new NotAcceptableException(error);
    }
  }

  async findUserRepository(id: string) {
    try {
      const user = await this.userModel.findById(
        new mongoose.Types.ObjectId(id),
      );
      if (!user) {
        throw new NotAcceptableException('User not found');
      }
      return user;
    } catch (error) {
      throw new NotAcceptableException(error);
    }
  }

  async checkUserExistsRepository(email: string) {
    try {
      const user = await this.userModel.findOne({ email: email });
      if (!user) {
        throw new NotAcceptableException('User not found');
      }
      return user;
    } catch (error) {
      throw new NotAcceptableException(error);
    }
  }
}
