import { Body, Controller, Post, Res } from '@nestjs/common';
import { SkillService } from './skill.service';
import { CreateSkillDto } from './types';
import { Response } from 'express';

@Controller('skills')
export class SkillController {

    constructor(private readonly skillService: SkillService) { }

    @Post('/create')
    async create(@Body() body: CreateSkillDto, @Res() res: Response) {
        const newSkill = await this.skillService.create(body)
        if (newSkill) res.status(200).send({ ...newSkill.dataValues, branches: [] })
        else res.status(400).send({ message: 'Skill already exists' })
    }
}
