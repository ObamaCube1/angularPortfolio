import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'portfolio';
  surprise: boolean;

  constructor() {
    this.surprise = Math.random() < 0.01;
    window.onload = () => {
      setTimeout(function () {
        window.scrollTo(0, 0);
      }, 2);
    };
  }
}


