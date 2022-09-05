import { HttpService } from '@nestjs/axios';
import {HttpException, Injectable, InternalServerErrorException} from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { config } from '../configuration';
import { GenerateQuoteDto } from './dto/input/generate-quote.dto';
import { Quote } from './schemas/quote.schema';

@Injectable()
export class QuotesService {
  constructor(private readonly httpService: HttpService) {}

  async generateQuote(generateQuoteDto: GenerateQuoteDto): Promise<Quote> {
    let result;

    try {
      result = (await firstValueFrom(
        this.httpService.post(config.insuranceApi.url, generateQuoteDto, {
          headers: {
            'X-Api-Key': config.insuranceApi.apiKey,
            'Content-Type': 'application/json',
          },
        }),
      )).data;
    } catch (err) {
      if (err.response) {
        throw new HttpException(
          `Cannot generate quote from api: ${err.response.statusText}`,
          err.response.status,
        );
      }
      throw err;
    }

    console.log('get quote result', result);
    if (result.success || result.message !== 'success') {
      return result.data;
    } else {
      throw new InternalServerErrorException(`Cannot generate quote from api: ${result.message}`);
    }
  }
}
