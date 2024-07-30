import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { SessionInterceptor } from './customs/interceptor/session.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3333);

  app.useGlobalInterceptors(new SessionInterceptor(new Reflector()));
}
bootstrap();
