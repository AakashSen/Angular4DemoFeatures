import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.services';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  title:string = "List of Courses"
  courses;
  constructor(private service : CourseService) {
    this.courses = service.getCourses();
   }

  ngOnInit() {
  }

  getTitle() {
     return this.title;
  }
}
