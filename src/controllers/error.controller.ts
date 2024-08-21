import { Request, Response, Errback, NextFunction } from 'express';
import logger from '../logger';

class CustomError extends Error {
  status: number | undefined;

  constructor(message: string, status?: number) {
    super(message);
    this.status = status;
  }
}

class ErrorController {
  globalErrorHandler(err: Errback, req: Request, res: Response, next: NextFunction) {
    logger.error('Global error controller catch error', err);

    res.status(400).json({
      message: `Server Error, url: ${req.originalUrl}, err: ${JSON.stringify(err)}`
    });
  }
}

export default new ErrorController();
