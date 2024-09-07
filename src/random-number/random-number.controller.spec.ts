import { Test, TestingModule } from '@nestjs/testing';
import { RandomNumberController } from './random-number.controller';

describe('RandomNumberController', () => {
  let controller: RandomNumberController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RandomNumberController],
    }).compile();

    controller = module.get<RandomNumberController>(RandomNumberController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
