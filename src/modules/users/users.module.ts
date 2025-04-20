import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { DatabaseModule } from 'common/common/database/database.module';
import { UserEntity } from './entities/user.entity';
import { UserRepository } from './user.repository';

@Module({

  imports: [
    DatabaseModule.forFeature([UserEntity]),
  ],
  providers: [UsersResolver, UsersService, UserRepository],
})
export class UsersModule {}
