import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { QuotesModule } from './quotes/quotes.module';
import { AdvicesModule } from './advices/advices.module';

@Module({
  controllers: [AppController],
  imports: [QuotesModule, AdvicesModule],
})
export class AppModule {}
