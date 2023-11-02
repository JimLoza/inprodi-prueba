import { Injectable, Inject } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './repository/user.repository';
import { UserE } from './entities/user.entity';

@Injectable()
export class UserService {

  constructor(
    @Inject(UserRepository)
    private readonly userRepository: UserRepository
  ) { }

  create(createUserDto: CreateUserDto) {
    return this.userRepository.createUser(createUserDto);
  }

  findByEmail(email: string): Promise<UserE> {
    return this.userRepository.findByEmail(email)
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.updateUser(id, updateUserDto)
  }

  remove(id: number) {
    return this.userRepository.deleteUser(id);
  }
}
