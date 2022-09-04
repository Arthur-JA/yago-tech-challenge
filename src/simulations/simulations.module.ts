import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdvicesModule } from '../advices/advices.module';
import { QuotesModule } from '../quotes/quotes.module';
import { Simulation, SimulationSchema } from './schemas/simulation.schema';
import { SimulationsService } from './simulations.service';

@Module({
  providers: [SimulationsService],
  exports: [SimulationsService],
  imports: [
    MongooseModule.forFeature([
      { name: Simulation.name, schema: SimulationSchema },
    ]),
    QuotesModule,
    AdvicesModule,
  ],
})
export class SimulationsModule {}
