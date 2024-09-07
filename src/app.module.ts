import { Module, MiddlewareConsumer } from '@nestjs/common';
import { RandomNumberModule } from './random-number/random-number.module';
import { LoggerMiddleware } from './middleware/logger.middleware';

@Module({
  imports: [RandomNumberModule],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('*'); 
  }
}
