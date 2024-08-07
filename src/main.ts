import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { SessionInterceptor } from './customs/interceptor/session.interceptor';
import { ValidationPipe } from './pipes/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3333);

  app.useGlobalInterceptors(new SessionInterceptor(new Reflector()));
  app.useGlobalPipes(new ValidationPipe());
}
bootstrap();
