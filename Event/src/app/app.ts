import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Event');

  handleEvent(){
    console.log('Button clicked!');
  }
  addValue(a:number,b:number){
    console.log(a+b);
  }

  handleEvents(event:MouseEvent){
    console.log("function called",event);
    console.log("function target",event.target);
    console.log("function class",(event.target as Element).className);
    console.log("event.type",event.type);
 
  }
 findFact(n: number): void {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact = fact * i;
  }
  console.log("Factorial is:", fact);
}

handleInput(event:Event){
  console.log("Kaushik Prasad")
  console.log("value",(event.target as HTMLInputElement).value);
}

}
