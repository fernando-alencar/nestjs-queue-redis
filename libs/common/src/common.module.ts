import { Module } from '@nestjs/common';
import { CustomBullModule } from './custom-bull/custom-bull.module';

@Module({
  providers: [],
  exports: [],
  imports: [CustomBullModule],
})
export class CommonModule {}
