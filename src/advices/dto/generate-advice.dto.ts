import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { CreateLeadDto } from '../../leads/dto/create-lead.dto';
import { GenerateQuoteDto } from '../../quotes/dto/input/generate-quote.dto';

export class GenerateAdviceDto {
  @ValidateNested()
  @Type(() => CreateLeadDto)
  lead: CreateLeadDto;

  @ValidateNested()
  @Type(() => GenerateQuoteDto)
  quote: GenerateQuoteDto;
}
