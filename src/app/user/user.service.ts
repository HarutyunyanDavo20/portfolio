import { Inject, Injectable } from '@nestjs/common';
import { User } from './user.model';
import { InjectModel } from '@nestjs/sequelize';
import { SkillService } from '../skill/skill.service';
import { BranchService } from '../branch/branch.service';

@Injectable()
export class UserService {

    constructor(
        @InjectModel(User) private readonly users: typeof User,
        @Inject(SkillService) private readonly skillService: SkillService,
        @Inject(BranchService) private readonly branchService: BranchService,
    ) { }

    async getUser(id: string) {
        const userInfo = await this.users.findOne({ where: { id }, raw: true })
        const skills = await this.skillService.getSkillsByUserId(id)
        const newSkills = await Promise.all(skills.map(async skill => ({
            ...skill,
            branches: await this.branchService.getBranchesBySkillParentId(skill.id)
        })));
        return { ...userInfo, skills: newSkills }
    }
}
