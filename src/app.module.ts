import { Module } from '@nestjs/common';
import { EntidadesModule } from './entidades/entidades.module';

@Module({
  imports: [EntidadesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
