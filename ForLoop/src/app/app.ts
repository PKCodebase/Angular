import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ForLoop');

  users=["Anil","Sunil","Ravi","Ramesh","Suresh","Mahesh","Rajesh"]

  students=[
    {name:"Anil",age:23,email:"anil@gmail.com"},
    {name:"Sunil",age:24,email:"sunil@gmail.com"},
    {name:"Ravi",age:25,email:"ravi@gmail.com"},
    {name:"Ramesh",age:26,email:"ramesh@gmail.com"}
  ]

  getName(name:string){
    console.log(name);
  }
}
