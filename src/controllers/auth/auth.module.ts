import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/constants/constants';
import { ResponseService } from 'src/services/response-message';
import { PrismaService } from 'src/services/prisma/prisma.service';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '600000s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, ResponseService, PrismaService],
})
export class AuthModule {}
