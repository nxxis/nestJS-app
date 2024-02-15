import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { UserDto } from './dtos/user.dto';
import { JwtGuard } from 'src/auth/guards/jwt.guards';

@Controller('user')
@UseGuards(JwtGuard)
@Serialize(UserDto)
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/:id')
  async findUser(@Param('id') id: string) {
    const user = await this.usersService.findUserService(id);
    return { email: user.email, id: user._id };
  }
}
