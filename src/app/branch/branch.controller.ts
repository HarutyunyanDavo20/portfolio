import { Body, Controller, Post } from '@nestjs/common';
import { BranchService } from './branch.service';
import { CreateBranchDto } from './types';

@Controller('branches')
export class BranchController {
    constructor(private readonly branchService: BranchService) { }

    @Post('/create')
    async create(@Body() dto: CreateBranchDto) {
        const newBranch = await this.branchService.create(dto)
    }
}
