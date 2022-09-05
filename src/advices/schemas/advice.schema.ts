import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Schema as MongooseSchema} from 'mongoose';

@Schema({_id: false})
export class Advice {
  @Prop({type: String, required: true})
  name: string;

  @Prop({type: MongooseSchema.Types.Mixed, required: true})
  currentValue: any;

  @Prop({type: MongooseSchema.Types.Mixed, required: false})
  advisedValue?: any;

  @Prop({type: String, required: true})
  comment?: string;
}

export const AdviceSchema = SchemaFactory.createForClass(Advice);