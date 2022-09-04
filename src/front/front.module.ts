import { Module } from '@nestjs/common';
import { SimulationsModule } from '../simulations/simulations.module';
import { FrontController } from './front.controller';

@Module({
  controllers: [FrontController],
  imports: [SimulationsModule],
})
export class FrontModule {}
