import { Injectable } from '@nestjs/common';
import { CreateOptionInput } from './dto/create-option.input';
import { UpdateOptionInput } from './dto/update-option.input';
import { OptionsRepository } from './options.repository';
import { OptionEntity } from './entities/option.entity';
import { FindOptionsRelations } from 'typeorm';

@Injectable()
export class OptionsService {
  constructor(private readonly optionsRepository: OptionsRepository){}

  create(createOptionInput: CreateOptionInput) {
    const optionEntity = new OptionEntity(createOptionInput);
    return  this.optionsRepository.create(optionEntity);
  }

  findAll(relations?: FindOptionsRelations<OptionEntity>) {
    return this.optionsRepository.find({}, relations);
  }

  findOne(id: number) {
    return  this.optionsRepository.findOne({ id})
  }

  update(id: number, updateOptionInput: UpdateOptionInput) {
    return  this.optionsRepository.findOneAndUpdate({id: id},updateOptionInput )
  }

  remove(id: number) {
    return  this.optionsRepository.findOneAndDelete({ id})
  }
}
