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
  @IsNumber()
  annualRevenue: number;

  @Matches(/^0\d{9}$/)
  enterpriseNumber: string;

  @IsString()
  legalName: string;

  @IsBoolean()
  naturalPerson: boolean;

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
