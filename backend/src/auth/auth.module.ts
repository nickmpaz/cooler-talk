import { Global, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';

@Global()
@Module({
  imports: [UsersModule],
  providers: [AuthService],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
