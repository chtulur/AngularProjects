import { Injectable } from '@angular/core';
import { Element } from '../../model';
import { OpenAiDavinciService } from '../';

interface processedAiAnswer {
  answerSheet: string[][];
  questions: Element[];
  answers: Element[];
}

@Injectable({
  providedIn: 'root',
})
class GenerateExercise {
  processedAiresponse: processedAiAnswer = {
    answerSheet: [],
    questions: [],
    answers: [],
  };
  constructor(private openAiDavinciService: OpenAiDavinciService) {}

  async generateExercise(input: string, isShuffled: boolean) {
    const result = await this.openAiDavinciService.createCompletion(input, 1);
    console.log('answer received');

    this.processAiAnswer(result, isShuffled);
  }

  async processAiAnswer(result: string, isShuffled: boolean) {
    console.log(result);
    let questions: Element[] = [];
    let answers: Element[] = [];

    const splitIndex = result.indexOf('1.');
    const secondPart = result.substring(splitIndex);
    let splitText = secondPart
      .split(/[0-9][0-9]?\./)
      .map((str) => str.replace(/\n1?/g, '').trim());

    if (splitText[0] === '') {
      splitText.shift();
    }

    const twoDSplitText = splitText.map((e) => e.split('<>'));
    if (twoDSplitText[twoDSplitText.length - 1].length === 1) {
      twoDSplitText.pop();
    }
    this.processedAiresponse.answerSheet = twoDSplitText;

    twoDSplitText.forEach((e) => {
      questions.push({
        answer: e[1].trim(),
        clicked: false,
        element: e[0].trim(),
        isPairFound: false,
        type: 'question',
      });
      answers.push({
        clicked: false,
        element: e[1].trim(),
        isPairFound: false,
        type: 'answer',
      });
    });

    if (isShuffled) {
      questions.sort(() => Math.random() - 0.5);
    }

    this.processedAiresponse.questions = questions;
    this.processedAiresponse.answers = answers;
    console.log(answers);
  }
}

export default GenerateExercise;
