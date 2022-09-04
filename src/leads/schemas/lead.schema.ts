import { Document } from 'mongoose';

export class Lead extends Document {
  email: string;

  phoneNumber: string;

  address: string;

  firstname: string;

  lastname: string;
}
