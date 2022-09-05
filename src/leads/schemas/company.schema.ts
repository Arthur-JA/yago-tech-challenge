import { Prop, Schema } from '@nestjs/mongoose';

@Schema({ _id: false })
export class Company {
  @Prop({type: Number, required: true})
  annualRevenue: number;

  @Prop({type: String, required: true})
  enterpriseNumber: string;

  @Prop({type: String, required: true})
  legalName: string;

  @Prop({type: Boolean, required: true})
  naturalPerson: boolean;
}
