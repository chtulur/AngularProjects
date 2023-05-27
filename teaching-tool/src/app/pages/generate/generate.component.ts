import { ExerciseParams } from 'src/app/model';
import { ExerciseParamsService, GenerateExercise } from '../../services';
import { Component } from '@angular/core';

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.scss'],
})
export class GenerateComponent {
  exerciseParams: ExerciseParams;

  constructor(
    private generateExerciseService: GenerateExercise,
    private exerciseParamsService: ExerciseParamsService
  ) {
    this.exerciseParams = exerciseParamsService.getExerciseParams();
    const savedParams = sessionStorage.getItem('exerciseParams');
    if (savedParams) {
      this.exerciseParamsService.setExerciseParams(JSON.parse(savedParams));
    }
  }

  public generate() {
    this.exerciseParamsService.setExerciseParams(this.exerciseParams);
    const exerciseInput = this.exerciseParamsService.getInput();

    sessionStorage.setItem(
      'exerciseParams',
      JSON.stringify(this.exerciseParams)
    );

    this.generateExerciseService.generateExercise(
      exerciseInput,
      this.exerciseParams.shuffled
    );
  }
}

export default GenerateComponent;
