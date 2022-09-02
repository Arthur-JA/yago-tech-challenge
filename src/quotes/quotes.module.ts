import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { QuotesService } from './quotes.service';
import { QuotesController } from './quotes.controller';

@Module({
  controllers: [QuotesController],
  providers: [QuotesService],
  imports: [HttpModule]
})
export class QuotesModule {}
