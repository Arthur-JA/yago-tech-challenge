import { Injectable } from '@nestjs/common';
import { AdvicesService } from '../advices/advices.service';
import { Simulation } from './schemas/simulation.schema';
import { NacebelJobs } from '../quotes/nacebel-jobs';
import { LeadsService } from '../leads/leads.service';
import { QuotesService } from '../quotes/quotes.service';
import { CreateSimulationDto } from './dto/create-simulation.dto';

@Injectable()
export class SimulationsService {
  constructor(
    private readonly quoteService: QuotesService,
    private readonly leadService: LeadsService,
    private readonly adviceService: AdvicesService,
  ) {}

  async create(createSimulationDto: CreateSimulationDto) {
    const lead = await this.leadService.create(createSimulationDto.lead);

    const advisedFormulas = this.adviceService.getAdvisedFormulas();
    createSimulationDto.quote.nacebelCodes = NacebelJobs.medical;
    createSimulationDto.quote.deductibleFormula ??= advisedFormulas.deductibleFormula;
    createSimulationDto.quote.coverageCeilingFormula ??= advisedFormulas.coverageCeilingFormula;
    const quote = await this.quoteService.generateQuote(
      createSimulationDto.quote,
    );

    let simulation: Simulation = {
      lead,
      quote,
      deductibleFormula: createSimulationDto.quote.deductibleFormula,
      coverageCeilingFormula: createSimulationDto.quote.coverageCeilingFormula,
    };

    const advices = this.adviceService.createForSimulation(simulation);

    //@todo persistence

    return {
      lead,
      quote,
      deductibleFormula: createSimulationDto.quote.deductibleFormula,
      coverageCeilingFormula: createSimulationDto.quote.coverageCeilingFormula,
      advices,
    };
  }
}
