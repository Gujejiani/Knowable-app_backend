import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

import { ApiTags } from '@nestjs/swagger'; 
import { CreateLessonDto } from './dto/rest-dto/create-lesson.dto';
import { LessonsService } from './lessons.service';
import { UpdateLessonDto } from './dto/rest-dto/update-lesson.dto';


ApiTags('Lesson Controller') 
@Controller('lessons')
export class LessonsController {
  constructor(private readonly lessonService: LessonsService) {}

  @Post()
  create(@Body() createLessonDto: CreateLessonDto) {
    return this.lessonService.createRest(createLessonDto);
  }

  @Get()
  findAll() {
    return this.lessonService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lessonService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLessonDto: UpdateLessonDto) {
    return this.lessonService.updateRest(+id, updateLessonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lessonService.remove(+id);
  }
}
