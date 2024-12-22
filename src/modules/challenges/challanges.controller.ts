import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

import { ApiTags } from '@nestjs/swagger'; 
import { ChallengesService } from './challenges.service';
import { CreateChallengeDto } from './dto/rest-dto/create-challenge.dto';
import { UpdateChallengeDto } from './dto/rest-dto/update-challenge.dto';



ApiTags('Challenges Controller') 
@Controller('challenges')
export class ChallengesController {
  constructor(private readonly challengeService: ChallengesService) {}

  @Post()
  create(@Body() createLessonDto: CreateChallengeDto) {
    return this.challengeService.createRest(createLessonDto);
  }

  @Get()
  findAll() {
    return this.challengeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.challengeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLessonDto: UpdateChallengeDto) {
    return this.challengeService.updateRest(+id, updateLessonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.challengeService.remove(+id);
  }
}
