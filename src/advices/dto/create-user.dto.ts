import { Type } from 'class-transformer';
import { IsEmail, IsPhoneNumber, IsString, ValidateNested } from 'class-validator';
import { GenerateQuoteDto } from 'src/quotes/dto/input/generate-quote.dto';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsPhoneNumber()
  phoneNumber: string;

  @IsString()
  address: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @ValidateNested()
  @Type(() => GenerateQuoteDto)
  generateQuote: GenerateQuoteDto;
}
