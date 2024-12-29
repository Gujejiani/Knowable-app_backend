import { Module } from '@nestjs/common';
import { UserProgressService } from './user-progress.service';
import { UserProgressResolver } from './user-progress.resolver';
import { DatabaseModule } from 'common/common/database/database.module';
import { UserProgressEntity } from './entities/user-progress.entity';
import { UserProgressRepository } from './user-progress.repository';

@Module({
  providers: [UserProgressResolver, UserProgressService, UserProgressRepository],
  imports: [
      DatabaseModule.forFeature([
        UserProgressEntity
      ])
  ]
})
export class UserProgressModule {}
