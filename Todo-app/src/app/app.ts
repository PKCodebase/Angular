import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Todo-app');

  task="";

  taskList:{id:number,task:string}[]=[];

  addTask(){
    this.taskList.push({id:this.taskList.length+1,task:this.task});
    this.task="";
   console.log(this.taskList);
  }

  deleteTask(taskId:number){
    this.taskList=this.taskList.filter(taskItem=>taskItem.id!==taskId);
    
  }
}
