import { NextFunction, Request, Response } from 'express';
import { OtpToken } from '../entity/OtpToken';
import AppDataSource from '../data-source';
import logger from '../logger';

class AuthController {
  async authenticate(req: Request, res: Response, next: NextFunction) {
    const { phoneNumber } = req.body;

    logger.info('Phone number: %s', phoneNumber);
    const token = new OtpToken();
    token.phoneNumber = '+380997632054';
    token.otp_code = '52351';
    token.is_used = false;
    token.created_at = new Date().toDateString();
    token.expires_at = new Date().toDateString();

    // await AppDataSource.manager.save(token);
    res.status(200).json(token);
  }
}

export default new AuthController();
