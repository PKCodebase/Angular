import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { NgSwitch, NgSwitchCase } from '@angular/common';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet, NgSwitch,NgSwitchCase],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Switch');
  
  color="black"

  changeColor(newColor:string){
    this.color = newColor;
  }

}
