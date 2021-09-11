import { Module } from '@nestjs/common';
import { CounterService } from './counter.service';
import { CounterController } from './counter.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Counter } from './entities/counter.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Counter])],
  providers: [CounterService],
  controllers: [CounterController],
  exports: [TypeOrmModule],
})
export class CounterModule {}
