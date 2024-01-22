import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { AuthBody } from './types';
import { Response } from 'express';

@Controller('admin')
export class AdminController {
    constructor() { }

    @Post('/admin')
    getAdmin(
        @Res() res: Response,
        @Body() body: AuthBody
    ) {
        if (body.login === process.env.AUTH_LOGIN && body.password === process.env.AUTH_PASSWORD) {
            return res.status(200).json({ message: 'success' })
        } else {
            return res.status(401).json({ message: 'unauthorized' })
        }
    }
}
