import { Module } from '@nestjs/common';
import { CustomBullModule } from 'common/common/custom-bull/custom-bull.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SampleConsumerModule } from './sample-consumer/sample-consumer.module';
import { SampleProducerModule } from './sample-producer/sample-producer.module';

@Module({
  imports: [
    CustomBullModule,
    SampleConsumerModule,
    SampleProducerModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
