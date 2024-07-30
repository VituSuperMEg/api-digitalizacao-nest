import {
  createParamDecorator,
  SetMetadata,
  ExecutionContext,
} from '@nestjs/common';

export const SESSION_KEY = 'session';

export const Session = () => SetMetadata(SESSION_KEY, true);

export const GetSession = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.session;
  },
);
