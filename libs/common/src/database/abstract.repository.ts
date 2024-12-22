import { Logger, NotFoundException } from "@nestjs/common";
import { EntityManager, FindOptionsRelations, FindOptionsWhere, Repository } from "typeorm";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
import { AbstractEntity } from "./abstract.entity";



export abstract class AbstractRepository<T extends AbstractEntity<T>> {
    protected abstract readonly logger: Logger;



       constructor(protected readonly entityRepository: Repository<T>,
        private readonly entityManager: EntityManager
 
       ) {

        }


        async create(entity: T): Promise<T> {
            return  await this.entityManager.save(entity);
        }


        async findOneAndDelete(where: FindOptionsWhere<T> ){

            return this.entityRepository.delete(where)
           
        }

        async findOne(where: FindOptionsWhere<T>, relations?: FindOptionsRelations<T> ): Promise<T> {
            const entity = await this.entityRepository.findOne({ where, relations });

            // if(!entity){
            //     throw new NotFoundException('Entity not found')
            // }

            

            return entity
        }


     async findOneAndUpdate(where: FindOptionsWhere<T>, partialEntity: QueryDeepPartialEntity<T>   ){
            
            
            const updateResult = await this.entityRepository.update(where, partialEntity);

            if(!updateResult.affected){
                this.logger.warn(`entity not found with filter ${JSON.stringify(where)}`)
                throw new NotFoundException(`entity not found with filter ${JSON.stringify(where)}`)
            }
            return this.findOne(where);  ;
        }




        async find(where: FindOptionsWhere<T>, relations?: FindOptionsRelations<T> ): Promise<T[]>  {

            return this.entityRepository.find({ where, relations});
        }




}