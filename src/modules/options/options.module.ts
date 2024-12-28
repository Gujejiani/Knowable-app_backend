import { Module } from '@nestjs/common';
import { OptionsService } from './options.service';
import { OptionsResolver } from './options.resolver';
import { DatabaseModule } from 'common/common/database/database.module';
import { OptionEntity } from './entities/option.entity';
import { OptionsRepository } from './options.repository';

@Module({
  providers: [OptionsResolver, OptionsService, OptionsRepository],

  imports: [

    DatabaseModule.forFeature([
      OptionEntity  
      ])
  ]
})
export class OptionsModule {

}
