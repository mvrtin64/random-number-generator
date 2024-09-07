import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class RandomNumberService {
  getRandomNumber() {
    try {
      const randomNumber = Math.floor(Math.random() * 100) + 1;

      if (randomNumber < 1 || randomNumber > 100) {
        throw new HttpException('out of range number.', HttpStatus.INTERNAL_SERVER_ERROR);
      }

      return { value: randomNumber };
    } catch (error) {
      throw new HttpException('error while generating number', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
