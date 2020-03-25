import { RequestWithSession } from './session.type';
import { UserEntity } from '../database/entity/user';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetSession = createParamDecorator((data: unknown, ctx: ExecutionContext): UserEntity => {
    const request: RequestWithSession = ctx.switchToHttp().getRequest();
    return request.user;
  },
);