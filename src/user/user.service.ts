import { Inject, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { RegisterUserRequest, UserRespone } from 'model/user.model';
import {Logger} from 'winston';
import { WINSTON_MODULE_PROVIDER} from 'nest-winston';
import { ValidationService } from 'src/common/validation.service';
import { PrismaService } from 'src/common/prisma.service';

@Injectable()
export class UserService {
    constructor(
        private validationService: ValidationService,
        @Inject(WINSTON_MODULE_PROVIDER) private logger: Logger,
        private prismaService: PrismaService,
    ){}
    async register(req:RegisterUserRequest):Promise<UserRespone>{
        
        const user = await this.prismaService.user.create({
            data: reqisterRequest
        })
        
        return {
            username :user.username,
            name :user.name,
        }
    }
}
