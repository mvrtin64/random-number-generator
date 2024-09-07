import { Controller, Post, HttpException, HttpStatus } from '@nestjs/common';
import { RandomNumberService } from './random-number.service';

@Controller('random')
export class RandomNumberController {
  constructor(private readonly randomNumberService: RandomNumberService) {}

  @Post()
  generateRandomNumber() {
    try {
      const result = this.randomNumberService.getRandomNumber();
      
      if (!result || typeof result.value !== 'number') {
        throw new HttpException('invalid number generated', HttpStatus.INTERNAL_SERVER_ERROR);
      }

      return result;
    } catch (error) {
      throw new HttpException('an error occurred. try again.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
