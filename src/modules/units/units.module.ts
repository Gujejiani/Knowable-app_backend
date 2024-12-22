import { Module } from '@nestjs/common';
import { UnitsService } from './units.service';
import { UnitsResolver } from './units.resolver';
import { DatabaseModule } from 'common/common/database/database.module';
import { UnitsRepository } from './units.repository';
import { UnitEntity } from './entities/unit.entity';

@Module({
  providers: [UnitsResolver, UnitsService, UnitsRepository],
  imports: [
    DatabaseModule.forFeature([
      UnitEntity
    ])
  ],
})
export class UnitsModule {}
