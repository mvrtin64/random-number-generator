import { Module } from '@nestjs/common';
import { RandomNumberController } from './random-number.controller';
import { RandomNumberService } from './random-number.service';

@Module({
  controllers: [RandomNumberController],
  providers: [RandomNumberService],
})
export class RandomNumberModule {}
