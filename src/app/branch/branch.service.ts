import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Branch } from './branch.model';
import { CreateBranchDto } from './types';

@Injectable()
export class BranchService {

    constructor(@InjectModel(Branch) private readonly branches: typeof Branch,) { }

    async create(dto: CreateBranchDto) {
        return await this.branches.create(dto)
    }

    async getBranchesBySkillParentId(skill_parent_id: number) {
        return await this.branches.findAll({ where: { skill_parent_id }, raw: true })
    }
}
