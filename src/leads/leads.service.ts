import { Injectable } from '@nestjs/common';
import * as Mongoose from 'mongoose';
import { Lead } from 'src/leads/schemas/lead.schema';
import { CreateLeadDto } from './dto/create-lead.dto';

@Injectable()
export class LeadsService {
  async create(createLeadDto: CreateLeadDto): Promise<Lead> {
    //@todo persistence
    return { _id: new Mongoose.Types.ObjectId(), ...createLeadDto } as Lead;
  }
}
