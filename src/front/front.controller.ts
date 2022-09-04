import { Body, Controller, Get, Post, Query, Render } from '@nestjs/common';
import { CreateSimulationDto } from '../simulations/dto/create-simulation.dto';
import { SimulationsService } from '../simulations/simulations.service';

@Controller()
export class FrontController {
  constructor(private readonly simulationService: SimulationsService) {}

  @Get()
  @Render('home')
  home() {}

  @Post('/create-simulation')
  @Render('show-simulation')
  async createSimulation(@Body() createSimulationDto: CreateSimulationDto) {
    const simulation = await this.simulationService.create(createSimulationDto);
    //@todo redirect to showSimulation after persistence

    return { simulation };
  }

  // @Get('/simulation/:id')
  // @Render('show-simulation')
  // showSimulation(@Query() id) {
  //
  // }
}
