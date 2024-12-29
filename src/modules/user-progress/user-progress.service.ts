import { Injectable } from '@nestjs/common';
import { CreateUserProgressInput } from './dto/create-user-progress.input';
import { UpdateUserProgressInput } from './dto/update-user-progress.input';
import { UserProgressEntity } from './entities/user-progress.entity';
import { UserProgressRepository } from './user-progress.repository';

@Injectable()
export class UserProgressService {
  constructor(private readonly userProgressRepository: UserProgressRepository){}
  create(createUserProgressInput: CreateUserProgressInput,) {

    const progressEntity = new UserProgressEntity(createUserProgressInput);

    return  this.userProgressRepository.create(progressEntity);
  }

  findAll() {
    return this.userProgressRepository.find({});
  }

  findOne(id: number) {
    return  this.userProgressRepository.findOne({id});
  }

  update(id: number, updateUserProgressInput: UpdateUserProgressInput) {
    return  this.userProgressRepository.findOneAndUpdate({id}, updateUserProgressInput);
  }

  remove(id: number) {
    return this.userProgressRepository.findOneAndDelete({id});
  }
}
