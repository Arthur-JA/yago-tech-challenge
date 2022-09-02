import * as dotenv from 'dotenv';
dotenv.config();

export const config = {
  insuranceApi: {
    url: 'https://staging-gtw.seraphin.be/quotes/professional-liability',
    apiKey: process.env.API_KEY
  }
}