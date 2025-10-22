import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
  
})
export class App {
  protected readonly title = signal('Computed-Signals');

  // x= 10;
  // y=20;
  // z=this.x+this.y

  // showValue(){
  //   console.log(this.z);
  //   this.x=100;
  //   this.z = this.x + this.y;
  //   console.log(this.z);
  // }

  x= signal(10);
  y= signal(20)
  z= computed(()=> this.x() + this.y())

  showValue(){
    console.log(this.z());
    this.x.set(100);
    console.log(this.z());
    // this.z.set(this.x() + this.y());  it is computed so we cannot set value
    // this.z.update(this.x() + this.y()); it is computed so we cannot update value
  }

  increment(){
    this.x.set(2000)
}
}
