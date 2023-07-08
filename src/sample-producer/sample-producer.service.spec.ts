import { Test, TestingModule } from '@nestjs/testing';
import { SampleProducerService } from './sample-producer.service';

describe('SampleProducerService', () => {
  let service: SampleProducerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SampleProducerService],
    }).compile();

    service = module.get<SampleProducerService>(SampleProducerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
