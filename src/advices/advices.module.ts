import { Module } from '@nestjs/common';
import { AdvicesService } from './advices.service';

@Module({
  providers: [AdvicesService],
  exports: [AdvicesService],
})
export class AdvicesModule {}
