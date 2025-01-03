import { Module } from '@nestjs/common';
import { ChallengesService } from './challenges.service';
import { ChallengesResolver } from './challenges.resolver';
import { DatabaseModule } from 'common/common/database/database.module';
import { ChallengeEntity } from './entities/challenge.entity';
import { ChallengeRepository } from './challange.repository';
import { ChallengesController } from './challanges.controller';

@Module({
  controllers: [ChallengesController],
  providers: [ChallengesResolver, ChallengesService, ChallengeRepository],
  imports: [
    DatabaseModule.forFeature([
      ChallengeEntity
    ])
  ]
})
export class ChallengesModule {}
