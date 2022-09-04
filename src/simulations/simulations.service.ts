import { Injectable } from '@nestjs/common';
import { CoverageCeilingFormula } from '../quotes/enums/coverage-ceiling-formula';
import { DeductibleFormula } from '../quotes/enums/deductible-formula';
import { Simulation } from './schemas/simulation.schema';
import { NacebelJobs } from '../advices/nacebel-jobs';
import { LeadsService } from '../leads/leads.service';
import { QuotesService } from '../quotes/quotes.service';
import { CreateSimulationDto } from './dto/create-simulation.dto';

@Injectable()
export class SimulationsService {
  constructor(
    private readonly quoteService: QuotesService,
    private readonly leadService: LeadsService,
  ) {}

  async create(createSimulationDto: CreateSimulationDto) {
    const lead = await this.leadService.create(createSimulationDto.lead);

    createSimulationDto.quote.nacebelCodes = NacebelJobs.medical;
    const quote = await this.quoteService.generateQuote(
      createSimulationDto.quote,
    );

    //@todo persistence
    return {
      lead,
      quote,
      deductibleFormula: createSimulationDto.quote.deductibleFormula,
      coverageCeilingFormula: createSimulationDto.quote.coverageCeilingFormula,
      advices: [
        {
          name: 'Deductible Formula',
          currentValue: createSimulationDto.quote.deductibleFormula,
          advisedValue: DeductibleFormula.SMALL,
          comment:
            "it will reduce your price and it's not that important for you",
        },
        {
          name: 'Coverage ceiling formula',
          currentValue: createSimulationDto.quote.coverageCeilingFormula,
          advisedValue: CoverageCeilingFormula.LARGE,
          comment:
            'this will protect you for much higher amounts that the default one in case of dangerous consequences of your action',
        },
        {
          name: 'Legal expanses Cover',
          currentValue: quote.coverPremiums.legalExpenses,
          advisedValue: 'yes', //it exists
          comment:
            "strongly recommended in your case as the risk are high. There's a high probability that the claim would be followed by legal actions.",
        },
      ],
    };
  }
}
