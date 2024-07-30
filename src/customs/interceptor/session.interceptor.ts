import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { SESSION_KEY } from '../decorator/session.decorator';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class SessionInterceptor implements NestInterceptor {
  constructor(private reflector: Reflector) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const isSessionEnabled = this.reflector.get<boolean>(
      SESSION_KEY,
      context.getHandler(),
    );

    if (isSessionEnabled) {
      const request = context.switchToHttp().getRequest();
      const authHeader = request.headers['authorization'];

      if (authHeader) {
        const token = authHeader.replace('Bearer ', '');
        try {
          // Decodifica o token JWT e extrai as informações
          const decoded = jwt.decode(token, { complete: true });
          // Armazena as informações decodificadas no contexto da requisição
          request.sessionContext = decoded?.payload || {};
          global.SESSION = decoded?.payload as {
            username: string;
          };
        } catch (err) {
          console.error('Failed to decode JWT', err);
        }
      } else {
        // Se não houver cabeçalho de autorização, configura um contexto vazio
        request.sessionContext = {};
      }
    }

    return next.handle();
  }
}
