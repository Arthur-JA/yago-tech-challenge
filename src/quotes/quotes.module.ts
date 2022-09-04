import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { QuotesService } from './quotes.service';

@Module({
  providers: [QuotesService],
  imports: [HttpModule],
  exports: [QuotesService],
})
export class QuotesModule {}
