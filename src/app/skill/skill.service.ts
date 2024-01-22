import { Injectable } from '@nestjs/common';
import { Skill } from './skill.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateSkillDto } from './types';

@Injectable()
export class SkillService {

    constructor(@InjectModel(Skill) private readonly skills: typeof Skill) { }

    async create(body: CreateSkillDto) {
        return this.skills.create(body, { raw: true })
    }

    async getSkillsByUserId(id: string) {
        return await this.skills.findAll({ where: { user_id: id }, raw: true })
    }
}
