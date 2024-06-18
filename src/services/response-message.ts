import { HttpStatus } from '@nestjs/common';
import { Response } from 'express';

export const Error = (title: string, res: Response, err?: any) => {
  res.status(HttpStatus.BAD_REQUEST).json({
    message: title,
    message_erro: err,
  });
};
