import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
class AudioRecorderService {
  private audioContext: AudioContext;
  private mediaStream!: MediaStream;
  private mediaRecorder!: MediaRecorder;
  private audioChunks: Blob[];

  constructor() {
    this.audioContext = new AudioContext();
    this.audioChunks = [];
  }

  async startRecording() {
    this.mediaStream = await navigator.mediaDevices.getUserMedia({
      audio: true,
    });

    this.mediaRecorder = new MediaRecorder(this.mediaStream);
    this.mediaRecorder.addEventListener('dataavailable', (e) => {
      this.audioChunks.push(e.data);
    });

    this.mediaRecorder.start();
  }

  async stopRecording() {
    return new Promise((res) => {
      this.mediaRecorder.addEventListener('stop', () => {
        const audioBlob = new Blob(this.audioChunks, { type: 'audio/mp3' });
        this.audioChunks = [];
        res(audioBlob);
      });

      this.mediaRecorder.stop();
      this.mediaStream.getTracks().forEach((track) => track.stop());
    });
  }

  async playAudio(blob: Blob) {
    const buffer = await blob.arrayBuffer();
    const audioBuffer = await this.audioContext.decodeAudioData(buffer);
    const source = this.audioContext.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(this.audioContext.destination);
    source.start();
  }
}

export default AudioRecorderService;
