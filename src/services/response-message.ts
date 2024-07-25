import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class ResponseService {
  success(data: any, message: string = 'Success') {
    return {
      status: HttpStatus.OK,
      message,
      data,
    };
  }

  error(title: string, err?: any): void {
    throw new HttpException(
      {
        status: HttpStatus.BAD_REQUEST,
        error: title,
        message_erro: err,
      },
      HttpStatus.BAD_REQUEST,
    );
  }
}
