import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';

@Injectable()
export class SampleProducerService {

    constructor(@InjectQueue('sample-queue') private sampleQueue: Queue) {

        sampleQueue.removeJobs('*') //limpa a fila

        setTimeout(() => {
            this.execute()
        }, 1000)

    }

    async execute() {
        console.log("Add 10 work in queue")

        console.time('default')
        for (let i = 0; i < 10; i++) {

            console.log(`Add work print-id = ${i}`)

            await this.sampleQueue.add('print-id',
                {
                    id: i,
                },
                {
                    attempts: 3,
                    removeOnComplete: true,
                    removeOnFail: true,
                    backoff: 3 * 1000, //Caso de falha, tenta novamente a cada 3 segundos
                    jobId: i //testing idempotency
                }
            );


            // await this.sampleQueue.add('print-id',
            //     {
            //         id: i,
            //     },
            //     {
            //         jobId: i //testing idempotency
            //     }
            // );

            // console.log(`Add work double = ${i}`)
            // await this.sampleQueue.add('double', {
            //     number: i,
            // });
        }
        console.timeEnd('default')
    }

}
