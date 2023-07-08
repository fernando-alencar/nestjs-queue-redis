import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { SampleProducerService } from './sample-producer.service';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'sample-queue',
    })
  ],
  providers: [SampleProducerService]
})
export class SampleProducerModule {}
