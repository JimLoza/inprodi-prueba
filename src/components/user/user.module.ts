import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { UserE } from './entities/user.entity';
import { UserRepository } from './repository/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserE])],
  controllers: [UserController],
  providers: [UserService, UserRepository],
  exports: [UserRepository, UserService]
})
export class UserModule { }
