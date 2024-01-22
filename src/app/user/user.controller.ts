import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { UserService } from './user.service';

@Controller('users')
export class UserController {

    constructor(private readonly userService: UserService) { }

    @Get('/:id')
    async getUser(@Param('id') id: string, @Res() res: Response) {
        const user = await this.userService.getUser(id)
        if (user) res.status(200).send(user)
        else res.status(400).send({ message: 'User already exists' })
    }

}
