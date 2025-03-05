import { Component } from '@angular/core';

@Component({
  selector: 'app-preheader',
  standalone: false,
  templateUrl: './preheader.component.html',
  styleUrl: './preheader.component.scss'
})
export class PreheaderComponent {
  private audio: HTMLAudioElement;

  constructor() {
    this.audio=new Audio('assets/party.mp3');
  }

  onClick() {
    if(this.audio.paused){
      this.audio.play();
    }
    else{
      this.audio.pause();
      this.audio.currentTime=0;
    }
  }
}
