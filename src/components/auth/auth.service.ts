import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) { }
  async login(createAuthDto: CreateAuthDto) {
    const user = await this.userService.findByEmail(createAuthDto.email)

    if (!user || createAuthDto.password != user.password) {
      throw new UnauthorizedException('Unauthorized')
    }

    const payload = { sub: user.email }
    return {
      user,
      acces_token: await this.jwtService.signAsync(payload)
    }

  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
