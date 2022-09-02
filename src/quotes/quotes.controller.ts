import { Controller, Post, Body } from '@nestjs/common';
import { GenerateQuoteDto } from './dto/input/generate-quote.dto';
import { Quote } from './dto/output/quote.dto';
import { QuotesService } from './quotes.service';

@Controller('quotes')
export class QuotesController {
  constructor(private readonly quotesService: QuotesService) {}

  @Post('/generate')
  async generateQuote(@Body() generateQuoteDto: GenerateQuoteDto): Promise<Quote> {
    return this.quotesService.generateQuote(generateQuoteDto);
  }
}
