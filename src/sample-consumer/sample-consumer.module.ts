import { Module } from '@nestjs/common';
import { SampleConsumer } from './sample-consumer.consumer';

@Module({
    imports: [

    ],
    providers: [SampleConsumer]
})
export class SampleConsumerModule {}
