

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgFor, NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgIf,NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // protected readonly title = signal('Directive');

  show=true

  students = ["kaushik","Ravi","Rahul","Ram","Ramesh"]; 


  studentData=[
    {
      name:"Kaushik",
      age:24,
      email:"kp@gmail.com"
    },
    {
      name:"Ravi",
      age:25,
      email:" rv@gmail.com"
    },
    {
      name:"Rahul",
      age:26,
      email:"rl@gmail.com"
    },
    {
      name:"Ram",
      age:27,
      email:"rm@gmail.com"
    },
    {
      name:"Ramesh",
      age:28,
      email:"ramesh@gmail.com"
    }
  ]


  toggle = true;


  login= true
  
  block = 0

  updateBlock(){
    this.block++;
  }


  
}
