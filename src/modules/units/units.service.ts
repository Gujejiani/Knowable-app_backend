import { Injectable, Logger } from '@nestjs/common';
import { CreateUnitInput } from './dto/create-unit.input';
import { UpdateUnitInput } from './dto/update-unit.input';
import { UnitsRepository } from './units.repository';
import { UnitEntity } from './entities/unit.entity';
import { FindOptionsRelations } from 'typeorm';

@Injectable()
export class UnitsService {

  private readonly logger = new Logger(UnitsService.name);

  constructor( private readonly unitsRepository: UnitsRepository ){}
  create(createUnitInput: CreateUnitInput) {

    // todo check if section exist
    
    const unitsEntity = new UnitEntity({
      name: createUnitInput.name,
      description: createUnitInput?.description,
      imageUrl: createUnitInput.imageUrl,
      icon: createUnitInput?.icon,
      count: createUnitInput?.count,
      unitColor: createUnitInput?.unitColor,
      sectionId: createUnitInput?.sectionId

      
    })

    return this.unitsRepository.create(unitsEntity);



  }

  findAll(relations?: FindOptionsRelations<UnitEntity>) {
    return  this.unitsRepository.find({}, relations);
  }

  findOne(id: number) {
    return this.unitsRepository.findOne({ id: id });
  }

  async update(id: number, updateUnitInput: UpdateUnitInput) {
    const updatedUnitEntity = await this.unitsRepository.findOne({ id: id,   }, {});

    if(!updatedUnitEntity){
      throw new Error('Unit not found');
    }

    if(updateUnitInput.name){
      updatedUnitEntity.name = updateUnitInput.name
    }
    if(updatedUnitEntity.description ){
      updatedUnitEntity.description = updateUnitInput?.description
    }
    if(updatedUnitEntity.imageUrl ){
      updatedUnitEntity.imageUrl = updateUnitInput.imageUrl
    }
    if(updatedUnitEntity.icon){
      updatedUnitEntity.icon = updateUnitInput?.icon
    }

    if(updatedUnitEntity.count){
      updatedUnitEntity.count = updateUnitInput?.count
    }

    if(updatedUnitEntity.unitColor){
      updatedUnitEntity.unitColor = updateUnitInput?.unitColor
    }
  
   
    if(updateUnitInput.sectionId){
      updatedUnitEntity.sectionId = updateUnitInput?.sectionId

    }


    this.logger.debug(`updatedUnitEntity: ${JSON.stringify(updatedUnitEntity)}`);

    return  this.unitsRepository.findOneAndUpdate({id: id}, updatedUnitEntity);
  }

  remove(id: number) {
    return  this.unitsRepository.findOneAndDelete({ id});
  }
}
