import { PartialType } from '@nestjs/mapped-types';
import { GenerateAdviceDto } from 'src/advices/dto/generate-advice.dto';

export class UpdateAdviceDto extends PartialType(GenerateAdviceDto) {}
