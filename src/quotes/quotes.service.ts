import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { config } from '../configuration';
import { GenerateQuoteDto } from './dto/input/generate-quote.dto';
import { Quote } from './dto/output/quote.dto';

@Injectable()
export class QuotesService {
  constructor(private readonly httpService: HttpService) {}

  async generateQuote(generateQuoteDto: GenerateQuoteDto): Promise<Quote> {
    let quote;

    try {
      quote = await firstValueFrom(this.httpService.post(config.insuranceApi.url, generateQuoteDto, {
        headers: {
          'X-Api-Key': config.insuranceApi.apiKey,
          'Content-Type': 'application/json'
        }
      }));
    } catch (err) {
      if (err.response) {
        throw new HttpException(`Cannot generate quote from api: ${err.response.statusText}`, err.response.status);
      }
      throw err;
    }

    return quote;
  }
}
