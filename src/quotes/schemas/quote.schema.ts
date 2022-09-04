import { Document } from 'mongoose';

export class Quote extends Document {
  available: boolean;
  coverageCeiling: number;
  deductible: number;
  quoteId: string;
  coverPremiums: {
    afterDelivery: number;
    publicLiability: number;
    professionalIndemnity: number;
    entrustedObjects: number;
    legalExpenses: number;
  };
}
