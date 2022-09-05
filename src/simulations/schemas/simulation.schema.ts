import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { CoverageCeilingFormula } from '../../quotes/enums/coverage-ceiling-formula';
import { DeductibleFormula } from '../../quotes/enums/deductible-formula';
import { Quote } from '../../quotes/schemas/quote.schema';
import {Advice, AdviceSchema} from '../../advices/schemas/advice.schema';
import { Lead } from '../../leads/schemas/lead.schema';

@Schema()
export class Simulation extends Document {
  @Prop({ type: Lead, required: true })
  lead: Lead;

  @Prop({ type: Quote, required: true })
  quote: Quote;

  @Prop({ enum: DeductibleFormula, required: true })
  deductibleFormula: DeductibleFormula;

  @Prop({ enum: DeductibleFormula, required: true })
  coverageCeilingFormula: CoverageCeilingFormula;

  @Prop({type: [AdviceSchema], required: false})
  advices?: Advice[] = [];
}

export const SimulationSchema = SchemaFactory.createForClass(Simulation);
