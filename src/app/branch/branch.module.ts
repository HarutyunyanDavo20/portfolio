import { Module } from '@nestjs/common';
import { BranchController } from './branch.controller';
import { BranchService } from './branch.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Branch } from './branch.model';

@Module({
  imports: [SequelizeModule.forFeature([Branch])],
  controllers: [BranchController],
  providers: [BranchService],
  exports: [BranchService]
})
export class BranchModule { }
