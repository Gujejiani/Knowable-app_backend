import { Module } from '@nestjs/common';
import { SectionsService } from './sections.service';
import { SectionsResolver } from './sections.resolver';
import { SectionsRepository } from './sections.repository';
import { CoursesModule } from 'src/modules/courses/courses.module';
import { DatabaseModule } from 'common/common/database/database.module';
import { SectionsController } from './sections.controller';
import { SectionEntity } from './entities/section.entity';
import { EventEmittersModule } from 'src/events/event-emmiters.module';

@Module({
  controllers: [SectionsController],
  providers: [SectionsResolver, SectionsService, SectionsRepository],
  imports: [
    EventEmittersModule.register('courses'),
    DatabaseModule.forFeature([
      SectionEntity,
    ]),
    
    CoursesModule],
})
export class SectionsModule {}
