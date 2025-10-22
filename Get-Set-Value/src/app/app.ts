import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Get-Set-Value');

  name=""
  displayName=""
  email=""

  getName(event:Event){
    // const name = (event.target as HTMLInputElement).value
    // console.log(name);

    this.name=(event.target as HTMLInputElement).value;

    // this.name=name;

  }
  showName(){
     this.displayName=this.name;
  }

  setName(){
     this.name = "Kaushik";
  }

  getEmail(val:string){
    console.log(val);
    this.email=val;
  }
  setEmail(){
    this.email="defaultemail.com"
  }
}
