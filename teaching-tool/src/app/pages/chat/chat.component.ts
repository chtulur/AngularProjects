// import { OpenAiWhisperService } from './../../services/openai-services/models/openai-whisper.service';
import { AudioRecorderService, OpenAiGPT3_5Service } from './../../services';
import { Component } from '@angular/core';
import { ChatCompletionRequestMessage } from 'openai';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
class ChatComponent {
  audioBlob: Blob | undefined;
  messages: ChatCompletionRequestMessage[] = [
    {
      role: 'system',
      content:
        'You are a friendly American transfer student in hungary. You are going to have a conversation with a hungarian student of your age who is currently studying English.',
    },
    {
      role: 'user',
      content:
        "Hi there! I'm just an intermediate level English student. Nice to meet you!",
    },
  ];

  constructor(
    // private openAiWhisperService: OpenAiWhisperService,
    private audioRecorderService: AudioRecorderService,
    private openAiGPT3_5Service: OpenAiGPT3_5Service
  ) {}

  handleChat() {
    this.openAiGPT3_5Service.createChatCompletion(this.messages);
  }

  async startRecording() {
    await this.audioRecorderService.startRecording();
  }

  async stopRecording() {
    this.audioBlob = (await this.audioRecorderService.stopRecording()) as Blob;
    // this.openAiWhisperService.transcribe(this.audioBlob);
  }

  async playRecording() {
    await this.audioRecorderService.playAudio(this.audioBlob as Blob);
  }
}

export default ChatComponent;
