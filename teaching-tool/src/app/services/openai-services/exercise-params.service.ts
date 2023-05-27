import { ExerciseParams } from 'src/app/model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
class ExerciseParamsService {
  private exerciseParams: ExerciseParams = {
    description: '',
    exerciseType: 'find pairs',
    format: '1. <idiom> <> <definition>',
    grammar: '',
    level: 'B2',
    numPairs: 15,
    shuffled: true,
  };

  getExerciseParams(): ExerciseParams {
    return this.exerciseParams;
  }

  getInput(): string {
    return `
    Generate an English exercise with the following parameters:
    Level: ${this.exerciseParams.level},
        Grammar: ${this.exerciseParams.grammar}
        Type: ${this.exerciseParams.exerciseType}
        Description: ${this.exerciseParams.description}
        Format: ${this.exerciseParams.format}
        number of pairs: ${this.exerciseParams.numPairs}
        `;
  }

  setExerciseParams(exerciseParams: ExerciseParams): void {
    this.exerciseParams = exerciseParams;
  }
}

export default ExerciseParamsService;
