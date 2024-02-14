import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { UserDto } from './dtos/user.dto';
import { JwtGuard } from 'src/auth/guards/jwt.guards';
import { UseGuards } from '@nestjs/common';

@Controller('user')
@Serialize(UserDto)
export class UsersController {
  constructor(private usersService: UsersService) {}

  @UseGuards(JwtGuard)
  @Get('/:id')
  async findUser(@Param('id') id: string) {
    console.log('Handler is running');
    const user = await this.usersService.findUserService(id);
    return user;
  }
}
