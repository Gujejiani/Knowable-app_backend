import { Injectable } from '@nestjs/common';
import { CreateChallengeInput } from './dto/create-challenge.input';
import { UpdateChallengeInput } from './dto/update-challenge.input';
import { ChallengeRepository } from './challange.repository';
import { ChallengeEntity } from './entities/challenge.entity';

@Injectable()
export class ChallengesService {

  constructor(private readonly challangeRepository: ChallengeRepository){}
  create(createChallengeInput: CreateChallengeInput) {
    const challangeEntity =  new ChallengeEntity(createChallengeInput);
    return this.challangeRepository.create(challangeEntity);
  }

  

  findAll() {
    return  this.challangeRepository.find({});
  }

  findOne(id: number) {
    return  this.challangeRepository.findOne({id});
  }

  update(id: number, updateChallengeInput: UpdateChallengeInput) {
    return  this.challangeRepository.findOneAndUpdate({id}, updateChallengeInput)
  }
  remove(id: number) {
    return this.challangeRepository.findOneAndDelete({id});
  }




}
