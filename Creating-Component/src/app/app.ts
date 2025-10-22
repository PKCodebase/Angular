import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Course } from './course/course';
import { StudentComponent } from './student/student';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StudentComponent,Course],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Creating-Component');

  header = 'Welcome to the Student and Course Information Portal';
}
