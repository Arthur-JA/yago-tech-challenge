import { Transform } from 'class-transformer';
import {
  IsBoolean,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Matches,
} from 'class-validator';
import { CoverageCeilingFormula } from '../../enums/coverage-ceiling-formula';
import { DeductibleFormula } from '../../enums/deductible-formula';

export class GenerateQuoteDto {
  @Transform((params) => parseInt(params.value))
  @IsNumber()
  annualRevenue: number;

  @Matches(/^0\d{9}$/)
  enterpriseNumber: string;

  @IsString()
  legalName: string;

  @Transform((params) => !!params.value)
  @IsBoolean()
  naturalPerson? = false;

  @IsOptional()
  @Matches(/^\d{5}$/, { each: true })
  nacebelCodes?: string[];

  @IsOptional()
  @IsEnum(DeductibleFormula)
  deductibleFormula? = DeductibleFormula.MEDIUM;

  @IsOptional()
  @IsEnum(CoverageCeilingFormula)
  coverageCeilingFormula? = CoverageCeilingFormula.SMALL;
}
