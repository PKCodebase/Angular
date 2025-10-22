import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('IfElse');

  x = 9
  display = true
  toggleDiv = true

  hide(){
    this.display = false;
  }

  show(){
    this.display= true;
  }
  toggle(){
    this.display = !this.display;
  }
  toggleTwo(){
   this.toggleDiv = !this.toggleDiv;
  }
}
