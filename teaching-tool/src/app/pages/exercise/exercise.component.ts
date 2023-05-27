import { Component } from '@angular/core';
import { defaultAnswer, defaultQuestion, Element } from 'src/app/model';
import { ExerciseParamsService, GenerateExercise } from '../../services';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
})
export class ExerciseComponent {
  answerSheet: string[][] = [];
  combinedSheet: Element[][] = [];
  question: Element = defaultQuestion;
  answer: Element = defaultAnswer;
  questions: Element[] = [];
  answers: Element[] = [];

  constructor(
    private generateExerciseService: GenerateExercise,
    private exerciseParamsService: ExerciseParamsService
  ) {}

  showGeneratedText() {
    //TODO: Separation of concerns. This processing of AI generated text should be somewhere else.
    //czapy instructions:
    // ha jól szegregálod ezeket a dolgokat
    // akk az exercise-nak csak a feladattal kellene foglalkoznia
    // és lehetne fajtája is, pl ConnectPairsExercise
    // kívülről kapja a a párokat, és ő már csak a kérdés/válasz struktúráért lenne felelős
    // aztán van egy classod ami az openai text-ből generál párokat
    // és ha később akarsz olyan opciót, hogy kézzel is lehessen feladatot csinálni
    // akk csak egy új class
    // ezeknek lehet egy közös abstract class-a
    // ami lefixálja az API-t
    // class OpenAIConnectPairsGenerator implements ConnectPairsGenerator
    // meg
    // class ManualConnectPairsGenerator implements ConnectPairsGenerator

    // és mindegyiknek csak egy public generate-et kell implementálnia
    const { answerSheet, questions, answers } =
      this.generateExerciseService.processedAiresponse;

    this.answerSheet = answerSheet;
    this.questions = questions;
    this.answers = answers;

    this.combinedSheet = questions.map((question, index) => [
      question,
      answers[index],
    ]);
  }

  select(element: Element) {
    //if the clicked element and its pair has not been found
    if (!element.isPairFound) {
      //if nothing has been clicked
      if (this.question.element === '' && this.answer.element === '') {
        //if what was clicked is a question
        if (element.type === 'question') {
          this.question = element;
          this.question.clicked = true;
        } else {
          this.answer = element;
          this.answer.clicked = true;
        }
        //if something has been clicked. If it was a question
      } else if (this.question.element !== '' && this.answer.element === '') {
        this.handleAnswersSelection(element);
        //if something has been clicked. If it was an answer
      } else if (this.question.element === '' && this.answer.element !== '') {
        this.handleQuestionSelection(element);
      }

      //If both question and answer have been clicked
      if (this.question.element !== '' && this.answer.element !== '') {
        this.evaluate();
      }
    }
  }

  handleQuestionSelection(element: Element) {
    if (element.type === 'question') {
      this.question = element;
      this.question.clicked = true;
    } else {
      if (this.answer === element) {
        this.answer.clicked = false;
        this.answer = defaultAnswer;
      } else {
        this.answer.clicked = false;
        this.answer = element;
        this.answer.clicked = true;
      }
    }
  }

  handleAnswersSelection(element: Element) {
    if (element.type === 'answer') {
      this.answer = element;
      this.answer.clicked = true;
    } else {
      if (this.question === element) {
        this.question.clicked = false;
        this.question = defaultQuestion;
      } else {
        this.question.clicked = false;
        this.question = element;
        this.question.clicked = true;
      }
    }
  }

  evaluate() {
    const questionIndex = this.questions.findIndex((e) => e === this.question);
    const answerIndex = this.answers.findIndex((e) => e === this.answer);

    if (this.question.answer === this.answer.element) {
      console.log(
        'CORRECT',
        this.question.element + ' = ' + this.answer.element
      );

      this.question.isPairFound = true;
      this.answer.isPairFound = true;
    } else {
      console.log(
        'INCORRECT',
        this.question.element + ' != ' + this.answer.element
      );
      this.questions[questionIndex].clicked = false;
      this.answers[answerIndex].clicked = false;
    }

    this.question = defaultQuestion;
    this.answer = defaultAnswer;
  }

  handleRegenerate() {
    this.generateExerciseService.generateExercise(
      this.exerciseParamsService.getInput(),
      this.exerciseParamsService.getExerciseParams().shuffled
    );
  }
}

export default ExerciseComponent;
