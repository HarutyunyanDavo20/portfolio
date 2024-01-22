import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';
import { UserController } from './user.controller';
import { Skill } from '../skill/skill.model';
import { SkillModule } from '../skill/skill.module';
import { Branch } from '../branch/branch.model';
import { BranchModule } from '../branch/branch.module';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [
    SequelizeModule.forFeature([User]),
    SkillModule,
    BranchModule
  ],
})
export class UserModule { }
