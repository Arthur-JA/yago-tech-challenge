import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable } from '@nestjs/common';
import * as Mongoose from 'mongoose';
import { firstValueFrom } from 'rxjs';
import { config } from '../configuration';
import { GenerateQuoteDto } from './dto/input/generate-quote.dto';
import { Quote } from './schemas/quote.schema';

@Injectable()
export class QuotesService {
  constructor(private readonly httpService: HttpService) {}

  async generateQuote(generateQuoteDto: GenerateQuoteDto): Promise<Quote> {
    let quote;

    // Can't call API so let's pretend it works
    return {
      _id: new Mongoose.Types.ObjectId(),
      available: true,
      coverageCeiling: 100000,
      deductible: 5000,
      quoteId: '012604234942544',
      coverPremiums: {
        afterDelivery: 53.0, // covers damage arising after delivery of or completion of work (ex: new machines recently installed at the client's office start a fire).
        publicLiability: 150.0, // cover compensation claims for injury or damage (ex: you spill a cup of coffee over a client’s computer equipment).
        professionalIndemnity: 270.0, // cover compensation claims for a mistake that you make during your work (ex: accidentally forwarded confidential client information to third parties).
        entrustedObjects: 12.92, // objects that don't belong to you, and are entrusted to you. You are obviously liable for any damage to these goods. (ex: you break the super expensive computer that was provided to you as an IT consultant).
        legalExpenses: 20.87, // also known as legal insurance, is an insurance which facilitates access to law and justice by providing legal advice and covering legal costs of a dispute. (ex: a client asks you for a financial compensation for a mistake you made in your work and you consider it's absolutely not you fault considering the context and you thus want to hire a lawyer to defend you).
      },
    } as Quote;

    try {
      quote = await firstValueFrom(
        this.httpService.post(config.insuranceApi.url, generateQuoteDto, {
          headers: {
            'X-Api-Key': config.insuranceApi.apiKey,
            'Content-Type': 'application/json',
          },
        }),
      );
    } catch (err) {
      if (err.response) {
        throw new HttpException(
          `Cannot generate quote from api: ${err.response.statusText}`,
          err.response.status,
        );
      }
      throw err;
    }

    //@todo persistence

    return quote;
  }
}
