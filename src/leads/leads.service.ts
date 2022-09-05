import {Injectable} from '@nestjs/common';
import {CreateSimulationDto} from '../simulations/dto/create-simulation.dto';
import {Lead} from './schemas/lead.schema';

@Injectable()
export class LeadsService {
  create(createSimulationDto: CreateSimulationDto): Lead {
    return {
      company: {
        annualRevenue: createSimulationDto.quote.annualRevenue,
        enterpriseNumber: createSimulationDto.quote.enterpriseNumber,
        legalName: createSimulationDto.quote.legalName,
        naturalPerson: createSimulationDto.quote.naturalPerson
      },
      ...createSimulationDto.lead
    };
  }
}