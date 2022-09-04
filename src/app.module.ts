import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { QuotesModule } from './quotes/quotes.module';
import { AdvicesModule } from './advices/advices.module';
import { FrontModule } from './front/front.module';
import { LeadsModule } from './leads/leads.module';
import { SimulationsModule } from './simulations/simulations.module';

@Module({
  controllers: [AppController],
  imports: [
    QuotesModule,
    AdvicesModule,
    FrontModule,
    LeadsModule,
    SimulationsModule,
  ],
})
export class AppModule {}
