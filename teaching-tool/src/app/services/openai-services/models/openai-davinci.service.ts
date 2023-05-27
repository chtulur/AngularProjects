import { Injectable } from '@angular/core';
import { environment } from '../../../../../.vscode/environments/env';
import * as openai from 'openai';

const { Configuration, OpenAIApi } = openai;

@Injectable({
  providedIn: 'root',
})
class OpenAiDavinciService {
  configuration = new Configuration({
    apiKey: environment.openaiApiKey,
  });

  openAi = new OpenAIApi(this.configuration);

  async createCompletion(input: string, temp: number): Promise<string> {
    try {
      const completion = await this.openAi.createCompletion({
        model: 'text-davinci-003',
        max_tokens: 250,
        prompt: input,
        temperature: temp,
      });
      if (completion.data.choices[0].text) {
        return completion.data.choices[0].text;
      } else {
        return 'Error';
      }
    } catch (err: any) {
      console.error(`Open AI API error ${err.message}`);
      throw new Error(
        'Failed to communicate with OpenAI API. Please try again later.'
      );
    }
  }
}

export default OpenAiDavinciService;
