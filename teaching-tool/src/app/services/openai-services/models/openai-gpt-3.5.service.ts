import { Injectable } from '@angular/core';
import { environment } from '../../../../../.vscode/environments/env';
import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from 'openai';

@Injectable({
  providedIn: 'root',
})
class OpenAiGPT3_5Service {
  configuration = new Configuration({
    apiKey: environment.openaiApiKey,
  });

  openAi = new OpenAIApi(this.configuration);

  async createChatCompletion(messages: ChatCompletionRequestMessage[]) {
    try {
      const completion = await this.openAi.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages,
      });

      console.log(completion.data.choices[0].message?.content);
    } catch (err: any) {
      console.error(`Open AI API error ${err.message}`);
      throw new Error(
        'Failed to communicate with OpenAI API. Please try again later.'
      );
    }
  }
}

export default OpenAiGPT3_5Service;
