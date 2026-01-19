import { Controller, Get, Query, Param, Body, Post, Put, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfilesService } from './profiles.service';

@Controller('profiles')
export class ProfilesController {
  constructor(private profileService: ProfilesService){}

  @Get()
  findAll(){
    return this.profileService.findAll()
  }

  @Get()
  find(@Query('location') location: string) {
    return [{ location }]
  }

  @Get(':id')
  findId(@Param('id') id: string) {
    return this.profileService.findById(id)
  }

  @Post()
  create(@Body() createProfileDto: CreateProfileDto) {
    return this.profileService.create(createProfileDto)
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto) {
    return this.profileService.update(id, updateProfileDto)
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id') id: string){
    return this.profileService.delete(id)
  }
}
