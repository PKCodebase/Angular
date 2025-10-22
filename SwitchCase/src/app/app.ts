import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('SwitchCase');
  color = 'red'

  handleColor(val:string){
    this.color = val;
  }

  changeColor(event:Event){
    this.color = (event.target as HTMLInputElement).value
  } 
}
