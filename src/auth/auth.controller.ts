import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  async LogIn(@Body() body: CreateUserDto) {
    return this.authService.LogIn(body.email, body.password);
  }

  @Post('/signup')
  createUser(@Body() body: CreateUserDto) {
    return this.authService.SignUp(body.email, body.password);
  }
}

/// login signup route
