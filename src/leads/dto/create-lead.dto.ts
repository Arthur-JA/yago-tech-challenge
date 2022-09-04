import { IsEmail, IsString } from 'class-validator';

export class CreateLeadDto {
  @IsEmail()
  email: string;

  @IsString()
  phoneNumber: string;

  @IsString()
  address: string;

  @IsString()
  firstname: string;

  @IsString()
  lastname: string;
}
