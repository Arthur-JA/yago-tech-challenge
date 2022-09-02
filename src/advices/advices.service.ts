import { Injectable } from '@nestjs/common';
import { CreateAdviceDto } from './dto/create-advice.dto';
import { UpdateAdviceDto } from './dto/update-advice.dto';

@Injectable()
export class AdvicesService {
  create(createAdviceDto: CreateAdviceDto) {
    return 'This action adds a new advice';
  }

  async generateAdvicesForCovers() {
    
  }
}
