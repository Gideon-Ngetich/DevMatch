import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfilesService {
    private profiles = [
        {
            id: randomUUID(),
            name: "John Doe",
            description: "A fun and enthusiastic guy",
        },
        {
            id: randomUUID(),
            name: "John Doe",
            description: "A fun and enthusiastic guy",
        },
        {
            id: randomUUID(),
            name: "John Doe",
            description: "A fun and enthusiastic guy",
        },
    ]

    findAll(){
        return this.profiles
    }

    findById(id: string){
        return this.profiles.find(profile => profile.id === id)
    }

    create(createProfileDto: CreateProfileDto){
        const createProfile = {
            id: randomUUID(),
            name: createProfileDto.name,
            description: createProfileDto.description
        }
        this.profiles.push(createProfile)
        return createProfile;
    }

    update(id: string, updateProfileDto: UpdateProfileDto) {
        const matchProfle = this.profiles.find(existingProfile => existingProfile.id === id)

        if(!matchProfle) {
            return {};
        }

        matchProfle.name = updateProfileDto.name;
        matchProfle.description = updateProfileDto.description

        return matchProfle;

    }

    delete(id: string) {
        const deleteProfile = this.profiles.findIndex(existingProfile => existingProfile.id === id)

        if(!deleteProfile) {
            return "No profile foind"
        }

        if(deleteProfile > -1){
            this.profiles.slice(deleteProfile, 1)
        }
    }
}
