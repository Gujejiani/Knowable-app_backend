import { Injectable } from '@nestjs/common';
import { CreateChallengeInput } from './dto/create-challenge.input';
import { UpdateChallengeInput } from './dto/update-challenge.input';
import { ChallengeRepository } from './challange.repository';
import { ChallengeEntity } from './entities/challenge.entity';
import { UpdateChallengeDto } from './dto/rest-dto/update-challenge.dto';
import { CreateChallengeDto } from './dto/rest-dto/create-challenge.dto';

@Injectable()
export class ChallengesService {

  constructor(private readonly challangeRepository: ChallengeRepository){}
  create(createChallengeInput: CreateChallengeInput) {
    const challangeEntity =  new ChallengeEntity(createChallengeInput);
    return this.challangeRepository.create(challangeEntity);
  }

  
  update(id: number, updateChallengeInput: UpdateChallengeInput) {
    return  this.challangeRepository.findOneAndUpdate({id}, updateChallengeInput)
  }

  findAll() {
    return  this.challangeRepository.find({});
  }

  findOne(id: number) {
    return  this.challangeRepository.findOne({id});
  }

  remove(id: number) {
    return this.challangeRepository.findOneAndDelete({id});
  }


  updateRest(id: number, updateLessonInput: UpdateChallengeDto) {
    return this.challangeRepository.findOneAndUpdate({id: id}, 
      updateLessonInput
    );
  }


  createRest(createLessonDto: CreateChallengeDto) {
    const lessonEntity = new ChallengeEntity(createLessonDto);

    return  this.challangeRepository.create(lessonEntity)
  }











}
