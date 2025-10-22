import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Signal-DataTypes');


  // Defining Data type of signal ,if you want to  change only signal value defined data type
  // data = signal<number|string>(10);

  //Inside this we can use Both we  have defined signal and value data type
  // data:WritableSignal<number|string> = signal(10);

  

  //we cannot change the value it is only for read
  count :Signal<number> = computed(()=>200);
  data = signal<number>(10);

  updateSignal(){
    // this.data.set("hello");
    // this.count.set(300); // we cannot set value to count because it is computed signal

    this.data.update((val)=> val+1); // It is only for single data type
  }
}
