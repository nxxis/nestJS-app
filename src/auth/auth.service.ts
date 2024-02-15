import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async LogIn(email: string, password: string) {
    try {
      const user = await this.usersService.checkUserExistsService(email);

      if (!user) {
        throw new BadRequestException('email/password incorrect');
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        throw new BadRequestException('email/password incorrect');
      }

      const payload = { email: user.email, sub: user._id };
      const token = this.jwtService.sign(payload);

      return { token, id: user._id };
    } catch (error) {
      throw error;
    }
  }

  async SignUp(email: string, password: string) {
    const user = await this.usersService.checkUserExistsService(email);

    if (user) {
      throw new BadRequestException('email taken');
    }

    const newUser = await this.usersService.createUserService(email, password);

    const payload = { email: newUser.email, sub: newUser._id };
    const token = this.jwtService.sign(payload);

    return { token, id: newUser._id };
  }
}
