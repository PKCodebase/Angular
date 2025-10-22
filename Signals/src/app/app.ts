import { Component, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Signals');

  count = signal(10)
  x=20;

  // constructor(){
  //   effect(()=>{
  //     console.log(this.x)
  //   })
  // }

    constructor(){
    effect(()=>{
      console.log(this.count)
    })
  }

  // updateValue(){
  //   this.x= 30;
  // }



  //   updateValue(){
  //   this.count.set(this.count()+1);
  //   // this.x = this.x+1;
  // }

    updateValue(val:string){
      if(val =='inc'){
        this.count.set(this.count()+1)
      }else{
        this.count.set(this.count()-1)
      }
    }
}
