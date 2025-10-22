import { Component, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Effect');

  userName = signal('kaushik')
  count = signal(0)
  displayName=false

  constructor(){
    effect(()=>{
      // console.log(this.userName())
      if(this.count() ==2){
        this.displayName=true
        setTimeout(()=>{
          this.displayName=false
        },2000)
      }else{
        this.displayName=false
      }
    })
  }
  toggleValue(){
    this.count.set(this.count()+1)
  }
}
