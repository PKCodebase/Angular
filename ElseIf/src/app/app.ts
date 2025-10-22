import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ElseIf');
  color=10;

  handleColor(val: number){
    this.color = val;
  }
  handleInput(event:Event){
    this.color = parseInt((event.target as HTMLInputElement).value)
  }
}
