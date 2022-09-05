import { Prop, Schema } from '@nestjs/mongoose';
import {Company} from './company.schema';

@Schema({ _id: false })
export class Lead {
  @Prop({ type: String, required: true })
  email: string;

  @Prop({ type: String, required: true })
  phoneNumber: string;

  @Prop({ type: String, required: true })
  address: string;

  @Prop({ type: String, required: true })
  firstname: string;

  @Prop({ type: String, required: true })
  lastname: string;

  @Prop({ type: Company, required: true })
  company?: Company;
}
