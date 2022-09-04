import { Injectable } from '@nestjs/common';
import { Quote } from 'src/quotes/schemas/quote.schema';

@Injectable()
export class AdvicesService {
  async create(quote: Quote) {}
}
