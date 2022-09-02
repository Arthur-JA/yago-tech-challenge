import { Controller, Post, Body } from '@nestjs/common';
import { AdvicesService } from './advices.service';
import { CreateAdviceDto } from './dto/create-advice.dto';

@Controller('advices')
export class AdvicesController {
  constructor(private readonly advicesService: AdvicesService) {}

  @Post()
  create(@Body() createAdviceDto: CreateAdviceDto) {
    return this.advicesService.create(createAdviceDto);
  }

  @Post()
  generateAdvices(askAdvices) {

  }
}
