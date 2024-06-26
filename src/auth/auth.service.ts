import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string): Promise<any> {
    const {
      id,
      username: uname,
      password,
    } = await this.usersService.findOne(username);

    const isMatch = await bcrypt.compare(pass, password);

    if (!isMatch) {
      throw new UnauthorizedException();
    }

    const payload = { sub: id, username: uname };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
