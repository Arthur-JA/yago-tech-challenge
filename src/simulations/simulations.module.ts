import { Module } from '@nestjs/common';
import { AdvicesModule } from '../advices/advices.module';
import { LeadsModule } from '../leads/leads.module';
import { QuotesModule } from '../quotes/quotes.module';
import { SimulationsService } from './simulations.service';

@Module({
  providers: [SimulationsService],
  exports: [SimulationsService],
  imports: [LeadsModule, QuotesModule, AdvicesModule],
})
export class SimulationsModule {}
