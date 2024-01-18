// src/auth/auth.controller.ts
import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { UsersService } from '../modules/users/users.service';
import { UserDto } from '../DTO/user.dto';
@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  @Post('register')
  async register(@Body() body: UserDto) {
    return this.usersService.create(body);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login') // Make sure this is a POST, not GET
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
