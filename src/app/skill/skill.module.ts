import { Module } from '@nestjs/common';
import { SkillController } from './skill.controller';
import { SkillService } from './skill.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Skill } from './skill.model';

@Module({
  imports: [SequelizeModule.forFeature([Skill])],
  controllers: [SkillController],
  providers: [SkillService],
  exports: [SkillService]
})
export class SkillModule { }
