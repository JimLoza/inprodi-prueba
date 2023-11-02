import { InjectRepository } from "@nestjs/typeorm";
import { Repository, UpdateResult } from "typeorm";

import { UserE } from "../entities/user.entity";
import { CreateUserDto } from "../dto/create-user.dto";
import { UpdateUserDto } from "../dto/update-user.dto";

export class UserRepository {
    constructor(
        @InjectRepository(UserE)
        private readonly userRepository: Repository<UserE>
    ) { }

    async createUser(createUserDto: CreateUserDto): Promise<UserE> {
        const newUser = this.userRepository.create(createUserDto)
        return await this.userRepository.save(newUser)
    }

    async findByEmail(email: string): Promise<UserE> {
        return this.userRepository.findOneBy({ email })
    }

    async updateUser(id: number, updateUserDto: UpdateUserDto): Promise<UpdateResult> {
        return this.userRepository.update(id, updateUserDto)
    }

    async deleteUser(id: number): Promise<UpdateResult> {
        return await this.userRepository.softDelete(id)
    }

}