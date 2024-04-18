import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/CreateUser.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('username') username: string) {
    return this.usersService.findOne(username);
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @Patch(':id')
  updateOne(@Param('id') id: string, @Body() user: {}) {
    return { id, ...user };
  }

  @Delete(':id')
  deleteOne(@Param('id') id: number) {
    return this.usersService.remove(id);
  }
}
