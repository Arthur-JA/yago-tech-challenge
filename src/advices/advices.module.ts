import { Module } from '@nestjs/common';
import { AdvicesService } from './advices.service';
import { AdvicesController } from './advices.controller';

@Module({
  controllers: [AdvicesController],
  providers: [AdvicesService]
})
export class AdvicesModule {}
