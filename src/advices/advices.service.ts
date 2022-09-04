import { Injectable } from '@nestjs/common';
import { Advice } from '../advices/schemas/advice.schema';
import { CoverageCeilingFormula } from '../quotes/enums/coverage-ceiling-formula';
import { DeductibleFormula } from '../quotes/enums/deductible-formula';
import { Simulation } from '../simulations/schemas/simulation.schema';

@Injectable()
export class AdvicesService {
  //@todo job enum
  getAdvisedFormulas(job = 'medical') {
    return {
      deductibleFormula: DeductibleFormula.SMALL,
      coverageCeilingFormula: CoverageCeilingFormula.LARGE,
    };
  }

  createForSimulation(simulation: Simulation): Advice[] {
    return [
      {
        name: 'Deductible Formula',
        currentValue: simulation.deductibleFormula,
        advisedValue: DeductibleFormula.SMALL,
        comment:
          "it will reduce your price and it's not that important for you",
      },
      {
        name: 'Coverage ceiling formula',
        currentValue: simulation.coverageCeilingFormula,
        advisedValue: CoverageCeilingFormula.LARGE,
        comment:
          'this will protect you for much higher amounts that the default one in case of dangerous consequences of your action',
      },
      {
        name: 'Legal expanses Cover',
        currentValue: simulation.quote.coverPremiums.legalExpenses,
        advisedValue: 'yes', //it exists
        comment:
          "strongly recommended in your case as the risk are high. There's a high probability that the claim would be followed by legal actions.",
      },
    ];
  }
}
