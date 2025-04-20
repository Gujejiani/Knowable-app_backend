import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UserEntity } from './entities/user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UserRepository) {}

  create(createUserInput: CreateUserInput) {
    const userEntity = new UserEntity(createUserInput);

    return   this.usersRepository.create(userEntity);
  }

  findAll() {
    return this.usersRepository.find({});
  }

  findOne(id: number) {
    return this.usersRepository.findOne({id});
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return  this.usersRepository.findOneAndUpdate({id: id}, updateUserInput);
  }

  remove(id: number) {
    return this.usersRepository.findOneAndDelete({id});
  }
}
