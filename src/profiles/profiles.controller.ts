import { Controller, Get, Query, Param, Body, Post, Put, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Controller('profiles')
export class ProfilesController {
  @Get()
  findAll(@Query('location') location: string) {
    return [{ location }]
  }

  @Get(':id')
  findId(@Param(':id') age: number) {
    return []
  }

  @Post()
  create(@Body() createProfileDto: CreateProfileDto) {
    return {
        name: createProfileDto.name,
        description: createProfileDto.description
    }
  }

  @Put(':id')
  update(@Param(':id') id: string, @Body() updateProfileDto: UpdateProfileDto) {
    return {
        name: updateProfileDto.name,
        description: updateProfileDto.description
    }
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id') id: string){}
}
