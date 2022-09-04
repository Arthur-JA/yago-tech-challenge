import { Prop, Schema } from '@nestjs/mongoose';

@Schema({ _id: false })
export class Quote {
  @Prop({ type: Boolean, required: true })
  available: boolean;

  @Prop({ type: Number, required: true })
  coverageCeiling: number;

  @Prop({ type: Number, required: true })
  deductible: number;

  @Prop({ type: String, required: true })
  quoteId: string;

  @Prop({ type: Object, required: true })
  coverPremiums: {
    afterDelivery: number;
    publicLiability: number;
    professionalIndemnity: number;
    entrustedObjects: number;
    legalExpenses: number;
  };
}
