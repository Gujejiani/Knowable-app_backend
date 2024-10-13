import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { SectionsService } from './sections.service';
import { CreateSectionInput } from './dto/create-section.input';
import { UpdateSectionInput } from './dto/update-section.input';

@ApiTags('sections')
@Controller('sections')
export class SectionsController {
  constructor(private readonly sectionsService: SectionsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all sections' })
  findAll() {
    return this.sectionsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a section by id' })
  findOne(@Param('id') id: string) {
    return this.sectionsService.findOne(+id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new section' })
  create(@Body() createSectionInput: CreateSectionInput) {
    return this.sectionsService.create(createSectionInput);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a section by id' })
  update(@Param('id') id: string, @Body() updateSectionInput: UpdateSectionInput) {
    return this.sectionsService.update(+id, updateSectionInput);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a section by id' })
  remove(@Param('id') id: string) {
    return this.sectionsService.remove(+id);
  }
}
