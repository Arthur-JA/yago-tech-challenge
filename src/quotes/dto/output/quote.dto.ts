export class Quote {
  available: boolean;
  coverageCeiling: number;
  deductible: number;
  quoteId: number;
  coverPremiums: {
    afterDelivery: number;
    publicLiability: number;
    professionalIndemnity: number;
    entrustedObjects: number;
    legalExpenses: number;
  }
}
