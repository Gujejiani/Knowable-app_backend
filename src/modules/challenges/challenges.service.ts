import { Injectable } from '@nestjs/common';
import { CreateChallengeInput } from './dto/create-challenge.input';
import { UpdateChallengeInput } from './dto/update-challenge.input';
import { ChallengeRepository } from './challange.repository';
import { ChallengeEntity } from './entities/challenge.entity';
import { UpdateChallengeDto } from './dto/rest-dto/update-challenge.dto';
import { CreateChallengeDto } from './dto/rest-dto/create-challenge.dto';
import { FindOptionsRelations } from 'typeorm';

@Injectable()
export class ChallengesService {

  constructor(private readonly challengesRepository: ChallengeRepository){}
  create(createChallengeInput: CreateChallengeInput) {
    const challengeEntity =  new ChallengeEntity(createChallengeInput);
    return this.challengesRepository.create(challengeEntity);
  }

  
  update(id: number, updateChallengeInput: UpdateChallengeInput) {
    return  this.challengesRepository.findOneAndUpdate({id}, updateChallengeInput)
  }

  findAll(relations?: FindOptionsRelations<ChallengeEntity>) {
    return  this.challengesRepository.find({}, relations);
  }

  findOne(id: number) {
    return  this.challengesRepository.findOne({id});
  }

  remove(id: number) {
    return this.challengesRepository.findOneAndDelete({id});
  }


  updateRest(id: number, updateLessonInput: UpdateChallengeDto) {
    return this.challengesRepository.findOneAndUpdate({id: id}, 
      updateLessonInput
    );
  }


  createRest(createLessonDto: CreateChallengeDto) {
    const lessonEntity = new ChallengeEntity(createLessonDto);

    return  this.challengesRepository.create(lessonEntity)
  }











}
