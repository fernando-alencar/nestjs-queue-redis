import { Process, Processor } from "@nestjs/bull";
import { Job } from "bull";

@Processor('sample-queue')
export class SampleConsumer {

    @Process('print-id')
    async printId(job: Job<{ id: number }>) {
        console.log(`Processing PrintId ${job.data.id}`)

        if (job.data.id % 2 == 0) throw 'teste'
        // job.moveToFailed({
        //     message: "Falhou "
        // })//Falha se id for par até o limite de tentativas

        return {};
    }


    @Process('double')
    async double(job: Job<{ number: number }>) {
        console.log(`Processing Double ${2 * job.data.number}`)
        return {};
    }

}
