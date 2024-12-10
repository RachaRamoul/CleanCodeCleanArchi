import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '../../../../../../domain/entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('/welcome')
  async welcome() {
    console.log('Welcome to the users controller');
  }

  @Get()
  async listUsers() {
    return this.userService.listUsers();
  }

  @Post()
  async addUser(@Body() body: User) {
    const { firstName, lastName } = body;
    return this.userService.addUser(firstName, lastName);
  }
}
