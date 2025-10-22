import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentModel } from '../../my-model/student.model';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student.html',
  styleUrls: ['./student.css']
})
export class StudentComponent {

  student: StudentModel;
  mystudent: StudentModel;

  constructor() {
    this.student = new StudentModel('John Doe', 20, 101, 9867094687);
    this.mystudent = new StudentModel('Jane Smith', 22, 102, 9876543210);
  }
}
