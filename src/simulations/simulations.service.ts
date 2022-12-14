import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AdvicesService } from '../advices/advices.service';
import {LeadsService} from '../leads/leads.service';
import { Simulation } from './schemas/simulation.schema';
import { NacebelJobs } from '../quotes/nacebel-jobs';
import { QuotesService } from '../quotes/quotes.service';
import { CreateSimulationDto } from './dto/create-simulation.dto';

@Injectable()
export class SimulationsService {
  constructor(
    private readonly quoteService: QuotesService,
    private readonly adviceService: AdvicesService,
    private readonly leadsService: LeadsService,
    @InjectModel(Simulation.name) private readonly model: Model<Simulation>,
  ) {}

  async create(createSimulationDto: CreateSimulationDto): Promise<Simulation> {
    createSimulationDto.quote.nacebelCodes = NacebelJobs.medical;

    const advisedFormulas = this.adviceService.getAdvisedFormulas();
    createSimulationDto.quote.deductibleFormula = advisedFormulas.deductibleFormula;
    createSimulationDto.quote.coverageCeilingFormula = advisedFormulas.coverageCeilingFormula;

    const quote = await this.quoteService.generateQuote(
      createSimulationDto.quote,
    );

    const lead = this.leadsService.create(createSimulationDto);

    let simulation: Simulation = {
      quote,
      lead,
      deductibleFormula: createSimulationDto.quote.deductibleFormula,
      coverageCeilingFormula: createSimulationDto.quote.coverageCeilingFormula,
    } as Simulation;

    const advices = this.adviceService.createForSimulation(simulation);
    simulation = await this.model.create({ advices, ...simulation });

    return simulation;
  }

  async findOne(id: string): Promise<Simulation> {
    const document = await this.model.findOne({ _id: id }).exec();
    if (!document) {
      throw new NotFoundException();
    }

    return document;
  }
}
