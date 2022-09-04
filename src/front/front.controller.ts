import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Render,
  Res,
} from '@nestjs/common';
import { CreateSimulationDto } from '../simulations/dto/create-simulation.dto';
import { SimulationsService } from '../simulations/simulations.service';

@Controller()
export class FrontController {
  constructor(private readonly simulationService: SimulationsService) {}

  @Get()
  @Render('home')
  home() {}

  @Post('/create-simulation')
  async createSimulation(
    @Res() res,
    @Body() createSimulationDto: CreateSimulationDto,
  ) {
    const simulation = await this.simulationService.create(createSimulationDto);

    return res.redirect(`/simulation/${simulation._id.toString()}`);
  }

  @Get('/simulation/:id')
  @Render('show-simulation')
  async showSimulation(@Param('id') id: string) {
    const simulation = await this.simulationService.findOne(id);
    return { simulation };
  }
}
