import { CoverageCeilingFormula } from '../../quotes/enums/coverage-ceiling-formula';
import { DeductibleFormula } from '../../quotes/enums/deductible-formula';
import { Quote } from '../../quotes/schemas/quote.schema';
import { Advice } from '../../advices/schemas/advice.schema';
import { Lead } from '../../leads/schemas/lead.schema';

export class Simulation {
  lead: Lead;
  quote: Quote;
  deductibleFormula: DeductibleFormula;
  coverageCeilingFormula: CoverageCeilingFormula;
  advices?: Advice[] = [];
}
