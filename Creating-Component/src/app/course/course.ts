import { Component } from '@angular/core';
import { CourseModel } from '../../my-model/course.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course',
  imports: [CommonModule],

  standalone: true,
  templateUrl: './course.html',
  styleUrl: './course.css'
})
export class Course {

    course:CourseModel;
    mycourse:CourseModel;

    constructor(){
        this.course=new CourseModel('Angular Basics','6 weeks','Alice Johnson',500);
        this.mycourse=new CourseModel('React Basics','8 weeks','Bob Smith',600);
    }

}
